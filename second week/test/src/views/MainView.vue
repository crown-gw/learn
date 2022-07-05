<template>
    <el-container style="height:100%">
  <el-aside width="auto" class="aside">
    <!-- <div class="title">
      多场景智慧园区
    </div> -->
    <common-aside></common-aside>
    </el-aside>
  <el-container>
    <el-header class="header"><common-header></common-header></el-header>
    <common-tab></common-tab>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>


<script>
import CommonHeader from '../components/CommonHeader.vue'
import CommonAside from '../components/CommonAside.vue'
import CommonTab from '../components/CommonTab.vue'

export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
}
</script>


<style scoped>
  .title{
    height: 60px;
    background-color: #409eff;
    position: absolute;
  }
    .header{
    background-color: #409eff;
  }
  .main{
    /* background-color: aliceblue; */
  }
  .aside{
    background-color: #dee4e9;
    /* border: 1px solid yellow; */
  }
</style>