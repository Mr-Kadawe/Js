console.log(sum(88,19));
// alert("Hello! Developers Welcome JS");
// confirm("Diyaar ma utahay Su'al ? ");
// prompt("Imisa Sanaa jirtaaa ?") 

// javascript datatype (string, numbers, boolean, object and etc)



// string 
// var n = "Abdi Ali";
// document.write(n);
// // =  assignment opertors
// var n = "Mohamed";

// // document.write(n);
// document.write("<br>",n);



// let n1 = "Abdirahmaan";
// document.write("<br><br>",n1);
// n1 = "Abdullahi Mohamed";
// document.write("<br>",n1);

// const sahal = "Sahal ICT Solution";
// console.log(sahal);

// var n_ = 80;

// // prompt and confirm
// confirm("Diyaar matahay ?");
// let name_ = prompt("Magacaa ?");
// let phone_ = prompt("Telephone No ?");
// let country_ = prompt("Wadankaada ?");
// let age_ = prompt("Imisa Jirtaa ?");

// console.log("Name : ",name_);
// console.log("Phone : ",phone_);
// console.log("Country : ",country_)
// console.log("Age  : ",age_);

// console.log("Name is : ",name_ , "Phone is : ", phone_ , "Country is  : ", country_ , "Age is : ", age_);


/*  19/01/2023  */


const n = 90;
let n1;
var n2;

// n = 99;

// n1 = 130;
// n2 = 55;

console.log(n);

// String Opertor
 n1 = "have A nice";
 n2 = "day hon";

//  n1 = n1, n2;
//  n1,n2 = n1,n2;
// n3 = n1,n2

// n1 += n2; // short
n1 = n1 + " - " + n2; // long  

 console.log(n1);
//  console.log(n1,'-',n2);

// Arithmatic Opertors
//  + ,/ , -, *, %, ++, --,

// addition + 
n1 =  40;
n2 = 23;

// let  n3 =  n1 + n2;
n2 += n1; 
console.log("Add ",n2);

// Substraction  -
n1  =  60;
n2 = 27;

n1 -= n2;

console.log("Substraction ", n1);
// console.log("Sub", n1-n2);

// multiplication
n1 = 33;
n2 = 5;

n1 *= n2;

console.log('Multiplication ', n1);
// console.log('Mult ', n1*n2);
// Module (Division Remainder)
n1 = 60;
n2 = 40;

console.log("Module(Remainder) ", n1 % n2);

n1 = 60;
n2 = 70;

console.log("Module(Remainder 1) ", n1 % n2);

n1 = 55.6;
n2 = 54;

console.log("Module(Remainder 1) ", n1 % n2);
n1 = -55;
n2 = 50;

console.log("Module(Remainder 1) ", n1 % n2);

n1 = 55;
n2 = -50; 

console.log("Module(Remainder 1) ", n1 % n2);


// 2023-01-20

// increment 
//  post increment n1 ++
//n pre_increment ++n1;
n1 =  55;
console.log(n1++);

console.log(n1++);

console.log(++n1)
// console.log(n1)

// Decrement Assignment

//  multiple Arithmetic Calculate( + , - , * , / , % )

let num1 = 88;
let num2 =  56;
let num3 =  23;

let res = num1 + num2 - num3 ;

console.log(res);

 num1 = 13;
 num2 = 7;
 num3 = 6;
 
// res = ( num1 + num2 ) * num3;
res =  num1 - num2  * num3;
console.log(res)

num1 =  90;
num2 = 90;
num3 = 4;
let num4 = 7;

res = num1 * num2 - num3 / num4; // 90 * 90 - 0.57 => 8099.43

console.log(res);

num1 = 55;
num2 =  56;
num3 = 87;
num4 = 11;

res =  num1 - num2 * num3  %  num4;  

console.log(res);

// 26/01/2023
console.log("Example Comparison");
// comparison
// == Equal to

let x = 5;
console.log(x == 8);
console.log(x ==  5);
console.log(x ==  "5");

// === equal value and equal type 
console.log("..... === equal value and equal type")
console.log(x ===  8);
console.log(x === 5);
console.log(x === "5");

// != not equal 
console.log("................... != not equal");
console.log(x != 8);
console.log(x != 5);
console.log(x !=  '5');

console.log("....... !== not equal value and not equal type");
console.log(x !== 8);
console.log(x !== 5);
console.log(x !== '5');

console.log("... > greater than ");
console.log(x > 8);
console.log(x > 5);
console.log("... >= greater than or equal ");
console.log(x >= 8);
console.log(x >= 5);

console.log("... < less than  and <= less than or equal");

// conditional Statement if, else and else if

if(x == 5){
    console.log("Statement is true x = ", x );
}else{
    console.log("Statement is false");
}

