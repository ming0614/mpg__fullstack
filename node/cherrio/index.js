//let request = require('request-promise');//第三方npm
const fetch = require("node-fetch");

let cheerio = require('cheerio');
//const { httpify } = require('caseless');
let url = 'http://movie.douban.com/top250';



const main = async () => {  //async 关键字
    fetch(url)
        .then(res => res.text())
        .then(body => {
            let $ = cheerio.load(body);
            let movieNodes = $('#content .item')  
            console.log(movieNodes)
    });
}
    main();