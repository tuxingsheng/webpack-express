'use strict';

const baseJson = require('./webpack-base.json');
const webpackUtil = require('../util/webpack-util');

const localPort = baseJson.localPort;
const localNodePort = baseJson.localNodePort;
const localHost = webpackUtil.getAppIpAddress().address;
const appFileUrlReplace = webpackUtil.appFileUrlReplace;


module.exports = {
    'HOST': localHost,
    'PORT': localPort,
    'NODE_HOST': localHost,
    'NODE_PORT': baseJson.localNodePort,
    'ROOT': (pt) => appFileUrlReplace('', pt || ''),
    'BUILD': (pt) => appFileUrlReplace('build/', pt || ''),
    'CLIENT': (pt) => appFileUrlReplace('client/', pt || ''),
    'SERVER': (pt) => appFileUrlReplace('server/', pt || ''),
    'PATH': 'http://' + (localHost) + ':' + (localPort) + '/',
    'NODE_PATH': 'http://' + (localHost) + ':' + (localNodePort) + '/'
};
