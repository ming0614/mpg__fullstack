// function duplicateCount(word){
// //Map   JSONObject
// let map={};
// let count=0;
//     for(let i=0;i<word.length;i++){
//         let char=word[i];
//         if(char in map){
//             count++;
//         }else{
//             map[char]=1;
//             }
//         }
//         return count;
//     }


//  console.log(duplicateCount('aadsdjfwuhh'));
function duplicateCount(word){
    //es6里定义的新的数据结构有哪些  Map
    let map = new Map();//es6提供的数据结构   HashMap
    // key=>value for o(n)   0(1)  Redis ElasticSearch
    //时间复杂度
    for(let char of word){
    if(map.has(char)){
        map.set(char,map.get(char)+1);
    }
    else{
        map.set(char,1);
    }
    }
    return map
}
console.log(duplicateCount('aadsdjfwuhh'));

