// 隐式类型转换
// 当一侧操作数为String类型，会优先将另一侧转换为字符串类型
console.log(1 + '2');  //12


// 当一侧操作数为Number类型 另一侧会转为Number 类型
console.log(1 + true);


// 当Number类型 ，另一侧引用类型
console.log(1 + {});
console.log(3*{valueOf: function(){ return 5}});
// console.log(3 +)