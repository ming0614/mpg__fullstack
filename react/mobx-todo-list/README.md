# react 实战 

    react 全家桶  前端
    react + koa 全栈


    定时应用·
    setInterval js es5
    ->
    react state setState data  响应式
    redux mobx  
    state -> 可以被观察的对象 observerable
    界面更新 单项绑定 -> 响应式
    数据 父组件 -> 传递给子组件


    redux 如果是没有关系 的组件 共享数据和状态 ？
    redux 

    1. 专业的数据管理 redux mobx
    2. 正规的流程 绝对不会出问题，手续 
    action applyTravel
    reducer  -> 纯函数 算账的过程
    store 中央仓库
    local -> 中央 
    new Store 做公司 请财务
    申请 


# mobx 更简单的数据流管理 

1. observerable 观察(组件) 与被观察 (有状态的实例)
2. Store Provider 
    从Store 里去借 redux connect mobx @inject
    HOC
    (store) => {
        this.props.store
        return () => {
            
        }
    }