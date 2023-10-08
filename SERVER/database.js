// File: server/database.js

const mongoose = require('mongoose');

const connectDatabase = async () => {
   try {
      await mongoose.connect(
         'mongodb://127.0.0.1:27017/ABC-Auction',
         { useNewUrlParser: true, useUnifiedTopology: true }
      );
      console.log("Database connection established.")
   } catch (error) {
      console.error("Database connection error: ", error);
   }
}

connectDatabase();