
// const arr = [1,2,3,4,4,4,4,5,6,6,,7,7,7]

// console.log(arr.reduce((acc,cur) =>{
//     if(!acc.includes(cur)) {
//         acc.push(cur)
//     }
//     return acc
// },[]))

// 从第二项开始循环
// [1,2,3,4].reduce((acc,cur,index,o) =>{
//     console.log(acc.cur,index,o);
//     return acc + cur;

// },10)
const bills = [
    { type: 'shop', momey: 223 },
    { type: 'study', momey: 341 },
    { type: 'shop', momey: 821 },
    { type: 'transfer', momey: 821 },
    { type: 'study', momey: 821 }
  ];
  console.log(bills.reduce((acc, cur) => {
    // 如果不存在这个键，则设置它赋值 [] 空数组
    if (!acc[cur.type]) {
      acc[cur.type] = [];
    }
    acc[cur.type].push(cur)
    return acc
  },{}))

  