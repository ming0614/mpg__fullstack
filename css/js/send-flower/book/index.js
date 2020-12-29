function Book(isbn,title,author){
    this.setIsbn(isbn);//private 属性
    // this.isbn=isbn;//public 属性
    // this.author=author;
    // this.title=title;
}
Book.prototype={
    setIsbn(isbn){
        //写点代码
        //isbn 不能this 要可读 private 私有属性,对方的方法内this.调用，但是在外界不能访问
        //js 内不存在private 约定，以_开头的
        if(!this.checkIsbn(isbn))
        throw new Error('ISBN格式有误')

        this._isbn=isbn
    },
    getIsbn(){
        return this._isbn
    },
   checkIsbn(isbn){
       if(!isbn)
       return false
       return /\d{3}-\d-\d{3}-\d{5}-\d/.test(isbn)//  /..../ 里面     \d 数字    [a-z] 字母    ^ 以这开始就行   $ 以这为结束
   }

}
//class 只是语法糖
const jsDontKnow=new Book('978-7-121-29899-8','React全栈','明平贵');
// console.log(jsDontKnow.constructo.__proto__==Book.prototype);
console.log(jsDontKnow instanceof Book);
console.log(Book.prototype.isPrototypeOf(jsDontKnow));
console.log(jsDontKnow.getIsbn());
// jsDontKnow.isbn='d';