// @annotation  //用处大了去了 装饰器模式 
// class MyClass {  //MyClass 里有annotated 属性？
//     constructor(){
//         this.name = 'mpg' //public
//     }
// }

// //不需要这么做
// // MyClass.annotated = false  //static 属性
// //有几个类 都有共有的属性的话
// // 复用装饰函数 新的构建类的方式 
// function annotation(target) {
//   target.annotated = true;
// }


// decorator 好高级
// defineProperty(obj,{

// })
class Person{
    @readonly  //装饰的不是一个类，装饰的是一个方法，可以得到readonly 能力
    //，只可读，不可写
    name(){
        return `${this.first} ${this.last}`
    }
}


//target class 方法 属性
// name 
// descriptor defineProperty
function readonly(target,name,descriptor) {
//     console.log(target,name,descriptor)
    descriptor.writable = false;
    return descriptor;
}
