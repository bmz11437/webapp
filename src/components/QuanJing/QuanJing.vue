<template>
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
</template>

<script>
import PhotoViewer from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
export default {
  props: {
    showQJ: {
      type: Boolean,
      default: () => false
    }
  },
  mounted() {
    this.initQuanJ();
  },
  methods: {
    initQuanJ() {
      let url = this.$store.state.resourceUrl + '/images/home.jpg'
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
      this.$emit('hideQuanJ')
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>