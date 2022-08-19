var mongoose= require('mongoose');
var bcrypt= require('bcrypt');
const saltrounds = 15;
var schema = mongoose.Schema;

const userSchema = new schema({
 nom :{
     type :String,
     required: true,
     trim: true, //npm composé
 },
 prenom :{
     type: String,
     required: true,
 },
 email: {
     type: String, 
     required:[true,'email required'],
     unique:true,
     validate:{
     validator: function(v){
     return(/^[\-/0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,3}$/.test(v));
     },
     //message to return if validation fails
     message : props =>`${
     props.value
     }is not a valid email format`
     },
    },
 password:{
     type: String,
     //required:[true,'password is required,please'],
     validate: {
         validator :function(pwd){
             // var phoneno =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
             return(/^[A-Za-z0-9]\w{7,14}$/.test(pwd));
            },
            message:props =>`${
             props.value
            } password is not a valid format`
     }
 },
 phone: {
    type: String, 
    required:[true,'phone is required'],
    validate:{
        validator: function(v){
        return(/^\+?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(v));
        },
        //+21628145125
       //message to return if validation fails
        message : props =>`${
         props.value
        }is not a valid phone format`
        },
   },

});  
//hash user password before saving into db 
//https://medium.com/javascript-in-plain-english/how-bcryptjs-works-90ef4cb85bf4
userSchema.pre('save',function(next){
 this.password = bcrypt.hashSync(this.password,saltrounds);
 next();
})
module.exports = mongoose.model('userModule',userSchema);
