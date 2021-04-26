let a = function (){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('a')
        resolve('ok')
    },1000)
})
}

let b = function (){
    setTimeout(()=>{
        console.log('b')
    },1000)
}
a().then((res)=>{
    console.log(res)
    b()
})
