const swaggerParser = require('swagger-parser');
const http = require('http');
const httpVerbs = ['post', 'put', 'patch', 'get', 'delete', 'options', 'head', 'trace'];
const swagger = {
    request: require('./format/swaggerRequest')
};
const openapi = {
    request: require('./format/openapiRequest')
};

module.exports = () => {
    const handlers = {
        request: {}
    };

    const api = {
        async load(namespace, document) {
            const docs = typeof namespace === 'object' ? Object.entries(namespace) : [[namespace, document]];
            for (let i = 0, n = docs.length; i < n; i += 1) {
                const [ns, location] = docs[i];
                let doc;
                if (typeof location === 'object') doc = location;
                else if (typeof location === 'string') {
                    if (location.startsWith('http')) {
                        doc = await new Promise((resolve, reject) => {
                            http.get(location, res => {
                                let data = '';
                                res.on('data', chunk => { data += chunk; });
                                res.on('end', async() => {
                                    try {
                                        resolve(JSON.parse(data));
                                    } catch (e) {
                                        reject(e);
                                    }
                                });
                            }).on('error', reject);
                        });
                    } else doc = require(location);
                }
                // TBD: doc validation
                doc = await swaggerParser.dereference(doc);
                Object
                    .entries(doc.paths)
                    .forEach(([path, methods]) => {
                        Object
                            .entries(methods)
                            .filter(([method]) => httpVerbs.includes(method))
                            .forEach(([method, def]) => {
                                let url = '';
                                if (doc.openapi) { // e.g. openapi: '3.0.0'
                                    if (Array.isArray(doc.servers)) {
                                        // TBD: server templates
                                        if (Array.isArray(def.servers)) {
                                            if (def.servers.startsWith('/')) url += doc.servers[0] + def.servers[0];
                                            else url += def.servers[0];
                                        } else {
                                            url += doc.servers[0].url;
                                        }
                                    } else if (Array.isArray(def.servers)) {
                                        url += def.servers[0];
                                    }
                                    url += path;
                                    Object
                                        .entries(openapi)
                                        .forEach(([format, formatter]) => {
                                            handlers[format][ns + '.' + def.operationId] = formatter({
                                                url,
                                                method,
                                                schemas: def
                                            });
                                        });
                                } else if (doc.swagger) { // swagger: '2.0'
                                    url += Array.isArray(doc.schemes) ? doc.schemes[0] : 'http';
                                    url += '://' + doc.host + doc.basePath + path;
                                    Object
                                        .entries(swagger)
                                        .forEach(([format, formatter]) => {
                                            handlers[format][ns + '.' + def.operationId] = formatter({
                                                url,
                                                method,
                                                schemas: [methods.parameters, def.parameters].filter(Boolean)
                                            });
                                        });
                                }
                            });
                    });
            }
        },
        format(msg, method, format = 'request') {
            return handlers[format][method](msg);
        },
        formatRequest(msg, method) {
            return api.format(msg, method, 'request');
        },
        export(format = 'request', pattern = /./) {
            const test = pattern instanceof RegExp ? key => pattern.test(key) : key => key.includes(pattern);
            return Object
                .entries({...handlers[format]})
                .reduce((all, [key, fn]) => {
                    if (test(key)) all[key] = handlers[format][key];
                    return all;
                }, {});
        }
    };

    return api;
};
