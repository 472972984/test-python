process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function getData() {
    try {
        res = await fetch("https://10.50.3.44:4443/_data-route/data-asset/catalogQuery", {
            "headers": {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-tenant-schema": "tenant_1758519122706",
                "cookie": "SESSION=YWUxZjhkYmMtMjU1NS00YWY4LWE4MjYtNDg4MDIxMjEzNDc1",
                "Referer": "https://10.50.3.44:4443/"
            },
            "body": "{\"filters\":[],\"orders\":[],\"page\":1,\"size\":20,\"type\":\"1\"}",
            "method": "POST"
        });
        const result = await res.json(); // 解析 JSON 响应
        console.log("查询结果：", result);
    }catch (error) {
        console.log("查询异常：", error);
    }
}

getData()