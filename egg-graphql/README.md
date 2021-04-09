面试的时候可以吹水， 


后端node  /api 开发   Restful
一切资源 资源的状态转换   不同的HTTP动词来应对

但是 虽然现在还是主流 已有替代方案  更高前端数据需求的GraphQL 来了

1. egg.js + mysql CRUD 做出来   RESTFUL  /users  用户列表
    - mysql 驱动 plugins  非常好， 
    mysql2 更方便 的驱动MySQL
    sequelize  cli 从生成表到数据迁移 -》 model 合成 
2. egg.js + graphql  做的更漂亮



- 以插件及配置的方式，将mysql 的操作交给了sequelize 来处理 
- 数据库创建
- 数据迁移，建表 加种子数据 都不需要写sql
    加速  我们要会mysql 但是还是要交给专业的数据库工程师DBA
    sequelize 可以让我们更加规范数据库的操作流程 且更简单
- sequelize-cli 规范数据库迁移的工作
    命令行 工具  写命令

- 数据库开发的时候， 建表  加点假数据  模型文件 mvc 
    sequelize 规范 migrations  一切操作留下痕迹  以后有没有加字段  为什么要加
    什么要加 git  一样留下版本
- sequelize 有几步
    init:config 初始化得到配置文件
    init:migrations migrattions文件夹
    npx sequelize migration:generate
    --name=init-users  数据库迁移 加表 加字段
    npx sequelize db:migrate 执行迁移
    只要复制，创建表只要写 JSON就可以 

    