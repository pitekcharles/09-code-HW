const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
// const createHTML = require("./lib/generateHTML.js");
const inquirer = require("inquirer");
// const prompt = require("./lib/prompt.js");
const fs = require("fs");

const employeeArray = [];
let headSection = [];


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
            afterPrompts();
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
            console.log(employeeArray);
            afterPrompts();
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
            console.log(employeeArray);
            afterPrompts();
        } else {
            askType();
        }
    });
}

function generateHTML(employeeArray) {
    headSection.push(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">${employeeArray[0]}</h1>
            </div>
        </div>
        <div class="container">
            <div class="row addCard">`);

    for (var i = 1; i < employeeArray.length; i++) {
        if (employeeArray[i].getRole() === "Manager") {
            headSection.push(
                `<div class="col-md">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${employeeArray[i].name}</h5>
                        <h6 class="card-subtitle mb-2">${employeeArray[i].getRole()}</h6>
                        <p class="card-text">ID: ${employeeArray[i].id}</p>
                        <p>Email: <a href="${employeeArray[i].email}" class="card-link">${employeeArray[i].email}</a></p>
                        <p>Office number: ${employeeArray[i].officeNumber}</p>
                    </div>
                </div>
            </div>`
            );
        } else if (employeeArray[i].getRole() === "Engineer") {
            headSection.push(
                `<div class="col-md">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${employeeArray[i].name}</h5>
                        <h6 class="card-subtitle mb-2">${employeeArray[i].getRole()}</h6>
                        <p class="card-text">ID: ${employeeArray[i].id}</p>
                        <p>Email: <a href="${employeeArray[i].email}" class="card-link">${employeeArray[i].email}</a></p>
                        <p>Email: <a href="github.com/${employeeArray[i].github}" class="card-link">${employeeArray[i].github}</a></p>
                    </div>
                </div>
            </div>`
            );
        } else {
            headSection.push(
                `<div class="col-md">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${employeeArray[i].name}</h5>
                            <h6 class="card-subtitle mb-2">${employeeArray[i].getRole()}</h6>
                            <p class="card-text">ID: ${employeeArray[i].id}</p>
                            <p>Email: <a href="${employeeArray[i].email}" class="card-link">${employeeArray[i].email}</a></p>
                            <p>School: ${employeeArray[i].school}</p>
                        </div>
                    </div>
                </div>`
            )
        }
    }
    headSection.push(
        `</div>
                </div>
            </body>
            
            </html>`
    );
    headSection.join("\n");
    return headSection;
}

function afterPrompts() {
    var outputHtml = generateHTML(employeeArray);

    fs.writeFile(`${employeeArray[0]}.html`, outputHtml, (error) => {
        if (error) throw error;
        console.log(`The team profile has been saved to ${employeeArray[0]}.html`)
    })
}
console.log("Welcome to the team profile builder!");

userInput();




