import Cookies from "js-cookie"

export default{
    state:{
        token:''
    },
    mutations:{
        setToken(state,val){
            state.token  = val
            Cookies.set('token',val)
        },
        clearToken(state){
            state.token = ''
            Cookies.remove('token')
        },
        getToken(state){
            //用于获取Token
            state.token=state.token || Cookies.get('token')

        }
    }
}