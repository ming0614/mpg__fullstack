// let a =  ?
// var a = [1,2,3];
// a.join = a.shift;//其中一种

const a= {
    i:0,
    valueOf: function (){
        return ++a.i;
    }
}
console.log(a == 1 && a ==2 && a == 3)//true?