/*
 * 验证手机号格式
 */
export const validatePhone = (rule, value, callback) => {
    let regx = /^1[34578]\d{9}$/;
    if (!regx.test(value)) {
        callback(new Error('手机号码格式错误'));
    } else {
        callback();
    }
};
/*
 * 筛选条件验证手机号格式，可为空
 */
export const validatePhoneFilter = (rule, value, callback) => {
    let regx = /^1[34578]\d{9}$/;
    if (value === '') {
        callback(new Error('手机号码不能为空'))
    } else if ((value !== '') && !regx.test(value)) {
        callback(new Error('手机号码错误'));
    } else {
        callback();
    }
};
/*
 * 验证密码格式
 */
export const validatePwd = (rule, value, callback) => {
    let regx = /^(?![^a-zA-Z]+$)(?!\D+$).{6,18}$/;
    if (!regx.test(value)) {
        callback(new Error('密码为6~18位数字字母组合'));
    } else {
        callback();
    }
};

/*
 * 验证邀请码格式
 */
export const validateInvitePhone = (rule, value, callback) => {
    let regx = /^1[34578]\d{9}$/;
    if (value !== '' && !regx.test(value)) {
        callback(new Error('邀请码不正确'));
    } else {
        callback();
    }
};
/*
 * 验证开户银行许可证
 */
export const validateLicenceCode = (rule, value, callback) => {
    let regx = /^[JLZ]\d{13}$/;
    if (value !== '' && !regx.test(value)) {
        callback(new Error('许可证格式不正确'));
    } else {
        callback();
    }
};
/*
 * 验证统一社会信用编码
 */
export const validateSocialCreditCode = (rule, value, callback) => {
    let regx = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/;
    // let regx = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;
    if (value !== '' && !regx.test(value)) {
        callback(new Error('编码格式不正确'));
    } else {
        callback();
    }

};
/*
 * 验证身份证号
 */
export const validateIdcard = (rule, value, callback) => {
    let regx = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if (!regx.test(value)) {
        callback(new Error('身份证格式不正确'));
    } else {
        callback();
    }
};
/*
 * 验证银行卡号
 */
export const validateBankcard = (rule, value, callback) => {
    let regx = /^(\d{16}|\d{19})$/;
    if (!regx.test(value)) {
        callback(new Error('银行卡号不正确'));
    } else {
        callback();
    }
};
/*
 * 验证支付密码
 */
export const validatePayPwd = (rule, value, callback) => {
        let regx = /^\d{6}$/;
        if (!regx.test(value)) {
            callback(new Error('支付密码不正确'));
        } else {
            callback();
        }
    }
    /*
     * 转入转出金额整数验证
     */
export const ValidateChangeMoney = (rule, value, callback) => {
    let regx = /^[1-9][0-9]*$/;
    if (!regx.test(value)) {
        callback(new Error('金额只能为正整数'));
    } else {
        callback();
    }
}

/*
 * 验证省市级联
 */
export const validateProCity = (rule, value, callback) => {
    if (!value[0]) {
        callback(new Error('请选择省市'));
    } else {
        callback();
    }
};





/*
 * 验证手机号，返回布尔
 */
export const checkPhone = (phone) => {
    let regx = /^1[34578]\d{9}$/;
    if (!phone || !regx.test(phone)) {
        return false;
    } else {
        return true;
    }
};
/*
 * 验证密码格式，返回布尔
 */
export const checkPwd = (value) => {
    let regx = /^(?![^a-zA-Z]+$)(?!\D+$).{6,18}$/;
    if (!regx.test(value)) {
        return false;
    } else {
        return true;
    }
};
/*
 * 验证支付密码格式，返回布尔
 */
export const checkPayPwd = (value) => {
    let regx = /^\d{6}$/;
    if (!regx.test(value)) {
        return false;
    } else {
        return true;
    }
}