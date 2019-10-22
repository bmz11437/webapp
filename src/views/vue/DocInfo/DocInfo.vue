<template>
  <div class="doc-info">
    <div class="map-con" :class="{'bottom-active':showImg,'left-active':!showInfo}">
      <BMap />
    </div>
    <div class="introduction" :class="{'active':showInfo}">
      <div class="main-info">
        <div class="main-image">
          <img :src="testUrl" />
        </div>
        <div class="infos">
          <div class="title">曾厝垵</div>
          <div class="address">
            <Icon type="md-pin" style="margin-right:.1rem;" />福建省厦门市思明区环岛南路110
          </div>
          <div class="operate-btns">
            <ButtonGroup style="width:100%">
              <Button icon="ios-heart-outline">收藏景点</Button>
              <Button icon="md-image" @click="showImages">查看相册</Button>
              <Button icon="logo-facebook">游玩推荐</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <div class="details">
        <Collapse v-model="value1">
          <Panel name="1">
            玩点
            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
          </Panel>
          <Panel name="2">
            游玩建议
            <p
              slot="content"
            >斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
          </Panel>
          <Panel name="3">
            注意事项
            <p
              slot="content"
            >乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
          </Panel>
        </Collapse>
      </div>
    </div>
    <div class="hide-info-btn" :class="{'active':showInfo}">
      <Button class="info-btn" @click="hideInfoPanel" :icon="getIconType2()"></Button>
    </div>
    <div class="img-container" :class="{'active':showImg}">
      <div class="hide-btn">
        <Button @click="hideImages" :icon="getIconType()"></Button>
      </div>
      <swiper :options="swiperOption" v-viewer="{movable: false}">
        <swiper-slide v-for="(src,index) in images" :key="index">
          <img class="img-item" :src="src" />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import BMap from '@/components/BMap'
import { getConfig } from '@/api/index'
export default {
  components: {
    BMap
  },
  data() {
    return {
      images: [],
      value1: ['1', '2', '3'],
      testUrl: 'http://localhost:8088/images/img1.jpg',
      showImg: false,
      showInfo: true,
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
  mounted() {
    getConfig('http://localhost:8088/configs/homePage.json').then(res => {
      if (res.status === 200) {
        let images = [];
        res.data.pages.forEach(page => {
          page.images.forEach(img => {
            let url = this.$store.state.resourceUrl + img.src;
            images.push(url)
          })
        });
        this.images = images;
      }
    })
  },
  methods: {
    getMapStyle() {
      return {
        width: this.showInfo ? 'calc(100% - 10rem)' : '100%',
        height: this.showImg ? 'calc(100% - 6rem)' : '100%'
      }
    },
    getIconType() {
      return this.showImg ? 'ios-arrow-down' : 'ios-arrow-up'
    },
    getIconType2() {
      return this.showInfo ? 'ios-arrow-forward' : 'ios-arrow-back'
    },
    showImages() {
      this.showImg = true;
    },
    hideImages() {
      this.showImg = !this.showImg;
    },
    hideInfoPanel() {
      this.showInfo = !this.showInfo;
    }
  }
}
</script>
<style scoped lang='scss'>
.doc-info {
  width: 100%;
  height: 100%;
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
    .main-info {
      width: 100%;
      background-color: #fafafa;
      margin-bottom: 0.5rem;
      .main-image {
        width: 100%;
        height: 3rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .infos {
        width: 100%;
        text-align: left;
        white-space: nowrap;
        .title {
          width: 100%;
          padding: 0.2rem;
          font-size: 14px;
          font-weight: bold;
        }
        .address {
          font-size: 12px;
          padding: 0.2rem;
        }
        .ivu-btn {
          border-radius: 0;
          width: 33.333%;
        }
      }
    }
    .details {
      width: 100%;
      text-align: left;
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
  top: -0.64rem;
}
</style>
