const express = require("express")
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/', (req, res) => {
    return res.json({ hello: 'World' })
})
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.post('/user/login', UserController.login)
routes.get('/user/:id', UserController.show)
routes.post('/user/:id', UserController.update)
routes.post('/user/delete/:id', UserController.delete)

module.exports = routes