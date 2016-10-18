'use strict';

const _ = require('lodash');

let webpackEntry = {};
let base = require('../../base/webpack-base.js');
let baseJson = require('../../base/webpack-base.json');
const webpackDevServer = 'webpack-dev-server/client?' + (base.PATH) + '';
const hotMiddlewareScript = 'webpack-hot-middleware/client?quiet=true&reload=true&path=/__webpack_hmr';

if (!_.isEmpty(baseJson.bower)) {
    webpackEntry = _.assignIn(baseJson.bower, webpackEntry)
}

_.forEach(baseJson.views, function (view) {

    switch (process.env.NODE_ENV) {
        // 静态调试
        case 'develop':
            webpackEntry[view.name] = [webpackDevServer, hotMiddlewareScript, base.CLIENT(view.javascript)];
            break;
        // node调试
        case 'server':
            webpackEntry[view.name] = [hotMiddlewareScript, base.CLIENT(view.javascript)];
            break;
        // 编译打包
        case 'build':
            webpackEntry[view.name] = base.CLIENT(view.javascript);
            break;
        // 默认是(build)
        default :
            webpackEntry[view.name] = base.CLIENT(view.javascript);
    }
});

console.log('process.env.NODE_ENV------------------', process.env.NODE_ENV);

module.exports = webpackEntry;

