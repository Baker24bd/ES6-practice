// 1. poddoti
// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(25);
// console.log(result);

// 2. poddoti
// const doubleIt = function myFun(num){
//     return num * 2;
// }
// const result = doubleIt(25);
// console.log(result);

// ES6 poddoti
const doubleIt = num => num * 2;
const result1 = doubleIt(50);
console.log(result1);


const add = (x, y) => x + y;
const result2 = add(20, 40);
console.log(result2);

const give5 = () => 5;
const result3 = give5();
console.log(result3)


// boro function kaj kora
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x -y;
    const result = sum * diff;
    return result;
}
// doMath (value 7, 5) ai value gulu age * gun hobe pore + jug hobe,,,,jemon: 7*2=14, 5*2=10 2tar jugpol hobe 24;
const result4 = doMath(7, 5);
console.log(result4);