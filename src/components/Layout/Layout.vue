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
    <div class="main-con">
      <div class="left-menu">
        <Menu :theme="theme2" style="width:100%;height:100%" @on-select="handSelectChange">
          <Submenu :name="item.id" v-for="(item,i) in leftMenu" :key="i">
            <template slot="title">
              <Icon :type="item.icon" />
              {{item.name}}
            </template>
            <MenuItem :name="menu.id" v-for="(menu,j) in item.children" :key="j">{{menu.name}}</MenuItem>
          </Submenu>
        </Menu>
        <Timeline v-if="false">
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
        <router-view :hideInfo="hideInfo" @showQuanJing="showQuanJing" />
      </div>
      <div class="quanjing-con" :style="{'z-index':showQJ?'999':'-1'}">
        <div class="img-body" ref="QuanJing"></div>
        <Button
          ghost
          class="hide-btn"
          shape="circle"
          icon="ios-close"
          :style="{'z-index':showQJ?'1000':'-1'}"
          @click="hideQuanJing"
        ></Button>
      </div>
    </div>
  </div>
</template>
<script>
import { getTrip } from '@/api/index'
import PhotoViewer from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

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
      default: () => 'dark'
    },
    routerName: {
      type: String,
      default: () => 'DocInfo'
    }
  },

  data() {
    return {
      hideInfo: true,
      showQJ: false,
      leftMenu: []
    }
  },

  mounted() {
    getTrip('http://localhost:8088/configs/trip.json').then(res => {
      if (res.status === 200) {
        this.leftMenu = res.data;
      }
    })
  },
  methods: {
    handSelectChange(value) {
      console.log(value);
      this.hideInfo = false;
    },
    showQuanJing() {
      this.showQJ = true;
      let url = 'http://localhost:8088/images/home.jpg'
      PhotoViewer({
        container: this.$refs.QuanJing,
        panorama: url,
        navbar: true,
        time_anim: false,
        size: {
          width: '100%',
          height: '100%'
        }
      })
    },
    hideQuanJing() {
      this.showQJ = false;
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
    .quanjing-con {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      .img-body {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
      }
      .hide-btn {
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        width: 1rem;
        height: 1rem;
        font-size: 0.5rem;
      }
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
  padding: 0.3rem;
}
</style>
