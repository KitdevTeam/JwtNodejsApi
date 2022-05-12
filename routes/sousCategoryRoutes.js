const ssCatControler = require('../controlers/sousCategoryControler');
const route = require('express').Router();
//faire appel a la fonction add prod inside prodcontroler
route.post('/addsouscategory',ssCatControler.addsousCategory);
//
route.get('/showsousCatgory',ssCatControler.showsousCategory);
//
route.get('/getByIdSousCategory/:id',ssCatControler.getsousCategoryById);
//
route.put('/updateOneCategory/:id',ssCatControler.updateOnesousCategory);
route.get('/deleteOneCategory/:id',ssCatControler.deleteOnesousCategory);

module.exports= route;