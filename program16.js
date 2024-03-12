a=[10,5,2,13,58,1];

//  w a prog to print all even numbers in the given array;

even = a.filter(num=>num%2==0)
console.log(even);

//  w a prog to find all numbers greater than 10;

num = a.filter(n=> n>10);
console.log(num);

// is there any number greater than 10

x =a.some(num=>num>10);
console.log(x?'yes':'no');