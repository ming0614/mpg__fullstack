//console.log('AI 来了，帅哥');
//node 引入模块的关键字
//图像识别
const ApiImageClassifyClient=require('baidu-aip-sdk').imageClassify;
//内置模块 fileSystem
const fs= require('fs');
 //1.读入文件 I/O 从硬盘读入内存中，
 const APP_ID ="23077967";
 const API_KEY= "xRAUpii3gY95uur76nubiFia";
 const SECRET_KEY="Smn5XtlumQPzVrICpGPut0KOdjm9yHQY";
 const client= new ApiImageClassifyClient(APP_ID,API_KEY,SECRET_KEY);
 const image=fs.readFileSync("lbjn.jpg").toString("base64");

 client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err)
    })