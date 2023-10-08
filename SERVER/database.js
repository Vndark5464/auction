const mongoose = require('mongoose');

const connectDatabase = async () => {
   try {
      const db = await mongoose.connect(
         'mongodb://127.0.0.1:27017/ABC-Auction',
         { useNewUrlParser: true, useUnifiedTopology: true }
      );
      console.log("Database connection established.")
   } catch (error) {
      console.error("Database connection error: ", error);
      process.exit(1);
   }
}

connectDatabase();