let arr = [10,23,11,2,5,3];

//  write  aprogram to check whether 2 is present in the array

let num = 2;
count = 0;
isPresent = false;
for(y of arr){
    count = count + 1;
    if(num == y){
        isPresent = true;
        break;
    }
}

console.log(count);
console.log(isPresent ? 'present in the array' : 'not present in the array');