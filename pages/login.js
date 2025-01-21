exports.Loginpage=class Loginpage
{
    constructor(page)
    {
        this.page=page
        this.username_textbox= page.locator('//input[@name="uid"]')
        this.password_textbox= page.locator('//input[@name="password"]')
        this.loginbtn= page.locator('//input[@name="btnLogin"]')

    }

    async AccessMainURL()
    {
        await this.page.goto('https://demo.guru99.com/V1/index.php')
    }

    async loginMethod(username,password)
    {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.loginbtn.click()

    }



}