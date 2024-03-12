p = [10, 11, 12, 20, 30];
q = [11, 20, 25, 30, 33];

// write a program to find common numbers between the given two arrays.
isFound =false;
for(n of p){
    for(m of q){
        if(n==m){
            isFound = true;
            console.log(n);
        }
    }
}
!isFound && console.log('no duplicate numbers');

// isPresent = false;
// for(i=0;i<=p.length-1;i++){
//     for(j=0;j<=q.length-1;j++){
//         if(p[i]==q[j]){
//             isPresent = true;
//             console.log(p[i]);
//         }
//     }
// }

// !isPresent && console.log('not Present');