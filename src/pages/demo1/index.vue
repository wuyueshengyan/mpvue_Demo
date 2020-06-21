<template>
  <div>
    你好
  </div>
</template>

<script>

export default {
  data () {
    return {
        url:'https://wuyueshengyan.github.io/indexDemo/'
    }
  },

  created () {

  },

   onLoad(options) {
   },
  methods:{
      Test(e) {
    console.log(e)
    //接受h5页面传过来的参数
    var data = e.target.data;
    console.log(111)
    wx.setStorage({
      key:"key",
      data:data
    })
}
  },

}
</script>

<style></style>
