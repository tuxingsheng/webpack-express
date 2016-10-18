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
// webpack.dev.config
const webpackConfig = require('./webpack.dev.config');
// webpack-dev-middleware
const webpackDevMiddleware = require('webpack-dev-middleware');
// webpack-hot-middleware
const webpackHotMiddleware = require('webpack-hot-middleware');
// express application
const app = express();
// browser-sync
const bs = require('browser-sync').create();
// express-validator
const expressValidator = require('express-validator');
// express-validator customValidators
const validators = require('./server/tools/validators/validators');
// app config
const appConfig = require('./server/config/config');

// compress all responses
app.use(compression());

webpackConfig.plugins = webpackConfig.plugins.concat([
    function () {
        this.plugin('done', function (stats) {
            stats = stats.toJson();
            app.locals.env = 'develop';
            app.locals.staticMap = stats;
            app.locals.staticMap.browser = base.PATH;
        });
    }
]);

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));


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


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send('404页面');
});

app.listen(base.NODE_PORT, function () {
    bs.init({
        ui: false,
        open: false,
        notify: false,
        logSnippet: false,
        port: base.PORT
    });
    bs.watch([
        './server/views/**/*.html',
        './client/**/*.vue'
    ]).on('change', bs.reload);
    console.log('nodeJs开发服务器，已开启，port---', base.NODE_PORT);
});
