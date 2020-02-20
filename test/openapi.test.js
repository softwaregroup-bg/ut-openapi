const tap = require('tap');
const utOpenAPi = require('..')();
const document = require('./documents/openapi.json');
tap.test('load openapi document', () => utOpenAPi.load('openapi', document));

tap.test('export methods', assert => {
    const methods = utOpenAPi.export();
    assert.true(Object.keys(methods).length > 0, 'methods exported');
    assert.end();
});
