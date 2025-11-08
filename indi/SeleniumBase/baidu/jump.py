from seleniumbase import BaseCase
BaseCase.main(__name__, __file__)  # Call pytest

# 无头浏览器启动
# python3 indi/SeleniumBase/baidu/jump.py --browser=chrome --headless

class MyTestClass(BaseCase):
    def test_swag_labs(self):
        self.open("https://top.baidu.com/board?tab=realtime")
        print("打开浏览器了")
        self.sleep(1)
        self.assert_element("div.tag-item_2erEC.active_1oD--")
        print("监测到打开页面成功")
        self.sleep(1)

        print("准备点击标题4")
        self.js_click("div.index_1Ew5p.c-index-bg4")
        print("点击成功")
        self.sleep(5)

        self.type("#chat-textarea", "java\n")
        print("搜索成功")


        self.sleep(20)


if __name__ == "__main__":
    print(123)
    exit(0)
