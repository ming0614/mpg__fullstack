# js 有没有可能
console.log(a == 1 && a ==2 && a == 3)//true?


把神三元的所有输出全部照单查收
7种简单 Symbol BigInt


null是对象吗？   typeof null   // object
JS 存在的一个bug，最初版本中使用的是32位系统二进制
前面三位是用来标明它是什么类型的，
undefined null 00000000000000000000000
{}  3 位  000  Object 
typeof 3位wei
为了性能考虑变量的类型信息  000  Object
Object.prototype.toString()  //类型转换


# '1'.toString()
String -> Object 上的
Object 是所有对象的原型对象 Array Function ......String
简单数据类型 不会有方法的
1. 创建包装类实例 new String("1")
2. 调用该实例的方法 "1".toString()  s.toString() 给回去
3. 使命已完成 s= null 执行完方法后 立即销毁这个实例
typeof("1") string
split ("a",1)  //类型 php