'use strict';

const baseJson = require('../../../base/webpack-base.json');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = [
    new CommonsChunkPlugin({
        name: baseJson.commonChunks,
        minChunks: baseJson.commonChunks.length
    })
];