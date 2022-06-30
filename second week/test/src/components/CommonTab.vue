<template>
  <div class="tabs">
    <el-tag
    size="small"
  :key="tag.name"
  v-for="tag in tags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag.name}}
</el-tag>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            tags:state => state.tab.tabList
        })
    },
     data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
    }
}
</script>

<style lang="scss" scoped>
    .tabs{
        padding: 15px;
        .el-tag{
            margin-right: 10px;
        }
    }
</style>