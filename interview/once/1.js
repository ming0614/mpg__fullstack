// 函数 console.log 函数执行了  返回值记忆起来
const f = () =>{
    console.log('call');
    return 3;
}
function once(f){
    let result
    let revoked = false
    f()
}