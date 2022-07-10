// const mysql = require('mysql2');
// const inquirer = require('inquirer');
// const consoleTable = require('console.table');

// const PORT = process.env.PORT || 3001;

// const db = mysql.createConnection({
//         host: "localhost",
//         port: 3001,
//         user: "root",
//         password: "",
//         database: "tracker"
//     },
//     console.log('Connected to Tracker database.')
// );

// function start() {
//     inquirer
//         .prompt({
//             type: "list",
//             name: "option",
//             message: "What would you like to do?",
//             choices: [
//                 "Add Department",
//                 "Add Role",
//                 "Add Employee",
//                 "View Department",
//                 "View Role",
//                 "View Employee",
//                 "Update Employee Role",
//                 "Exit"
//             ]
//         })
// }

// start();