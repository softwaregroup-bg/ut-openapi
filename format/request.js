const interpolate = require('ut-function.interpolate');

module.exports = ({url, method, schemas}) => (msg = {}) => {
    const {params = msg, body} = msg;
    const requestObject = {url, method, body, headers: {}, qs: {}};
    schemas.forEach(schema => {
        switch (schema.in) {
            case 'header':
                requestObject.headers[schema.name] = params[schema.name];
                break;
            case 'query':
                requestObject.qs[schema.name] = params[schema.name];
                break;
            case 'path':
                requestObject.url = interpolate(requestObject.url, {[schema.name]: params[schema.name]});
                break;
            default:
                break;
        }
    });
    // TBD: requestObject validation
    return requestObject;
};