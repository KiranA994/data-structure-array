//  write a program to print the numbers from the given array whose sum is 6

const arr = [2,3,4,5]

low = 0;
up = arr.length-1;
searchItem = 7;
isPresent = false;
count = 0;
while(low < up){
    count = count + 1;
    sum = arr[low] + arr[up];
    if(sum == searchItem){
        isPresent = true;
        console.log(`(${arr[low]},${arr[up]})`);
        low = low + 1;
        up= up - 1;
    }
    else if(sum > searchItem){
        up = up - 1;
    }
    else {
        low = low + 1;
    }
}
!isPresent && console.log('no such pair');
console.log(count);