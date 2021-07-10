var name = "Fasila";

console.log("line number " + name);

function sayHi() {
    console.log(name);
     sayHello();
    function sayHello() {
        var name = "Fasila Asmila";
        console.log(name);
    }
}

sayHi()