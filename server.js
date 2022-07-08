const inquirer = require('inquirer');
const mysql = require("mysql");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "",
    database: "tracker"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});