const tap = require('tap');
const utOpenAPi = require('..')();
const document = require('./documents/swagger.json');
tap.test('load swagger document', () => utOpenAPi.load('swagger', document));

tap.test('export methods', assert => {
    const methods = utOpenAPi.export();
    assert.true(Object.keys(methods).length > 0, 'methods exported');
    assert.end();
});
