// var returnedValue = Math.max(2, 4,6,2,66,7);
// console.log(returnedValue);

var myObj = {};
Object.assign(myObj, {a:3, b:4, r:5}, {t:5, e:22, o:33}, {u:99});
console.log(myObj);

// function someOne(a, b){
//     return a + b;
// }
// var myA = [2, 4];
// // console.log(someOne(...myA)); // Spread

// function sumTwo (a, b, ...args){
// const multi = a*b;

//     console.log(args);
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
        
//     }
// return [sum, multi];
// }

// console.log(sumTwo(2,4,1, 5,3));