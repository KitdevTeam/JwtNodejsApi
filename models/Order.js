var mongoose= require('mongoose');
var schema = mongoose.Schema;

const orderSchema = new schema({
 name :{
     type :String,
     required: true,
 },
 User:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'userModule'
}
});  

module.exports = mongoose.model('OrderModule',orderSchema);
