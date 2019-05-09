/** 
 * eslint配置链接
 * https://cn.eslint.org/docs/user-guide/configuring
 * 
*/

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": 0,    //这里是全局配置的规则
        "no-undef": 0
    }
};