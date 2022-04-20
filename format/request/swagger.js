const interpolate = require('ut-function.interpolate');
module.exports = ({url, method, schemas}) => (msg = {}) => {
    const {params = msg, body, baseUrl} = msg;
    const requestObject = {url: baseUrl ? baseUrl + url : url, method, body};
    schemas.forEach(schema => {
        const param = typeof params[schema.name] === 'undefined' ? schema.default : params[schema.name];
        switch (schema.in) {
            case 'header':
                if (!requestObject.headers) requestObject.headers = {};
                requestObject.headers[schema.name] = param;
                break;
            case 'query':
                if (!requestObject.qs) requestObject.qs = {};
                requestObject.qs[schema.name] = param;
                break;
            case 'formData':
                if (!requestObject.formData) requestObject.formData = {};
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
