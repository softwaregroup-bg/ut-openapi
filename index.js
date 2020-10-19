const swaggerParser = require('@apidevtools/swagger-parser');
const http = require('http');
const merge = require('ut-function.merge');
const httpVerbs = ['post', 'put', 'patch', 'get', 'delete', 'options', 'head', 'trace'];
const formatters = {
    request: {
        swagger: require('./format/request/swagger'),
        openapi: require('./format/request/openapi')
    }
};

module.exports = () => {
    const handlers = Object
        .keys(formatters)
        .reduce((all, formatter) => {
            all[formatter] = {};
            return all;
        }, {});

    const api = {
        async load(namespace, document) {
            const docs = typeof namespace === 'object' ? Object.entries(namespace) : [[namespace, document]];
            for (let i = 0, n = docs.length; i < n; i += 1) {
                const [ns, locations] = docs[i];
                let doc = [];
                for (const location of [].concat(locations)) {
                    if (typeof location === 'object') doc.push(location);
                    else if (typeof location === 'string') {
                        if (location.startsWith('http')) {
                            doc.push(await new Promise((resolve, reject) => {
                                http.get(location, res => {
                                    let data = '';
                                    res.on('data', chunk => { data += chunk; });
                                    res.on('end', () => {
                                        try {
                                            resolve(JSON.parse(data));
                                        } catch (e) {
                                            reject(e);
                                        }
                                    });
                                }).on('error', reject);
                            }));
                        } else doc.push(require('./serverRequire')(location));
                    }
                }
                doc = await swaggerParser.bundle(merge(...doc));
                await swaggerParser.validate(doc);
                const docType = doc.swagger ? 'swagger' : 'openapi';
                Object
                    .entries(doc.paths)
                    .forEach(([path, methods]) => {
                        Object
                            .entries(methods)
                            .filter(([method]) => httpVerbs.includes(method))
                            .forEach(([method, def]) => {
                                const formatProps = {
                                    method,
                                    url: '',
                                    schemas: [].concat(methods.parameters).concat(def.parameters).filter(Boolean)
                                };
                                switch (docType) {
                                    case 'swagger': {
                                        formatProps.url += [
                                            (doc.schemes && doc.schemes[0]) || 'http',
                                            '://',
                                            doc.host,
                                            doc.basePath,
                                            path
                                        ].filter(Boolean).join('');
                                        break;
                                    }
                                    case 'openapi': {
                                        const defUrl = (def.servers && def.servers[0] && def.servers[0].url) || '';
                                        const docUrl = (doc.servers && doc.servers[0] && doc.servers[0].url) || '';
                                        formatProps.url = (defUrl.startsWith('/') ? (docUrl + defUrl) : (defUrl || docUrl)) + path;
                                        formatProps.requestBody = def.requestBody;
                                        break;
                                    }
                                    default:
                                        break;
                                }

                                // TODO: url format validation
                                Object
                                    .entries(formatters)
                                    .forEach(([format, formatter]) => {
                                        handlers[format][ns + '.' + def.operationId] = formatter[docType](formatProps);
                                    });
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
