// executor 执行器的实现
// 状态的转移 
// thenable 
// 如何让执行器决定状态转移的处理
class Promise{
    constructor(executor){
        this.state='pending';//初始化未完成状态
        //成功的值
        this.onRejectedCallbacks = [];
        this.onResolvedCallbacks = [];
        this.value=undefined;
        //失败的原因
        this.reason=undefined;
        // 异步任务会把结果交给resolve
        let resolve=(value)=>{
            console.log(value,'-----')
            if(this.state=='pending'){
                console.log('fulfilled 状态被执行')
            this.value=value;
            this.state='fulfilled';
            this.onResolvedCallbacks.forEach(fn => fn());
            // 把onFulfilled 执行一下   记忆
            }
        }
        let reject =(reason)=>{
            if(this.state=='pending'){
                console.log('rejected 状态被执行')
                this.reason=reason;
                this.state='rejected';
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }
        try{
            executor(resolve,reject);
        }catch(err){
            reject(err)
        }
    }
    // 一个promise解决了, 完成了状态转移,把控制权交出来

    then(onFullfilled,onRejected){

        console.log('then .....')
        // 状态为fulfilled时,传入成功后的回调,将执行权转移
        if(this.state=='fulfilled'){
            console.log('onFulfilled,=========')
            onFullfilled(this.value);
        }
        // 状态为rejected,传入失败后的回调
        if(this.state=='rejected'){
            onRejected(this.reason);
        }
        if( this.state == 'pending'){
            this.onResolvedCallbacks.push(() => {
                onFullfilled(this.value);
            })
            this.onRejectedCallbacks.push(()=> {
                onRejected(this.reason);
            })
        }
    }
}
new Promise((resolve,reject)=>{
    // 将时间比较多的任务封装起来,以实现异步变同步
    setTimeout(()=>{
        //console.log(0);
        resolve('10');
        //语法错误
        //throw new Error('出错了');
    },1000)
}).then((data)=>{
    console.log(data,'++++++++');
})
