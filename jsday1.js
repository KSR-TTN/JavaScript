// Prompt for amount, interest rate and no. of years and calculate simple interest.
// used hardcoded values for amount, interest rate and no. of years because no access of promt in node.
function simpleInterest(amt, rate, years) {
    return (amt * rate * years) / 100;
}

const principal = 1000;
const interest = 5;
const time = 2;

const simpleInterestIs = simpleInterest(principal, interest, time);
console.log(`Simple interest is -: ${simpleInterestIs}`);





// is palindrome string or not
function isPalindrome(str) {
    const newStr = str.toLowerCase();
let len =newStr.length;
   for (let i = 0; i < len / 2; i++) {
        if (newStr[i] !== newStr[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));





// Area of circle
function areaOfCircle(r) {
    return Math.PI * r * r;
}
console.log(areaOfCircle(5));






// Copy information of one object to another and log it to console.
const nestedEmployees = [
    {
        name: "John Doe",
        age: 50,
        salary: 50000,
        dob: "1993-01-15",
        address: {
            city: "New York",
            zip: "10001"
        }
    },
    {
        name: "Jane Smith",
        age: 65,
        salary: 40000,
        dob: "1998-05-22",
        address: {
            city: "Los Angeles",
            zip: "90001"
        }
    }
];


let employeeCopy = JSON.parse(JSON.stringify(nestedEmployees));
console.log(employeeCopy);






// create a list of objects of Employee with info as follow :
// Name, age, salary ,DOB
const employees = [
    {
        name: "John Doe",
        age: 50,
        salary: 50000,
        dob: "1993-01-15"
    },
    {
        name: "Jane Smith",
        age: 65,
        salary: 40000,
        dob: "1998-05-22"
    },
    {
        name: "Sam Johnson",
        age: 35,
        salary: 70000,
        dob: "1988-03-10"
    },
    {
        name: "Emily Davis",
        age: 28,
        salary: 55000,
        dob: "1995-07-30"
    }
];






// filter all employees with salary greater than 5000
let filteredEmployees = employees.filter(employee => employee.salary > 50000);
console.log(filteredEmployees);






// group employee on the basis of their age
let above_40 = [];
let below_40 = [];


for (let i = 0; i < employees.length; i++) {
    if (employees[i].age >= 40) {
        above_40.push(employees[i]);
    } else {
        below_40.push(employees[i]);
    }
}
console.log(above_40);
console.log(below_40);






// fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.
let lowSalaryEmployees = employees.filter(employee => employee.salary < 50000 && employee.age > 40);
lowSalaryEmployees = lowSalaryEmployees.map(employee => {
    employee.salary *= 5;
    return employee;
});
console.log(lowSalaryEmployees);

