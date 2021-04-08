// // symbol 
// var sym1 = Symbol(); 
// var sym2 = Symbol('foo');
// var sym3 = Symbol('foo');
// console.log(sym2 == sym3);
// console.log(typeof sym1); //symbol
// // 函数来创建 原始数据类型 冲突的地方？ 如何说明
// // Symbol(字符串) 有何用？  做个标识
// // new Symbol();
// console.log(sym3.toString());
// // Symbol 不可以被实例化 不可以被new
// // 变量都是要分配内存空间，原始数据类型 栈分配
// // 引用类型 堆


//var mySymbol = Symbol()  //初始化
// var shapeType = {  //形状的类型
//     triangle: 'Triangle',//三角形
//     square: 'Square', //正方形
// }
// var shapeType = {  //形状的类型
//     triangle: Symbol,//三角形
//     square: Symbol, //正方形
// }
// function getArea(shape,options){
//     var area = 0;
//     switch(shape){
//         case shapeType.triangle:
//             area = 0.5*options.width*options.height;
//         break;
//         case shapeType.square:
//             area = options.width*options.height;
//         break;
//     }
//     return area;
// }
// console.log(getArea(shapeType.triangle,{
//     width:100,
//     height:100
// }))
// console.log(getArea(shapeType.square,{
//     width:100,
//     height:100
// }))


// var s1 = Symbol('foo');
// console.log(s1 instanceof Symbol);

// const obj = {
//     toString(){
//         return 'abc';
//     }
// }
// const sym = Symbol(obj);
// console.log(sym.toString());

// var sym = Symbol("My symbol");
// console.log("your symbol is " + sym);//cannot convert a symbol value to a string

var obj = {};
var a = Symbol("a");// 可用于JSON object key
var b = Symbol("b");


obj[a] = 'hello';
obj[b] = 'world';
obj.cc = 'cc';
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[a]);

for (let key in obj){
    console.log(obj[key])
}
Object.getOwnPropertySymbols(obj).forEach(item => {
    console.log(obj[item]);
})