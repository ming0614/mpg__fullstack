/**
 * @author mpg
 * @param {any} o 
 * @param {string} type 
 * @return boolean
 */

// const isTypeof =(o,type)=>{
//     if (typeof o ===type)
//     {
//     return typeof o ===type;
//     }
//     else{
//     console.log(Object.prototype.toString.call(o));
//    // return typeof o===type;    //number string......
// //    return getComputedStyle.call(o)=="[object Array]";
//     }
// }
// let a=[1,2,3];
// // let a=()=>{}
// // let a;
// // let a=null;//宁缺
// //null array 有问题
// // console.log(typeof a);
// console.log(isTypeof(a,'null'));
const isTypeof =(o,type)=>{
    if ([ 'number','string','boolean','function'].indexOf(type)>0){
        return typeof o ===type
    }
    else{
    return Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0;
    }
}

    let a=null;
    console.log(isTypeof(a,'null'));