const express = require('express')
const app = express()
const ats = require('./ats')

const api = "/api/v1"

app.use(api, ats)

module.exports = app