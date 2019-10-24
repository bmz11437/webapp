<template>
  <baidu-map class="bm-view" center="厦门" :scroll-wheel-zoom="true" @ready="handler">
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
      keyword: '',
      map: null,
      mapClickEvent: null,
      BMap: null
    }
  },
  mounted() {

  },
  methods: {
    handler({ BMap, map }) {
      this.map = map; this.BMap = BMap;
      var p1 = new BMap.Point(118.10787, 24.47449);
      var p2 = new BMap.Point(118.131711, 24.430806);
      var p3 = new BMap.Point(118.096579, 24.441466);
      var p4 = new BMap.Point(118.11282, 24.434491);
      var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true ,enableDragging : true} });
      driving.search(p1, p2, { waypoints: [p3, p4] });//waypoints表示途经点
      this.mapClickEvent = map.addEventListener("click", this.mapClick);
    },
    mapClick(e) {
      console.log(e.point.lng + ", " + e.point.lat);

    }

  },
  beforeDestroy() {
    debugger
    if (this.mapClickEvent) {
      this.mapClickEvent.remove();
    }
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
