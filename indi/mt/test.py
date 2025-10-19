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
    # "mtgsig": "{\"a1\":\"1.2\",\"a2\":1760613194425,\"a3\":\"yxvx5zv577115u2z0y01vxx9407xv1w8800v321v04857958w8y51z54\",\"a5\":\"TJVCtXNWe5hB+oFAmFciEPlAzVCU+I8oMLm9AZT9st2QDA0eJezjHdvkZVEu0+r24x5A/KLCLAB8dwFnty0sj7w7Jeq2btDxWYlm0ESE+hmT3c==\",\"a6\":\"h1.9VvHZeUeNmg7MAF4B6nTv7xVuJtDm5fr6u2DiAHP+NynLkv+FN9eq9YhSW4KgwOPxEMlFaQIDDE9U1TdUzRb6uGSlQTyXZevqLjTz+Ub3RIp+No2hUW584bw/wwJrnrtNz8akpyoWjGBUHeYniy67sDumDQxjRjGHsj0LW3rEatoiz6wlb4raxFSYgmof0oi8la+rASjt0KzhAmaN8QjnkdkzVldgBNgl6GlY6eIoD8/byhgjFmVphBPZlgWP1x2LAJj/1X9L024DOKaJm6csL6FlfMTewpwCAGnazXwV+n/1Ud3bkFt7Fnwc9xeHU1im4I1jp2hTjHM4QfCnsGwCoD7NM0fnJIrS3PjXmS1SX6atB8xBNH7AyGdK9/NXINFC\",\"a8\":\"0317c797eab969250a8ebac480d12821\",\"a9\":\"4.0.4,7,160\",\"a10\":\"3a\",\"x0\":4,\"d1\":\"7d7682de8333e3f2eb8f8213fe45612f\"}",
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