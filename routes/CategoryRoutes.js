const categoryControler = require('../controlers/CategoryControler');
const route = require('express').Router();
//faire appel a la fonction add prod inside prodcontroler
route.post('/addcategory',categoryControler.addCategory);
//
route.get('/showCategory',categoryControler.showCategory);
//
route.get('/getByIdCategory/:id',categoryControler.getCategoryById);
//
route.put('/updateOneCategory/:id',categoryControler.updateOneCategory);
//
route.get('/deleteOneCategory/:id',categoryControler.deleteOneCategory);

module.exports= route;