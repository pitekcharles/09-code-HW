var inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

function prompt () {
    var employeeArray = [];
    inquirer.prompt({
        type: "input",
        message:"What is your Team Name?",
        name: "teamName"
    }
    ).then(function(response){
        employeeArray.push(response.teamName);
        var i = 0;
        while (i === 0) {
            inquirer.prompt([
                {
                    type:"list",
                    message:"What type of Employee is this?",
                    name:"role",
                    choices:["Manager", "Intern", "Engineer"]
                }
                {
                    type: "input",
                    message:"Enter Employees Name:",
                    name: "name"
                },
                {
                    type: "input",
                    message:"Enter Employees ID:",
                    name: "id"
                },
                {
                    type:"input",
                    message:"Enter Employees Email address:",
                    name:"email"
                },
                {
                    type:"list",
                    message:"Whould you like to add another employee to the team?"
                    name:"continue",
                    choices:["yes", "no"]
                }
            ]).then(function(response){
                switch (response.role){
                    case "Manager":
                        inquirer.prompt([
                            {
                                type: "input",
                                message:"Enter Employees Name:",
                                name: "name"
                            },
                            {
                                type: "input",
                                message:"Enter Employees ID:",
                                name: "id"
                            },
                            {
                                type:"input",
                                message:"Enter Employees Email address:",
                                name:"email"
                            },
                            {
                                type:"input",
                                message:"Enter Employees Office Number:",
                                name:"officeNumber"
                            },
                            {
                                type:"list",
                                message:"Whould you like to add another employee to the team?",
                                name:"continue",
                                choices:["yes", "no"]
                            }
                        ]).then(function(response){
                            var manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                            employeeArray.push(manager);
                            if (response.continue === "no"){
                                i = 1;
                            }
                        });
                        break;
                    case "Intern":
                        inquirer.prompt([
                            {
                                type: "input",
                                message:"Enter Employees Name:",
                                name: "name"
                            },
                            {
                                type: "input",
                                message:"Enter Employees ID:",
                                name: "id"
                            },
                            {
                                type:"input",
                                message:"Enter Employees Email address:",
                                name:"email"
                            },
                            {
                                type:"input",
                                message:"Enter Interns School:",
                                name:"school"
                            },
                            {
                                type:"list",
                                message:"Whould you like to add another employee to the team?",
                                name:"continue",
                                choices:["yes", "no"]
                            }
                        ]).then(function(response){
                            var intern = new Intern(response.name, response.id, response.email, response.school);
                            employeeArray.push(intern);
                            if (response.continue === "no"){
                                i = 1;
                            }
                        });
                        break;
                    case "Engineer":
                        inquirer.prompt([
                            {
                                type: "input",
                                message:"Enter Employees Name:",
                                name: "name"
                            },
                            {
                                type: "input",
                                message:"Enter Employees ID:",
                                name: "id"
                            },
                            {
                                type:"input",
                                message:"Enter Employees Email address:",
                                name:"email"
                            },
                            {
                                type:"input",
                                message:"Enter Employees Github username:",
                                name:"github"
                            },
                            {
                                type:"list",
                                message:"Whould you like to add another employee to the team?",
                                name:"continue",
                                choices:["yes", "no"]
                            }
                        ]).then(function(response){
                            var engineer = new Engineer(response.name, response.id, response.email, response.github);
                            employeeArray.push(manager);
                            if (response.continue === "no"){
                                i = 1;
                            }
                        });
                        break;
                };
            })
        }
    })
    return employeeArray;
}

module.exports = prompt;