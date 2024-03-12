const arr = [[2,49],[34,24],[3,5],[67,15]];

//  write a program to find numbers greater than 25;

// NMethod 1  using nested loop

// for(num of arr){
//     for(n of num){
//         if(n > 25){
//             console.log(n);
//         }
//     }
// }

//  Method 2 using array.flat()
console.log(arr);
a = arr.flat();
console.log(a);
for(n of a){
    if(n > 25){
        console.log(n);
    }
}

console.log('-----------------------------');

const p = [[2,49,[23,24]],[34,24],[3,5],[67,15]];
a = p.flat(3);
console.log(a);