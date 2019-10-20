<template>
  <div class="lay-out">
    <div class="header">
      <div class="title">{{title}}</div>
      <div class="menus">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
          <MenuItem name="1">
            <Icon type="ios-paper" />内容管理
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-people" />用户管理
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
    <div class="main-con">
      <div class="left-menu">
        <Menu :theme="theme2" style="width:100%;height:100%" v-if="false">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper" />内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
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
        </Menu>
        <Timeline>
          <TimelineItem>
            <p class="time">Day1</p>
            <p class="content">曾厝垵</p>
            <p class="content">白帝城沙滩</p>
          </TimelineItem>
          <TimelineItem>
            <p class="time">1984年</p>
            <p class="content">发布 Macintosh</p>
          </TimelineItem>
          <TimelineItem>
            <p class="time">2007年</p>
            <p class="content">发布 iPhone</p>
          </TimelineItem>
          <TimelineItem>
            <p class="time">2010年</p>
            <p class="content">发布 iPad</p>
          </TimelineItem>
          <TimelineItem>
            <p class="time">2011年10月5日</p>
            <p class="content">史蒂夫·乔布斯去世</p>
          </TimelineItem>
        </Timeline>
      </div>
      <div class="right-con">
        <router-view />
      </div>
    </div>
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
    theme1: {
      type: String,
      default: () => 'light'
    },
    theme2: {
      type: String,
      default: () => 'light'
    },
    routerName: {
      type: String,
      default: () => 'DocInfo'
    }
  },

  data() {
    return {

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
    .left-menu {
      width: 5rem;
      height: 100%;
      display: inline-block;
      // border-right: 1px solid #dcdee2;
      top: 0rem;
      position: absolute;
      left: 0rem;
      text-align: left;
    }
    .right-con {
      width: calc(100% - 5rem);
      height: 100%;
      display: inline-block;
      position: absolute;
      right: 0;
      top: 0rem;
    }
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
  padding: .3rem;
}
</style>
