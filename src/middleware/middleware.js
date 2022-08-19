const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
module.exports =(app)=>{
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors('*'));
app.set('secretkey','125lmkcv');
app.use(cookieParser());
 
};