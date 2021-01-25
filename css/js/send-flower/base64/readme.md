- 图片性能优化，我们想到什么？减少http数  lazyload throttle
    - 编解码
    data:img/jpg;base64 ,文件头base64编码格式 /9j/文件内容
    google 大量的使用base64 减少请求数 ，是最严重的页面性能的地方

    1. 网页性能优化
        - 精灵图片的优化技术   多张图（小图，icon）合并到一张图去减少http请求
        - 历史 lazyload scroll + API 减少一些执行数 throttle
        - 现在有 base64 把发送请求的机会都没了 不是所有图片
        衡量，小一点的图片 
        ？ 哪种方法 ？
        - 大图的话，特别是头图，banner图 ，商品详情页的图片
        可以在 webp 大小减少25%+ ，清晰度不受损，+ lazyload 
- js 多线程的苗头 Worker 推出有一段时间了，但是没有成为主流
    有多线程能力 
    new Worker('js 文件')  单独运行 ，不会阻塞主线程 
    1. 跟dom 相关的事件不能做
    js 是css/html 的第三者  ？
    worker 不能和主线程去同时操作同一个元素
