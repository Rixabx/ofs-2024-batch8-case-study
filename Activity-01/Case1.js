import readline from 'readline-sync';
import fs from 'fs';
import { Employee } from './employee.js';

const readData = () => {
  try {
    return JSON.parse(fs.readFileSync('employee.json', 'utf8')) || [];
  } catch {
    return [];
  }
};

const Id = readline.question("Id: ");
const name = readline.question('Name: ');
const salary = readline.question('Salary: ');

const newEmployee = new Employee(Id, name, salary );
const employees = readData();
employees.push(newEmployee);

fs.writeFileSync('employee.json', JSON.stringify(employees, null, 2));

console.log("employee details:");
console.log(JSON.stringify(employees, null, 2));
