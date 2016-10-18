'use strict';
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index/home/index', {
        name: '首页'
    });
});

module.exports = router;


