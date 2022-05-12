var mongoose= require('mongoose');
var schema = mongoose.Schema;
 
const souscategorySchema = new schema({
 name :{
     type :String,
     required: true,
 },
 products :[{
     type:mongoose.Schema.Types.ObjectId,
     ref:'productModule'
 }],

});  

module.exports = mongoose.model('souscategoryModule',souscategorySchema);
