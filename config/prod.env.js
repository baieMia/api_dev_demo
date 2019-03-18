'use strict'
// module.exports = {
//   NODE_ENV: '"production"'
// }

const target = process.env.npm_lifecycle_event;
if (target == 'test') {
    //测试
    var obj = {
        NODE_ENV: '"production"',
        //post用当前域名
        API_ROOT: '""',
        //数据字典
        API_ROOT_DICT:'"http://10.99.9.9:8787"',
    }
}else {
    //线上
    var obj = {
        NODE_ENV: '"production"',
        //post用当前域名
        API_ROOT: '""',
        //数据字典
        API_ROOT_DICT:'"http://10.99.9.36:8787/"',
    }
}
module.exports = obj;
