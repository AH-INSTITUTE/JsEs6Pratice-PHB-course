
//Truthy and Falsy values
/**
 * 0
 * ''
 * umdifined
 * null
 * Nan
 * false
 All Make condition to false.
 */
const name1 = '';
 if(name1){
     console.log('condition is true');
 }else{
     console.log('condition is false');
 }
 const name2 = 0;
 if(name2){
     console.log('condition is true');
 }else{
     console.log('condition is false');
 }



// Null Vs Undefined, different ways you will get undefined

let abu;
console.log(abu);//get undifined
function add(num1, num2){//num=10; default value add kora jabe
    console.log(num1+num2);
    //return korle solve hobe but now getting undifined;
}
const res1 = add(13,25)
console.log(res1);


function add1(num4,num3){
    console.log(num4+num3);
    //return 2ta undifined pauya jabe
}
const res2 = add1(13)
console.log(res2);

const premik = {nameA : 'smart', phone: 4523141};
console.log(premik.gf);

let fun = undefined;
console.log(fun);

let age = [2,5,9]
console.log(age[11]);


//double equal (==) vs triple equal (===), implicit conversion
//0 & flase 2tai nagetive value tai compare hobe false but type cheack korle === true hobe
const first = 2;
const sceond = '2';
if(first === sceond){
    console.log('true');
}else{
    console.log('false');
}

//map, filter, find, smart way to run for loop
// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);
const numbers = [3, 4, 5, 6, 7, 8];
// for sqe(element){
//     return element * element;
// }

// numbers.map(function(sqe, index, array){
//     console.log(sqe, index, array);
// });

// const resA = numbers.map(function(sqe){
//     return sqe * sqe;
// });

// const resA = numbers.map(X => X * X);
// console.log(resA);

// const resA = numbers.filter(X => X > 5);
// console.log(resA);


const resA = numbers.find(X => X > 5);
console.log(resA);//1st ektai kei nibe

//Apply map, filter, find on an array of objects

const stu = [
    {id: 21, namee: 'Abu'},
    {id: 31, namee: 'Hasan'},
    {id: 41, namee: 'AAR'},
    {id: 71, namee: 'Amir'}
];
//const namesA = stu.map(s => s.namee);
//const ids = stu.map(s => s.id);
const namesA =  stu.filter(s => s.namee > 40);//find dile 1ta return patitam 1st ta
const ids = stu.filter(s => s.id > 40);
console.log(namesA, ids);


//Scope, block scope, access outer scope variable
let bonous = 20; //global scope
function sum(first, seceond){
    let resB = first + seceond + bonous;
    return resB;
}
const outputA = sum(3,7);
console.log(outputA);

//Closure, encapsulation, private variable
 function stopWat(){
     let count = 0;
     return function() {
         count++;
         return count;
     }
 }
 const clock1 = stopWat();
 console.log(clock1());
 console.log(clock1());
 console.log(clock1());
 console.log(clock1());
 
 const clock2 = stopWat();
 clock1();
 console.log(clock2());
 console.log(clock2());
 console.log(clock1());

 //Array slice, splice, array join elements
 const nums = [1,2,3,4,5,6,7,8];
 //const part = nums.slice(2,5);
 //console.log(part);
 console.log(nums);
 
 const remov = nums.splice(2,5 ,77,88,99);//item aro inje ct kora jabe 
//  console.log(remov);
//  console.log(nums);

 const tog = nums.join('');
 console.log(tog);

 

