require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

// async function test(){

//     let driver = await new Builder().forBrowser("chrome").build();
//     await driver.get("http://google.com");
//     await driver.findElement(By.name('q')).sendKeys("Selenium",Key.RETURN);


// }

// test();




describe('web test', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    //  we will write steps for our test. 

    // For the element ID, you can find it by open the browser inspect feature.
   

    it('label test', async function() {
        // Load the page
         let driver = await new Builder().forBrowser("chrome").build();
        await driver.get('http://smart-vats.ruspromsoft.ru/');
        // await driver.findElement(By.name('q')).sendKeys("Selenium",Key.RETURN);
        // Find the search box by id
        await driver.findElement(By.xpath('//*[@id="sky-form3"]/fieldset/div[2]/div[2]/label')).sendKeys('webdriver');
        // Enter keywords and click enter
         // await driver.findElement(By.id('#sky-form3 > fieldset > div:nth-child(2) > div:nth-child(2) > label > input[type=email]')).sendKeys('webdriver', Key.RETURN);
        // Wait for the results box by id
        //await driver.wait(until.elementLocated(By.id('<input type="tel" placeholder="Телефон: *" name="phone">')), 10000);
        // We will get the title value and test it
        let title = await driver.getTitle();
        assert.equal(title, 'SMART BOX - современная корпоративная АТС');
    });

    it(' send button test ', async function() {

        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get('http://smart-vats.ruspromsoft.ru/');
        await driver.findElement(By.xpath('//*[@id="sky-form3"]/fieldset/div[5]/button')).sendKeys('webdriver')

        const title = await driver.getTitle()
        console.log(title)
        assert.equal(title, "SMART BOX - современная корпоративная АТС")
    }, 35000);



    // close the browser after running tests
    after(() => driver && driver.quit());
})






