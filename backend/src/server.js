const express = require("express")
const server = express()
const routes = require("./routes")
const cors = require("cors")

require('./database')

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3110, () => console.log('rodando'))