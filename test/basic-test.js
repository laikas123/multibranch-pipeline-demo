const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver')
const assert = require('assert')
const webdriver = require('selenium-webdriver');

//for firefox
let capabilities = Capabilities.firefox();
const firefox = require('selenium-webdriver/firefox');


describe('Firefox Test', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = new Builder()
      .usingServer('http://localhost:4444/')
      .withCapabilities(capabilities)
      .build();
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  
  //YOUR "IT" FUNCTION GOES HERE
  it('MyFirstTest', async function() {
    await driver.get("https://screenpal.com/")
    await driver.manage().window().setRect({ width: 991, height: 695 })
    await driver.findElement(By.linkText("Log In")).click()
    await driver.findElement(By.id("email")).click()
  })

  it('MyFirstTest_withVerify', async function() {
    await driver.get("https://screenpal.com/")
    await driver.manage().window().setRect({ width: 991, height: 695 })
    await driver.findElement(By.linkText("Log In")).click()
    await driver.findElement(By.id("email")).click()
    {
      const element = await driver.findElement(By.xpath("//*[@id=\"email\"]"))
      assert(await element.isEnabled())
    }
  })

})
