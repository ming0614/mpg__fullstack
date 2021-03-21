//import  es6 模块化方案
// 游戏规则与设备分离 游戏要在小程序上 怎么移植？
//复用
const game = require('./game.js'); //  commonJS
// JS 操作系统 事件机制
// 一直玩  持续不断的去命令行取
var winCount = 0;

process.stdin.on('data',(buffer) =>{
    const action =buffer.toString().trim();  //二进制string
    const result = game(action);
    if(result ==1){
        winCount++
        if(winCount ==3) {
            console.log('不玩了')
            process.exit()
        }
    }
})