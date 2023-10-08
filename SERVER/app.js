const express = require('express');
const mongoose = require('./database');
const userRoutes = require('./userRoutes'); // You might need to adjust this path

const app = express();
const PORT = 3001;

app.use(express.json());

// Include your userRoutes here
app.use(userRoutes);

app.get("/", function (req, res) {
   res.status(200).send("Hello, World!");
});

app.use((req, res, next) => {
   const error = new Error('Not found');
   error.status = 404;
   next(error);
});

app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
      error: {
         message: error.message
      }
   });
});

app.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`);
});