const mongoos = require('mongoose');
const config = require('config');
const { default: mongoose } = require('mongoose');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    //Exit the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
