/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/swagger.test.js TAP test swagger methods > swagger.addPet 1`] = `
{ body:
   { category: { id: 1, name: 'ku4i' },
     id: 1,
     name: 'Balkan',
     photoUrls: [ 'url1', 'url2' ],
     status: 'available',
     tags: [] },
  method: 'post',
  url: 'https://petstore.swagger.io/v2/pet' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.createUser 1`] = `
{ body:
   { email: 'test.test@test.com',
     firstName: 'test',
     id: 1,
     lastName: 'test',
     password: 'test',
     phone: '0889548578',
     userStatus: 'active',
     username: 'test' },
  method: 'post',
  url: 'https://petstore.swagger.io/v2/user' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.createUsersWithArrayInput 1`] = `
{ body:
   [ { email: 'test.test@test.com',
       firstName: 'test',
       id: 1,
       lastName: 'test',
       password: 'test',
       phone: '0889548578',
       userStatus: 'active',
       username: 'test' } ],
  method: 'post',
  url: 'https://petstore.swagger.io/v2/user/createWithArray' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.createUsersWithListInput 1`] = `
{ body:
   [ { email: 'test.test@test.com',
       firstName: 'test',
       id: 1,
       lastName: 'test',
       password: 'test',
       phone: '0889548578',
       userStatus: 'active',
       username: 'test' } ],
  method: 'post',
  url: 'https://petstore.swagger.io/v2/user/createWithList' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.deleteOrder 1`] = `
{ body: undefined,
  method: 'delete',
  url: 'https://petstore.swagger.io/v2/store/order/1' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.deletePet 1`] = `
{ body: undefined,
  headers: { api_key: 'test' },
  method: 'delete',
  url: 'https://petstore.swagger.io/v2/pet/test' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.deleteUser 1`] = `
{ body: undefined,
  method: 'delete',
  url: 'https://petstore.swagger.io/v2/user/test' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.findPetsByStatus 1`] = `
{ body: undefined,
  method: 'get',
  qs: { status: [ 'sold' ] },
  url: 'https://petstore.swagger.io/v2/pet/findByStatus' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.findPetsByTags 1`] = `
{ body: undefined,
  method: 'get',
  qs: { tags: [ 'zver' ] },
  url: 'https://petstore.swagger.io/v2/pet/findByTags' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.getInventory 1`] = `
{ body: undefined,
  method: 'get',
  url: 'https://petstore.swagger.io/v2/store/inventory' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.getOrderById 1`] = `
{ body: undefined,
  method: 'get',
  url: 'https://petstore.swagger.io/v2/store/order/1' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.getPetById 1`] = `
{ body: undefined,
  method: 'get',
  url: 'https://petstore.swagger.io/v2/pet/test' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.getUserByName 1`] = `
{ body: undefined,
  method: 'get',
  url: 'https://petstore.swagger.io/v2/user/test' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.loginUser 1`] = `
{ body: undefined,
  method: 'get',
  qs: { password: 'test', username: 'test' },
  url: 'https://petstore.swagger.io/v2/user/login' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.logoutUser 1`] = `
{ body: undefined,
  method: 'get',
  url: 'https://petstore.swagger.io/v2/user/logout' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.placeOrder 1`] = `
{ body:
   { complete: true,
     id: 1,
     petId: 1,
     quantity: 1,
     shipDate: '2020-02-21T09:22:14.807Z',
     status: 'placed' },
  method: 'post',
  url: 'https://petstore.swagger.io/v2/store/order' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.updatePet 1`] = `
{ body:
   { category: { id: 1, name: 'ku4i' },
     id: 1,
     name: 'Balkan',
     photoUrls: [ 'url1', 'url2' ],
     status: 'sold',
     tags: [ { id: 1, name: 'zver' } ] },
  method: 'put',
  url: 'https://petstore.swagger.io/v2/pet' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.updatePetWithForm 1`] = `
{ body: undefined,
  formData: { name: 'Balkan', status: 'available' },
  method: 'post',
  url: 'https://petstore.swagger.io/v2/pet/test' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.updateUser 1`] = `
{ body:
   { email: 'test.test@test.com',
     firstName: 'test',
     id: 1,
     lastName: 'test',
     password: 'test',
     phone: '0889548578',
     userStatus: 'active',
     username: 'test' },
  method: 'put',
  url: 'https://petstore.swagger.io/v2/user/test' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.uploadFile 1`] = `
{ body: undefined,
  formData: { additionalMetadata: 'test', file: 'test' },
  method: 'post',
  url: 'https://petstore.swagger.io/v2/pet/test/uploadImage' }
`
