var inquirer = require("inquirer");
const Employee = require("./Employee.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
const Manager = require("./Manager.js");

var employeeArray = [];

function userInput() {
    // var employeeArray = [];
    inquirer.prompt({
        type: "input",
        message: "What is your Team Name?",
        name: "teamName"
    }
    ).then(function (response) {
        employeeArray.push(response.teamName);
        askType();
    })
    // return employeeArray;
}

function askType() {
    inquirer.prompt(
        {
            type: "list",
            message: "What type of Employee is this?",
            name: "role",
            choices: ["Manager", "Intern", "Engineer"]
        }).then(function (response) {
            if (response.role === "Manager") {
                managerQuestions();
            } else if (response.role === "Engineer") {
                engineerQuestions();
            } else {
                internQuestions();
            }
        });
}

function managerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Employees Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Employees ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Employees Email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Employees Office Number:",
            name: "officeNumber"
        },
        {
            type: "list",
            message: "Whould you like to add another employee to the team?",
            name: "continue",
            choices: ["yes", "no"]
        }
    ]).then(function (response) {
        var manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        employeeArray.push(manager);
        if (response.continue === "no") {
            console.log(employeeArray);
        } else {
            
            askType();
        }
    });
}

function engineerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Employees Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Employees ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Employees Email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Employees Github username:",
            name: "github"
        },
        {
            type: "list",
            message: "Whould you like to add another employee to the team?",
            name: "continue",
            choices: ["yes", "no"]
        }
    ]).then(function (response) {
        var engineer = new Engineer(response.name, response.id, response.email, response.github);
        employeeArray.push(engineer);
        if (response.continue === "no") {
            // return employeeArray;
        } else {
            askType();
        }
    });
}

function internQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Employees Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Employees ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Employees Email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Interns School:",
            name: "school"
        },
        {
            type: "list",
            message: "Whould you like to add another employee to the team?",
            name: "continue",
            choices: ["yes", "no"]
        }
    ]).then(function (response) {
        var intern = new Intern(response.name, response.id, response.email, response.school);
        employeeArray.push(intern);
        if (response.continue === "no") {
            // return employeeArray;
        } else {
            askType();
        }
    });
}
module.exports = {
    userInput: userInput,
    askType: askType,
    internQuestions: internQuestions,
    engineerQuestions: engineerQuestions,
    managerQuestions: managerQuestions
}
