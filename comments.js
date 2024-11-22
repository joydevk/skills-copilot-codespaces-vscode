// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Read comments.json file
const comments = JSON.parse(fs.readFileSync('comments.json'));

// Use bodyParser
app.use(bodyParser.json);