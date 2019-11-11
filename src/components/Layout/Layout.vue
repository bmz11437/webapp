<template>
  <div class="lay-out">
    <div class="header">
      <div class="title">{{title}}</div>
      <div class="menus">
        <Menu mode="horizontal"  active-name="1">
          <MenuItem name="1">
            <Icon type="ios-paper" />内容管理
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-people" />第一天
          </MenuItem>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
          <MenuItem name="4">
            <Icon type="ios-construct" />综合设置
          </MenuItem>
        </Menu>
      </div>
    </div>
    <slot name="main">
      
    </slot>
  </div>
</template>
<script>



export default {
  name: 'layout',
  props: {
    title: {
      type: String,
      default: () => 'Vue技术整理'
    },

    routerName: {
      type: String,
      default: () => 'DocInfo'
    }
  },

  data() {
    return {

      showQJ: false,

    }
  }
}
</script>
<style lang="scss" scoped>
.lay-out {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #dcdee2;
    line-height: 1rem;

    .title {
      width: 5rem;
      float: left;
      font-size: 0.5rem;
      font-weight: 600;
    }
    .menus {
      width: calc(100% - 5rem);
      display: inline-block;
      text-align: right;
      padding-right: 1rem;
    }
  }
  .main-con {
    width: 100%;
    height: calc(100% - 1rem);
    position: absolute;
    top: 1rem;
    left: 0;
   
  }
}
/deep/ .ivu-menu-horizontal {
  height: 1rem;
  line-height: 1rem;
  text-align: left;
  float: right;
}
/deep/ .ivu-timeline {
  width: 100%;
  height: 100%;
  padding: 0.3rem;
}
</style>
