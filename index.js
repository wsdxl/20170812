require('chromedriver');
var webdriver=require('selenium-webdriver');
var By=webdriver.By;
var driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/');
// driver.findElement({id:"kw"}).sendKeys('autotest');
driver.findElement(By.id('kw')).sendKeys('autotest');
driver.findElement(By.id('su')).click();
driver.sleep(5*1000);
driver.quit();