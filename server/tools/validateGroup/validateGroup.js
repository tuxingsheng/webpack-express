'use strict';

/*
 * express-validator验证参数列表
 * */
exports.Group_10000 = {
    name: {
        notEmpty: {
            errorMessage: '参数name不能为空'
        }
    }
};
