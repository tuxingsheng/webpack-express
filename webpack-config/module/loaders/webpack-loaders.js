'use strict';

const base = require('../../base/webpack-base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        test: /\.vue$/,
        loader: 'vue'
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader!css-loader!postcss-loader')
    },
    {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css-loader!postcss-loader!less-loader')
    },
    {
        test: /\.html$/,
        loader: 'html?attrs[]=img:src'
    },
    {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=style/fonts/[name].bundle.[ext]'
    },
    {
        test: /\.(png|jpe?g|gif)$/,
        loaders: ( process.env.NODE_ENV == 'build' ) ?
            ['url?limit=1024&name=image/[path][name].[ext]&context=' + (base.CLIENT()) + '',
                'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}']
            :
            ['url?limit=1024&name=image/[path][name].[ext]&context=' + (base.CLIENT()) + '']
    }
];