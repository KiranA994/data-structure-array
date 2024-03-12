a = [10,5,2,13,58,1];

//  w a prog to find the highest number

highest = a.reduce((prev,curr)=>
prev>curr ? prev : curr);
console.log(highest);

console.log('----------------------------------');

//  w a prog to find the smallest number

lowest = a.reduce((prev,curr)=>
prev<curr ? prev : curr);
console.log(lowest);

console.log('----------------------------------');

//  w a prog to find the sum of all numbers in the given array.

sum = a.reduce((num1,num2)=>num1 + num2)
console.log(sum);