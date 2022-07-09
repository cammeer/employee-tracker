const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;

//connect to database
const db = mysql.createConnection({
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //Your MySQL password
        password: '',
        database: 'tracker'
    },
    console.log('Connected to the tracker database.')
);