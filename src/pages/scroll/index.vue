<template>
  <div>
    <scroll-view
      :style="{ height: '468rpx' }"
      class="scrollRecipes"
      scroll-x="true"
      enable-flex="true"
      id="scrollRecipes"
      @scroll="monitorScroll"
    >
      <template v-for="(f, i) in [1, 2, 3, 4, 6, 7]">
        <div class="scroll-item">{{i}}</div>
      </template>
      <div class="scroll-item item-more" >
        <p>更多</p>
      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bl:0
    };
  },

  created() {
    const query = wx.createSelectorQuery()
    console.log(query)
 

  },

  onLoad(options) {},
  methods: {
    item(e){
 
    },
    monitorScroll(e){
      console.log(e.mp.detail)
      // 获取手机屏幕宽度
      let  vw = e.mp.detail.scrollWidth
      // 自身实际长度
      let dw = 2196

      if(this.bl == 0){
        this.bl = vw / dw
      }

      // 默认前三张曝光
      if(e.mp.detail.scrollLeft > 944 * this.bl){
        console.log('看到第四张')
      }

    }
  },
};
</script>

<style>

.scrollRecipes {
  margin-top: 30rpx;
  white-space: nowrap;
  overflow-x: scroll;
}

.scroll-item:first-child {
    margin-left: 40rpx;
  }

.scroll-item {
    display: inline-block;
    margin-right: 20rpx;
    width: 288rpx;
    height: 468rpx;
    line-height: 468rpx;
    font-size: 60rpx;
    text-align: center;
    border-radius: 14rpx;
    overflow: hidden;
    background: rgb(179, 177, 157);
  }
</style>
