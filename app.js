'use strict';
const express = require('express');
const webpack = require('webpack');
const cons = require('consolidate');
const compression = require('compression');
// webpack config
const base = require('./webpack-config/base/webpack-base');
// cookie-parser
const cookieParser = require('cookie-parser');
// express-session
const session = require('express-session');
// body-parser
const bodyParser = require('body-parser');
// express application
const app = express();
// express-validator
const expressValidator = require('express-validator');
// express-validator customValidators
const validators = require('./server/tools/validators/validators');
// app config
const appConfig = require('./server/config/config');

// compress all responses
app.use(compression());

// 静态资源路径
app.use(express.static(base.BUILD()));
// 模板配置
app.set('views', base.BUILD('views'));
app.engine('html', cons.ejs);
app.set('view engine', 'html');

// app bodyParser & app cookieParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}));
app.use(expressValidator({customValidators: validators}));

// route assemblage
const route = require('./server/routes/route')(app);
// controls assemblage
const controller = require('./server/controllers/controller')(app);

// app locals
app.locals.env = 'production';

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send('404页面');
});

app.listen(base.NODE_PORT, function () {
    console.log('nodeJs开发服务器，已开启，port---', base.NODE_PORT);
});
