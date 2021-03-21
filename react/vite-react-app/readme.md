nvm 一台电脑node 多版本 作业

- vite 正在干掉webpack
 快 vue3

 ：3001 前端项目 react
 - ：3000  music sdk API
    跨域访问 端口不一样也叫跨域
 - 前后端分离
    ：3000/banner展示到页面上
    [{
        imageUrl:
    }]
    1. axios  API 从后端到前端src/api :3000/banner
    API 模块 /banner  =》 请求后端
    /singers 歌手列表
    2. store action getBannerList
    axios API
    3. 组件


- redux 引入的标准流程
将单一状态树引入组件开发流程
1. 安装 
    redux-thunk 是支持异步action 操作的中间件
2. 目录 store
export default store
createStore(reducer) 
reducer 比较复杂，可以是模块化的 combineReducers
applyMiddlewares  中间件服务 redux-thunk redux-log..
3. reducer 过日子业务
    - 形式 纯函数  返回状态
    - 放哪里 store/

store 提供给Provider -> App 组件
connect ({state 要哪些，dispatch })
(Component) HOC 不需要每个组件都自己去
store connect
store createStore（reducer 来自很多模块）
{reducer函数 action组合}
bannerList reducer 函数 getBannerList
action


