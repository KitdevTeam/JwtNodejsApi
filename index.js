const dotenv = require("dotenv");
// get config vars
dotenv.config();
const config = require('./src/setup/dbconfig');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoute= require('./src/routes/userRoutes');
const setUpmiddleware = require('./src/middleware/middleware.js');

const app = express();
setUpmiddleware(app);
app.use('/api/v2.5/',userRoute);
//https://www.section.io/engineering-education/what-are-cookies-nodejs/
app.use(express.static(__dirname + '/public'));

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
		res.setHeader("WWW-Authenticate", "Basic")
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
	res.cookie(`token`,token,{
        maxAge: jwtExpirySeconds * 1000,
        // expires works the same as the maxAge
        expires: new Date('01 12 2021'),
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });
	cz//res.redirect('user') 
	res.end()
}

app.post("/signin",  signIn);

app.get('/api/v0.5', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
  
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
  })
  app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
        maxAge: 5000,
        // expires works the same as the maxAge
        expires: new Date('01 12 2021'),
        secure: true,
        httpOnly: true,
        sameSite: 'lax'   
    });
    res.send('Cookie have been saved successfully'); 
});

app.get('/deletecookie', (req, res) => {
  //show the saved cookies
  res.clearCookie()
  res.send('Cookie has been deleted successfully');
});
const Port = process.env.PORT || 3000;
  app.listen(Port,(err,res)=>{
    console.log('listening on port :',Port);
  });