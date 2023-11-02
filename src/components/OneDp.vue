<template>
    <div style="position: relative;">
      <el-container>
        <el-main>
          <div id="container" style="position: relative;">
            <div style="position: absolute; top: 10px; right: 10px; display: flex; align-items: center; z-index: 1;">
              <el-switch v-model="value" active-color="#13ce66" inactive-color="red" style="margin-right: 10px;"></el-switch>
              <span style="color: grey; z-index: 1;">轨迹压缩</span>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </template>
  
<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import axios from "axios";

export default {
    name: "map-view",
    data() {
        return {
            map: null,
            value: false,
            polylinedp: null, 
        };
    },
    mounted() {
        this.initAMap();
    },
    beforeUnmount() {
        this.map && this.map.destroy();
    },
    watch: {
        value(newValue) {
            if (this.polylinedp) {
                if (newValue) {
                    this.map.add(this.polylinedp);
                } else {
                    this.map.remove(this.polylinedp);
                }
            }
        },
    },
    methods: {
        initAMap() {
            AMapLoader.load({
                key: "4fb78ce9b563f39d2e668e2b8156bf40",
                version: "2.0",
                plugins: [],
            })
                .then((AMap) => {
                    this.map = new AMap.Map("container", {
                        viewMode: "3D",
                        zoom: 11,
                        center: [116.397428, 39.90923],
                    });

                    let paths = [];
                    axios.get('../../1.json').then((res) => {
                        let path = res.data;
                        path.coordinates.forEach((item) => {
                            paths.push([item[0], item[1]]);
                        });
                        const polyline = new AMap.Polyline({
                            path: paths,
                            isOutline: true,
                            outlineColor: "#ffeeff",
                            borderWeight: 1,
                            strokeColor: "#3366FF",
                            strokeOpacity: 1,
                            strokeWeight: 2,
                            strokeStyle: "solid",
                            strokeDasharray: [10, 5],
                            lineJoin: "round",
                            lineCap: "round",
                            zIndex: 50,
                        });
                        this.map.add(polyline);
                    });

                    let pathsdp = [];
                    axios.get('../../1.json').then((res) => {
                        let path = res.data;
                        path.coordinates.forEach((item) => {
                            pathsdp.push([item[0], item[1]]);
                        });
                        this.polylinedp = new AMap.Polyline({
                            path: pathsdp,
                            isOutline: true,
                            outlineColor: "#ffeeff",
                            borderWeight: 1,
                            strokeColor: "red",
                            strokeOpacity: 1,
                            strokeWeight: 3,
                            strokeStyle: "solid",
                            strokeDasharray: [10, 5],
                            lineJoin: "round",
                            lineCap: "round",
                            zIndex: 50,
                        });

                    });

                    // this.map.setFitView();
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
};
</script>
  
<style scoped>
#container {
    width: 100%;
    height: 800px;
}
</style>
  