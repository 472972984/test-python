import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
import json
from time import sleep


# -------------------------- 第一步：通过 Selenium 完成登录，获取 Cookie --------------------------
def get_login_cookies(login_url, username, password):
    # 初始化 Chrome 浏览器（需确保 chromedriver 版本与 Chrome 匹配）
    # 设置 chromedriver 的路径
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-automation'])  # 此步骤很重要，设置为开发者模式，防止被各大网站识别出来使用了Selenium
    driver = webdriver.Chrome(options=options)

    driver.get(login_url)
    cookies = None  # 存储登录后的 Cookie

    try:
        # 1. 输入用户名（已确认元素 ID 为 basic_username）
        username_input = WebDriverWait(driver, 60).until(
            EC.presence_of_element_located((By.ID, "basic_username"))
        )
        username_input.send_keys(username)

        # 2. 输入密码（需替换为你密码输入框的实际定位方式，示例用 XPath，可根据 F12 结果调整）
        password_input = WebDriverWait(driver, 60).until(
            EC.presence_of_element_located((By.ID, "basic_password"))
        )
        password_input.send_keys(password)

        # 3. 输入验证码（若验证码动态变化，需额外处理，此处暂用固定值示例）
        captcha_input = WebDriverWait(driver, 60).until(
            EC.presence_of_element_located((By.ID, "basic_captcha"))  # 假设验证码输入框的name属性为"captcha"，需根据实际页面元素调整
        )
        captcha_input.send_keys("9yVzw")  # 这里输入图中的验证码     # 实际场景需手动输入或对接验证码识别工具

        # 4. 点击登录按钮（已确认用 class 定位）
        login_button = WebDriverWait(driver, 60).until(
            EC.element_to_be_clickable(
                (By.XPATH, "//button[contains(@class, 'ant-btn-primary') and contains(@class, 'login-button')]"))
            # 假设登录按钮的xpath为这个，需根据实际页面元素调整
        )
        login_button.click()

        # 5. 验证登录成功（检测用户名元素 "lxt92201"）
        WebDriverWait(driver, 100).until(
            EC.presence_of_element_located((By.XPATH, "//span[@class='username']"))
        )
        print("登录成功！正在提取 Cookie...")

        # 6. 提取登录后的 Cookie（转换为 requests 可用的 Cookie 字典格式）
        cookies = {}
        for cookie in driver.get_cookies():
            cookies[cookie["name"]] = cookie["value"]

    except Exception as e:
        print(f"登录失败：{str(e)}")
    finally:
        driver.quit()  # 关闭浏览器
    return cookies


# -------------------------- 第二步：用 requests 分页请求接口，获取所有数据 --------------------------
def get_all_paginated_data(api_url, cookies, page_size=20, type_param=1):
    all_data = []  # 存储所有页面的数据
    current_page = 1  # 起始页码
    max_retry = 3  # 失败重试次数

    while True:
        # 构造 POST 请求的参数（与你提供的接口参数一致）
        payload = {
            "page": current_page,
            "size": page_size,
            "type": str(type_param)  # 确保 type 为字符串，若接口需数字可去掉 str()
        }

        # 构造请求头（模拟浏览器，避免被识别为爬虫）
        headers = {
            # 租户信息
            "x-tenant-schema": "tenant_1758519122706",
            "Content-Type": "application/json",  # 关键！POST 接口需指定 JSON 格式
        }

        retry_count = 0
        while retry_count < max_retry:
            try:
                # 发送 POST 请求（携带登录 Cookie 和 JSON 参数）
                response = requests.post(
                    url=api_url,
                    headers=headers,
                    cookies=cookies,
                    data=json.dumps(payload),  # 转换为 JSON 字符串（避免 requests 自动编码为表单格式）
                    timeout=15,  # 超时时间 15 秒
                    verify=False  # 若接口是 HTTPS 但证书无效（如内网地址），需加此参数（生产环境慎用）
                )

                # 检查请求状态码
                response.raise_for_status()  # 4xx/5xx 错误会抛出异常

                # 解析响应（假设接口返回 JSON，避免 HTML 解析失败）
                result = response.json()
                # -------------------------- 关键：根据接口实际返回调整数据提取逻辑 --------------------------
                # 示例 1：若接口返回 {"data": [列表数据], "total": 总条数}
                page_data = result.get("data", [])  # 替换为接口真实的“数据列表”字段
                total_count = result.get("total", 0)  # 替换为接口真实的“总条数”字段

                if not page_data:
                    print(f"第 {current_page} 页无数据，已获取所有数据")
                    return all_data

                # 添加当前页数据到总列表
                all_data.extend(page_data)
                print(f"已获取第 {current_page} 页，累计 {len(all_data)}/{total_count} 条数据")

                # 判断是否还有下一页（当前页数据量 < 页大小，或累计数据 >= 总条数）
                if len(page_data) < page_size or len(all_data) >= total_count:
                    print(f"已获取所有数据，共 {len(all_data)} 条")
                    return all_data

                current_page += 1  # 进入下一页
                sleep(1)  # 延迟 1 秒，避免高频请求被拦截
                break  # 跳出重试循环，进入下一页

            except requests.exceptions.SSLError:
                print("HTTPS 证书错误，已跳过证书验证（若仍报错，检查接口地址是否正确）")
                retry_count += 1
            except requests.exceptions.RequestException as e:
                retry_count += 1
                print(f"第 {current_page} 页请求失败（{retry_count}/{max_retry}）：{str(e)}")
                sleep(2)  # 重试前延迟 2 秒

        # 超过最大重试次数，终止请求
        if retry_count >= max_retry:
            print(f"第 {current_page} 页请求失败超过 {max_retry} 次，终止爬取")
            return all_data


# -------------------------- 第三步：主函数调用 --------------------------

if __name__ == "__main__":
    # 1. 配置参数
    LOGIN_URL = "https://10.50.3.44:4443/data-route/#/login?schema=tenant_1758519122706"  # 登录页 URL
    API_URL = "https://10.50.3.44:4443/_data-route/data-asset/catalogQuery"  # 分页接口 URL
    USERNAME = "lxt92201"
    PASSWORD = "2wsxVFR_"

    # 2. 获取登录 Cookie
    login_cookies = get_login_cookies(LOGIN_URL, USERNAME, PASSWORD)
    if not login_cookies:
        print("未获取到登录 Cookie，无法请求接口")
        exit()
    print(123)

    # 3. 分页获取所有数据
    all_result = get_all_paginated_data(API_URL, login_cookies, page_size=20, type_param=1)

    # 4. 输出结果（可根据需求保存为 Excel/JSON）
    print("\n" + "=" * 50)
    print(f"最终获取到 {len(all_result)} 条数据：")
    for idx, data in enumerate(all_result, 1):
        print(f"第 {idx} 条：{json.dumps(data, ensure_ascii=False, indent=2)}")  # 格式化输出 JSON 数据
        time.sleep(0.2)
