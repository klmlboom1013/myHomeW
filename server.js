const express = require('express');
const app = express();

const main = require('./router/main')(app);
const chapter2 = require('./router/chapter02')(app);
const test = require('./router/test')(app); 

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(80, () => {
    console.log("Express server has started on port 80");
});

app.use(express.static('public'));
