1. npx 创建react项目
2. 不同的需求项目结构如何，要清楚
    - 简单
        components + api + model （跨文件取接口）  ts 的自定义类型type  接口 model
        1. API promise<MemberEntity[]>
            服务器端返回数据的类型
        2. 显示某一个用户 子组件
            props ：MemberEntity
    - 全家桶 比较全面而复杂的应用时 SPA  单页应用
    react/raect-dom  + react-router/react-router-dom + redux/react-redux|mobx

    components + pages(store) + store + api + routes

    - 自定义构建流程
        webpack babel


    - 全栈项目 
    egg.js + raect + mysql 
    前端 didi-frontend  create-react-app 创建
    后端 didi-backend egg init 搭建
    数据库 db migration(迁移) + database/table(索引) + seeds (初始化数据



    - SSR 项目 服务器端渲染
        SEO(搜索引擎优化)  掘金
        SPA #root bunle.js 组件 + 数据状态