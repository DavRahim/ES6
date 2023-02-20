const max = Math.max(22,5,8,5,34)
// console.log(max);

const number = [70, 50, 50, 30, 20, 99]

const largest = Math.max(...number);
console.log(largest);


const number2 = [...number];
 number.push(44)
number2.push(55)
 console.log(number2)
 console.log(number);

 const number3 = [99, 99, 33, 33, ...number, 8658];
 console.log(number3)