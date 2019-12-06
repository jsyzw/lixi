<template>
  <div class="home">
    <!-- <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <div class="pic" :style="{background:item.color}"></div>
          <div class="num">{{item.num}}</div>
      </swiper-slide>
    </swiper>-->

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
          <div class="pic" :style="{background:item.color}"></div>
          <div class="num">{{item.num}}</div>
        </div>
      </div>
    </div>

    <div class="list">
      <dl v-for="(item,index) in list" :key="index">
        <dt :style="{background:item.color}"></dt>
        <dd>{{item.title}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
// import { swiper,swiperSlide } from 'vue-awesome-swiper'
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  data() {
    return {
      swiperList: [
        {
          id: 0,
          color: "skyblue",
          num: 1
        },
        {
          id: 1,
          color: "skyblue",
          num: 2
        },
        {
          id: 2,
          color: "skyblue",
          num: 3
        }
      ],
      list: []
      // swiperOption:{
      //   autoplay:true
      // }
    };
  },

  async mounted() {
    let res = await axios.get("/api/swiperList");
    this.swiperList = res.data.list;

    this.$nextTick(() => {
      new Swiper(".swiper-container");
    });
    // let list = await axios.get("/api/list")
    // this.list = list.data.list

    // this.$nextTick -----------------------
  },
  components: {
    // swiperSlide,
    // swiper
  }
};
</script>

<style lang="scss">
.swiper-container,
.pic,
.swiper-slide,
.num {
  width: 100%;
  height: 200px;
}

.swiper-slide {
  position: relative;
  .num {
    position: absolute;
    transform: translate(50%, -55%);
    font-size: 24px;
    color: #fff;
  }
}

.list {
  height: 200px;
  border-bottom: 1px solid #999;
  display: flex;
  flex-wrap: wrap;
  dl {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    dt {
      width: 30px;
      height: 30px;
      border-radius: 5px;
    }
    dd {
      font-size: 12px;
      margin: 5px 0;
    }
  }
}
</style>
