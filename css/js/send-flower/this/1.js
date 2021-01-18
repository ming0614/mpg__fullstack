'use strict'; //启用严格模式
var obj ={//json object
    bar: 1,
    foo:function(){  //obj属性
        console.log(this.bar);
    }
}
var foo = obj.foo; //foo 函数
let bar =2;
obj.foo(); //this 会指向obj 本身，函数调用方式, 运行环境？ 对象上的方法
foo(); //this ? 普通函数var