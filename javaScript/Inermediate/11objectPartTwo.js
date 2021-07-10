var user = {
    firstName : "fasila",
    lastName : "asmila",
    mobileNumber : "8181",
    email:"fasi@gmail.com",
    loginCount : 33,
    FacebookSignIn : true,
    courseList: [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled with ${this.courseList.length} courses
        `;
    },
    info : function () {
        return `${this.firstName} ${this.lastName} has email ${this.email} enroller with ${this.courseList }  }`;
    }
};

console.log(user);
user.buyCourse("react");
user.buyCourse("react native");
console.log(user.getCourseCount());

console.log(user.info());

