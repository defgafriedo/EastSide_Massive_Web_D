const express = require('express')
const app = express()
const {getArtById, getShowOrder, getSaleProfile,addTransaction, getShowAllOrder,updateUserLevel,deleteUser,getAllAvgArt,getShowcaseProfile,getAllUsers,getArtworkById,addUser, getLogUser, addArtwork,addSellArtwork, getAllArtwork,updateUserData,getUserById,staticPath, upload,uploadp, getListGallery, getListProfileSeniman} = require('../controller/controller')

app.get ('/atslog', getLogUser)
app.post ('/atssign', addUser)
app.get ('/atsalluser', getAllUsers)
app.post('/atsuploadartwork', upload.single('file'), addArtwork);
app.post('/atsuploadsellartwork', upload.single('file'), addSellArtwork);
app.get ('/atsavgart', getAllAvgArt)
app.get ('/atsgetartwork', getAllArtwork)
app.get ('/atsgetartworkbyid', getArtworkById)
app.post('/atsupdateuser', uploadp.single('file'), updateUserData);
app.get ('/atsgetuser', getUserById)
app.patch ('/atsupdatelevel', updateUserLevel)
app.delete('/atsdeleteuser/:userId', deleteUser)
app.post ('/atstransaction', addTransaction)
app.get('/atsShowAllOrder', getShowAllOrder);





app.get('/atsListGallery', getListGallery);
app.get('/atsListProfileSeniman', getListProfileSeniman);
app.get('/atsShowcaseProfile', getShowcaseProfile);
app.get('/atsSaleProfile', getSaleProfile);
app.get('/atsShowOrder/:id_pembeli', getShowOrder);
app.get('/atsDetailArt', getArtById);
module.exports=app