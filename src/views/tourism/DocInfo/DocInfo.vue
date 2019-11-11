<template>
  <Layout>
    <template slot="main">
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
          <div class="doc-info">
            <div class="map-con" :class="{'bottom-active':showImg,'left-active':!hideInfo}">
              <BMap />
            </div>
            <div class="introduction" :class="{'active':hideInfo}">
              <MainInfo :info="mainInfo" @showQuanJinig="showQuanJinig" @showImages="showImages" />
              <div class="details">
                <AttractionsInfo :resourceUrl="resourceUrl" />
              </div>
              <Spin fix v-show="loading"></Spin>
            </div>
            <div class="hide-info-btn" :class="{'active':hideInfo}">
              <Button class="info-btn" @click="hideInfoPanel" :icon="getIconType2()"></Button>
            </div>
            <div class="img-container" :class="{'active':showImg}">
              <div class="hide-btn">
                <Button @click="hideImages" :icon="getIconType()"></Button>
              </div>
              <swiper style="top: -0.64rem;" :options="swiperOption" v-viewer="{movable: false}">
                <swiper-slide v-for="(src,index) in images" :key="index">
                  <img class="img-item" :src="src" />
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
          </div>
        </div>
        <QuanJing :showQJ="showQJ" @hideQuanJ="hideQuanJing" />
      </div>
    </template>
  </Layout>
</template>
<script>
import BMap from '@/components/BMap'
import { getConfig, getTrip } from '@/api/index'
import MainInfo from '@/components/MainInfo/MainInfo'
import AttractionsInfo from '@/components/AttractionsInfo/AttractionsInfo'
import QuanJing from '@/components/QuanJing/QuanJing'
import Layout from '@/components/Layout/index'

export default {
  components: {
    BMap,
    MainInfo,
    AttractionsInfo,
    Layout,
    QuanJing
  },
  data() {
    return {
      leftMenu: [],
      showQJ: false,
      hideInfo: true,
      theme1: 'light',
      theme2: 'dark',
      resourceUrl: '',
      mainInfo: {
        name: '曾厝垵',
        address: '福建省厦门市思明区环岛南路110',
        imgUrl: 'http://122.51.140.204:8080/resources/images/img1.jpg'
      },
      images: [],
      value1: ['1', '2', '3', '4', '5', '6'],
      showImg: false,
      loading: false,
      wiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption: {
        mousewheel: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    this.resourceUrl = this.$store.state.resourceUrl;
    getTrip(this.$store.state.resourceUrl + '/configs/trip.json').then(res => {
      if (res.status === 200) {
        this.leftMenu = res.data;
      }
    })
    getConfig(this.resourceUrl + '/configs/homePage.json').then(res => {
      if (res.status === 200) {
        let images = [];
        res.data.pages.forEach(page => {
          page.images.forEach(img => {
            let url = this.resourceUrl + img.src;
            images.push(url)
          })
        });
        this.images = images;
      }
    })
  },
  methods: {
    handSelectChange() {
      this.hideInfo = false;
    },
    getMapStyle() {
      return {
        width: this.hideInfo ? 'calc(100% - 10rem)' : '100%',
        height: this.showImg ? 'calc(100% - 6rem)' : '100%'
      }
    },
    getIconType() {
      return this.showImg ? 'ios-arrow-down' : 'ios-arrow-up'
    },
    getIconType2() {
      return this.hideInfo ? 'ios-arrow-forward' : 'ios-arrow-back'
    },
    showImages() {
      this.showImg = true;
    },

    showLoading() {
      this.loading = true;
      let timeout = setInterval(() => {
        this.loading = false;
        window.clearTimeout(timeout);
      }, 800)
    },
    hideImages() {
      this.showImg = !this.showImg;
    },
    hideInfoPanel() {
      this.showLoading();
      this.hideInfo = !this.hideInfo;
    },
    showQuanJinig() {
      this.showQJ = true;
    },
    hideQuanJing() {
      this.showQJ = false;
    }
  }
}
</script>

<style scoped lang='scss'>
.main-con {
  width: 100%;
  height: 100%;
  .left-menu {
    width: 5rem;
    height: 100%;
    display: inline-block;
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
  .map-con {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    will-change: transform;
    transition: all 500ms;
  }
  .map-con.bottom-active {
    height: calc(100% - 6rem);
  }
  .map-con.left-active {
    width: calc(100% - 8rem);
  }
  .img-container {
    width: 100%;
    height: 6rem;
    position: absolute;
    bottom: -6rem;
    background: rgba(0, 0, 0, 0.8);
    will-change: transform;
    transition: all 500ms;
    .hide-btn {
      position: relative;
      top: -0.64rem;
    }
  }
  .img-container.active {
    bottom: 0rem;
  }
  .introduction {
    width: 8rem;
    height: 100%;
    background: gray;
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
    transition: all 500ms;
    overflow: hidden;
    .details {
      width: 100%;
      text-align: left;
      background: white;
      height: calc(100% - 6rem);
      position: absolute;
      bottom: 0;
    }
  }
  .introduction.active {
    width: 0;
  }
  .hide-info-btn {
    width: auto;
    height: 100%;
    line-height: 100%;
    position: absolute;
    left: 8rem;
    top: 0;
    will-change: transform;
    transition: all 500ms;
    .info-btn {
      position: relative;
      top: 50%;
      padding: 15px 5px;
    }
  }
  .hide-info-btn.active {
    left: 0rem;
  }
}
.swiper-slide {
  width: auto;
  height: 100%;
  img {
    height: 100%;
  }
}

/deep/ .swiper-container {
  width: 100%;
  height: 100%;
}
/deep/ .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
  margin-right: 0;
  border-radius: 0;
}
/deep/ .ivu-tabs-bar {
  height: 0.64rem;
  margin-bottom: 0;
}
/deep/ .ivu-tabs .ivu-tabs-content-animated {
  height: calc(100% - 0.64rem);
}
/deep/ .ivu-tabs .ivu-tabs-tabpane {
  height: 100%;
  overflow-y: auto;
  position: relative;
}
/deep/ .ivu-tabs {
  height: 100%;
}
/deep/ .ivu-tabs-bar .ivu-tabs-tab {
  width: 33.3%;
  text-align: center;
}
/deep/ .ivu-tabs-nav {
  width: 100%;
}
</style>
