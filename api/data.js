// import { get } from "core-js/core/dict";
import axios from "./axios";

export const getMenu = (param)=>{
    return axios.request({
        url:'/api/permission/getMenu',
        method:'post',
        data:param
    })
} 
export const getData=()=>{
    return axios.request({
        //Mock中拦截器
        url:' /api/home/getData ',
        method:'get'

    })
}
export const getUser=(params)=>{
    return axios.request({
        url:'/user/getUser',
        method:'get',
        params
    })
}


