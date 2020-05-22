const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Item = require('../models/item')
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const SALT_ROUNDS = 11
const TOKEN_KEY = 'areallylonggoodkey'

const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
        const user = await new User({
            username,
            email,
            password_digest
        })

        await user.save()

        const payload = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(payload, TOKEN_KEY)
        return res.status(201).json({ user, token })
    } catch (error) {
        console.log(
            'You made it to the signUp controller, but there was an error :('
        )
        return res.status(400).json({ error: error.message })
    }
}

const signIn = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username })
        if (await bcrypt.compare(password, user.password_digest)) {
            const payload = {
                id: user._id,
                username: user.username,
                email: user.email
            }

            const token = jwt.sign(payload, TOKEN_KEY)
            return res.status(201).json({ user, token })
        } else {
            res.status(401).send('Invalid Credentials')
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const verifyUser = (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const user = jwt.verify(token, TOKEN_KEY)
        res.json({ user })
    } catch (e) {
        res.status(401).send('Not Authorized')
    }
}

const changePassword = async (req, res) => { }

const createItem = async (req, res) => {
    try {
        const item = await new Item(req.body)
        await item.save()
        return res.status(201).json(item)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find()
        return res.status(200).json({ items })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getItemById = async (req, res) => {
    try {
        const { id } = req.params
        const item = await Item.findById(id)
        if (item) {
            return res.status(200).json({ item })
        }
        return res.status(404).send('Item with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        await Item.findByIdAndUpdate(id, req.body, { new: true }, (err, item) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!item) {
                res.status(500).send('Item not found!');
            }
            return res.status(200).json(item)
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Item.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Item deleted");
        }
        throw new Error("Item not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    signUp,
    signIn,
    verifyUser,
    changePassword,
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
}