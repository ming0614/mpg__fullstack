const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:{
        app:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist')  ,//当前目录的绝对路径
        filename:'[name].bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'我要去',
            template:path.resolve(__dirname,'./public/index.html'),
            filename:'index.html'
        })
    ]
}