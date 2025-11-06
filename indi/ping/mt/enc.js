require('./env.js')
require('./main.js')

var t = new XMLHttpRequest()
t.guardReq = {
    "url": "https://mapi.dianping.com/mapi/fun/shopdetailktvbooktable2.json2?token=null&clienttype=miniprogram&shopuuid=l8d35zMjZDgernZ1&device_system=MACINTOSH&yodaReady=h5&csecplatform=4&csecversion=4.0.4",
    "method": "GET",
    "headers": {
        "token": null,
        "appVersion": "11.0.0",
        "appName": "dianping-wxapp",
        "channel": "H5",
        "minaname": "dianping-wxapp",
        "minaversion": "11.0.0"
    },
    "openArg": [
        "GET",
        "https://mapi.dianping.com/mapi/fun/shopdetailktvbooktable2.json2?token=null&clienttype=miniprogram&shopuuid=l8d35zMjZDgernZ1&device_system=MACINTOSH&yodaReady=h5&csecplatform=4&csecversion=4.0.4",
        true
    ],
    "signType": 1,
    "oriUrl": "https://mapi.dianping.com/mapi/fun/shopdetailktvbooktable2.json2?token=null&clienttype=miniprogram&shopuuid=l8d35zMjZDgernZ1&device_system=MACINTOSH",
    "SCaApp": false,
    "openHookedCount": 1,
    "isRaptor": false
}
t._startTime=1760612587303
t.url="https://mapi.dianping.com/mapi/fun/shopdetailktvbooktable2.json2?token=null&clienttype=miniprogram&shopuuid=l8d35zMjZDgernZ1&device_system=MACINTOSH"


t.send(null)
debugger

// 1 没有报错后  尝试构建 request 调用