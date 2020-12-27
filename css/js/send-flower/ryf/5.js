function Cat(name,color){
    this.name=name;//this指向实例
    this.color=color;
}
//实例化
var cat1= new  Cat('大猫','黄色');
var cat2=new Cat('小猫','黄色');
console.log(cat1.constructor==cat2.constructor);
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);