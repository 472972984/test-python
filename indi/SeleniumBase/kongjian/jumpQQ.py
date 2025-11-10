from seleniumbase import BaseCase
BaseCase.main(__name__, __file__)  # Call pytest


class MyTestClass(BaseCase):
    def test_swag_labs(self):
        self.open("https://qzone.qq.com/")
        # 扫码
        self.assert_element("div.user-name-bg span.user-name", timeout=60)
        print("扫码登录成功")
        self.open("http://user.qzone.qq.com/3599728009")
        self.assert_element("span.title-text.ui-mr5")
        print("进入赵仁贵空间成功")


        print("开始为其留言")
        for i in range(5):
            print("第" + str(i) + "次留言")
            self.type("textarea", "good boy")
            self.js_click("a.qz-button.qz-dark-button.qz-button-s")
        print("留言完毕")

        self.sleep(30)


if __name__ == "__main__":
    print(123)
    exit(0)


