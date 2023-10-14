require('dotenv').config()

const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const { insertQuery } = require('../back-end/database/mysql');
require('selenium-webdriver/chrome');
require('chromedriver').path;

let start = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    for (let i = 0; i < 10; i++) {
        try {
            await driver.get(`https://hh.ru/search/vacancy?area=2759&area=97&area=2782&area=2768&area=2769&search_field=name&search_field=company_name&search_field=description&enable_snippets=false&L_save_area=true&text=javascript&page=${i}`);

            let arr = await driver.executeScript(`
                {   let arr = [];
                    let data = document.querySelectorAll(".serp-item__title"); 
                    for(let i=0;i<data.length;i++){ arr.push(data[i].href) }  
                    return arr;
                }`);

            for (let j = 0; j < arr.length; j++) {
                try {
                    await driver.get(arr[j]);
                    await driver.sleep(200)
                    let data = await driver.executeScript(`
                    {
                        let keys = [];
                        let data = document.querySelectorAll("[data-qa='bloko-tag__text']");
                        for(let i=0;i<data.length;i++){
                            keys.push(data[i].innerText)
                        }

                        return ({
                            name: document.querySelector("[data-qa='vacancy-title']")?.innerText ,
                            country: document.querySelector("[data-qa='vacancy-view-location']")?.innerText  ,
                            details: document.querySelector(".vacancy-section")?.innerHTML, 
                            info: document.querySelectorAll(".vacancy-description-list-item")[0]?.innerText + 
                                  document.querySelectorAll(".vacancy-description-list-item")[1]?.innerText,  
                            link: document.URL,
                            source: "hh.ru", 
                            keys
                       }) 
                  }
                `)

                    try {
                        let { name, country, details, info, link, source } = data
                        let ins = await insertQuery("INSERT INTO jobs_list(name,country,details,info,link,source) VALUES (?,?,?,?,?,?)", [name, country, details, info, link, source])

                        try {
                            let keys = data.keys
                            console.log(keys, ins.insertId)
                            for (let k = 0; k < keys.length; k++)
                                await insertQuery("INSERT INTO jobs_keys (name,job_id) VALUES (?,?)", [keys[k], ins.insertId])
                        } catch (err) {
                            console.log("Insert Keys Error:" + err.message)
                        }
                    } catch (err) {
                        console.log("Insert Jobs Error:" + err.message)
                    }
                } catch (err) {
                    console.log("Geting Error:" + err.message)
                }
            }

        } catch (err) {
            console.log("We have error in Start function Pls check, ErrorMessage: ", err.message);
        }
    }
}


start();