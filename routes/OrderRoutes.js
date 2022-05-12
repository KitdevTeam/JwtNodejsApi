const orderControler = require('../controlers/OrderControler');
const route = require('express').Router();
//faire appel a la fonction add prod inside prodcontroler
route.post('/addOrder',orderControler.addOrder);
//
route.get('/showOrder',orderControler.showOrder);
//
route.get('/getByIdOrder/:id',orderControler.getByIdOrder);
//
route.put('/updateOneOrder/:id',orderControler.updateOneOrder);
//
route.get('/deleteOneOrder/:id',orderControler.deleteOneOrder);

module.exports= route;