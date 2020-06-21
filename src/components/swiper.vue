<template>
    <swiper :style="{height:swiperHeight,width:swiperWidth ,}" class="swiper" :indicator-active-color="indicatorActiveColor"  circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in data" :key="index">
            <swiper-item>
                <image :src="item.picUrl" mode="aspectFill" @tap="goTourl(item)" :style="{borderRadius:swiperBorderRadius}"/>
            </swiper-item>
        </block>
    </swiper>
</template>

<script>
/**
 * 轮播图数据格式
 * 
 * 
 */
export default {
  props: {
    data: {
      type: Array
    },
    styleData:{
        type:Object
    }
  },
  onLoad() {

  },
  data() {
    return {
      swiperWidth:this.styleData.width || '750rpx',
      swiperHeight:this.styleData.height || '300rpx',
      // 是否显示面板指示点
      indicatorDots: this.styleData.indicatorDots || false,
      autoplay: this.styleData.autoplay || true,
      interval: this.styleData.interval,
      duration: 500,
      indicatorActiveColor: this.styleData.indicatorActiveColor || "#fff",
      // 图片圆角
      swiperBorderRadius:this.styleData.swiperBorderRadius || '0',
    };
  },
  methods:{
    goTourl(item){
      console.log(item)
      if(item.go){

      }else{

      }
    }
  }
};
</script>

<style scoped>
.swiper{
  overflow: hidden;
}
image {
  height: 100%;
  width: 100%;
}
</style>
