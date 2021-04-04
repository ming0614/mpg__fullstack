# DOM-diff  阿里等级别公司发offer 的前奏题




- 读源码的方法
    1. 边写边读  聚焦主题
        React 不用 DOM  二十  MVVM  ？
        DOM 性能不行  频繁  重绘重排。。。
        虚拟 DOM Virtual DOM  内存之中做？
        组件树  =》 DOM树  内存中的操作 相比浏览器中一堆事 更快
        n叉树  内存树中的修改 累计完成了后  一次性再真实的DOM中修改 ，提高效率
        内存中的两颗树进行比较的算法DOM-DIFF  prevState newState   
    2. 先通俗理解
        状态是在改变的， useState 状态驱动界面  不是DOM 操作来驱动
        底下的
        内存中 创建一个虚拟DOM ？ 树
        经过状态改变后 创建一颗新的状态的VirtualDOM
        这两颗树进行比较时 （树的差找，节点的比对）
        修改的集合
        一次性的 同步到真实DOM 中


- 如何把DOM用virtualDOM 来表示
<ul>
    <li className="item">泰勒斯威夫特<li>
    <li className="item">董卿<li>
</ul>
<ul>
    <li className="item current">泰勒斯威夫特<li>
    <li className="item">董卿<li>
    <li>王燕杰<li>
</ul>
[
    {attr:'current'}
    {appendChild: document.createElement('li')}
]

- 首先我们GET 了虚拟DOM 树的表现形式 递归JSON 
```
{
    tag:'ul'
    props:{
        class:'list'
    },
    children:[{
        tag:'li',
        props:{
            class:'item'
        },
        children:['泰勒斯威夫特']
    }
    ]
}
```

- 利用createElement\setAttribute\appendchlid
    将在内存中生成虚拟DOM树


- 首次渲染
    