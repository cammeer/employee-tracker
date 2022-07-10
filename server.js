const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const PORT = process.env.PORT || 3306;

const db = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "tracker"
    },
    console.log('Connected to Tracker database.')
);

db.connect(function(err) {
    if (err) throw err;

});

// update server
function updateServer() {
    db.query("SELECT * from role", function(error, res) {
        allroles = res.map(role => ({ name: role.title, value: role.id }));
    });

    db.query("SELECT * from department", function(error, res) {
        alldepartments = res.map(dept => ({ name: dept.name, value: dept.id }));
    });

    db.query("SELECT * from employee", function(error, res) {
        allemployees = res.map(employee => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id
        }));
    });
}

function start() {
    inquirer
        .prompt({
            type: "list",
            name: "option",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit"
            ]
        })
        .then(function(result) {
            console.log("You entered: " + result.option);

            switch (result.option) {
                case "View all departments":
                    viewAllDepts();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Adda  role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Update an employee role":
                    updateEmployee();
                    break;
                default:
                    exit();
            }
        });
}

start();

// view all star trek enterprise departments
function viewAllDepts() {
    let query = "SELECT id, name FROM department;";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    });
    start(inquirer.prompt);
};

// view all star trek enterprise employee roles
function viewAllRoles() {
    let query = "SELECT title, salary, department_id FROM role;";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    });
    start(inquirer.prompt);
};

// view all star trek enterprise employees
function viewAllEmployees() {
    let query = "SELECT first_name, last_name, role_id FROM employee;";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
    });
    start(inquirer.prompt);
};

//adding dept
function addDepartment() {
    updateServer();
    inquirer
        .prompt([{
            type: "input",
            name: "new_department",
            message: "Enter a new department"
        }])
        .then(function(answer) {
            var query = db.query(
                "INSERT INTO department SET ?", {
                    name: answer.new_department
                },
                function(err, res) {
                    if (err) throw err;
                    console.table("\nDepartment added!\n");
                    updateServer();
                    start(inquirer.prompt);
                }
            );
        });
}

//adding role
function addRole() {
    updateServer();
    inquirer
        .prompt([{
            type: "input",
            name: "new_role",
            message: "Enter a new role"
        }])
        .then(function(answer) {
            var query = db.query(
                "INSERT INTO role SET ?", {
                    name: answer.new_role
                },
                function(err, res) {
                    if (err) throw err;
                    console.table("\nRole added!\n");
                    updateServer();
                    start(inquirer.prompt);
                }
            );
        });
}