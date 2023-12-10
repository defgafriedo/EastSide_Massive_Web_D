const express = require('express')
const app = express()
const {addUser, getLogUser, addArtwork,addSellArtwork,upload} = require('../controller/controller')

app.post ('/atslog', getLogUser)
app.post ('/atssign', addUser)
app.post('/atsuploadartwork', upload.single('file'), addArtwork);
app.post('/atsuploadsellartwork', upload.single('file'), addSellArtwork);

module.exports=app