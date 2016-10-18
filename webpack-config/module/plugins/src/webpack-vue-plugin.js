'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    loaders: {
        js: 'babel-loader?presets[]=es2015',
        css: ExtractTextPlugin.extract('style-loader!css-loader!postcss-loader'),
        less: ExtractTextPlugin.extract('css-loader!postcss-loader!less-loader')
    }
};
