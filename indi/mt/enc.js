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
        "minaversion": "11.0.0",
        "mtgsig": "{\"a1\":\"1.2\",\"a2\":1760509395930,\"a3\":\"yxvx5zv577115u2z0y01vxx9407xv1w8800v321v04857958w8y51z54\",\"a5\":\"AO3K8VAn4+j605GCNPUwVLrWzy97vN6RkvHsy0HgaBG4ChNEqNDsHJJ41PZ4qo2qepACdO75rTYDRiwktxHFygmqctE3l3Kfb0yDnn+lx9TUOc==\",\"a6\":\"h1.9JoBgA9BHcvFg+j056E7vW9W3ObqxpEMpcAIMTStSLS8+619GBAvjVQylsAjtuCK1HWt15mml8RxYvOD98o2boHGveoaeQ1Y4EUzH0HuXzy0mKM/9RWbPhFVyy8F6AcWSnPuhuX5leEYYs02zfmwntzy9zW4zpluiPFfHixehZnya7xciewPw5CnNzCuD7FdLco7SdeTUZSUfmMV1fVSuH0/B1K3MQkpUK2CMd253wNICjNjoOEmvhTwjf+2Oe7Wv5k/JAolZmdnC2G3hWLngyfHX99TObc4VxtpybGTvECCds1AEvsuhpTfy3RZi2YQPI/xIOeDhmBO3J6YUBNbisfr0uVQ++HcE6hrEUiSZ1eOGkFyaBUIQPhK6PnVa77Dv\",\"a8\":\"62ef8e10e8c3c4a397ac39ac46863e91\",\"a9\":\"4.0.4,7,250\",\"a10\":\"f6\",\"x0\":4,\"d1\":\"6ddf1e3e05c288e072aa9177681d96dd\"}"
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
    "isRaptor": false,
    "sendHookedCount": 1
}
t._startTime=1760509395930
t.url="https://mapi.dianping.com/mapi/fun/shopdetailktvbooktable2.json2?token=null&clienttype=miniprogram&shopuuid=l8d35zMjZDgernZ1&device_system=MACINTOSH"

t.send(null)
debugger