const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');

// API file for interacting with MongoDB
// const api = require('/index');

// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Angular dist output folder branch
app.use(express.static(path.join(__dirname, 'myHealth')));

//API location
// app.use('/index', index)

//send all other requests to the Angular app
app.set('*', (req, res) => {
    res.sendFile(path.join(__hrpayroll, '/index.html'));
});

// Set Port
const port = process.env.PORT || '5000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on port ${port}`));