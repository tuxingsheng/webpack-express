'use strict';

let webpack = require('webpack');
let baseJson = require('./webpack-config/base/webpack-base.json');
let webpackConfig = baseJson.config;

webpackConfig = {
    entry: require('./webpack-config/module/entry/webpack-entry'),
    output: require('./webpack-config/module/output/webpack-output'),
    plugins: require('./webpack-config/module/plugins'),
    vue: require('./webpack-config/module/plugins/src/webpack-vue-plugin'),
    babel: require('./webpack-config/module/plugins/src/webpack-babel-plugin'),
    postcss: require('./webpack-config/module/plugins/src/webpack-autoprefixer-plugin'),
    module: {
        loaders: require('./webpack-config/module/loaders/webpack-loaders')
    },
    resolve: {
        extensions: require('./webpack-config/module/resolve/webpack-extensions'),
        alias: require('./webpack-config/module/resolve/webpack-alias')
    }
};


module.exports = webpackConfig;


