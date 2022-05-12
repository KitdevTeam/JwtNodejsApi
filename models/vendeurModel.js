var mongoose= require('mongoose');
var schema = mongoose.Schema;
const userModel = require('./ModelUser')
const vendeurSchema = new schema({
    cin :{
        type :String,
     
    },
   });  


module.exports = userModel.discriminator('vendeurModule',vendeurSchema);
