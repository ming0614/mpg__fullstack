const webp = require('webp-converter');
webp.cwebp("4.jpg","output.webp","-q 80",function(status,error){
    console.log(status);
})