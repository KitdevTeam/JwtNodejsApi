var express =  require('express'); //third-part module
//const validator = require('node-input-validator');
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');
var chalk = require('chalk');
var cors = require('cors');
var bodyparser = require('body-parser');
const userRoute= require('./routes/userRouter');
const prodRoute= require('./routes/productRoutes');
const vendRoute= require('./routes/vendeurRoutes');
const catRoute= require('./routes/CategoryRoutes');
const sscatRoute= require('./routes/sousCategoryRoutes');
const orderRoute= require('./routes/orderRoutes');
const config = require('./config/configdb');
const PORT = 8000;
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);
var app = express();
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));
// parse application/json
app.use(bodyparser.json());
app.use(cookieParser());
app.use(cors('*'));
app.set('secretkey','itgate');
app.use(cookieParser());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//app.use(validator.koa());
//link to userRoutes
app.use('/users',userRoute);
app.use('/prod',prodRoute);
app.use('/cat',catRoute);
app.use('/vend',vendRoute);
app.use('/sscat',sscatRoute);
app.use('/order',orderRoute);
app.get("/",function(req,res){
res.send('test node validate');
});
const jwtKey = "my_secret_key"
const jwtExpirySeconds = 300
const users = {
	user1: "password1",
	user2: "password2",
}
const signIn = (req, res) => {
	// Get credentials from JSON body
	const { username, password } = req.body
	if (!username || !password ) {
		// return 401 error is username or password doesn't exist, or if password does
        // not match the password in our records
        console.log('user not logged in')
		return res.status(401).end()
	}

	// Create a new token with the username in the payload
	// and which expires 300 seconds after issue
	const token = jwt.sign({ username }, jwtKey, {
		algorithm: "HS256",
		expiresIn: '3600',
	})
	console.log("token:", token)
    res.status(500).send('ok signIn success')
	// set the cookie as the token string, with a similar max age as the token
	// here, the max age is in milliseconds, so we multiply by 1000
	res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 })
	res.end()
}

app.post("/signin",  signIn);
app.get('/getfile/:image',function(req,res){
res.sendFile(__dirname+'/uploads/'+req.params.image);
});
app.post('/', function (req, res){
    var form = new formidable.IncomingForm();
    form.parse(req);
    form.on('fileBegin', function (name, file){
    file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file){
    console.log('Uploaded ' + file.name);
    });
    console.log('file sent !!!')
    //res.sendFile(__dirname + '/index.html');
});
app.listen(8080,function(){
    console.log(chalk.green('running with',PORT));
});