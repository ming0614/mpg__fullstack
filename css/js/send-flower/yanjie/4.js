//es6提供新的数据结构
//1.为了数组的优化而来
// Set Map 两种数据结构
const people=new Set();
people.add('廖辉');
people.add('廖辉');
people.add('明平贵');
people.add('明平贵');
people.add('明平贵');
for(const person of people){
    console.log(person)
}
// console.log(people);
const students=new Set(['廖辉主任','鸡毛副主席','黑子主席']);
students.add('明队');
console.log(students);