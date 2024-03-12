//nested array

//[id, name, designation, location, salary, experience]

employee = [
    [1000, 'Neel', 'developer', 'kochi', 25000, 3],
    [1001, 'Max', 'tester', 'TVM', 20000, 2],
    [1002, 'MAxwell', 'QA', 'kochi', 35000, 4],
    [1003, 'Vyom', 'QA', 'kochi', 45000, 5],
    [1004, 'Laisha', 'tester', 'TVM', 55000, 7],
    [1005, 'Aahan', 'developer', 'TVM', 15000, 1],
    [1006, 'Aahil', 'QA', 'kochi', 20000, 2],
    [1007, 'Shayan', 'developer', 'kochi', 30000, 3],
    [1008, 'Nihaan', 'developer', 'TVM', 25000, 3]
]

// print all employee name 

empName = employee.map((x) => x[1]).forEach(element=>{
    console.log(element);
})

console.log('-----------------------------');

//print total numbers of employee

console.log('Total numbers of employee:', employee.length);

console.log('-----------------------------');

//print developer employee details

dev = employee.filter(emp => emp[2] == 'developer')
.forEach(element => console.log(element));

console.log('-----------------------------');

//print employee whose salary > 30000

x = employee.filter(emp => emp[4] > 30000);

x.forEach(element => {
    console.log(element[1]);
});

console.log('-----------------------------');

// print details of employee Laisha

deve = employee.filter((emp) => emp[1] == 'Laisha').flat();

console.log(deve);

console.log('-----------------------------');

//print the employ name whose have the higest salary

highest = employee.reduce((prev, curr) =>
    prev[4] > curr[4] ? prev : curr);
console.log(highest[1]);

console.log('-----------------------------');

// print the employee name who have the lowest salary

lowest = employee.reduce((prev, curr) =>
    prev[4] < curr[4] ? prev : curr);
console.log(lowest[1]);

// print the total salary expense of the company

sum = employee.map(item=>item[4]).reduce((sal1,sal2)=>
sal1+sal2)

console.log(sum);