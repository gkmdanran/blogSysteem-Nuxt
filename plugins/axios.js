import * as axios from 'axios'
export  function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:3000/blog/api',
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })
    instance.interceptors.response.use(res => {
        // if (res.data.msg && res.data.msg != '')
        //     Vue.prototype.$message({
        //         message: res.data.msg,
        //         type: res.data.code == 200 ? 'success' : 'error',
        //         duration: 800
        //     })
        return res.data
    }, err => {
    })
    return instance(config)
}
export  function request2(config) {
    const instance = axios.create()
    return instance(config)
}
export  function getMusic(config) {
    const instance = axios.create()
    return instance(config)
}