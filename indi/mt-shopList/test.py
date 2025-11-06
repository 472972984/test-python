import requests


headers = {
    "Accept": "application/json",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://h5.waimai.meituan.com",
    "Referer": "https://h5.waimai.meituan.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    "mtgsig":  '{"a1":"1.2","a2":1762398255564,"a3":"1762398255123EEOMEEY75613c134b6a252faa6802015be905511329","a5":"mU1NKHP6du+SX3B7A0Xs/kvEZR7CcbFTakP+wX9YlJKY9iEdf6UursFHax322mj0EoyMsc1X796g8kFU5Kt8f+y9","a6":"h1.9bS+qIOiM05GXDvoapFo+STztWyu164j2Az3yfjrc4EiAzZZ3o/1C5DvwfbEvRisO5Iz7FEsnE52dUUqZ2gjDXy8n3/v3nCImb2wXLE1AxUvo90J6QNJ40nKYGUInImVLNUxkmOY0bENxK2wUA2CwjA==","a8":"f6da8cdce37f758279c16da050e7452b","a9":"4.1.1,7,173","a10":"f9","x0":4,"d1":"90b55f0c47e8d173f07f887dd75d8e7e"}',
    "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}
cookies = {
    "wm_order_channel": "default",
    "swim_line": "default",
    "utm_source": "",
    "_lxsdk_cuid": "19a56c4c238c8-0cc6797d0d2c6b-1e525631-13c680-19a56c4c238c8",
    "_lxsdk": "19a56c4c238c8-0cc6797d0d2c6b-1e525631-13c680-19a56c4c238c8",
    "au_trace_key_net": "default",
    "_lx_utm": "utm_source%253D60066",
    "openh5_uuid": "19a56c4c238c8-0cc6797d0d2c6b-1e525631-13c680-19a56c4c238c8",
    "uuid": "19a56c4c238c8-0cc6797d0d2c6b-1e525631-13c680-19a56c4c238c8",
    "WEBDFPID": "0yx585u3z1x45wux1955z7y7908558x080z43x5x67x579587xx73871-1762478726951-1762392326525ESAAUQU75613c134b6a252faa6802015be905513118",
    "utm_source_rg": "AM%2562dYlYl%25305",
    "isIframe": "false",
    "terminal": "i",
    "w_utmz": "\"utm_campaign=(direct)&utm_source=5000&utm_medium=(none)&utm_content=(none)&utm_term=(none)\"",
    "w_visitid": "0c057b3d-a996-4d92-a6e1-627f9da7586c",
    "_lxsdk_s": "19a56c4c238-c4-7fc-1d8%7C%7C32"
}
url = "https://i.waimai.meituan.com/tsp/open/openh5/home/shopList"
params = {
    "set_name": "",
    "region_id": "",
    "_": "1762392422992",
    "yodaReady": "h5",
    "csecplatform": "4",
    "csecversion": "4.1.1"
}
data = {
    "optimus_code": "10",
    "optimus_risk_level": "71",
    "pageSize": "20",
    "page_index": "0",
    "offset": "0",
    "content_personalized_switch": "0",
    "sort_type": "",
    "slider_select_data": "",
    "activity_filter_codes": "",
    "wm_latitude": "30209354",
    "wm_longitude": "120227967",
    "wmUuidDeregistration": "0",
    "wmUserIdDeregistration": "0",
    "openh5_uuid": "19a56c4c238c8-0cc6797d0d2c6b-1e525631-13c680-19a56c4c238c8",
    "uuid": "19a56c4c238c8-0cc6797d0d2c6b-1e525631-13c680-19a56c4c238c8"
}
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data,verify=False)

print(response.text)
print(response)