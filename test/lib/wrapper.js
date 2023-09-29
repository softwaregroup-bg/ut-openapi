const tap = require('tap');
const utOpenAPi = require('../..')();
const params = require('./params');

module.exports = (ns, doc) => {
    tap.test(`load ${ns} document`, () => utOpenAPi.load(ns, doc));

    tap.test(`test ${ns} methods`, assert => {
        const methods = utOpenAPi.export();
        assert.ok(Object.keys(methods).length > 0, `${ns} methods exported`);
        for (const method in params) {
            const methodName = `${ns}.${method}`;
            assert.matchSnapshot(methods[methodName](params[method]), methodName);
        }
        assert.end();
    });
};