console.log(".......");
if(x == 7)
{
    console.log("Statement is true x = ", x);
}else if(x == 5)
{
    console.log("else if Statement is true x = ", x);
}else{
    console.log("Statement is false!");
}

console.log("............");
if(x == 1){
    console.log("Statement is true x = ", x);
}else if(x == 6)
{
    console.log("Statement - 2   is true x = ", x);
}else if(x == '5')
{
    console.log("Statement - 3 is true x = ", x);
}else if(x == 90)
{
    console.log("Statement - 4 is true x = ", x);
}else{
    console.log("Statement is false! value is ", x);
}

console.log("........... === equal value and equal type")

if(x === '5'){
    console.log("Statement is true Value is ",x );
}else if(x === 5){
    console.log("Statement - 2 is true x = ", x);
}else{
    console.log("Statement is false!");
}

let nu =  45;
console.log(typeof nu);
nu = "45";
console.log(typeof nu);
nu = false;
console.log(typeof nu);

let num5, num6 = 90, num7 = 99;
const nn = 0.14, nm = 89, mn = 67;

num5 = 5;

num5 += num6 + num7; 

console.log(num5);

// 27/01/2023
// Logical Operator -- (&& AND ) -- ( ||  OR) -- ( ! NOT )
console.log("...... Logical Operators");
let l1 = 6;
let l2 =  4;

console.log(l1 < 10 && l2 > 2);
console.log(l1 > 10 && l2 > 2);

console.log("......... || OR")
console.log(l1 < 10 || l2 < 2);
console.log(l1 > 10 || l2 < 2);

console.log('.... ! NOT');
console.log(!(l1 == l2));
console.log(!(l1 > l2));

if(l1 != l2){
    console.log("L1 is", l1 ,"L2 is", l2);
    if(l1 < l2){
        console.log("Nested If Statement  L1 is", l1 ,"L2 is", l2);
    }else{
        console.log(" Nested If Statement False!");
    }
}else{
    console.log('Statement False!');
}


// confirmation if statement
// if(confirm("Diyar Mautahay Inan Su'aal Kuweydiino ?"))
// {
//     let avg = prompt("Enter Your Average Exam");  
//     // document.write(avg);  

//     if(avg > 100){
//         document.write("Invalid Average Please try again!");
//     }else if(avg <= 100 && avg > 95){
//         document.write("Your Grade is A+")
//     }else if(avg <=  95 && avg >= 90){
//         document.write("Your Grade is A")
//     }else if(avg <  90 && avg >= 85){  
        
//     }else{
//         document.write("invalid")
//     }
    

// }else{
//     document.write("Thanks For Your Response");
// }

// 02/02/2023
// switch statement
let date = new Date();
console.log(date);

let today =  date.getDay();
console.log(today);
// today = 1;
switch (today) {
    case 1:
        console.log("isniin")
        break;
    case 2:
        console.log("Talaado");
        break;
    case 3:
        console.log("Arbaco");
        break;
    case 4:
        console.log("Khamiis");
        break;
    case 5:
        console.log("Jimco");
        break;
    case 6: 
        console.log("Sabti");
        break;
    case 7:
        console.log("Axad");
        break;

    default:
        console.log("Invalid Day");
        break;
}
 
// loops ( for, while and do-while loop);

// for loop ( start(declare variable and initialization); condition; driving(increment or decrement));

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10"); 

let num = 20;
for (let i = 1; i <= num; i++) { 
    console.log(i);
}

//   way 2 to write for loop
console.log("way two to write for loop");

let num_1 = 15; 
let i ;
for(i = 1; i<= num_1; i++)
{
    console.log(i);
}
//   way 3 to write for loop
console.log("way Three to write for loop");

let num_2 =  30;
let index = 1;

for( ; index <=  num_2 ; index++){
    console.log(index);
}


// decrement for loop
console.log("decrement for loop");

for(let i = 15; i > 0; i-- ){
    console.log(i);
}



//  tiro kizi io dhaban
console.log("..............");
let n_1 = 20;

for(let i = 1; i < n_1;  i+=2 ){
    console.log(i);
}

console.log(".............");
for(let i = 0; i <= n_1 ; i+=2){
    console.log(i)
}

// decrement  with odd and even

console.log("decrement  with odd and even");

for(let i = 11; i > 0; i-=4 ){
    console.log(i);
}
console.log("...........");
for(let i = 10; i > 0; i-=2 ){
    console.log(i);
}


// 03/02/2023

// example new Date()
console.log("..........");
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.setHours(9));
console.log(date.setMonth(2));


// // Infinite Loop

// let s = 0;
// for (let index = 20; index >= s; index++) {
//     console.log(index);
// }



// let b = 20;
// for (let index = 0; index <= b; index--) {
//     console.log(index);
// }


// while Loop
console.log("while Loop");
// let w = 15;
// let indx = 0;

// while (indx <=  w) {
//     console.log(indx);
//     indx++;    
// }

