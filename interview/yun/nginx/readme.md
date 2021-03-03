nginx 静态网页 http服务
动态 node 
1. centos node
    - nginx wget taobao mirrors .tar.tz

    - /user/local/bin/node/bin node npm npx
    - 全局命令 Linux ？ 配置软连接

2. Koa code
    const Koa = require('koa');  //引入最好的node   开发框架
const app = new Koa();        //中间件 middlewares
app.use(async ctx => {      // ctx express ctx = req + res
        ctx.body = 'Hello World';    //res body 响应体
})
app.listen(3000);  //在3000

node app.js 命令行一直在霸占
3000 任何人发出请求 ctx 伺服

后台运行 nginx ps aux
