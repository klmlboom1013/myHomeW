/*
[210619]
npn install body-parser

*/

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require("fs");

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(80, () => {
    console.log("Express server has started on port 80 ***");
});

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));

const router = require('./router/main')(app, fs);
