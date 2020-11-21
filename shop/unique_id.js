/**
 * 功能：获得唯一ID
 * @author mpg
 *@return {string}
 *@date 11-21
 */
const uniqueID = () => + new Date() + '' + Math.ceil(Math.random()*10000);//类型转换
   // let ranNum = Math.ceil(Math.random()*10000);
    //return t + "" + ranNum;
console.log(uniqueID());