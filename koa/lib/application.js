let EventEmitter = require('events')
let http = require('http');
let context = require('./context');
let request = require('./request');
let response = require('./response');

class koa extends EventEmitter {
    constructor () {
        super()  //超级继承
        this.fn
        this.context = context
        this.response = response
        this.request = request
    }
    use(fn){
        this.fn = fn;
    }

    listen(...args){
        let server = http.createServer(this.handleRequest.bind(this))
        server.listen(...args)
    }
    createContext(req,res){   //构建ctx
        const ctx = Object.create(this.context)
        const request = ctx.request = Object.create(this.request)
        const response = ctx.response = Object.create(this.response)
        ctx.req = request.req = response.req = req
        ctx.res = request.res = response.res = res 
        request.ctx = response.ctx = ctx
        request.response = response
        response.request = request
        return ctx
    }
    handleRequest(req,res){
        let ctx = this.createContext(req,res)
        this.fn(ctx)
        res.end(ctx.body)
    }
}

module.exports = koa