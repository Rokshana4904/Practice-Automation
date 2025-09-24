const {Builder, By, Key, until, Browser} = require('selenium-webdriver');

(async function firstext() {
    //launch the browser
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
     try{
        //open website
        await driver.get('https://scholar.google.com/');

        //title print
        let title = await driver.getTitle();
        console.log('page Title:', title);
    }
    finally{
        //browser off
        await driver.quit()
    }
    
})();