var mongoose= require('mongoose');
var schema = mongoose.Schema;

const orderSchema = new schema({
    name :{
        type :String,
        required: true,
    },
   });  
   
const productSchema = new schema({
 prix :{
     type :String,
     required: false,
 },
 image:{
     type:String,
 },
orders:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'OrderModule'
}]
});  

module.exports = mongoose.model('productModule',productSchema);
