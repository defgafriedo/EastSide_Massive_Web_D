const express = require('express')
const app = express()
const {addUser, getLogUser, addArtwork,addSellArtwork, getAllArtwork,updateUserData,getUserById,staticPath, upload,uploadp, getListGallery} = require('../controller/controller')

app.post ('/atslog', getLogUser)
app.post ('/atssign', addUser)
app.post('/atsuploadartwork', upload.single('file'), addArtwork);
app.post('/atsuploadsellartwork', upload.single('file'), addSellArtwork);
app.get ('/atsgetartwork', getAllArtwork)
app.post('/atsupdateuser', uploadp.single('file'), updateUserData);
app.get ('/atsgetuser', getUserById)
app.get('/atsListGallery', getListGallery);
module.exports=app