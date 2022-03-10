"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
// Importing module
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const { auth, requiresAuth } = require('express-openid-connect');
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express_1.default.static("frontend/build"));
app.use(auth({
    //authRequired: every route does not need authentication
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET
}));
app.get('/login', function (req, res) {
    res.send("Logging in");
});
// Handling GET / Request
app.get('/', (req, res) => {
    res.send('typescript backend');
});
// Server setup
app.listen(process.env.PORT || PORT, () => {
    console.log('The application is listening '
        + 'on port http://localhost:' + PORT);
});
