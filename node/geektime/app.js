const koa = require('koa')
const app = new koa();
const mount = require('koa-mount');
// console.log(app instanceof require('events').EventEmitter);
app.use(
    mount('/',async(ctx) =>{
        ctx.body = fs.readFileSync(__dirname + '/views/index.html','utf-8')
    })
)


app.listen(3001)