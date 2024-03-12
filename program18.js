
a=[10,11,12,13,14,15];

a.forEach(element => {
    console.log(element);
});

console.log('-----------------------------');

//  w a prog to find the square of each items in the given array.

sq = a.map((item)=>item**2);
console.log(sq);

console.log('-----------------------------');


// w a prog to find the cube of each items in the given array

cub = a.map((ele)=> ele**3);
console.log(cub);

console.log('-----------------------------');

//  w a prog to create a new array with numbers<=13 the incerement the number and numbers>13 the decrement the number.
//  [11,12,13,14,13,14]

b = a.map((ele)=> 
    ele<=13 ? ele = ele + 1 : ele = ele - 1)
console.log(b);
