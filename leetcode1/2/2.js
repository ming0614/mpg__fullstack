function longestValidP(s) {
    //时间复杂度O(n)
    var max = 0; //最大长度初始化位0
    if (s.length == 0 || s.length == 1) return max;
    //下标的减法就是长度
    var stack = [-1]; //栈来服务于有效括号匹配 刚开始匹配的
    for ( var i = 0; i< s.length; i++) {  //下标法只要遍历一次
        if (s[i] == '(') {
            stack.push(i);//i是下标
        }else {
            stack.pop();
            if (stack.length < 1) {
                stack.push(i);  //栈顶元素都没有了，那么前面的有效匹配结束了
            }else{
                max = Math.max(max,i-stack[stack.length-1])
            }
        }
        satck = [];
    }
    return max;
}
console.log(longestValidP('(()()(((()()))'));
console.log(longestValidP(')()()('));