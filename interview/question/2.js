//JS 中类型转换
 // 只有三种    转换成数字
   //           转换成布尔值
      //        转换成字符串
// 隐式类型转换
// 显示类型转换
let obj = {name: 'obj'}; // 引用类型
console.log(obj.toString()); // [object Object]  || null
// console.log(typeof null);
console.log(Object.prototype.toString.call(null));


//不可运行 '1'简单数据类型  .toString()
// 字符串  对象
//console.log('1'.toString())// 可执行吗？ 为什么？
// console.log(typeof 'abc');
// "1".toString();  //执行的瞬间
// var s = new String("1"); //类型转换
// console.log(s.toString());
var s1 = "some text";
console.log(typeof s1);
console.log(s1.toString());//暂时的
s1.color = 'read' // 对象 动态给对象设置属性
console.log(s1.color); // undefined