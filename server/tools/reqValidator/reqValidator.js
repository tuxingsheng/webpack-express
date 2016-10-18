'use strict';

const handle = require('../handle/handle');

module.exports = function (paramGroup) {
    return function (req, res, next) {
        let reqMethod = req.method.toLowerCase();
        switch (reqMethod) {
            case 'get':
                req.checkQuery(paramGroup);
                break;
            case 'post':
                req.checkBody(paramGroup);
                break;
        }
        let errors = req.validationErrors();
        if (errors) {
            return res.json(handle.error.message(errors[0].msg));
        }
        next();
    }
};

