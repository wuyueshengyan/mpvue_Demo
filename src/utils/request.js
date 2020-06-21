// 封装微信请求
export function request(url, method, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            data: data,
            method: method,
            url: url,
            success: function(res) {
                // if (res.data.status === 1) {
                //     resolve(res)
                // } else {
                //     reject(res.data)
                // }
                resolve(res.data)
            },
            fail: function(err) {
                reject(err)
            }
        })
    })
}