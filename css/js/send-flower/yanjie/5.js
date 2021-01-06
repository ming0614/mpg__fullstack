const dogs = new Map();
const friends = new Map();
friends.set('黄志乾','黄总');
friends.set('何总','鸡毛');
//遍历它
// friends.forEach(function(value,key){
//     console.log(key,value);
//   })
  
//   for(let item of friends.entries()){
//     console.log(item);
//   }
for(const [key,val] of friends){
    //解构
    console.log(key,val);
}

// friends.forEach((val,key)=>console.log(val,key));
const [a,b]=[1,2];
const{ }={"a":1,"b":2};
console.log(a,b);

  
