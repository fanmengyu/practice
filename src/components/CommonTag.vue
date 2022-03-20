<template>
    <div class="tabs">
        <el-tag
            v-for="(tag, index) in tags "
            :key="tag.name"
            :closable="tag.name !=='home'"
            :effect="$route.name === tag.name? 'dark':'plain'"
            @click="changeMenu(tag)"
            @close="handleClose(tag, index)"
            size="small"           
        >
        <!-- 判断是否高亮(effect)，需要判断当前路由的名称与tag名称是否一致 -->
        {{tag.label}}
        </el-tag>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name:'CommonTag',
    data(){
        return{}
    },
    computed:{
        ...mapState({
            tags: state => state.tab.tabsList
    })
    },
    methods:{
        //与面包屑联动
        ...mapMutations({
            close:'closeTag'
        }),
        // 切换操作，其实就是切换路由
        changeMenu(item){
            this.$router.push({name : item.name})
        },
        // 删除操作
        handleClose(tag, index){
            //先拿到标签的总长度，最后一个标签的下标即为length
            const length = this.tags.length - 1
            this.close(tag)//与面包屑联动
            //若删除的标签与路由标签不一致，则无需处理
            if(tag.name !== this.$route.name){
                return  ;
            }
            //若删除的是最右侧标签，则焦点要向左移动
            if(index === length){               
                this.$router.push({
                    name: this.tags[index - 1].name
                })
            }else{
                this.$router.push({
                    //由于已经删除了一个，因此此处的index无需加1
                    name: this.tags[index].name
                })
            }
        }
        //$route $router区别
        // route相当于当前正在跳转的路由对象。。可以从里面获取name,path,params,query
        //outer为VueRouter的实例，相当于一个全局的路由器对象，里面含有很多属性和子对象，例如history对象。。。经常用的跳转链接就可以用this.$router.push，和router-link跳转一样
    }
}
</script>

<style lang="less" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        margin-right: 15px;
        //鼠标移入时，图标变成小手
        cursor: pointer;
    }
}

</style>