const userControler = require('../controlers/userControler');
const route = require('express').Router();
//faire appel a la fonction adduse r inside user controler
route.post('/adduser',userControler.addUser);
route.get('/showusers',userControler.showUser);
route.get('/getUserById/:id',userControler.getByIdUser);
route.put('/updateOneUser/:id',userControler.updateOneUser);
route.get('/deleteOneUser/:id',userControler.deleteOneUser);
route.post('/login',userControler.authenticate);
route.post('/refreshtoken',userControler.refreshToken);
route.post('/logout',userControler.validateUser,userControler.Logout);
module.exports= route;
