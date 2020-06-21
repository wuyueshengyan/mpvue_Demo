<template>
  <div>
    <!-- <block  v-for="(item, index) in data" :key="index">
      <banner v-if="item.moduleType == 'banner'"  :data="item.data" :styleData="item.style"></banner>    
      <Picture v-if="item.moduleType == 'picture'"  :data="item.data" :styleData="item.style"></Picture>    
    </block> -->
    <swiper
      autoplay="true"
      circular="true"
      class="carousel"
      indicator-color="#f4f4f4"
      :indicator-active-color="activeColor"
      @change="swiperChange"
    >
      <template v-for="(item, i) in swiperData">
        <swiper-item>
          <img
            @change="imageChange"
            :src="item.img"
            class="indexItem"
            mode="aspectFill"
          />
          <p class="swiper-itemText">{{item.text}}</p>
        </swiper-item>
      </template>
    </swiper>
    <!-- 自定义指示点dot -->
    <div class="customDots">
      <template v-for="(item, index) in swiperData">
        <div class="customDots-item" :class="{ active: swiperCurrent == index }"></div>
      </template>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      data: [],
      swiperData: [
        {
          img: "https://cdn.pixabay.com/photo/2020/03/18/05/29/swimming-pool-4942724__340.jpg",
          text: '嘟嘟第一张'
        },
         {
          img: "https://cdn.pixabay.com/photo/2020/04/02/11/20/fungus-4994622__340.jpg",
          text: '啦啦第二张啦啦第二张啦啦第二张啦啦第二张啦啦第二张'
        },
         {
          img: "https://cdn.pixabay.com/photo/2017/12/29/10/23/nature-3047194__340.jpg",
          text: '嘿嘿第三张'
        }
      ],
      swiperCurrent: 0,
    };
  },

  components: {
    card,
  },

  methods: {
    getimg() {
      this.$request(
        "http://strategydata.cn:8004/mock/234/siemens/test",
        "get"
      ).then((data) => {
        this.data = data.data;
        // console.log(data)
        console.log(this.data);
      });
    },
         /**
     * 轮播自动滑动时，获取当前的轮播id
     */
    swiperChange(e) {
      this.swiperCurrent = e.mp.detail.current
    },

    /**
     * 图片手动滑动时，获取当前的轮播id
     */
    imageChange(e) {
      this.swiperCurrent = e.mp.detail.current
    }
  },

  created() {
    this.getimg();
  },
};
</script>

<style scoped>
swiper {
  width: 100%;
  height: 388rpx;
}

swiper-item {
  border-radius: 14rpx;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 388rpx;
}
.indexItem {
  width: 100%;
  height: 388rpx;
}

.swiper-itemText {
  position: absolute;
  left: 34rpx;
  bottom: 24rpx;
  font-size: 32rpx;
  width: 80%;
  color: red;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.customDots {
  margin-top: 20rpx;
  display: flex;
  justify-content: center;
}
/* 不是当前状态的点 */
.customDots .customDots-item {
  margin: 0 8rpx;
  width: 14rpx;
  height: 14rpx;
  background-color: transparent;
  border-radius: 8rpx;
  background:red;
  transition: all 0.6s ease-in-out;
}
/* 当前显示点 */
.customDots .customDots-item.active {
  width: 30rpx;
  background: red;
}
</style>
