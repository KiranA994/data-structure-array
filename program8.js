//  write a program to print the numbers from the given array whose sum is 6

const arr = [2,3,4,5]
sum = 7;
isPresent = false;
count= 0;
for(i=0;i<=arr.length-1;i++){
    for(j=i+1;j<=arr.length-1;j++){
        count = count + 1;
        if(arr[i] + arr[j] == sum){
            isPresent = true;
            console.log(`(${arr[i]} , ${arr[j]})`);
        }
    }
}

!isPresent && console.log('no such pair');
console.log(count);