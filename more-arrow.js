const add  = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;

const multiply = (a, b) => a * b;

//no perameter arrow function
const getPI = () => 3.14;

//one perameter
const fiveTimes = num => num * 5;

//multi line arrow function

const doMath = (x, y, z) =>{
    const firstSum = x + y;
    const secondSum = y + z;
    const multiPly  = firstSum * secondSum;
    const result = multiPly / 2;
    return result
}