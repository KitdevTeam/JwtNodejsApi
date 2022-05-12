const userControler = require('../controlers/vendeurControler');
const route = require('express').Router();
//faire appel a la fonction adduse r inside user controler
route.post('/addVendeur',userControler.addVendeur);
route.get('/showusers',userControler.showVendeurs);
route.get('/getUserById/:id',userControler.getByIdVendeur);
route.get('/deleteOneUser/:id',userControler.deleteVendeur);
route.post('/login',userControler.authenticate);
route.post('/refreshtoken',userControler.refreshToken);
route.post('/logout',userControler.validateVendeur,userControler.Logout);
module.exports= route;
