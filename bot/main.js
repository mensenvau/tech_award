const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
require('selenium-webdriver/chrome');
require('chromedriver').path;

let start = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    for (let i = 0; i < 100; i = i + 10) {
        try {
            await driver.get(`https://www.indeed.com/jobs?q=full+time&l=&vjk=7e011c44a8fee4ec&start=${i}`);

            let arr = await driver.executeScript(`
                {   let arr = [];
                    let data = document.querySelectorAll(".jcs-JobTitle"); 
                    for(let i=0;i<data.length;i++){ arr.push(data[i].href) }  
                    return arr;
                }`);

            for (let j = 0; j < arr.length; j++) {
                console.log(arr[j]);
            }

        } catch (err) {
            console.log("We have error in Start function Pls check, ErrorMessage: ", err.message);
        }

    }
}


start();