const swagger = require('./swagger');

module.exports = ({url, method, schemas, requestBody}) => {
    // all parameters except the body are the same for swagger 2.0
    const swaggerFormat = swagger({url, method, schemas});
    return (msg = {}) => {
        const requestObject = swaggerFormat(msg);
        // Here add some code related to requestBody if needed
        return requestObject;
    };
};
