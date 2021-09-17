
const User = require("./06Classesjs.js");

const fasila = new User("fasila", "fasila@gmail.com");

console.log(fasila.getInfo());

fasila.enrollCourse("react");
fasila.enrollCourse("html");
console.log(fasila.getCourseList());

let courses = fasila.getCourseList();

courses.forEach((c)=>console.log(c));

var courseCount = courses.length;

console.log(courseCount);