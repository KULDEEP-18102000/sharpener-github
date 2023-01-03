var obj={num:2};
var student={age:20}

var addToThis=function(a,b,c){
    return(this.num+a+b+c);
}

var printage=function(){
    return(this.age)
}
// console.log(printage.call(student));
// console.log(printage.apply(student));
// var age=printage.bind(student);
// console.log(age());

// console.log(addToThis.call(obj,2,3,4));

// var arr=[2,3,4];
// console.log(addToThis.apply(obj,arr));
// console.log(addToThis.bind(obj,arr));
// var bound=addToThis.bind(obj);
// console.log(bound(1,2,3));

// var multiply=function(x,y){
    // console.log(x*y);
// }

var multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}

var multiplyByTwo=multiply(2);
multiplyByTwo(5);

let multiplyByThree=multiply(3);
multiplyByThree(5)