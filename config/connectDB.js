const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});
    console.log("DataBase is connected...");
  } catch (error) {
    console.log("can not conenct to DB!!!", error);
  }
};

module.exports = connectDB;
