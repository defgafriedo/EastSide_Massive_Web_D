const express = require('express')
const app = express()
const PORT = process.env.PORT ||5000
const {createServer} = require('http')
const server = createServer(app)
const bodyParser = require('body-parser')
const router = require('./router')
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json())
app.use(router)
app.use('/test', (req, res) => res.send("Test"))

server.listen(PORT, ()=> console.log("Server running on port " + PORT))