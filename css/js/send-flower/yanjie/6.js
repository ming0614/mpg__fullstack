function duplicateCount(text){
    var str=text.toLowerCase().split('').sort().join('');
    var word='123-4560-666';
    // /\d+/ 正则 字符串是否符合规则
    // console.log(/\d+/.test(word));
    console.log(word.match(/\d+/g));
    // var arr = str.atch(/(-)\1+/g);

    //([a-z])\1  相同的字符
    // RegExp.$1
    
// console.log(str.match(/(.)\1+/g));
// console.log(str.match(/([a-z])\1+/g))
var arr=str.match(/([.])\1+/g);
    return Array.length

}
console.log(duplicateCount('aaadsdjfwuhh'));