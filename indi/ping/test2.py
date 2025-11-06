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
    "mtgsig":'{"a1":"1.2","a2":1760849921800,"a3":"1760849921562UYEWMOU75613c134b6a252faa6802015be905513389","a5":"I6qjL+VlkhejQmoRY9+S1RmZQDPTmRIXAgK3E0VVmbRkk5eR0tBV4hVBeTIWM8Ghw0zCDhLcIYIPyRYch64oeEP9TI==","a6":"h1.9blFg9gkksVM46eYhK+OH3rxwZ8Y2PuwRmpUdKEXlNCpWHrf2AGoEncGg7nFDbFFre06K5NBAd5WgRkIleb+C8nu5xt7VL3pvYkH9omb/saLBUdYnQt2NvsMHplixg+sM3/NDYOxAhVMFaVKKvlrc9Q==","a8":"7475f7b1263b93e6a65a0b349dcdecf7","a9":"4.0.4,7,226","a10":"89","x0":4,"d1":"830ff096a329baebc24b982120264a7c"}',
    # "mtgsig": "{\"a1\":\"1.2\",\"a2\":1760847823812,\"a3\":\"yxvx5zv577115u2z0y01vxx9407xv1w8800v321v04857958w8y51z54\",\"a5\":\"/2wlSkRvfUSMGbs3lt+HwiapimsiY45O4Pqg7J0uNVyh1v8j9WWhID/9EMZEefJfQDJZvecIIpgJjl+Zif/D6zrWot0ZMD9a8FV83+HTL+t+CI==\",\"a6\":\"h1.90oY7QM6NU7fMIWx2NM16vmpmFARfcLkKN78PBHoKL+iqmlJis7nJWYQ/wWmA8pchatU7yBkqUw9PuupdaBMpFAz8+a4S/2GHnRvWFvNkO6UO9ACCFmCOPsPEBi1aKTfYew3qk9NTMgByJ91pmZgn3vbTG7B3WlPeK2+q5s/mEV0J8ksnezgooIe41xek9NqP7gEkQb/xMoXcE0QOQfIntkz1m4XCtWrX7HtNlDlXNy/O+PRzAcBYaUmO+nrIg2qKUqK2s4DiyuEUkwHTteXjc6d8ZiBoDUxZLWBD16X8Ce29KoNDxN7H0RHZdMuYtodK3nxpgXE9eB7/eHLR1O6Ah7x86tjl4Wxz4Uun0LiR1VSfOVTfkgFJgiQ+d6LpmWtx\",\"a8\":\"5908ca88bd98aa9b805088500974b664\",\"a9\":\"4.0.4,7,231\",\"a10\":\"09\",\"x0\":4,\"d1\":\"23da0ed60db12b9bce9f403f2e6b254e\"}",
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