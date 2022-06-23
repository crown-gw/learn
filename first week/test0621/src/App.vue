<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-link to="/a" tag="div" >跳转到a</router-link>
    <router-link to="/b" >跳转到b</router-link>
    <br>
    <router-link to="/c" >跳转到c</router-link>
    <br>
    <router-link :to="{
      name:'c',
      query:{
        value:new Date(),
      },
      }">跳转到c</router-link>
    <br>
    <button @click="push"> push</button>
    <button @click="get"> 取参数</button>
    <!-- replace属性不会返回上次点击的页面 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"App",
  components:{},
  methods:{
    push(){
      // this.$router.push('/a');
      // this.$router.push({path:'/a'});
      // this.$router.push({name:'c',replace:true});
      // this.$router.push({path:'/a', query:{value:2}});
      this.$router.push({name:'/a', params:{value:2}});
    },
    get(){
      console.log(this.$route)
    }
  },
  data(){
    return{};
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
