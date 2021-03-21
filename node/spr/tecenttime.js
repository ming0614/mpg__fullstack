const EventEmitter = require('events').EventEmitter;  //koa
// extends EventEmitter  用户来访问的事件 网站就是一个订阅发布者模式
class Tecenttime extends EventEmitter {
    constructor(){
        super();
        setInterval(() => {
            this.emit('newlesson',{
                price:Math.random()*100
            })  //触发事件
        },2000)
    }
}
module.exports = new Tecenttime;