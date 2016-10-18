'use strict';
const express = require('express');
const router = express.Router();
const handle = require('../../tools/handle/handle');
const reqValidator = require('../../middlewares/reqValidator/reqValidator');
const validateGroup = require('../../tools/validateGroup/validateGroup');

/*
 * 测试
 * */
router.get('/test', reqValidator(validateGroup.Group_10000), function (req, res, next) {
    res.json(handle.success.message(req.query.name));
});

router.post('/test', reqValidator(validateGroup.Group_10000), function (req, res, next) {
    res.json(handle.success.message(req.body.name));
});


module.exports = router;