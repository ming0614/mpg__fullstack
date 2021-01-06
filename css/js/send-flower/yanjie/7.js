// var reg=/(\d{4}-\d{2}-\d{2})/;
// // console.log(reg.test('0791-86-34'));
// var dateStr='2018-04-18';
// console.log(RegExp.$1);
// console.log(RegExp.$2);
// console.log(RegExp.$3);
var reg = /(\d{4})-(\d{2})-(\d{2})/;
var dateStr = '2018-04-18';
reg.test(dateStr);  //true
console.log(RegExp.$1,RegExp.$2,RegExp.$3)   
