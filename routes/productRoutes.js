const prodControler = require('../controlers/ProductControler');
const route = require('express').Router();
const upload = require('../middleware/upload');
//faire appel a la fonction add prod inside prodcontroler
route.post('/addproduct',upload.single('image'),prodControler.zidProduct);
//
route.get('/showProducts',prodControler.showProduct);
//
route.get('/getByIdProduct/:id',prodControler.getByIdProduct);
//
route.put('/updateOneproduct/:id',prodControler.updateOneProduct);
//
route.get('/deleteOneproduct/:id',prodControler.deleteOneProduct);
module.exports= route;
