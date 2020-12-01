const ApiImageClassifyClient=require('baidu-aip-sdk').ocr;
//内置模块 fileSystem
const fs= require('fs');
 //1.读入文件 I/O 从硬盘读入内存中，
 const image=fs.readFileSync("cp.jpg").toString("base64");
 const APP_ID ="23078072";
 const API_KEY= "eDx1xr1l3P0nR6v7cEKUlVdQ";
 const SECRET_KEY="8YeGqkKGjjopULA6nKLkgaaLcXpbc9a2";
 const client= new ApiImageClassifyClient(APP_ID,API_KEY,SECRET_KEY);
 const options={};
 options["multi_detect"]="true";
 client
 .licensePlate(image,options)
 .then(function(result){
     console.log(result);
 })
 .catch(function(err){
     console.log(err)
 })