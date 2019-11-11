<template>
  <Layout>
    <template slot="main">
      <div class="main-con">
        <div class="introduction" :class="{'active':hideInfo}">
          <MainInfo :info="mainInfo" @showQuanJinig="showQuanJinig" @showImages="showImages" />
          <div class="details">
            <AttractionsInfo :resourceUrl="resourceUrl" />
          </div>
          <Spin fix v-show="loading"></Spin>
        </div>
        <div class="map-con" :class="{'bottom-active':showImg,'left-active':!hideInfo}">
          <BMap />
        </div>
        <div class="map-chart" v-show="showMapChart" ref="mapChart"></div>
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
    </template>
  </Layout>
</template>

<script>
import BMap from '@/components/BMap'
import Layout from '@/components/Layout/index'
import { getConfig } from '@/api/index'
import MainInfo from '@/components/MainInfo/MainInfo'
import AttractionsInfo from '@/components/AttractionsInfo/AttractionsInfo'
import '../../../../node_modules/echarts/map/js/china.js'

export default {
  components: {
    Layout,
    BMap,
    MainInfo,
    AttractionsInfo
  },
  props: {
    showMapChart: {
      type: Boolean,
      default: () => true
    },
    hideInfo: {
      type: Boolean,
      default: () => false
    }
  },

  data() {
    return {
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
    this.initMapChart();
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
      this.$emit('showQuanJing')
    },
    initMapChart() {
      let chartDom = this.$refs['mapChart'];

      let myChart = this.$echarts.init(chartDom);
      //数据纯属虚构
      let data = [
        {
          name: '江苏省',
          value: 5.3
        },
        {
          name: '北京市',
          value: 3.8
        },
        {
          name: '上海',
          value: 4.6
        },
        {
          name: '重庆',
          value: 3.6
        },
        {
          name: '河北',
          value: 3.4
        },
        {
          name: '河南',
          value: 3.2
        },
        {
          name: '云南',
          value: 1.6
        },
        {
          name: '辽宁',
          value: 4.3
        },
        {
          name: '黑龙江',
          value: 4.1
        },
        {
          name: '湖南',
          value: 2.4
        },
        {
          name: '安徽',
          value: 3.3
        },
        {
          name: '山东',
          value: 3.0
        },
        {
          name: '新疆',
          value: 1
        },
        {
          name: '江苏',
          value: 3.9
        },
        {
          name: '浙江',
          value: 3.5
        },
        {
          name: '江西',
          value: 2.0
        },
        {
          name: '湖北',
          value: 2.1
        },
        {
          name: '广西',
          value: 3.0
        },
        {
          name: '甘肃',
          value: 1.2
        },
        {
          name: '山西',
          value: 3.2
        },
        {
          name: '内蒙古',
          value: 3.5
        },
        {
          name: '陕西',
          value: 2.5
        },
        {
          name: '吉林',
          value: 4.5
        },
        {
          name: '福建',
          value: 2.8
        },
        {
          name: '贵州',
          value: 1.8
        },
        {
          name: '广东',
          value: 3.7
        },
        {
          name: '青海',
          value: 0.6
        },
        {
          name: '西藏',
          value: 0.4
        },
        {
          name: '四川',
          value: 3.3
        },
        {
          name: '宁夏',
          value: 0.8
        },
        {
          name: '海南',
          value: 1.9
        },
        {
          name: '台湾',
          value: 0.1
        },
        {
          name: '香港',
          value: 0.1
        },
        {
          name: '澳门',
          value: 0.1
        }
      ];

      let yData = [];
      let barData = [];

      for (let i = 0; i < 10; i++) {
        barData.push(data[i]);
        yData.push(i + data[i].name);
      }

      let option = {
        title: [{
          show: true,
          text: '排名情况',
          textStyle: {
            color: '#2D3E53',
            fontSize: 18
          },
          right: 180,
          top: 100
        }],
        tooltip: {
          show: true,
          formatter: function (params) {
            return params.name + '：' + params.data['value'] + '%'
          },
        },
        visualMap: {
          type: 'continuous',
          orient: 'horizontal',
          itemWidth: 10,
          itemHeight: 80,
          text: ['高', '低'],
          showLabel: true,
          seriesIndex: [0],
          min: 0,
          max: 2,
          inRange: {
            color: ['#6FCF6A', '#FFFD64', '#FF5000']
          },
          textStyle: {
            color: '#7B93A7'
          },
          bottom: 30,
          left: 'left',
        },
        grid: {
          right: 10,
          top: 135,
          bottom: 100,
          width: '20%'
        },
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          inverse: true,
          nameGap: 16,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: '#ddd'
            }
          },
          axisLabel: {
            interval: 0,
            margin: 85,
            textStyle: {
              color: '#455A74',
              align: 'left',
              fontSize: 14
            },
            rich: {
              a: {
                color: '#fff',
                backgroundColor: '#FAAA39',
                width: 20,
                height: 20,
                align: 'center',
                borderRadius: 2
              },
              b: {
                color: '#fff',
                backgroundColor: '#4197FD',
                width: 20,
                height: 20,
                align: 'center',
                borderRadius: 2
              }
            },
            formatter: function (params) {
              if (parseInt(params.slice(0, 1)) < 3) {
                return [
                  '{a|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                ].join('\n')
              } else {
                return [
                  '{b|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                ].join('\n')
              }
            }
          },
          data: yData
        },
        geo: {
          // roam: true,
          map: 'china',
          left: 'left',
          right: '300',
          // layoutSize: '80%',
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            emphasis: {
              areaColor: '#fff464'
            }
          }
        },
        series: [{
          name: 'mapSer',
          type: 'map',
          roam: false,
          geoIndex: 0,
          label: {
            show: false,
          },
          data: data
        }, {
          name: 'barSer',
          type: 'bar',
          roam: false,
          visualMap: false,
          zlevel: 2,
          barMaxWidth: 8,
          barGap: 0,
          itemStyle: {
            normal: {
              color: function (params) {
                // build a color map as your need.
                let colorList = [{
                  colorStops: [{
                    offset: 0,
                    color: '#FFD119' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#FFAC4C' // 100% 处的颜色
                  }]
                },
                {
                  colorStops: [{
                    offset: 0,
                    color: '#00C0FA' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#2F95FA' // 100% 处的颜色
                  }]
                }
                ];
                if (params.dataIndex < 3) {
                  return colorList[0]
                } else {
                  return colorList[1]
                }
              },
              barBorderRadius: 15
            }
          },
          data: barData
        }]
      };

      myChart.setOption(option);
      myChart.on('click', (param) => {
        this.showMapChart = false;
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.main-con {
  position: relative;
  .map-con {
    width: 100%;
    height: 100%;
  }
  .map-chart {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: white;
  }
  .img-container {
    height: 6rem;
    position: absolute;
    bottom: -6rem;
    background: rgba(0, 0, 0, 0.8);
    will-change: transform;
    transition: all 500ms;
    .hide-btn {
      position: relative;
      transform: translateY(100%);
      // top: -0.64rem;
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
    left: 0;
    will-change: transform;
    transition: all 500ms;
    overflow: hidden;
    .details {
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