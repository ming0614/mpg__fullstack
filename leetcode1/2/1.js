// 最长有效括号
function longestValid(s) {
    //最长有效匹配括号长度
    var max = 0;
    if ( s.length == 0 || s.length == 1) return max; //没得匹配
    var stack = [];  //使用了栈来实现匹配 空间复杂度O(n)
    //嵌套循环
    //每位括号它的有效匹配长度是可以跟有效匹配是一样的
    for ( var i=0; i < s.length ; i++) {
        var temMax =0; //当前位括号的匹配长度 重新开始
        for (let j = 0; j < s.length; j++) {// 从i开始 自己也算+1
            if ( s[j] == '(') {
                stack.push('('); //入栈
                temMax++;
            }else if (s[j] == ')') {
                if ( stack.length <1) {
                    max = max<temMax?temMax:max;
                    break;
                }else{
                stack.pop();//出栈
                temMax++;
                }
            }

        }
        if ( stack.length == 0) {
            max = max <temMax ?temMax:max;
        }
        if ( stack.length == 1) {
            
        }
        stack=[];
    }
    return max;
}
console.log(longestValid(')()()('));