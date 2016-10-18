'use strict';

let webpackStyles = [];
const ExtractTextPlugin = require('extract-text-webpack-plugin');

webpackStyles.push(
    new ExtractTextPlugin('style/resources/[name]/[name].bundle.css')
);

module.exports = webpackStyles;
