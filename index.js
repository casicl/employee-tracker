const inquirer = require("inquirer");

inquirer
    .prompt([
        {

        type:"list",
        message: "Choose from the following options:",
        name: "options",
        choices: ["view all departments", "view all roles", "view all employees", "add a department"],

        },

        {
        
        list: "input",
        message: "What would you like to add?",
        name: "add-to-database",
        choices: ["add department", "add role", "add employee"],
    
        },

        {
        
        type: "input",
        message: "What is the department name?",
        name: "department",

        },

        {
        type: "input",
        message: "What is the role?",
        name: "role",

        },

        {
        type: "input",
        message: "What is the name of the role?",
        name: "role-name",

        },

        {

        type: "input",
        message: "What is the salary of the role?",
        name: "role-salary",

        },

        {
        
        type: "input",
        message: "What department is the role in?",
        name: "role-department",

        },

        {
        
        type: "input",
        message: "What is the employee's first name?",
        name: "employee-first-name",

        },

        {

        type: "input",
        message: "What is the employee's last name?",
        name: "employee-last-name",
        
        },

        {

        type: "input",
        message: "What is the employee's role?",
        name: "employee-role",

        },

        {

        type: "input",
        message: "Who is the employee's manager?",
        message: "employee-manager",

        },
    ])