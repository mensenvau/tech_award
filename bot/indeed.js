require('dotenv').config()

const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const { insertQuery } = require('../back-end/database/mysql');
require('selenium-webdriver/chrome');
require('chromedriver').path;

let start = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    for (let i = 0; i < 100; i = i + 10) {
        try {
            await driver.get(`https://www.indeed.com/jobs?q=Go&l=&vjk=7e011c44a8fee4ec&start=${i}`);

            let arr = await driver.executeScript(`
                {   let arr = [];
                    let data = document.querySelectorAll(".jcs-JobTitle"); 
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
                        let data = document.querySelectorAll("[data-testid='list-item']");
                        for(let i=0;i<data.length;i++){
                            keys.push(data[i].innerText)
                        }
                    
                        return ({
                            name: document.querySelector(".jobsearch-JobInfoHeader-title")?.innerText ,
                            country: document.querySelector("[data-testid='inlineHeader-companyLocation']")?.innerText  ,
                            details: document.querySelector("#jobDetailsSection")?.innerHTML + "<br>"+
                                     document.querySelector("#benefits")?.innerHTML + "<br>"+
                                     document.querySelector("#benefitsSectionTitle")?.innerHTML+"<br>" +
                                     document.querySelector("#jobDescriptionTitle")?.innerHTML + "<br>"+
                                     document.querySelector("#jobDescriptionText")?.innerHTML , 
                            info: document.querySelector("#salaryInfoAndJobType")?.innerText,  
                            link: document.URL,
                            source: "indeed.com", 
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