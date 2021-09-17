const Uno = () => {
   return "I am One";
}

const Dos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ("I am Two");
        }, 3000
        )
    })
  
  
}

const Tres = () => {
return "I am Three";
}

const callMe = async () => {
    let valueTwo = await Dos();
    console.log(valueTwo);

    let valueThree = Tres();
    console.log(valueThree);

    let valueOne = Uno();
    console.log(valueOne);
}

callMe();

