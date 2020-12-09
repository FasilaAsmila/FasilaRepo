var user = {
    firstName : "fasila",
    lastName : "asmila",
    role: "admin",
    loginCount: 32,
    facebookSignedIn : true,
    courseList: [],
    buyCourse: function (courseName) {
    this.courseList.push(courseName);
    },
    getCourseCount: function () {

        return `${this.firstName} ${this.role} is enrolled in total of ${this.courseList.length} courses`;
    },


};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("react");
console.log(user.getCourseCount());
