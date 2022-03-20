import Cookies from "js-cookie"

// import router from "../router"



export default{
    state:{
        isCollapse: false,
        //默认展示首页
        tabsList:[
            {
                path:'/',
                name:"home",
                label:'首页',
                icon:'home'
            }
        ],
        //当前页面
        currentMenu:null,
        menu:[]
    },
   
    mutations:{
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
         //用于改变 tabsList中的数据
        selectMenu(state,val){
            // 判断点击的值是否为首页，不是就获取值跳转
            if(val.name !== 'home'){
                state.currentMenu = val
                //拿到当前选中页的索引
                //findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置
               const result= state.tabsList.findIndex(item=>item.name === val.name)
               if(result === -1){
                   //如果当前页不在tabsList中，则push进去
                    state.tabsList.push(val)
               }
            }else{
                //如果是首页，重置当前选中页面
                state.currentMenu = null
            }
        },
        closeTag(state,val){
            //如果当前页面在tL中
            const result = state.tabsList.findIndex(item => item.name === val.name)
            //通过splice方法删除
            state.tabsList.splice(result, 1)
        },
        setMenu(state,val){
            state.menu=val
            Cookies.set('menu',JSON.stringify(val))

        },
        clearMenu(state){
            state.menu=[]
            Cookies.remove('menu')
        },
        addMenu(state,router){
            if(!Cookies.get('menu')){
                return
            }
            const menu=JSON.parse(Cookies.get('menu'))
            state.menu=menu
            const menuArray=[]
            menu.forEach(item=>{
                if(item.children){
                    //有二级菜单
                    item.children= item.children.map(item=>{
                        item.component =()=>import(`../../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else{
                    item.component =()=>import(`../../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            //路由的动态添加
           
            menuArray.forEach(item=>{
                
                router.addRoute('Main',item)
               
            })

        }

    }
}
