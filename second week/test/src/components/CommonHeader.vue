<template>
    <header>
        <div class="l-content">
            <el-button type="primary" icon="el-icon-s-unfold" size="large" @click="collapseMenu"></el-button>
        </div>

        <div class="r-content">
            <el-dropdown trigger="click">
        <span class="el-dropdown-link">
        <img :src="userImg" class="user">
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item >个人中心</el-dropdown-item>
        <el-dropdown-item >退出</el-dropdown-item>
      </el-dropdown-menu>
        </el-dropdown>
        </div>
    </header>
</template>

<script>
export default {
    data () {
        return {
            userImg:require('../assets/user.jpg')
        }
    },
    methods: {
        collapseMenu(){
            this.$store.commit('collapseMenu')
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-between;
    }
    .user{
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
</style>