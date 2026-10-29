// Task - 1
let employees = [
    {
        id: 101,
        name: "Arjun",
        age: 25,
        department: "IT",
        salary: 45000,
        city: "Chennai"
    },
    {
        id: 102,
        name: "Priya",
        age: 28,
        department: "HR",
        salary: 50000,
        city: "Bangalore"
    },
    {
        id: 103,
        name: "Rahul",
        age: 24,
        department: "IT",
        salary: 40000,
        city: "Chennai"
    },
    {
        id: 104,
        name: "Divya",
        age: 30,
        department: "Finance",
        salary: 60000,
        city: "Coimbatore"
    },
    {
        id: 105,
        name: "David",
        age: 27,
        department: "Sales",
        salary: 42000,
        city: "Madurai"
    }
];
// Task 2: Print the name of the first employee
console.log(employees[0].name);
// Task 3: Print the department of the third employee
console.log(employees[2].department);
// Task 4: Print the salary of the fourth employee
console.log(employees[3].salary);
// Task 5: Print complete details of the second employee
console.log(employees[1]);
// Task 6: Change Arjun's salary from 45000 to 48000
employees[0].salary = 48000;
// Task 7: Add experience property to Arjun
employees[0].experience = 3;
// Task 8: Print Arjun's updated information
console.log(employees[0]);
// Task 9: Print names and cities of all 5 employees
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name + " - " + employees[i].city);
}
// Task 10: Find the total salary of all employees
let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
    totalSalary = totalSalary + employees[i].salary;
}
console.log("Total Salary = " + totalSalary);