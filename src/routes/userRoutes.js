const AuthController = require('../contollers/AuthController');
const UserController = require('../contollers/UserController');

const route = require('express').Router();

route.post('/auth',AuthController.authenticate);
route.post('/validate',AuthController.refreshToken);
route.post('/logout',AuthController.validateUser,AuthController.Logout);
route.post('/adduser',UserController.addUser);
route.get('/showuser',UserController.showUser);
route.get('/getUserById/:id',UserController.getByIdUser);
route.put('/updateOneUser/:id',UserController.updateOneUser);
route.delete('/deleteOneUser/:id',UserController.deleteOneUser);

module.exports= route;
