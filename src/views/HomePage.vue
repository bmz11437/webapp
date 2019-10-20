<template>
  <div class="home-page">
    <swiper id="swiperBox" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide" v-for="(item,i) in pages" :key="i">
        <div class="page">
          <div class="page-container">
            <div class="title">{{item.title}}</div>
            <div class="body">
              <Card class="card-item" v-for="(data,j) in item.images" :key="j">
                <div class="img-con" @click="handClick(data.router)">
                  <img :src="getFullUrl(data.src)" />
                </div>
              </Card>
            </div>
            <div class="foot"></div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="page-items">
      <RadioGroup v-model="vertical" vertical @on-change="pageChange">
        <Radio v-for="(item,i) in pages" :key="i" :label="i">
          <span></span>
        </Radio>
      </RadioGroup>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getConfig } from '../api/index'
export default {
  name: 'HelloWorld',
  data() {
    return {
      vertical: 0,
      pages: [
      ],
      swiperOption: {
        notNextTick: true,
        direction: 'vertical',
        grabCursor: false,
        setWrapperSize: true,
        autoHeight: true,
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight,
        resistanceRatio: 0,
        observeParents: true,
        on: {
          slideChange: () => {
            let swiper = this.$refs.mySwiper.swiper;
            this.vertical = swiper.activeIndex;
          }
        }
      }
    }
  },
  mounted() {
    getConfig('http://localhost:8088/configs/homePage.json').then(res => {
      if (res.status == 200) {
        this.pages = res.data.pages;
      }
    })
  },
  methods: {
    pageChange(index) {
      this.swiper.slideTo(parseInt(index), 1000, false)
    },
    getFullUrl(url) {
      return this.$store.state.resourceUrl + url;
    },
    handClick(name) {
      if (name) {
        this.$router.push({
          name:name
        });
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}

</script>
<style lang='scss' scoped>
.home-page {
  width: 100%;
  height: 100%;
  .swiper-slide {
    font-size: 24px;
    text-align: center;
    line-height: 100px;
  }
  .swiper-slide:nth-child(2n) {
    background: skyblue;
  }
  .swiper-slide:nth-child(2n-1) {
    background: #2b85e4;
  }
  .page-items {
    position: fixed;
    right: 1rem;
    top: 40%;
    z-index: 1;
  }
  .page {
    width: 100%;
    height: 100%;
    .page-container {
      width: 100%;
      height: 100%;
      padding: 0 15%;
      .title {
        font-size: 1rem;
        margin: 1.5rem 0 0.5rem 0;
        color: white;
      }
      .body {
        width: 100%;
        height: calc(100% - 5rem);
        padding: 1%;
        .card-item {
          width: 30.33%;
          display: inline-block;
          margin: 0% 3% 3% 0;
          padding: 0;
          height: 4.5rem;
          .img-con {
            width: 100%;
            height: 100%;

            img {
              height: 100%;
              width: 100%;
            }
          }
          .info {
            width: 100%;
            line-height: initial;
            font-size: 0.5rem;
            padding: 0.5rem 0;
          }
        }
      }
    }
  }
}
/deep/ .ivu-card-body {
  padding: 0;
  height: 100%;
  cursor: pointer;
}
/deep/ .ivu-card-bordered {
  border-color: black;
}
</style>
