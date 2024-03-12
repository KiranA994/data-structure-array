//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 

highpos = covid_data.reduce((item1,item2)=>item1[2]>item2[2] ? item1: item2)
console.log(highpos[1]);

console.log('---------------------------');

//2. district having Highest 1st dose vaccine

highdose = covid_data.reduce((item1,item2)=>item1[5]>item2[5] ? item1: item2)
console.log(highdose[1]);


console.log('---------------------------');

//3. district having lowest death rate

lowdeath = covid_data.reduce((item1,item2)=>item1[3]<item2[3] ? item1: item2)
console.log(lowdeath[1]);


console.log('---------------------------');


//4. sort data with +ve case in descending order

covid_data.sort((pro1,pro2)=>pro2[2]-pro1[2])
.forEach(item=>console.log(item))

console.log('---------------------------');

//5. is district with +ve cases > 15000

a = covid_data.some(item=> item[2] > 15000);
console.log(a ? 'yes': 'no');

console.log('---------------------------');

//6. sort data with 1st dose vaccine ascending order

covid_data.sort((pro1,pro2)=>pro1[5]-pro2[5])
.forEach(item=>console.log(item))

console.log('---------------------------');


//7. Print Thrissur details

thrissur = covid_data.find(item=>item[1]=='Thrissur')
console.log(thrissur);

console.log('---------------------------');

//8. Print total number of positive cases

totalpos = covid_data.map((ele)=>ele[2]).reduce((item1,item2)=>item1+item2)
console.log(totalpos);

console.log('---------------------------');

//9. Print total number of curred cases

curred = covid_data.map((ele)=>ele[4]).reduce((item1,item2)=>item1+item2)
console.log(curred);

console.log('---------------------------');

//10. Print curred cases in Idukki

console.log(covid_data.find(item=> item[1]=='Idukki')[4]);