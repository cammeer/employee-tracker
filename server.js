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
                    viewRoles();
                    break;
                case "View all employees":
                    viewEmployees();
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

// view all departments
function viewAllDepts() {

    let query = "SELECT name AS id FROM department;";

    db.query(query, function(err, res) {

        if (err) throw err;

        console.table(res);
    });
};