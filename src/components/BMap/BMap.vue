<template>
  <baidu-map class="bm-view" center="北京" :scroll-wheel-zoom="true">
    <!-- <bm-navigation style="top:40px" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation> -->
    <bm-geolocation
      anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
      :offset="{height:160}"
      :showAddressBar="true"
      :autoLocation="true"
    ></bm-geolocation>
    <bm-city-list :offset="{width:200,height:10}" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-city-list>
    <bm-map-type
      :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
      :offset="{width:100,height:10}"
      anchor="BMAP_ANCHOR_TOP_RIGHT"
    ></bm-map-type>
    <!-- <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map> -->
    <bm-panorama></bm-panorama>
  </baidu-map>
</template>
<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {

  }
}
</script>
 
<style lang='scss' scoped>
.bm-view {
  width: 100%;
  height: 100%;
  .locate-btn {
    bottom: 100px !important;
  }
}
</style>
