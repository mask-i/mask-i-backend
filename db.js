const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('connection successful');
  } catch (err) {
    console.log(err.message);
    // Exit the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
