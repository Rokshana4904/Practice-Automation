//Driver Setup (Chrome)
import { Builder, Browser, By, until } from "selenium-webdriver";
(async function run() {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    try{
        await driver.get("https://automationexercise.com");

        const title = await driver.getTitle();
        console.log("Page Tittle: ", title);

        const url = await driver.getCurrentUrl();
        console.log("Page URL: ", url);

        const firstMenu = await driver.findElement(By.css("ul.nav.navbar-nav li a"));
        console.log("First Menu Text: ", await firstMenu.getText());
        console.log("Page open successfully");
    }
    finally{
        await driver.quit();
    }
})();

