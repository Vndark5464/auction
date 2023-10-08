// File server/App.js

const express = require('express');
const mongoose = require('./database');  // Import the configured mongoose from your database.js

const app = express();
const PORT = 3001;

// Middleware to parse incoming request bodies. 
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hello, World!");
});

app.listen(PORT, function() {
    console.log(`Server is listening on port ${PORT}`);
});