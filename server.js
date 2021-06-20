const express = require('express');
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
    secret: '@#@$MYSIGN#@$#$', /* 쿠키를 임의로 변조하는것을 방지하기 위한 값 입니다. 이 값을 통하여 세션을 암호화 하여 저장합니다. */
    resave: false, /* 세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값입니다. express-session documentation에서는 이 값을 false 로 하는것을 권장하고 필요에 따라 true로 설정합니다. */
    saveUninitialized: true /* 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장합니다. */
}));

const router = require('./router/main')(app, fs);
