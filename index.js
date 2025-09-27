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

        // const firstMenu = await driver.findElement(By.css("ul.nav.navbar-nav li a"));
        // console.log("First Menu Text: ", await firstMenu.getText());

        const menus = await driver.findElements(By.css("ul.nav.navbar-nav li a"));
        for(let i=0; i<menus.length; i++){
            console.log(`Menu ${i+1}: `, await menus[i].getText());
        }
        // const menutext = [];
        // for(const i of menus){
        //     menutext.push(await i.getText());
        // }
        // console.log("All Menus: ", menutext.join(" | "));
        const cartMenu = await driver.findElement(By.linkText("Cart"));
        console.log("Clicked on the Cart Menu!", await cartMenu.click());

        await driver.wait(until.urlContains("/view_cart"), 10000);
        const titleCart = await driver.getTitle();
        console.log("New page Title: ",titleCart);

        const apiMenu = await driver.findElement(By.linkText("API Testing"));
        console.log("Clicked on the API Testing Menu!", await apiMenu.click());
        
        console.log("Page open successfully");
    }
    finally{
        await driver.quit();
    }
})();

