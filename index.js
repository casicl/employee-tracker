const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

function mainMenu () {
inquirer
    .prompt([
        {

        type:"list",
        message: "Choose from the following options:",
        name: "options",
        choices: ["view all departments", "view all roles", "view all employees", "add department", "add role", "add employee", "update employee"],

        },

      

    ]).then((responses)=>{
        console.log(responses)
        if (responses.options=== 'view all departments') {
            viewDepartments()
    
        }

        if (responses.options=== "view all roles") {
            viewRoles()
        }

        if (responses.options=== "view all employees") {
            viewEmployees()
        }

        if (responses.options=== "add department") {
            addDepartment()
        }

        if (responses.options=== "add role") {
            addRole()
        }

        if (responses.options=== "add employee") {
            addEmployee()
        }

        if (responses.options=== "update employee") {
            updateEmployee()
        }
        
    })

};


function viewDepartments() {
    const sql = `SELECT * FROM department`;
  
    db.query(sql, (err, rows) => {
    console.table(rows)
    });
}

function viewRoles() {
    const sql = `SELECT * FROM role`
    db.query(sql, (err, rows) => {
        console.table(rows)
        });
}

function viewEmployees() {
    const sql = `SELECT * FROM employee`
    db.query(sql, (err, rows) => {
        console.table(rows)
        });
}

function addDepartment() {
    inquirer 
        .prompt(
            [{
            type: "input",
            message: "What department would you like to add?",
            name: "department",
           
            },
         
            ])
        .then((response) => {
            let department = response.department;

            function createDepartment(department) {
            return db.promise().query("INSERT INTO department SET ?", { name: department });
            }
            createDepartment(department)
            .then(() => console.log(`Added ${department} department to database`))
            .catch((error)=> console.error(error))
            .then(() => mainMenu());

        });
    }



        
function addRole() {
    db.query("SELECT name FROM departments", (err, results)=> {
        const departmentNames = results.map(({ name }) => ({
            name: name
            
        }));

        inquirer   
        .prompt(
            [{
                type: "input",
                message: "What role would you like to add?",
                name: "title"
            },
            {
                type: "input",
                message: "What is the salary of this role?",
                name: "salary"
            },
            {
                type: "list",
                name: "department",
                message: "Which department does this role belong in?",
                choices: departmentNames
            }

            ]
        )
        .then((response) => {
            const { title, salary, department } = response;

            const departmentId = results.find(result => result.name===department).id;

            function createRole(title, salary, departmentId) {
                return db.promise().query("INSERT INTO role SET ?", { 
                    title: title,
                    salary: salary,
                    department_id: departmentId
                 });
            }
            createRole(title, salary, departmentId)
            .then(()=> console.log(`Added ${title} to the department`))
            .catch((error)=> console.error(error))
            .then(() => mainMenu());

        });



    });
    
}

function addEmployee() {
    inquirer
        .prompt(
            [{
                type: "input",
                message: "What is the employee's first name?",
                name: "first_name"
            },
            {
                type: "input",
                message: "What is the employee's last name?",
                name: "last-name"
            },
            {
                type: "list",
                message: "What is the employee's role?",
                name: "role"
                //figure out how to list roles???
                //choices: roles
            },
            {
                type: "list",
                message: "Who is the employee's manager?",
                name: "manager"
                //figure out how to list 
                //choices: manager
            }]
        )
}

function updateEmployee() {
    inquirer
        .prompt(
            [
            {
                type: "list",
                message: "Which employee would you like to update?",
                name: "employeeId",
                //get employee list
                //choices: employeeList

            },
            {
                type: "list",
                message: "What is the employee's new role?",
                name: "employeeRole",
                //get roles list
                choices: employeeRoles
            }

            ]
          
        )
}

mainMenu();