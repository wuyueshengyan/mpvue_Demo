<template>
  <div>
    <!-- <button type="primary" @click="goH5">11</button>
    <button type="primary" @click="gojiedian">11</button>
    <ul>
      <li v-for="(item,index) in obj" :key="index">{{item}}</li>
    </ul> -->
    <img v-for="(x,i) in list" :src="x" alt="">
    <button @click="downloadImgs">下载图片</button>
  </div>
</template>

<script>
import { formatTime ,writePhotosAlbum } from "@/utils/index";
import card from "@/components/card";

export default {
  components: {
    card
  },
  onLoad(){

  },
  methods: {
    goH5() {
      //       wx.showModal({
      //   title: '提示',
      //   content: '预约设计服务请点击下方“客服”按钮，输入“设计”，会有专门客服为您服务，非常感谢~',
      //   confirmText:'嘟嘟客服',
      //   success (res) {
      //     if (res.confirm) {
      //       console.log('用户点击确定')
      //     } else if (res.cancel) {
      //       console.log('用户点击取消')
      //     }
      //   }
      // })

      wx.navigateTo({
        url: "/pages/webview1/main"
      });
    },
    gojiedian(){
       wx.navigateTo({
        url: "/pages/scroll/main"
      });
    },
    // 下载图片
    downloadImgs() {
      var _this = this
      // 获取保存到相册权限
      writePhotosAlbum(
        function success() {
          wx.showLoading({
            title: '加载中',
            mask: true
          })
          // 调用保存图片promise队列
          _this
            .queue(_this.list)
            .then(res => {
              wx.hideLoading()
              wx.showToast({
                title: '下载完成'
              })
            })
            .catch(err => {
              wx.hideLoading()
              console.log(err)
            })
        },
        function fail() {
          wx.showToast({
            title: '您拒绝了保存到相册'
          })
        }
      )
    },
    // 下载
  download(url) {
    return new Promise((resolve, reject) => {
      wx.downloadFile({
        url: url,
        success: function(res) {
          var temp = res.tempFilePath
          wx.saveImageToPhotosAlbum({
            filePath: temp,
            success: function(res) {
              resolve(res)
            },
            fail: function(err) {
              reject(res)
            }
          })
        },
        fail: function(err) {
          reject(err)
        }
      })
    })
  },
  // 队列
  queue(urls) {
    let promise = Promise.resolve()
    urls.forEach((url, index) => {
      promise = promise.then(() => {
        return this.download(url)
      })
    })
    return promise
  },

  },
  data() {
    return {
      obj: {},
      list: [
      'https://timgs.top1buyer.com/admin/special/special_img_20190301160008479.jpg',
      'https://timgs.top1buyer.com/admin/special/special_img_20190301160013201.jpg',
      'https://timgs.top1buyer.com/admin/special/special_img_20190301160015969.jpg',
      'https://timgs.top1buyer.com/admin/special/special_img_20190301160025498.jpg',
      'https://timgs.top1buyer.com/admin/special/special_img_20190301160031519.jpg',
      'https://timgs.top1buyer.com/admin/special/special_img_20190301160042689.jpg',
      'https://timgs.top1buyer.com/admin/special/special_img_20190301160108243.jpg',
      'https://timgs.top1buyer.com/admin/special/special_img_20190301160111756.jpg',
      'https://timgs.top1buyer.com/admin/special/special_img_20190304160141454.jpg'
    ],
    loading:false
    };
  },

  created() {
    let logs;
    if (mpvuePlatform === "my") {
      logs = mpvue.getStorageSync({ key: "logs" }).data || [];
    } else {
      logs = mpvue.getStorageSync("logs") || [];
    }
    this.logs = logs.map(log => formatTime(new Date(log)));
    var that = this;
    wx.getStorage({
      key: "key",
      success(res) {
        console.log(res.data);
        that.obj = res.data[0];
      }
    });
  }
};
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
