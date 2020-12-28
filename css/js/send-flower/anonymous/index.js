//事件执行函数 叫什么名字无所谓
// addEventListener('click',()=>{

// })
//驼峰式命名
// var funcA =function a(){
//     let foo=10;
//     let bar=2;
//     console.log(foo*bar);
// }
// funcA();
//函数定义，不适合匿名函数 的使用场景
//立即执行函数
let res=(function (foo,bar){          //匿名函数
        // let foo=10;
        // let bar=2;
        // console.log(foo*bar);
        return foo*bar;
     })(20,3);//foo bar 传值过去
     console.log(res);//交给外界