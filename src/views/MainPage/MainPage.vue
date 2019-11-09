<template>
  <div class="main-page">
    <div class="search-con">
      <swiper :options="swiperOption">
        <swiper-slide class="image-item" v-for="(item,i) in images" :key="i">
          <img :src="baseUrl+item.src" />
        </swiper-slide>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
      <div class="search-body">
        <Input clearable placeholder="请输入感兴趣的地点..." />
        <Button type="info" style="margin-left:.2rem;">搜索攻略</Button>
      </div>
    </div>

    <div class="hot-lines">
      <div class="title">热门攻略</div>
      <div class="lines-con">
        <div class="line-item" v-for="(item,i) in lines" :key="i" @click="showLineInfo">
          <div class="line-img">
            <img :src="baseUrl+'/images/vue.jpg'" />
          </div>
          <div class="line-info">
            <div class="user-img">
              <img :src="baseUrl+'/images/vue.jpg'" />
            </div>
            <div class="user-name">天堂的来客</div>
            <div class="line-decribe">
              <a href="#">穷游巴尔干（贝尔格莱德、乌日策、萨拉热窝、莫斯塔尔、杜布罗夫尼克、科托尔）的一点省钱心得（全程公共交通 纯干货）火速完贴</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hot-lines" style="background:#f5f5f5;">
      <div class="title">热门景点</div>
      <div class="lines-con">
        <div class="line-item" v-for="(item,i) in lines" :key="i" @click="showLineInfo">
          <div class="line-img" >
            <img :src="baseUrl+'/images/vue.jpg'" />
          </div>
          <div class="line-info">
            <div class="user-img">
              <img :src="baseUrl+'/images/vue.jpg'" />
            </div>
            <div class="user-name">天堂的来客</div>
            <div class="line-decribe">
              <a href="#">穷游巴尔干（贝尔格莱德、乌日策、萨拉热窝、莫斯塔尔、杜布罗夫尼克、科托尔）的一点省钱心得（全程公共交通 纯干货）火速完贴</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lines: [1, 1, 1, 1, 1, 1, 1, 1],
      baseUrl: '',
      "images": [
        {
          "src": "/images/vue.jpg"
        },
        {
          "src": "/images/nginx.jpg"
        },
        {
          "src": "/images/node.jpg"
        },
        {
          "src": "/images/jenkins.jpg"
        },
        {
          "src": "/images/http.jpg"
        },
        {
          "src": "/images/yun.jpg"
        }
      ],
      swiperOption: {

        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted() {
    this.baseUrl = this.$store.state.resourceUrl
  },
  methods: {
    showLineInfo() {
      this.$router.replace('vue')
    }
  }

}
</script>
<style lang="scss" scoped>
.main-page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .search-con {
    position: relative;

    width: 100%;
    height: 60%;
    .image-item {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .search-body {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 35%;
      left: 50%;
      background: rgba(0, 0, 0, 0.75);
      padding: 0.4rem 0.2rem;
      z-index: 1;
      border-radius: 0.2rem;
    }
  }
  .hot-lines {
    width: 100%;
    height: 70%;
    padding: 1% 15%;
    background: linear-gradient(180deg, #6dd27c, #1bcdae);
    .title {
      font-size: 1rem;
      text-align: center;
      line-height: 1.5rem;
    }
    .lines-con {
      height: calc(100% - 1.5rem);
      text-align: left;
      .line-item {
        width: calc(25% - 0.5rem);
        margin: 0.2rem;
        display: inline-block;
        height: calc(50% - 0.5rem);
        background: white;
        border-radius: 0.2rem;
        overflow: hidden;
        cursor: pointer;
        .line-img {
          overflow: hidden;
          height: 60%;

          img {
            width: 100%;
            height: 100%;
            transition: all 1s;
          }
          img:hover {
            transform: scale(1.2);
          }
        }
        .line-info {
          width: 100%;
          height: 40%;
          position: relative;
          padding: 0.2rem;
          padding-top: 0;
          .user-img {
            width: 1.3rem;
            height: 1.3rem;
            border-radius: 50%;
            background: white;
            transform: translateY(-50%);
            left: 0.1rem;
            padding: 0.08rem;
            overflow: hidden;
            position: absolute;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .user-name {
            line-height: 0.6rem;
            font-size: 0.35rem;
            padding-left: 1.6rem;
          }
          .line-decribe {
            height: calc(100% - 0.6rem);
            font-size: 0.35rem;
            font-weight: bold;
            padding-top: 0.1rem;
            overflow: hidden;
            a {
              color: black;
            }
            a:hover {
              color: #1bcdae;
            }
          }
        }
      }
    }
  }
}
/deep/ .swiper-container {
  height: 100%;
}

/deep/ .ivu-input-wrapper {
  width: 80%;
}
</style>