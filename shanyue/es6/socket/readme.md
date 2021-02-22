1. 安装node的开发框架，express MVC
    - 引入express require('express')
    - app = express()中小应用适用node
    - http服务
    - app.get('/',(req,res) =>{
        res.send('')
    })
    - 101 协议的跳转? 比较复杂，聊天室。  websocket 不要断开，保持连接，websocket   新的协议
    聊天式是http协议无法实现的
    - app.listen(:port)
    - 101 在ws 应用场景下 服务器用socket.io(封装了websocket的实现)，客户端主动申请切换协议 101
    - socket.io 在服务器端启用后，他会提供/socket.io.js/socket.io.js
    - 客户端n:1服务器  io()