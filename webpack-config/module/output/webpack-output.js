'use strict';

let _ = require('lodash');
let base = require('../../base/webpack-base.js');
let baseJson = require('../../base/webpack-base.json');

module.exports = {
    path: base.BUILD(),
    publicPath: _.isEmpty(baseJson.website) ? '/' : baseJson.website,
    filename: 'javascript/resources/[name]/[name].bundle.js',
    chunkFilename: 'javascript/resources/[name]/[name].chunk.bundle.js'
};
