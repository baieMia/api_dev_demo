import axios from 'axios'
var baseUrl= sessionStorage.getItem('baseURL');
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