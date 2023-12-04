const express = require('express')
const app = express()
const {addUser, getLogUser} = require('../controller/controller')

app.post ('/atslog', getLogUser)
app.post ('/atssign', addUser)

module.exports=app