var mongoose =require( 'mongoose');
const configs = require('../../config/default');
//...
//const dbConfigs = configs.get('User.dbConfig.dbName');
console.log("dbConfig :",configs.User.dbConfig.dbName);
 var mongoDB =process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nodejsApi' ;
 mongoose.connect(configs.User.dbConfig.dbName,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
     console.log('database connected')
 }).catch((err)=>{
     console.log('Error Credentials Db',err)
 });
 mongoose.Promise = global.Promise;
 //var DB = mongoose.createConnection('mongodb://localhost:27017/mydb');

 var DB = mongoose.connection;
 console.log(DB)
 DB.on('error',console.error.bind(console,"MongoDB connection error :"));
