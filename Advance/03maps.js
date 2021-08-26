var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Uno");
myMap.set(3, "Uno");
myMap.set(4, "Uno");
myMap.set(5, "Uno");

console.log(myMap);

// for (let key of myMap.keys()){
//     console.log(`key is ${key}`);
// }

// for (let value of myMap.values()){
//     console.log(`value is ${value}`);
// }

// for (let [key, value] of myMap){
//     console.log(`key is ${key} and value is ${value}`);
// }

myMap.forEach((k , v) => console.log(`${k} and value is ${v}`));