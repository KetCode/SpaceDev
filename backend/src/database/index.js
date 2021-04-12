const Sequelize = require('sequelize')
const database = require('../config/database')
const connection = new Sequelize(database)
const User = require('../models/User')

User.init(connection)

module.exports = connection