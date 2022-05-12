var mongoose= require('mongoose');
var schema = mongoose.Schema;
/* const souscategorySchema = new schema({
    name :{
        type :String,
        required: true,
    },
    products :[ productSchema],
   
   });  */ 
const categorySchema = new schema({
 name :{
     type :String,
     required: true,
 },
 ssCategories:[{
     type:mongoose.Schema.Types.ObjectId,
     ref:'souscategoryModule'
 }] 

});  

module.exports = mongoose.model('categoryModule',categorySchema);
