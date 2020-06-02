/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/swagger.test.js TAP test swagger methods > swagger.addPet 1`] = `
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

exports[`test/swagger.test.js TAP test swagger methods > swagger.createUser 1`] = `
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

exports[`test/swagger.test.js TAP test swagger methods > swagger.createUsersWithArrayInput 1`] = `
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

exports[`test/swagger.test.js TAP test swagger methods > swagger.createUsersWithListInput 1`] = `
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

exports[`test/swagger.test.js TAP test swagger methods > swagger.deleteOrder 1`] = `
Object {
  "body": undefined,
  "method": "delete",
  "url": "https://petstore.swagger.io/v2/store/order/1",
}
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.deletePet 1`] = `
Object {
  "body": undefined,
  "headers": Object {
    "api_key": "test",
  },
  "method": "delete",
  "url": "https://petstore.swagger.io/v2/pet/test",
}
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.deleteUser 1`] = `
Object {
  "body": undefined,
  "method": "delete",
  "url": "https://petstore.swagger.io/v2/user/test",
}
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.findPetsByStatus 1`] = `
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

exports[`test/swagger.test.js TAP test swagger methods > swagger.findPetsByTags 1`] = `
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

exports[`test/swagger.test.js TAP test swagger methods > swagger.getInventory 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "url": "https://petstore.swagger.io/v2/store/inventory",
}
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.getOrderById 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "url": "https://petstore.swagger.io/v2/store/order/1",
}
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.getPetById 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "url": "https://petstore.swagger.io/v2/pet/test",
}
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.getUserByName 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "url": "https://petstore.swagger.io/v2/user/test",
}
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.loginUser 1`] = `
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

exports[`test/swagger.test.js TAP test swagger methods > swagger.logoutUser 1`] = `
Object {
  "body": undefined,
  "method": "get",
  "url": "https://petstore.swagger.io/v2/user/logout",
}
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.placeOrder 1`] = `
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

exports[`test/swagger.test.js TAP test swagger methods > swagger.updatePet 1`] = `
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

exports[`test/swagger.test.js TAP test swagger methods > swagger.updatePetWithForm 1`] = `
Object {
  "body": undefined,
  "formData": Object {
    "name": "Balkan",
    "status": "available",
  },
  "method": "post",
  "url": "https://petstore.swagger.io/v2/pet/test",
}
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.updateUser 1`] = `
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

exports[`test/swagger.test.js TAP test swagger methods > swagger.uploadFile 1`] = `
Object {
  "body": undefined,
  "formData": Object {
    "additionalMetadata": "test",
    "file": "test",
  },
  "method": "post",
  "url": "https://petstore.swagger.io/v2/pet/test/uploadImage",
}
`
