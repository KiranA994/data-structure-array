// write a program to print duplicate element from the given array

a = [10,20,30,20,30,40,50,60,10];

isPresent = false;
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i] == a[j]){
            isPresent = true;
            console.log(a[i]);
        }
    }
}
// console.log(isPresent? 'present': `not present`);

// truthy operator

!isPresent && console.log('not Present');