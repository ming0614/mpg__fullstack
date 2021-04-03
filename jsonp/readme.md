# 跨域  
    - 后端的跨域解决方案
    - JSONP json with padding 
        https://photo.sina.cn/aj/index?page=1&cate=recommend
        同源机制

    1. 通过script img src 跨域向sina  发出了请求  http
    规避了 js 代码 xhr  fetch 同源机制
    JSON JS 代码能够使用 
    2. &callback = callback 
        sina 在页面上有一个callback 的函数  等待你的调用
    3. callback({})  JSON + padding  


    xhr /cetch  因运行在沙箱中的js同源机制 无法请求 跨域sina 资源 
    迂回到使用script  标签     有跨域访问资源的能力 http 请求中
    带上  &callback = callback 这个  padding  ，sina  服务器就在json 数据外面包一层callback 函数，将这个带有padding的
    可以在script 得到后运行 的函数   页面上已经准备好了这个函数  从而效果一样
