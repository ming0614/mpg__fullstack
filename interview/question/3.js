var a = 0xa;  //这是什么？  0x 16进制
console.log(typeof a);
var b = 010 // 8进制
var c = 0b01 // 2进制
console.log(c + 3)  //十进制数
console.log(b + 19) //
//  0.300000000000000004
// JS 没有浮点数类型 Number new Number()  不适合计算
// JS 转换二进制 无限循环 32  舍弃一些位
console.log(0.1 +0.2)
console.log((8).toString(8));
console.log((0.1).toString(2));  //toString 传二进制
console.log(0.10000000000000005);


console.log(Number.parseInt('010',8))
console.log(Number.parseInt('100',2))//结果是 NAN
// 上溢
//JS Number 类型只能安全地表达 -9007199254740991(-2(^53-1))
console.log(9999999999999999999); //1000000000000000000
console.log(9999999999999999999n);