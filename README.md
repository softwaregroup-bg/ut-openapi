# UT OpenAPI

This module provides automatic message formatting
for http clients consuming swagger-enabled APIs.
Currently only [request](https://www.npmjs.com/package/request)
[format](./format/request.js) is supported.

## Usage

ut-openapi exports a factory function which
returns an object with the following methods:

* `async load (documents)` - loads a set
of documents and binds message formatters in
the local cache. Example:

  ```js
    const utOpenApi = require('ut-openapi')();
    utOpenApi.load({ // documents
        'providerX.segmentX': require.resolve('./providerX/segmentX-swagger.json'),
        'providerX.segmentY': require.resolve('./providerX/segmentY-swagger.json'),
        'providerY': require('./providerY-swagger.json'),
        'providerZ': 'http://www.providerZ.com/swagger.json'
    });

    /*
        there is a short syntax
        if just one document must be loaded.
        Instead of a map, just pass the namespace
        and the document as separate arguments:
    */
   utOpenApi.load('someProvider', require('./someProviderSwagger.json'));
  ```

  The `documents` argument represents a map where:

  * the keys determine how the operation IDs of the
  document will be prefixed. For example if the
  document is prefixed with key `providerX.segmentY`
  and contains a route with operationId `operationZ`,
  then it will be accessible via the method
  `providerX.segmentY.operationZ`. Example:

  ```js
    const utOpenApi = require('ut-openapi')();
    utOpenApi.load({ // documents
        'providerX.segmentY': {
            "swagger": "2.0",
            // ...
            "paths": {
                "/path": {
                    "post": {
                        "operationId": "operationZ"
                    }
                }
            }
        }
    });
  ```

  * the values are the documents themselves.
  All three approaches are acceptable as a value:

    * path to a local swagger document
    * the content of the swagger document
    * url for obtaining the document with http `GET` request

* `format (msg, method, format)`
  * `msg` (object) - the message to be sent
  * `method` (string) - the bound formatter function
  * `format` (string) - the format. Only `request` is
    currently supported.

  The message format for calling these auto-generated
  swagger methods has the following specifics:

  * can have a `body` property which will be used
  as a payload
  * can have a `params` property which ill be used
  for extracting `path`, `query` and `header` parameters.

  ```js
    const utOpenApi = require('ut-openapi')();
    utOpenApi.load({ // documents
        'providerX.segmentY': {
            "swagger": "2.0",
            "host": "127.0.0.1:8080",
            "schemes": ["http"],
            "basePath": "/test",
            // ...
            "paths": {
                "/path/{pathParam}": {
                    "post": {
                        "operationId": "operationZ",
                        "parameters": [
                            {
                                "in": "path",
                                "name": "pathParam",
                                "type": "string"
                            },
                            {
                                "in": "body",
                                "name": "body",
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "y": {
                                            "type": "boolean"
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        }
    });
    const requestMessage = utOpenApi.format({
        params: {
            pathParam: 'x'
        },
        body: {
            y: true
        }
    }, 'providerX.segmentY.operationZ', 'request');
    /* requestMessage will result in a format suitable
    for usage with the node.js 'request' module:
        {
            url: 'http://127.0.0.1:8080/test/path/x',
            method: 'get',
            body: {
                y: true
            },
            headers: {},
            qs: {}
        }
    */
  ```

* `formatRequest (msg, method)`
Shorthand for `format` function. E.e.
`formatRequest({/*...*/}, 'providerX.segmentY.operationZ')`
equals `format({/*...*/}, 'providerX.segmentY.operationZ', 'request')`
* `export (format, pattern)`
This is a convenient wrapper for obtaining
multiple formatters simultaneously based on a pattern.

E.g.

```js
    const utOpenApi = require('ut-openapi')();
    utOpenApi.load({ // documents
        'providerX.segmentX': {
            "swagger": "2.0",
            // ...
            "paths": {
                "/path1": {
                    "post": {
                        "operationId": "a.operation"
                    }
                },
                 "/path1": {
                    "post": {
                        "operationId": "b.operation"
                    }
                }
            }
        },
        'providerX.segmentY': {
            "swagger": "2.0",
            // ...
            "paths": {
                "/path1": {
                    "post": {
                        "operationId": "a.operation"
                    }
                },
                 "/path1": {
                    "post": {
                        "operationId": "b.operation"
                    }
                }
            }
        }
    });

    const formatters1 = utOpenApi.export();
    /*
        {
            'providerX.segmentX.a.operation': params => {},
            'providerX.segmentX.b.operation': params => {},
            'providerX.segmentY.a.operation': params => {},
            'providerX.segmentY.b.operation': params => {}
        }
    */

   const formatters2 = utOpenApi.export('request', 'providerX.segmentX');
    /*
        {
            'providerX.segmentX.a.operation': params => {},
            'providerX.segmentX.b.operation': params => {}
        }
    */

   const formatters3 = utOpenApi.export('request', 'a.operation');
    /*
        {
            'providerX.segmentX.a.operation': params => {},
            'providerX.segmentY.a.operation': params => {}
        }
    */

   // also regular expressions are supported
   const formatters4 = utOpenApi.export('request', /\.a\./);
    /*
        {
            'providerX.segmentX.a.operation': params => {},
            'providerX.segmentY.a.operation': params => {}
        }
    */
```
