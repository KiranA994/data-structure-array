p = [10, 11, 12, 20, 30];
q = [11, 20, 25, 30, 33];

// write a program to find common numbers between the given two arrays.

low = 0;
up = 0;
isPresent = false;

while(low <= p.length-1 && up <= q.length-1){
if(p[low] == q[up]){
    isPresent = true;
    console.log(p[low]);
    low = low + 1;
    up = up + 1;
}
else if(p[low]<q[up]){
    low = low + 1;
}
else{
    up = up + 1;
}
}

!isPresent && console.log('no common numbers');