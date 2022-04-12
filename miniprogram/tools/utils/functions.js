wx.cloud.init();

async function msgSecCheck(content) {
    try {
        const res = await wx.cloud.callFunction({
            name: 'msgSecCheck',
            data: {
                content: content || ''
            }
        })
        if (res.result.errCode === 0) {
            return true
        }
        return false
    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = {
    msgSecCheck:msgSecCheck
}