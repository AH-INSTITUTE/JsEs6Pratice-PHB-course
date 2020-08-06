//let lick korbe na ar var scope chaira globaly kaj kore eitau sikhlam hihihih
function sum(num1, num2){
    return num1 + num2;
}
const total = sum (15,36)
console.log(total);



function sum1(num1, num2){
    if(num2 == undefined){
        num2 = 1;
    }
    return num1 + num2;
}
const total2 = sum1(15)
console.log(total2);




function sum2(num1, num2){
    num2 = num2 || 2;
    return num1 + num2;
}
const total3 = sum2(15)
console.log(total3);




function sum3(num1, num2 = 3){
    return num1 + num2;
}
const total4 = sum3(15)
console.log(total4);



//Template string, multiple line string

//Template
const fName = 'Abu';
const lName = 'Hasan';
const fullName = fName+ ' ' +lName+' is a best programmer';
const fullName2 = `${fName} ${lName} is a best learner`
const fullName3 = `${fName} ${lName} ${10+20} is a best learner`
console.log(fullName);
console.log(fullName2);
console.log(fullName3);

const multiline1 = 'I love You'
    +'i Miss don\'t miss you'
    +'dhur miya fajlami koro';
    console.log(multiline1);

const multiline2 = 'I love You\n'
    +'i Miss don\'t miss you\n'
    +'dhur miya fajlami koro\n';
    console.log(multiline2);

const multiline3 = `
    I love You
    i miss you 
    i hate you
    `
    console.log(multiline3);


// const dobuleIt = function myFun(num){
//     return num * 2;
// }
// const dobuleIt = num => * 2;// 1line  function arrow fat function
// const res =  dobuleIt(5);
// console.log(res);
const add = (x,y) => x + y; 
const res = add(5,6);
console.log(res);
const add1 = () => 5;
const res2 = add1();
console.log(res2);



const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const res = sum * diff;
    return res;
}
const res3 = doMath(5,10);
console.log(res3);

//Spread operator, concatenate multiple arrays, array max
//...  spread oparate


// 1. Fill in the blank to get the maximum number in the array:

// const nums = [2, 5, 1, 7, 8, 33, 29];

// const largest = Math.max(
// ____?____
// );

const nums = [2, 5, 1, 7, 8, 33, 29];
const larg = Math.max(...nums);
const min = Math.min(...nums)
console.log(larg +' Large Number of an array');
console.log(min + ' min number of an array');


//Class, constructor, create object from class


