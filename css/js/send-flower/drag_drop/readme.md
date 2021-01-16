# 字节h5面试题之外Drag and Drop

1. 基础好 细节，能力增长的梯度 
2. 比较复杂的特效

## GitHub 拖拽上传功能

1. 要给拖拽的元素，加dragable，cursor：move
2. 拖拽元素在上空的感觉
3. drag 有三个事件
    JS在前端是基于事件的语言，Event机制 495页
    on +495 DOM Event level
    - drag start
    - drag
    - dragend

    drop 异步
    - dragenter 进入 border dashed classList.add 
    - dragover 
    - leave 离开 classList.remove

    drag + drop 良好用户真体验模拟PAI 比较复杂
    draggable =true 属性
    dragstart darg dragend
    dragenter dragover dragleave +drop
    阻止默认行为， event.preventDefault()
    oForm submit



    作业 ：请完成拖回去