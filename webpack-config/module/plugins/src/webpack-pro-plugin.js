'use strict';

const webpack = require('webpack');
const notes = 'Introduction：网站简介，Version：1.0.0，CreateDate：' + (new Date().toLocaleString()) + '，Author：前端工程师 - 涂兴声';

module.exports = [
    new webpack.BannerPlugin(notes),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }/*,
        except: ['$', 'exports', 'require']*/
    })
];