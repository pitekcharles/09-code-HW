const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateHTML = require("./lib/generateHTML.js");
const prompt = require("./lib/prompt.js");


console.log("Welcome to the team profile builder!");

const employeeArray = prompt.userInput();

console.log(employeeArray);