function Cat(name,color){
    //new 的时候一定会执行Cat
    this.name=name;//this指向实例
    this.color=color;
    // this.type='猫科动物';
    //prototype 要生成的原因，
    // this.eat=function(){
    //     console.log('老鼠');在类上的方法
    // }// 相当于 Cat.prototype.eat=function(){ console.log('老鼠')}
}
//原型对象
Cat.prototype.eat=function(){ 
    console.log('老鼠');
}
Cat.prototype.type='猫科动物';

//实例化
var cat1= new  Cat('大猫','黄色');
var cat2=new Cat('小猫','黄色');
console.log(cat1.constructor==cat2.constructor);
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);
console.log(cat1.eat());