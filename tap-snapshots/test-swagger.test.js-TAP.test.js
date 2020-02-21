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
  formData: {},
  headers: {},
  method: 'post',
  qs: {},
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
  formData: {},
  headers: {},
  method: 'post',
  qs: {},
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
  formData: {},
  headers: {},
  method: 'post',
  qs: {},
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
  formData: {},
  headers: {},
  method: 'post',
  qs: {},
  url: 'https://petstore.swagger.io/v2/user/createWithList' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.deleteOrder 1`] = `
{ body: undefined,
  formData: {},
  headers: {},
  method: 'delete',
  qs: {},
  url: 'https://petstore.swagger.io/v2/store/order/1' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.deletePet 1`] = `
{ body: undefined,
  formData: {},
  headers: { api_key: 'test' },
  method: 'delete',
  qs: {},
  url: 'https://petstore.swagger.io/v2/pet/test' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.deleteUser 1`] = `
{ body: undefined,
  formData: {},
  headers: {},
  method: 'delete',
  qs: {},
  url: 'https://petstore.swagger.io/v2/user/test' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.findPetsByStatus 1`] = `
{ body: undefined,
  formData: {},
  headers: {},
  method: 'get',
  qs: { status: [ 'sold' ] },
  url: 'https://petstore.swagger.io/v2/pet/findByStatus' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.findPetsByTags 1`] = `
{ body: undefined,
  formData: {},
  headers: {},
  method: 'get',
  qs: { tags: [ 'zver' ] },
  url: 'https://petstore.swagger.io/v2/pet/findByTags' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.getInventory 1`] = `
{ body: undefined,
  formData: {},
  headers: {},
  method: 'get',
  qs: {},
  url: 'https://petstore.swagger.io/v2/store/inventory' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.getOrderById 1`] = `
{ body: undefined,
  formData: {},
  headers: {},
  method: 'get',
  qs: {},
  url: 'https://petstore.swagger.io/v2/store/order/1' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.getPetById 1`] = `
{ body: undefined,
  formData: {},
  headers: {},
  method: 'get',
  qs: {},
  url: 'https://petstore.swagger.io/v2/pet/test' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.getUserByName 1`] = `
{ body: undefined,
  formData: {},
  headers: {},
  method: 'get',
  qs: {},
  url: 'https://petstore.swagger.io/v2/user/test' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.loginUser 1`] = `
{ body: undefined,
  formData: {},
  headers: {},
  method: 'get',
  qs: { password: 'test', username: 'test' },
  url: 'https://petstore.swagger.io/v2/user/login' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.logoutUser 1`] = `
{ body: undefined,
  formData: {},
  headers: {},
  method: 'get',
  qs: {},
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
  formData: {},
  headers: {},
  method: 'post',
  qs: {},
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
  formData: {},
  headers: {},
  method: 'put',
  qs: {},
  url: 'https://petstore.swagger.io/v2/pet' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.updatePetWithForm 1`] = `
{ body: undefined,
  formData: { name: 'Balkan', status: 'available' },
  headers: {},
  method: 'post',
  qs: {},
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
  formData: {},
  headers: {},
  method: 'put',
  qs: {},
  url: 'https://petstore.swagger.io/v2/user/test' }
`

exports[`test/swagger.test.js TAP test swagger methods > swagger.uploadFile 1`] = `
{ body: undefined,
  formData: { additionalMetadata: 'test', file: 'test' },
  headers: {},
  method: 'post',
  qs: {},
  url: 'https://petstore.swagger.io/v2/pet/test/uploadImage' }
`
