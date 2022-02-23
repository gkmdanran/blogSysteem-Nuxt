import * as axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:8888/blog',
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
    })
    return instance(config)
}
export function request2(config) {
    const instance = axios.create()
    return instance(config)
}
export function getMusic(config) {
    const instance = axios.create()
    return instance(config)
}