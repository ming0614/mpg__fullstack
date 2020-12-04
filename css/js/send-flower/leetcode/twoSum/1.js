//console.log('lettcode,必考之 two Sum')
//手写代码 js 
/*/**
 * @author mpg
 * @date 2020-11-20
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//es5 var
/*const twoSum=function(nums,target){
    //1. 暴力一下
    let arr=[];
    //es6
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]=nums[j]==target){
                arr=[i,j]
            }
        }
    }
    return arr
}
console.log(twoSum([2,7,11,25],9))*/const marge = (nums1, m, nums2, n) => { //箭头函数 es6
    // 把nums2合并到nums1之中
    //[1,2,3,0,0,0]
    //重新排序
    //多定义一个变量
    let current2 = 0; //定义一个指针
    for (let i = nums1.length - n; i <= nums1.length - 1; i++) {
        nums1[i] = nums2[current2++]; //好理解 nums2 有可遍历
    }
   // console.log(nums1);
  // return nums1.sort((a,b) => a - b);
   return nums1.sort((a,b) => b - a);
}

console.log(marge([1,2,3,0,0,0,],3,[2,5,6],3));
