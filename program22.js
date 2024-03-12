//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name

products.forEach(element => {
    console.log(element[1]);
});

console.log('-------------------------------');

//2. display product whose price < Rs.50

price = products.filter(pr => pr[2]<50).forEach(
    element=>{
        console.log(element[1]);
    }
)
console.log('-------------------------------');

//3. print price of oreo
console.log(products.find(item=> item[1]=='oreo')[2]);

console.log('-------------------------------');
//4. print costly product name

costly = products.reduce((prod1,prod2)=>
prod1[2]>prod2[2] ? prod1 : prod2)
console.log(costly[1]);

console.log('-------------------------------');
//5. display out of stock product

products.filter(item=> item[3] == 0).forEach(pro=>
    console.log(pro[1]))

console.log('-------------------------------');

//6. sort products based on stock in decsending order
products.sort((pro1,pro2)=>pro2[3]-pro1[3])
.forEach(item=>console.log(item[1]))
console.log('-------------------------------');


//7. print product having maximum available stock
stock = products.reduce((prod1,prod2)=>
prod1[3]>prod2[3] ? prod1 : prod2)
console.log(stock[1]);

console.log('-------------------------------');

//8. is there any product can be purchased by Rs. 10
x = products.some(num=>num[2]<=10);
console.log(x?'yes':'no');

console.log('-------------------------------');
//9. Is there any product in the range of 10 to 30
y = products.some(num=>num[2]>=10 && num[2]<=30);
console.log(y?'yes':'no');

console.log('-------------------------------');
//10. print all products in the range of 10 to 30


products.filter(pr => pr[2]>=10 && pr[2]<=30)
.forEach(
    element=>{
        console.log(element[1]);
    }
)