const express = require('express')
const app = express()
const {addUser, getLogUser, addArtwork,addSellArtwork, getAllArtwork,updateUserData,getUserById, upload,uploadp} = require('../controller/controller')

app.post ('/atslog', getLogUser)
app.post ('/atssign', addUser)
app.post('/atsuploadartwork', upload.single('file'), addArtwork);
app.post('/atsuploadsellartwork', upload.single('file'), addSellArtwork);
app.get ('/atsgetartwork', getAllArtwork)
app.post('/atsupdateuser', uploadp.single('file'), updateUserData);
app.get ('/atsgetuser', getUserById)
module.exports=app