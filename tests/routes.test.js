const request = require('supertest')
const app = require('../app.js')
const mongoose = require('mongoose')
const databaseName = 'itemsTestDatabase'
const Item = require('../models/item')

beforeAll(async (done) => {
    const MONGODB_URI = `mongodb://127.0.0.1/${databaseName}`
    await mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    const faker = require('faker')

    const seed = async () => {
        const items = [...Array(10)].map(item => (
            {
                title: faker.lorem.word(),
                link: faker.lorem.sentence()
            }
        ))

        await Item.insertMany(items)
        console.log("Created items in test database!")
    }
    const run = async () => {
        await seed()
    }

    run()
    done()
})

let item

describe('Items API', () => {
    it('should show all items', async done => {
        const res = await request(app).get('/api/items')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('items')
        item = res.body.items[0]._id
        done()
    }),
    it('should create a new item', async done => {
        const res = await request(app)
            .post('/api/items')
            .send({
                title: 'Test Item',
                link: 'http://www.testing.com'
            })
        expect(res.statusCode).toEqual(403)
        done()
    }),
    it('should show an item', async done => {
        const res = await request(app).get(`/api/items/${item}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.item).toHaveProperty('_id')
        done()
    }),
    it('should update an item', async done => {
        const res = await request(app)
            .put(`/api/items/${item}`)
            .send({
                title: 'Update Test Item',
                link: 'http://www.testing.com'
            })
        expect(res.statusCode).toEqual(403)
        done()
    }),
    it('should delete an item', async done => {
        const res = await request(app)
            .del(`/api/items/${item}`)
            .send({
                title: 'Update Test Item',
                link: 'http://www.testing.com'
            })
        expect(res.statusCode).toEqual(403)
        done()
    })
})

afterAll(async (done) => {
    // await Item.drop()
    await mongoose.connection.close()
    done()
})