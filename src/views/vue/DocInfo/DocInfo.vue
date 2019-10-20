<template>
  <div class="doc-info">
    <BMap />
    <div class="introduction"></div>
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
      showImg: true,
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
      if (res.status == 200) {
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
    getIconType() {
      return this.showImg ? 'ios-arrow-down' : 'ios-arrow-up'
    },
    hideImages() {
      this.showImg = !this.showImg;
    }
  }
}
</script>
<style scoped lang='scss'>
.doc-info {
  width: 100%;
  height: 100%;
  .img-container {
    width: 100%;
    height: 6rem;
    position: absolute;
    bottom: 0rem;
    background: gray;
    will-change: transform;
    transition: all 500ms;
    transform: translateY(100%);
    .hide-btn {
      position: relative;
      top: -0.64rem;
    }
  }
  .img-container.active {
    bottom: 6rem;
  }
  .introduction {
    width: 20%;
    height: 100%;
    background: gray;
    position: absolute;
    top: 0;
    left: 0;
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