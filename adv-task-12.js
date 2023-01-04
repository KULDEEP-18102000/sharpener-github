//this for global
// this.table='window table';

//this inside function
// const cleanTable=function(){
//     console.log(`cleaning ${this.table}`);
// }
// cleanTable.call(this);

// this.garage={
//     table:'garage table',
//     cleanTable(){
//         console.log(`cleaning ${this.table}`)
//     }
// }
// this.garage.cleanTable();

// //this inside object and method
// let bobyRoom={
//     table:'bobytable',
//     // cleanTable(){
//     //     console.log(`cleaning ${this.table}`)
//     // }
// };
// bobyRoom.cleanTable()

//this inside innerfunction
// const cleanTable=function(soap){
//     // const that =this
//     const innerfunction=function(){
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
//     innerfunction.call(this,soap);
// }
// cleanTable.call(bobyRoom);

//this inside constructor
// let createRoom=function(name){
//     this.table=`${name} table`
// }
// createRoom.prototype.cleanTable=function(soap){
//     console.log(`cleaning ${this.table} with ${soap}`)
// }

// const kuldeepRoom=new createRoom('kuldeep');
// kuldeepRoom.cleanTable('some soap');

// //this inside class 
// class createRoom{
//     constructor(name){
//         this.table=`${name}s table`
//     }
//     cleanTable(soap){
//         console.log(`cleaning ${this.table} with ${soap}`)
//     }
// }

class student{
    static no_of_students=0;
    constructor(name,age,phone_number,board_marks){
        this.name=name
        this.age=age
        this.phone_number=phone_number
        this.board_marks=board_marks
        student.no_of_students+=1
    }
    eligibility(){
        if(this.board_marks>=40){
            console.log("eligible")
        }
        else{
            console.log("Not eligible")
        }
    }
    get_total_students(){
        console.log(`${student.no_of_students}`);
    }
    eligible_for_placements(min_board_marks){
        return (min_age)=>{
            if(this.board_marks>min_board_marks && this.age>min_age){
                return true
            }else{
                return false
            }
        }
    }
}

s1=new student("kuldeep",22,8120,50);
s2=new student("astitva",19,1017,70);
s3=new student("kartavya",23,1030,20);
s4=new student("sahdev",21,1042,30);
s5=new student("divyanshu",20,1023,60);

var all_students=[s1,s2,s3,s4,s5];
for(var i=0;i<5;i++){
    if(all_students[i].eligible_for_placements(29)(19)==true){
        console.log(all_students[i].name)
    }
}

// console.log(s1.name);
// s3.get_total_students();

// var getA=function(a){
//     return a;
// };

// var getA=a=>a;
// let square=(a)=>{return a*a};
// var x=function(){
//     var that=this;
//     this.val=1;
//     setTimeout(function(){
//         that.val++;
//         console.log(that.val);
//     },1)
// }
// var xx=new x();

// var x=(...n)=>{
//     console.log(n[1])
// }
// x(1,2,3);