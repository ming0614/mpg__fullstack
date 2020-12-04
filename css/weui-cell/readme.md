# css 的程序性

-BEM
    Block weui-cell 项目名字 xp-
-stylus
    css 有太多规则
    stylus 是css的超集，可以编译成scc
    -省去了 {:;} 上高速
    -stylus -w cell.styl -o cell.css
        写的是styl文件，html无法显示， -o 编译一下， cell.css -w 边写边编译 

-弹性布局 flex
    1.如何启用的呢？
    display:flex|inline|block|inline-block
    弹性布局设置在父元素上，启动了新的空间
    原有的盒子属性被打破了
    .weui-cell(display:flex)>新的空间，原有块级能力被干掉 .weui-cell_bd(flex:1主元素)+.weui-cell_hd(辅元素)
