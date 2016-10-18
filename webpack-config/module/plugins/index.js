'use strict';

const _ = require('lodash');
const webpack = require('webpack');

let pitchPlagins = [
    './src/webpack-html-plugin',
    './src/webpack-style-plugin',
    './src/webpack-common-plugin',
    './src/webpack-html-processing-plugin'
];
let webpackPlagins = require('./src/webpack-' + (process.env.NODE_ENV == 'build' ? 'pro' : 'dev') + '-plugin');


if (!_.isEmpty(pitchPlagins)) {
    _.forEach(pitchPlagins, function (plagin) {
        webpackPlagins = _.concat(webpackPlagins, require(plagin));
    });
}

module.exports = webpackPlagins;

