数组去重  reduce 贪吃蛇
const arr = [1,2,3,4,4,4,4,5,,6,6,,7,7,,7]

console.log(arr.reduce((acc,cur) =>{
    if(!acc.includes(cur)) {
        acc.push(cur)
    }
    return acc
},[]))