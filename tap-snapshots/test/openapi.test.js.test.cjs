/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/openapi.test.js TAP test openapi methods > openapi.addPet 1`] = `
Object {
  "body": Object {
    "category": Object {
      "id": 1,
      "name": "ku4i",
    },
    "id": 1,
    "name": "Balkan",
    "photoUrls": Array [
      "url1",
      "url2",
    ],
    "status": "available",
    "tags": Array [],
  },
  "method": "post",
  "url": "https://petstore.swagger.io/v2/pet",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.createUser 1`] = `
Object {
  "body": Object {
    "email": "test.test@test.com",
    "firstName": "test",
    "id": 1,
    "lastName": "test",
    "password": "test",
    "phone": "0889548578",
    "username": "test",
    "userStatus": "active",
  },
  "method": "post",
  "url": "https://petstore.swagger.io/v2/user",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.createUsersWithArrayInput 1`] = `
Object {
  "body": Array [
    Object {
      "email": "test.test@test.com",
      "firstName": "test",
      "id": 1,
      "lastName": "test",
      "password": "test",
      "phone": "0889548578",
      "username": "test",
      "userStatus": "active",
    },
  ],
  "method": "post",
  "url": "https://petstore.swagger.io/v2/user/createWithArray",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.createUsersWithListInput 1`] = `
Object {
  "body": Array [
    Object {
      "email": "test.test@test.com",
      "firstName": "test",
      "id": 1,
      "lastName": "test",
      "password": "test",
      "phone": "0889548578",
      "username": "test",
      "userStatus": "active",
    },
  ],
  "method": "post",
  "url": "https://petstore.swagger.io/v2/user/createWithList",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.deleteOrder 1`] = `
Object {
  "body": undefined,
  "method": "delete",
  "url": "https://petstore.swagger.io/v2/store/order/1",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.deletePet 1`] = `
Object {
  "body": undefined,
  "headers": Object {
    "api_key": "test",
  },
  "method": "delete",
  "url": "https://petstore.swagger.io/v2/pet/test",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.deleteUser 1`] = `
Object {
  "body": undefined,
  "method": "delete",
  "url": "https://petstore.swagger.io/v2/user/test",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.findPetsByStatus 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "qs": Object {
    "status": Array [
      "sold",
    ],
  },
  "url": "https://petstore.swagger.io/v2/pet/findByStatus",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.findPetsByTags 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "qs": Object {
    "tags": Array [
      "zver",
    ],
  },
  "url": "https://petstore.swagger.io/v2/pet/findByTags",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.getInventory 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "url": "https://petstore.swagger.io/v2/store/inventory",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.getOrderById 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "url": "https://petstore.swagger.io/v2/store/order/1",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.getPetById 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "url": "https://petstore.swagger.io/v2/pet/test",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.getUserByName 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "url": "https://petstore.swagger.io/v2/user/test",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.loginUser 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "qs": Object {
    "password": "test",
    "username": "test",
  },
  "url": "https://petstore.swagger.io/v2/user/login",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.logoutUser 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "url": "https://petstore.swagger.io/v2/user/logout",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.placeOrder 1`] = `
Object {
  "body": Object {
    "complete": true,
    "id": 1,
    "petId": 1,
    "quantity": 1,
    "shipDate": "2020-02-21T09:22:14.807Z",
    "status": "placed",
  },
  "method": "post",
  "url": "https://petstore.swagger.io/v2/store/order",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.updatePet 1`] = `
Object {
  "body": Object {
    "category": Object {
      "id": 1,
      "name": "ku4i",
    },
    "id": 1,
    "name": "Balkan",
    "photoUrls": Array [
      "url1",
      "url2",
    ],
    "status": "sold",
    "tags": Array [
      Object {
        "id": 1,
        "name": "zver",
      },
    ],
  },
  "method": "put",
  "url": "https://petstore.swagger.io/v2/pet",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.updatePetWithForm 1`] = `
Object {
  "body": undefined,
  "method": "post",
  "url": "https://petstore.swagger.io/v2/pet/test",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.updateUser 1`] = `
Object {
  "body": Object {
    "email": "test.test@test.com",
    "firstName": "test",
    "id": 1,
    "lastName": "test",
    "password": "test",
    "phone": "0889548578",
    "username": "test",
    "userStatus": "active",
  },
  "method": "put",
  "url": "https://petstore.swagger.io/v2/user/test",
}
`

exports[`test/openapi.test.js TAP test openapi methods > openapi.uploadFile 1`] = `
Object {
  "body": undefined,
  "method": "post",
  "url": "https://petstore.swagger.io/v2/pet/test/uploadImage",
}
`
