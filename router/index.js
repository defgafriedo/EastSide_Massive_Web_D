const express = require('express')
const app = express()
const ats = require('./ats')
const {staticPath, karyaPath} = require('../controller/controller')

const api = "/api/v1"
app.use('/stat', express.static(staticPath));
app.use('/karya', express.static(karyaPath));
app.use(api, ats)

module.exports = app