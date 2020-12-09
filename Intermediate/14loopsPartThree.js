const names = [
    "youtube",
    "facebook",
    "Insta",
    "netflix",
    "amazon"
]
// for(const n of names){
//     console.log(n);
// }

const symbols = {
    yt: "youtube",
    ig : "insta",
    fb : "facebook",
    lco : "learn Code"
}

for (const n in symbols){
    console.log(`Key is : ${n} and value is : ${symbols[n]}`);
}