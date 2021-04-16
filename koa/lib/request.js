//  为什么koa 里面没有req
const url = require('url');
let request ={
// ctx.url == ctx.request.url
    get url() {
        // console.log(this)
        return this.req.url
    },
    get path() {
        return url.parse(this.req.url).pathname
    }
}
module.exports = request 