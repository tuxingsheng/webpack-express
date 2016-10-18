'use strict';
const controls = [
    {root: '/index', url: './index/index'},         // 首页模块
];

module.exports = function (app) {
    controls.forEach(function (e) {
        app.use(e.root, require(e.url))
    })
};