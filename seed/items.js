const db = require('../db')
const Item = require('../models/item')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const faker = require('faker')

const main = async () => {
    const items = [...Array(100)].map(item => (
        {
            title: faker.lorem.word(),
            link: faker.lorem.sentence()
        }
    ))

    await Item.insertMany(items)
    console.log("Created items!")
}
const run = async () => {
    await main()
    db.close()
}

run()