<template>
    <view class="picture-box" :style="{height:pictureHeight,width:pictureWidth,borderRadius:swiperBorderRadius}">
        <image :src="picUrl"  @tap="goTourl" :style="{height:pictureHeight,width:pictureWidth,borderRadius:swiperBorderRadius}"/>
    </view>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    },
    styleData:{
        type:Object
    }
  },
  onLoad() {

  },
  data() {
    return {
      picUrl:this.data.picUrl,
      pictureWidth:this.styleData.width || '750rpx',
      pictureHeight:this.styleData.height || '300rpx',
    };
  },
  methods:{
    goTourl(item){
      console.log(this.pictureWidth)
      console.log(this.pictureHeight)
      console.log(this.styleData)
      console.log(item)
      if(item.go){

      }else{

      }
    }
  }
};
</script>

<style scoped>

</style>
