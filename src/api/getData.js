import axios from 'axios'
var baseUrl= axios.defaults.baseURL;
console.log(baseUrl,3324);
export const getUserInfo = (data,callback)=>{
	axios.post(`${baseUrl}/app/getUserInfo`, qr.stringify(data))
    .then((msg)=>{
        tokenInvalidation(msg.data);
        callback(msg.data);
    })
    .catch((err)=>{
        Toast('获取信息失败')
    })
}