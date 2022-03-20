import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes=[
    {
    path:'/',
    name:'Main',
    //按需引入
    component:()=>import('../views/Main.vue'),
    children:[]
},
//登陆页面
{
    path:'/login',
    name:'login',
    component:()=>import('../views/Login/login.vue'),
}
]

const router=new VueRouter({
    path: '/home',
    mode: 'history',
    routes
})
export default router
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}




