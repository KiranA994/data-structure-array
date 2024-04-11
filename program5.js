let arr = [4,5,6];

//  11, 10, 9

console.log(arr);

sum = 0;
x=[];

for(let y of arr){
    sum = sum + y;
}

for(let i of arr){
    x.push(sum-i)
}
console.log(x);
