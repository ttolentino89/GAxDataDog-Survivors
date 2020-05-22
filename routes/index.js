const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verifyUser)
router.post('/change-password', controllers.changePassword)

router.get('/items', controllers.getAllItems)
router.get('/items/:id', controllers.getItemById)
router.post('/items', restrict, controllers.createItem)
router.put('/items/:id', restrict, controllers.updateItem)
router.delete('/items/:id', restrict, controllers.deleteItem)

module.exports = router