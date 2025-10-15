import requests

headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Origin": "https://www.dianping.com",
    "Referer": "https://www.dianping.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    "appName": "dianping-wxapp",
    "appVersion": "11.0.0",
    "channel": "H5",
    "channelversion": "undefined",
    "microMsgVersion": "undefined",
    "minaname": "dianping-wxapp",
    "minaversion": "11.0.0",

    "mtgsig": "{\"a1\":\"1.2\",\"a2\":1760509395930,\"a3\":\"yxvx5zv577115u2z0y01vxx9407xv1w8800v321v04857958w8y51z54\",\"a5\":\"AO3K8VAn4+j605GCNPUwVLrWzy97vN6RkvHsy0HgaBG4ChNEqNDsHJJ41PZ4qo2qepACdO75rTYDRiwktxHFygmqctE3l3Kfb0yDnn+lx9TUOc==\",\"a6\":\"h1.9JoBgA9BHcvFg+j056E7vW9W3ObqxpEMpcAIMTStSLS8+619GBAvjVQylsAjtuCK1HWt15mml8RxYvOD98o2boHGveoaeQ1Y4EUzH0HuXzy0mKM/9RWbPhFVyy8F6AcWSnPuhuX5leEYYs02zfmwntzy9zW4zpluiPFfHixehZnya7xciewPw5CnNzCuD7FdLco7SdeTUZSUfmMV1fVSuH0/B1K3MQkpUK2CMd253wNICjNjoOEmvhTwjf+2Oe7Wv5k/JAolZmdnC2G3hWLngyfHX99TObc4VxtpybGTvECCds1AEvsuhpTfy3RZi2YQPI/xIOeDhmBO3J6YUBNbisfr0uVQ++HcE6hrEUiSZ1eOGkFyaBUIQPhK6PnVa77Dv\",\"a8\":\"62ef8e10e8c3c4a397ac39ac46863e91\",\"a9\":\"4.0.4,7,250\",\"a10\":\"f6\",\"x0\":4,\"d1\":\"6ddf1e3e05c288e072aa9177681d96dd\"}",
    # "mtgsig": "{\"a1\":\"1.2\",\"a2\":1760516995790,\"a3\":\"yxvx5zv577115u2z0y01vxx9407xv1w8800v321v04857958w8y51z54\",\"a5\":\"M50EXtLXYnWGbA4aYfIMVdr4F15oCYDV3hZFDsaWivHO3BQGKHQm0SjzOMtSLwCAD+l5oPXxu08EQQy/Dy0YxOyl/g8tElDIP6hZzkX7xa7eLmF=\",\"a6\":\"h1.9HgHWpSOJqKsZ3NalbEECxWiiDNCZD1NBWrOb6HtznIJvZdU0I1KB1E4+utS6BkY8bWIczP+miT7+LY1QmADOxReEPhmeq5BmCwxxABEN4T8e3i2lWL4kHluxgxHuzPR+71cBOwtDNBOFX9s35a72mcZmf8DzCwsshiC3VC1S3c1djd+rSZBXtvsbJlhkYmVtQvuA2FA9+ISXxFASnmb5ioIIOpoJQ8L5161jKIg3szcR8gopvnynnzPMV2CH5KlWp/JW83j3A3zE3WzK9hqiKxZnyNOLDRS1B2MkH3kMfvVu8q88eB5LRUsQlD3IXK9ZNE6hNQU0Rgfd0eit/E0/JH7F2W0eXLK3L5XnqBy/xVQcvdLrS+uhbVZ9g/W2Yfis\",\"a8\":\"974c41aad085c2959b65c1faf9290942\",\"a9\":\"4.0.4,7,219\",\"a10\":\"45\",\"x0\":4,\"d1\":\"9618daf8accfb09463b7437f3ad76a6f\"}",
    "network-type": "undefined",
    "phone-brand": "undefined",
    "phone-model": "undefined",
    "platform": "undefined",
    "platformVersion": "undefined",
    "sdkversion": "undefined",
    "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "token": "null",
    "wechatversion": "undefined"
}
url = "https://mapi.dianping.com/mapi/fun/shopdetailktvbooktable2.json2"
params = {
    "token": "null",
    "clienttype": "miniprogram",
    "shopuuid": "l8d35zMjZDgernZ1",
    "device_system": "MACINTOSH",
    "yodaReady": "h5",
    "csecplatform": "4",
    "csecversion": "4.0.4"
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
print(response)