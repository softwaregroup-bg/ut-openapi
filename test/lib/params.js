module.exports = {
    getPetById: {
        petId: 'test'
    },
    updatePetWithForm: {
        petId: 'test',
        name: 'Balkan',
        status: 'available'
    },
    deletePet: {
        api_key: 'test',
        petId: 'test'
    },
    uploadFile: {
        petId: 'test',
        additionalMetadata: 'test',
        file: 'test'
    },
    addPet: {
        body: {
            id: 1,
            category: {
                id: 1,
                name: 'ku4i'
            },
            name: 'Balkan',
            photoUrls: ['url1', 'url2'],
            tags: [],
            status: 'available'
        }
    },
    updatePet: {
        body: {
            id: 1,
            category: {
                id: 1,
                name: 'ku4i'
            },
            name: 'Balkan',
            photoUrls: ['url1', 'url2'],
            tags: [{
                id: 1,
                name: 'zver'
            }],
            status: 'sold'
        }
    },
    findPetsByStatus: {
        status: ['sold']
    },
    findPetsByTags: {
        tags: ['zver']
    },
    getInventory: {},
    getOrderById: {
        orderId: 1
    },
    deleteOrder: {
        orderId: 1
    },
    placeOrder: {
        body: {
            id: 1,
            petId: 1,
            quantity: 1,
            shipDate: '2020-02-21T09:22:14.807Z',
            status: 'placed',
            complete: true
        }
    },
    getUserByName: {
        username: 'test'
    },
    updateUser: {
        username: 'test',
        body: {
            id: 1,
            username: 'test',
            firstName: 'test',
            lastName: 'test',
            email: 'test.test@test.com',
            password: 'test',
            phone: '0889548578',
            userStatus: 'active'
        }
    },
    deleteUser: {
        username: 'test'
    },
    loginUser: {
        username: 'test',
        password: 'test'
    },
    logoutUser: {},
    createUser: {
        body: {
            id: 1,
            username: 'test',
            firstName: 'test',
            lastName: 'test',
            email: 'test.test@test.com',
            password: 'test',
            phone: '0889548578',
            userStatus: 'active'
        }
    },
    createUsersWithArrayInput: {
        body: [{
            id: 1,
            username: 'test',
            firstName: 'test',
            lastName: 'test',
            email: 'test.test@test.com',
            password: 'test',
            phone: '0889548578',
            userStatus: 'active'
        }]
    },
    createUsersWithListInput: {
        body: [{
            id: 1,
            username: 'test',
            firstName: 'test',
            lastName: 'test',
            email: 'test.test@test.com',
            password: 'test',
            phone: '0889548578',
            userStatus: 'active'
        }]
    }
};
