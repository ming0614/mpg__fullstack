const koa = require('./lib/application');
const app = new koa();


app.use((ctx) => {  //ctx 上下文   koa本身
    // res.end('hello1')
    console.log(ctx.req.url);
    console.log(ctx.request.req.url)
    console.log(ctx.response.req.url)
    console.log(ctx.request.url)  //   ctx.request.ctx.req.url
    console.log(ctx.request.path)
    console.log(ctx.url);
    console.log(ctx.path);
})
app.listen(3000,()=>{
    console.log('服务器启动了')
})

// let http = require('http');

// let server = http.createServer((req,res)=>{
//     res.end('hello')
// })

// server.listen(3001)
