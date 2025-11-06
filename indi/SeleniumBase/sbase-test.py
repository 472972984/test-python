from seleniumbase import BaseCase
from route.route import get_all_paginated_data


BaseCase.main(__name__, __file__)  # Call pytest

class MyTestClass(BaseCase):
    def test_swag_labs(self):
        print("======>>  1")
        self.open("https://10.50.3.44:4443/data-route/#/login?schema=tenant_1758519122706")
        self.type(selector="basic_username", text="lxt92201", by="id")
        self.type(selector="basic_password", text="2wsxVFR_", by="id")
        self.type(selector="basic_captcha", text="1\n", by="id")

        self.sleep(1)

        cookies = {}
        for cookie in self.get_cookies():
            cookies[cookie["name"]] = cookie["value"]
        print(cookies)

        url = "https://10.50.3.44:4443/_data-route/data-asset/catalogQuery"
        get_all_paginated_data(url, cookies)

        #self.type("#password", "secret_sauce\n")
        # self.sleep(5)
        # self.assert_element("div.inventory_list")
        # self.click('button[name*="backpack"]')
        # self.click("#shopping_cart_container a")
        # self.assert_text("Backpack", "div.cart_item")
        # self.click("button#checkout")
        # self.type("input#first-name", "SeleniumBase")
        # self.type("input#last-name", "Automation")
        # self.type("input#postal-code", "77123")
        # self.click("input#continue")
        # self.click("button#finish")
        # self.assert_text("Thank you for your order!")

if __name__ == "__main__":
    exit(0)
