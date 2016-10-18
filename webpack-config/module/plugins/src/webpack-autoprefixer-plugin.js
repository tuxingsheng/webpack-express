'use strict';

const autoprefixer = require('autoprefixer');

module.exports = [
    autoprefixer({browsers: [
        'last 2 versions',
        '> 5%',
        'Firefox >= 20',
        'iOS 7',
        'ie 6-8'
    ]})
];

