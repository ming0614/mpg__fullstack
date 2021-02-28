# 字节react 技术栈要求
    - react
        jspang react-router redux
        react hooks class 很少 函数式组件
        ts
    - 讶羽 js 系列
    - 山月 神三元 面试系列
    - leetcode

1. 开发流程 react-hooks+ts 大型项目 webpack
    webpack-cli webpack-dev-server
    webpack-cli 4.0版本与webpack 5有兼容性问题
    安装webpack-cli 3
        1.1 配置开发流程
            -- hot 热更新
        1.2 css--loader style-loader file-loader url-loader
            webpack loader机制 转译 或编译
            mini-css-extract-plugin webpack插件
            awesome-typescript-loader ts->js
        1.3 typescript-loader typescript
            tsconfig.json
        1.4 js babel es6->es5
            @babel/polyfill ?
        1.5 webpack.config.js
         entry -> output
        module test loader


        1.6 src/ index.html  root
2. react react-dom
    ts + react 这才是阿里郎
    npm i @types/react @types/react-dom react的类型约定
    ts 类型化的js
    


- 围绕着name 状态 两个组件开发实现 
    App 父组件   状态 name: defaultUserName
    <!-- this.state = { // Component 
        name: 'defaultUserName'
    } -->
    // react 16 魔法函数 方便   this.  this.setState........
    setName 相当于this.setState({})
    const [name, setName] = React.useState('defaultUserName') 

- react-router  @types/
/about
<Switch>
    path="/" exact
    path="/about"
    path="/about/:id"

    exact 完全一样

- 大型项目的边写风格
    compoentns 提供  index.tsx
    文档一样， 把这个目录的所有组件向外
    输出

- webpack 的优化
    1. entry 可以有多个入口
        引入的文件都可以打包到最后的output中
    2. bootstrap 引入是通过webpack 引入的 
        index.html app.tsx 不用引入
    3. vendor [router, react, react-router-dom]
        lib 不用反复编译， 
        组件是会变的
        不用反复去打包 lib,而业务每次都要打包

