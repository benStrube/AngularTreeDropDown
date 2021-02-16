const express = require('express');
const cors = require('cors');
const bodyParser = require('bodyParser');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'timeline',
    password : 'password',
    database : 'databases',
})

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(events(connection));

app.listen(port, () => {
    console.log('Express erver listening on port ${port}');
})