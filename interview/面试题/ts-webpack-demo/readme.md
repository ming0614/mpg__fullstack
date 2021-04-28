# webpack
1、初始化，把文件变为node模块
2、入口文件 src 创建index.html 挂载点
3、js入口文件 index.ts
4、tsconfig.json 文件

安装 babel依赖
npm install babel-loader @babel/cli @babel/core @babel/preset-env --save-dev
安装webpack依赖
npm i webpack@4.42.1 webpack-cli@3.3.11 webpack-dev-server@3.10.3 --save-dev
安装 ts 依赖
yarn add  typescript awesome-typescript-loader --save-dev
安装css 依赖
yarn add css-loader style-loader url-loader file-loader --save-dev
安装 React react-dom  不需要--save-dev
yarn add react react-dom @types/react @types/react-dom 

编写index.tsx文件 挂载组件 
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

编写组件文件 App.tsx
