var mongoose =require( 'mongoose');
 var mongoDB =process.env.MONGODB_URI || 'mongodb://127.0.0.1/myDB' ;
 mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedTopology:true});
 mongoose.Promise = global.Promise;
 //var DB = mongoose.createConnection('mongodb://localhost:27017/mydb');

 var DB = mongoose.connection;
 console.log(DB)
 DB.on('error',console.error.bind(console,"MongoDB connection error :"));
