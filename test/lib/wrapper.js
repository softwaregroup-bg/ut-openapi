const tap = require('tap');
const utOpenAPi = require('../..')();
const params = require('./params');
const sortKeys = require('sort-keys');

module.exports = (ns, doc) => {
    tap.test(`load ${ns} document`, () => utOpenAPi.load(ns, doc));

    tap.test(`test ${ns} methods`, assert => {
        const methods = utOpenAPi.export();
        assert.true(Object.keys(methods).length > 0, `${ns} methods exported`);
        for (const method in params) {
            const methodName = `${ns}.${method}`;
            assert.matchSnapshot(sortKeys(methods[methodName](params[method]), {deep: true}), methodName);
        }
        assert.end();
    });
};
