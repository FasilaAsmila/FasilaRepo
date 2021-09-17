class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo(){
        return {name: this.name, email: this.email};
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }

    login(){
        return "ur logged in";
    }

}

class SubAdmin extends User{

    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am subadmin";
    }

}


module.exports = User;

const rock = new User("rock", "rock@rock.com");
//console.log(rock.getInfo());
rock.enrollCourse("angular");
//console.log(rock.getCourseList());
// console.log(rock.courseList);

const tom = new SubAdmin("tom", "jerry@gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());