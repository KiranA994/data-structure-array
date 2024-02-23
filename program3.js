let expense = [12000, 23000, 40000, 34000, 55000, 22000, 10000];

// find the lowest expense
// find the highest expense
// find the total expense

let low = expense[0];
for (const y of expense) {
    if(y<=low){
        low = y;
    }
}
console.log(low);


let high = expense[0];
for (const y of expense) {
    if(y>=high){
        high = y;
    }
}
console.log(high);


let sum = 0;
for (const z of expense){
    sum = sum + z;
}
console.log(sum);