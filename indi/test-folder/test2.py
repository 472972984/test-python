import requests


headers = {
    "Host": "catfront.dianping.com",
    "Connection": "keep-alive",
    "content-type": "application/x-www-form-urlencoded",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.62(0x18003e3a) NetType/4G Language/zh_CN",
    "Referer": "https://servicewechat.com/wxc341b03f979e49ad/384/page-frame.html"
}
url = "https://catfront.dianping.com/api/metric"
params = {
    "v": "1",
    "sdk": "2.0.16",
    "p": "takeaway-shangou-wxapp"
}
data = {
    "data": "{\"kvs\":{\"lazyload_image_count\":[1]},\"tags\":{\"renderer\":\"webview\",\"path\":\"sub-trade/restaurant/restaurant\",\"version\":\"9.16.2\",\"app\":\"sg_wxapp\",\"buzType\":0,\"user_id\":276725270,\"uuid\":\"1121240613023625268\",\"originUrl\":\"http://p0.meituan.net/480.0.80/sgopen/6d186eec93749f38d5554ea97fd1c43346200.jpg\",\"clipUrl\":\"https://p0.meituan.net/480.0.80/sgopen/6d186eec93749f38d5554ea97fd1c43346200.jpg@197w_197h_80q.webp\",\"webpSystem\":\"iOS 26.0\",\"moduleName\":\"\",\"moduleSiteIndex\":0,\"reason\":\"{}\",\"type\":\"success\",\"packageType\":\"main\"},\"ts\":1761650032}"
}
response = requests.post(url, headers=headers, params=params, data=data, verify=False)

print(response.text)
print(response)