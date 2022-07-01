<template>
    <el-menu
    :collapse="isCollapse"
      default-active="2"
      class="el-menu-vertical-demo">
      <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
        <i :class=" 'el-icon-'+ item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

      <el-submenu :index="item.path" v-for="(item,index) in hasChildren" :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="subitem.path" v-for="(subitem,subindex) in item.children" :key="subindex" @click="clickMenu(subitem)">{{subitem.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
</template>

<script>
export default {
    computed: {
        noChildren(){
            return this.asideMenu.filter(item => !item.children)
        },
        hasChildren(){
            return this.asideMenu.filter(item => item.children)
        },
        isCollapse(){
            return this.$store.state.tab.isCollapse
        }
    }, 
     methods: {
        clickMenu(item){
            // console.log(item)
            this.$router.push({name: item.name})
            this.$store.commit('selectMenu', item)
        }
    },
    data () {
        return {
            asideMenu:[
                {
                    path:'/',
                    name:'home',
                    label:'首页',
                    icon:'s-home'
                },
                {
                    path:'/user',
                    name:'user',
                    label:'个人中心',
                    icon:'user'
                },
                {
                    path:'/setting',
                    name:'setting',
                    label:'设置',
                    icon:'setting'
                },
                {
                    path:'/info',
                    name:'page',
                    label:'page',
                    icon:'info',
                    children:[{
                        path:'/page1',
                        name:'page1',
                        label:'子菜单1',
                        icon:'picture'
                    },
                    {
                        path:'/page2',
                        name:'page2',
                        label:'子菜单2',
                        icon:'camera-solid'
                    }]
                }
            ]
        }
    },
   
}
</script>

<style>
    .el-menu{
        height: 100%;
    }
     .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
