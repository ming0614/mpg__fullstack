// [] Object Array []
// 直观上它是矛盾的
// 类型转换 隐式 只有三种 数值 字符串 布尔值
// [] => false Boolean
// 什么东西触发类型转换的？  ==
// console.log([] == ![]);  //true
// console.log({} == {});//  false
// ![] 优先级高 ![] 转换为布尔值
console.log(Number(![]));// 显示类型转换 数字 0
console.log(Number([]));
console.log(Number(false));
console.log(Boolean([]) == Boolean(![]));