var testArray = [2,4,6,1,5,9,8];
console.log(testArray.fill("empty"));

const myNumber = [23, 24,25,26,55,66,77,87,98]

const result = myNumber.filter((num) => (num!=55));

console.log(result);

var users = ["ted", "tim", "ton", "sam","sor", "sod"];

//console.log(users.slice(1, 4));

users.splice(1,3,"hi", "bye");
console.log(users);