<template>
  <el-container style="height:100vh">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
         <common-header></common-header>
      </el-header>
        <common-tag></common-tag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHeader from '../src/components/CommonHeader.vue'
import CommonTag from '../src/components/CommonTag.vue'
export default {
  name: "Main",
  components:{CommonAside,CommonHeader,CommonTag},
  data() {
    return {};
  },
  
};
</script>

<style lang="less" scoped>
   .el-header{
     background-color: #333;
   }
   .el-main{
     padding: 0;
   }
</style>

