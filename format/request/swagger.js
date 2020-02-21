const interpolate = require('ut-function.interpolate');

module.exports = ({url, method, schemas}) => (msg = {}) => {
    const {params = msg, body} = msg;
    const requestObject = {url, method, body, headers: {}, qs: {}, formData: {}};
    schemas.forEach(schema => {
        const param = typeof params[schema.name] === 'undefined' ? schema.default : params[schema.name];
        switch (schema.in) {
            case 'header':
                requestObject.headers[schema.name] = param;
                break;
            case 'query':
                requestObject.qs[schema.name] = param;
                break;
            case 'formData':
                requestObject.formData[schema.name] = param;
                break;
            case 'path':
                requestObject.url = interpolate(requestObject.url, {[schema.name]: param});
                break;
            default:
                break;
        }
    });
    // TBD: requestObject validation
    return requestObject;
};
