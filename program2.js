let fruits = ['Apple', 'Orange', 'kiwi', 'Pineaaple'];

console.log(fruits);

for(index=0;index<=fruits.length-1;index++){
    console.log(fruits[index]);
}

for(let i in fruits){
    console.log(i, " ", fruits[i]);
}

for(let y of fruits){
    console.log(y);
}