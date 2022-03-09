require('dotenv').config();

// Importing module
import express from 'express';
const cors = require('cors');
const { auth, requiresAuth } = require('express-openid-connect');
const bodyParser = require('body-parser')

const app = express();
const PORT:Number = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("frontend/build"))

app.use(
    auth({
        //authRequired: every route does not need authentication
        authRequired: false,
        auth0Logout: true,
        issuerBaseURL: process.env.ISSUER_BASE_URL,
        baseURL: process.env.BASE_URL,
        clientID: process.env.CLIENT_ID,
        secret: process.env.SECRET
    })
);

app.get('/login', function(req, res) {
    res.send("Logging in");
})

// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!');
})
  
// Server setup
app.listen(process.env.PORT || PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})