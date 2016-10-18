'use strict';

const base = require('../../base/webpack-base');

module.exports = {
    hot: true,
    inline: true,
    progress: true,
    host: base.HOST,
    port: base.PORT,
    contentBase: 'build/',
    outputPath: base.BUILD(),
    stats: {
        color: true
    },
    historyApiFallback: true
};
