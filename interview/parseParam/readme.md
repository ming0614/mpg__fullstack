http://localhost:8080?a=1&b=2&c=3&a=4&keyword=%E6%89%8B%E6%9C%BA


1. { } url 所有的数据
2. ? split
3. =
4. {} key:val
5. a 出现过两次
6. keyword 被编码过后， 中文

- 围绕URL的考题很多 
    1. 从输入URL 到看到页面 发生了什么 越详细越好
    2. 跨域问题  协议：域名/路径：端口？查询字符串组成
    3. http/https http2 区别
    4. 如果解析查询字符串为对象

- 如果解析查询字符串为对象
    1. ？后面的查询字符   
    ```
    /.+\?(.+)$/.exec(url)[0];
    
    ```
    正则    ? (.+) 匹配的单元,
    \? 转译 
    exec 执行正则表达式   $1  就是结果 [0]

- 切割=后形成的key：value  使用了es6的数组解构 很nice
    当然之前使用  test 验证 正确性  
    1. a=1 a=4 两项   a=[1,4]
    ```
    //if (key in paramsObj)  老土
     if(paramsObj.hasOwnProperty(key)){
            paramsObj[keyt] = [].concat(paramsObj[key],val)
            // [].concat 跨域把两个值组成数组 并不是意识中的第一个参数也得是数组
            }else{
                paramsObj[key] = val;
            }
    ```
    2. decode

- 解析查询参数的过程 有几个规则
    都需要解码，重复出现 的key 组成数组， 只有key 没有值的默认为true 

- 想去名气 不如通过做总结 写文章 讨论的方式交别人去名企
