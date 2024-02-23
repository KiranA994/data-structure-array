let arr = [10,23,11,2,5,3];

//  write  aprogram to check whether 2 is present in the array

let num = 2;
isPresent = false;
for(y of arr){
    if(num == y){
        isPresent = true;
    }
}

console.log(isPresent ? 'present in the array' : 'not present in the array');