// 
// console.log('..............');
// let r = 15;
// let dx = 0;
// while(dx <= r)
// {
//     // dx++; //-- infinite Loop 
//     // ++dx; // plus 1 before console (pre_incremenjt)
//     console.log(dx);
//     // dx++; // plus 1 after Console(post_increment)
   
// }


// 09/02/2023

console.log("do while loop");
let num_4 = 23;

let d1 = 0;
// increment
console.log(".... increment");

do {
    console.log(d1);
    d1++;
} while (d1 <= num_4);



// decrement
console.log(" ------- decrement");
let d = 100;
do {
    console.log(d);
    d--;
} while (d >= num_4);



// javascript Array
console.log("---- javascript Array");
let Arr = Array("Ali","Abdullahi","Hassan",905858);

let array = ["Abdirahman",  "Abbdicasiiz",  "Faadumo" ];

console.log(Arr[1]);
console.log(array[1]);
console.log(array[2]);
// document.write(Arr[0],"<br>",Arr[1],"<br>",Arr[2]);

let cars = [] ;
// let cars = Array();
cars[0] = "BMW";
cars[1] = "Toyota";
cars[2] = "Mercedes";

console.log(cars);
console.log(cars.length);  
console.log(Arr.length);

//Array  for loop
console.log("Array  for loop");
for(let i= 0;  i < cars.length; i++)
{
    console.log(cars[i]);
}

console.log("............");
for(let i = 0; i < Arr.length; i++){
    console.log(Arr[i]);
}

//Array while Loop  Assignment

// Array Methods

console.log("............");
// Push (add )
Arr.push("Mahad","Farah");
console.log(Arr);

// unshift (add)
Arr.unshift("Hassan","Sahal");
console.log(Arr);

// pop (remove)
Arr.pop();
console.log(Arr);

// Shift (Remove)
Arr.shift();
console.log(Arr);

// Splice ( Delete, Insert replace)
Arr.splice(2, 1 ,"Mohamed","Farhan");
console.log(Arr);
Arr.splice(2, 2 ,"Abdullahi");
console.log(Arr);

// Sort Order by assending
Arr.sort();
console.log(Arr);

// Reverse
Arr.reverse();
console.log(Arr);

console.log("-----For Loop");

for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]); 
}
 
// 16/02/2023
// java Script function  
 console.log("java Script function");
// console.log(sum(50,2))

 function sum(p1,p2,p4) {
    let sum = p1 + p2;
    return sum;
 }
let fun = sum(4,5);
 console.log(fun);

console.log("...function 2....");

function sum1(p1,p2,p3 = 0){
    return p1 + p2 + p3;
}

console.log(sum1(55,3,7));

console.log("...function 3....");

console.log(mult(3,12));
function mult(n1, n2, n3 = 2){
    return n1 *  n2 * n3;
}

console.log("..Function Without name(Anonymous Function)...");

let my_fun = function(p1,p2,p3 = 1){
    return p1 + p2 - p3;
}
console.log(my_fun(89,20,11));



console.log("..Function Without Parameter...");

function  with_out(){
    let n1 = 60 , n2 = 40, n3 = 40, n4 = 10;
    let result = n1 - n2 / n3 * n4;
    return result;

    //return 60 - 40 / 40 * 10;
    
}
console.log(with_out());

//  17/02/2023
console.log('..... Arrow functions.... => ');

// not arrow function this cose only example function
// const myFun = function(a,b){
//     return a-b;
// }
// console.log(myFun(30,23));

const myFun = (a, b, c) => {
    return a*b/c;
}

console.log(myFun(40,3,4));

console.log("... Another way arrow Function Write");

let Fun = (a,b,c,d) => a - b + c * d;

console.log(Fun(4,5,6,5));

let b = (a,b, c = 2) => a+b*c;
console.log(b(4,5));


// foreach javascript

console.log("...ForEach  ...");

let arrays  = ['Mahad',"Liiban","Ali","Abdullahi","Hassan","Abdirahmaan"];

// console.log(arrays);

arrays.forEach(function(item){
    console.log(item);
})

console.log("..........");

arrays.forEach(function(item, index){
    console.log(index,item);
})

console.log("......");

let test = function(item, index){
     //return item, index;
    console.log(index,item)
}
arrays.forEach(test);


console.log("......... Arrow Function");
arrays.forEach((item)=>{
    console.log(item);
})

console.log("............");

arrays.forEach((item,index)=> console.log(index,item));

arrays.push("Farhaan");
arrays.unshift("Mohamed");

arrays.shift();
 let s = '';
console.log("............");
arrays.forEach((item)=>{
    s += item + " "; 
    
})
console.log(s,' ');
document.write(s);


console.log(".........");

let amount = [90,88,23,34,56];
let result = 0;

amount.forEach((value)=>{
    result += value;
})

console.log(result);
