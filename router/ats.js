const express = require('express')
const app = express()
const {getArtById, getShowOrder, getSaleProfile, getShowcaseProfile, addUser, getLogUser, addArtwork,addSellArtwork, getAllArtwork,updateUserData,getUserById,staticPath, upload,uploadp, getListGallery, getListProfileSeniman} = require('../controller/controller')

app.post ('/atslog', getLogUser)
app.post ('/atssign', addUser)
app.post('/atsuploadartwork', upload.single('file'), addArtwork);
app.post('/atsuploadsellartwork', upload.single('file'), addSellArtwork);
app.get ('/atsgetartwork', getAllArtwork)
app.post('/atsupdateuser', uploadp.single('file'), updateUserData);
app.get ('/atsgetuser', getUserById)

//yang dari nando
app.get('/atsListGallery', getListGallery);
app.get('/atsListProfileSeniman', getListProfileSeniman);
app.get('/atsShowcaseProfile', getShowcaseProfile);
app.get('/atsSaleProfile', getSaleProfile);
app.get('/atsShowOrder/:id_pembeli', getShowOrder);
app.get('/atsDetailArt', getArtById);
module.exports=app