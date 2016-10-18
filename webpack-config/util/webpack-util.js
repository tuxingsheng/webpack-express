'use strict';

const glob = require('glob');
const webpackPath = require('path');
const ifaces = require('os').networkInterfaces();


// 获取文件路径
exports.getAppFilePath = function (gb, o, n, t) {
    var gbs = glob.sync(gb), d, a, x, r, rt
        , fs = {
        url: [], dist: [], name: [], dir: []
    };
    gbs.forEach(function (e) {
        r = webpackPath.dirname(e).split('/');
        rt = r.length - 1;
        x = webpackPath.extname(e);
        fs.url.push(e);
        if (t) {
            e = e.replace(x, t);
            x = webpackPath.extname(e);
        }
        d = e.replace(o, n);
        a = webpackPath.basename(e, x);
        fs.dist.push(d);
        fs.name.push(a);
        fs.dir.push(r[rt]);
    });
    return fs;
};

// 获取本地IP地址
exports.getAppIpAddress = function () {
    let key, ip = {};
    for (key in ifaces) {
        ifaces[key].forEach(function (iface, index) {
            if (iface.address && iface.address != '127.0.0.1' && iface.family == 'IPv4') {
                ip['address'] = iface.address;
            }
        });
    }
    return ip;
};

// 替换文件路径
exports.appFileUrlReplace = function (name, path) {
    return webpackPath.join(__dirname, '../../', name, path)
};










