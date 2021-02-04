import axios from 'axios'
let baseUrl = "http://localhost:7001"

const  myRequest = (options)=>{
    
	return new Promise((resolve,reject)=>{
axios({
    url:baseUrl + options.url,
    method:options.method || "GET",
    data:options.data || {},

}).then(result=>{
    if(result.data.code!=200){
        return
    }
    resolve(result.data)
}).catch(err=>{
    reject(err)
})
	})
}
export {myRequest}