const { update } = require('../models/User')
const User = require('../models/User')

module.exports = {
    async index(req,res) {
        const users = await User.findAll()

        return res.json(users)
    },
    async show(req, res) {
        const userID = req.params.id
        const user = await User.findByPk(userID)

        if(!user) {
            return res.send('User not found')
        }

        return res.json(user)
    },
    async store(req, res) {
        const { name, surname, email, password } = req.body

        try {
            const user = await User.create({ name, surname, email, password })
            return res.json(user)
        } catch(err) {
            console.log(err, req.body.email)
            return res.status(409).send('Duplicate entry')
        }
        
    },
    async login(req, res) {
        console.log(req.body)
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if(!user) {
            return res.status(404).send('User not found')
        }

        if(user.password != password) {
            return res.status(401).send('User not found')
        }

        return res.json(user)
    },
    async update(req, res) {
        const userID = req.params.id
        const user = await User.findByPk(userID)
        
        const { name, surname, email, password } = req.body
        user.name = name,
        user.surname = surname,
        user.email = email,
        user.password = password

        const updatedUser = await user.save()
        return res.json(updatedUser)
    },
    async delete(req, res) {
        const userID = req.params.id
        const user = await User.findByPk(userID)
        const deleted = user.destroy()

        if(deleted) {
            return res.send('deleted')
        }
    }
}