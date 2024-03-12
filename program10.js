const arr = [11,10,2,4,3,12]

// Algorithm
// 1) sort the given array
// 2) find the mid = low+up/2
// 3) mid == searchitem - found
// 4) mid > serachitem
//   up = mid - 1
// 5) mid < serachitem
//   low = mid + 1
// 6) repeat still low = up

low = 0;
up = arr.length-1;
count = 0;
searchItem = 11;
isPresent = false;
arr.sort((a,b)=> a-b);

while(low<=up){
    count = count +1;
    mid = Math.floor(low + up)/2;
    if(arr[mid] == searchItem){
        isPresent = true;
        break;
    }
    else if(arr[mid] > searchItem){
        up = mid - 1;
    }
    else {
        low = mid + 1;
    }
}

console.log(isPresent ? `${searchItem} found`: `${searchItem} is not present in the given array`); 
console.log(count);