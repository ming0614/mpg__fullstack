//阮一峰面向对象第二篇
function Animal(name){
    console.log(arguments,'------------');
    this.name=name;
    this.species = "动物"
}
// Animal-> Function
//函数是一等对象 Object()
//拿到函数的原型链上的方法。靠它
// console.log(Animal.__proto__.__proto__);
function Cat(name,color){
    //拿到Animald 的属性？ 归Cat所有
    //借用一下，指定内部的this 为当前的this
    Animal.call(this,name,color);
    // Animal.apply(this,arguments);
    // console.log(arguments);

    // this.name=name;
    this.color=color;
}
var cat1= new Cat ("大猫","红色");
console.log(cat1.species);
//猫应该是Animal的子类，面向对象的继承？