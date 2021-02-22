// babel 也是可以写的，源码分析篇
// 1. Person class -> function new 普通调用报错？
// 转义出的代码 不可能是class function
function _classCallCheck(instance,Constructor){
    if(!(instance instanceof Constructor)){
        throw new TypeError('Cannot call a class as a function')
    }
}
var Person = function Person(name){//es5 
    _classCallCheck(this,Person);
// 函数的运行方式，不是new的方式
//this 不一样
// if(this instanceof Person){//普通函数调用
//     throw new TypeError('Cannot call a class as a function');

// }
}
new Person();
Person();