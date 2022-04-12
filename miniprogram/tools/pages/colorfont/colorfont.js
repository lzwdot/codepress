// pages/colorfont/colorfont.js
const functions = require('../../utils/functions')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        fontArr: [
            '🇦 ',
            '🇧 ',
            '🇨 ',
            '🇩 ',
            '🇪 ',
            '🇫 ',
            '🇬 ',
            '🇭 ',
            '🇮 ',
            '🇯 ',
            '🇰 ',
            '🇱 ',
            '🇲 ',
            '🇳 ',
            '🇴 ',
            '🇵 ',
            '🇶 ',
            '🇷 ',
            '🇸 ',
            '🇹 ',
            '🇺 ',
            '🇻 ',
            '🇼 ',
            '🇽 ',
            '🇾 ',
            '🇿 ',
        ],
        allFonts: '',
        fonts: '',
        content:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            allFonts: this.data.fontArr.join(' ')
        })
        wx.setNavigationBarTitle({
            title: "彩色昵称"
        })
    },
    textareaVal: function (e) {
        let fontArr = this.data.fontArr
        let content = e.detail.value
        let num = content.length 
        let start = 97 // 小写 a 的 ascii 码
        let regx = /^[A-Za-z]*$/
        let key = 0
        let fonts = ''

        content = content.toLowerCase()
        console.log(content[0])
        for (let i = 0; i < num; i++) {
            if (regx.test(content[i])) {
                key = content[i].charCodeAt() - start
                fonts += fontArr[key]
            } else {
                fonts += content[i]
            }
        }
        console.log(fonts)
        this.setData({
            fonts,
            content
        })
    },
    copyFonts: async function () {    
        const content = this.data.content
        if(!content){
            return;
        }
        
        const isCheck = await functions.msgSecCheck(content)
        if(!isCheck){
            wx.showToast({
              title: '内容含有敏感内容',
              icon:'none'
            })
            return;
        }
        wx.setClipboardData({
            data: this.data.fonts,
            success(res) {
                wx.getClipboardData({
                    success(res) {
                        console.log(res.data) // data
                    }
                })
            }
        })   
        
    },
    resetVal:function(){
        this.setData({
            fonts:''
        })
    }
})