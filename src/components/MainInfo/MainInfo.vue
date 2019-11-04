<template>
  <div class="main-info">
    <div class="main-image">
      <img :src="info.imgUrl" />
      <Button
        class="quanjing-btn"
        type="primary"
        shape="circle"
        icon="ios-search"
        @click="showQuanJinig"
      ></Button>
    </div>
    <div class="infos">
      <div class="title">{{info.name}}</div>
      <div class="address">
        <Icon type="md-pin" style="margin-right:.1rem;" />
        {{info.address}}
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
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {

    }
  },
  methods: {
    showQuanJinig() {
      this.$emit('showQuanJinig');
    },
    showImages() {
      this.$emit('showImages');
    }
  }

}
</script>
<style lang="scss" scoped>
.main-info {
  width: 100%;
  background-color: #fafafa;
  margin-bottom: 0.5rem;
  position: absolute;
  top: 0;
  height: 5.5rem;
  .main-image {
    width: 100%;
    height: 3rem;
    img {
      width: 100%;
      height: 100%;
    }
    .quanjing-btn {
      position: absolute;
      right: 0.5rem;
      top: 2.7rem;
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
    .operate-btns {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 0;
      .ivu-btn {
        border-radius: 0;
        width: 33.333%;
      }
    }
  }
}
</style>