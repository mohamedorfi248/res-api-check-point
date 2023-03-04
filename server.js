const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());

const connectDB = require("./config/connectDB");
connectDB();

app.use('/api/contact', require('./routes/contact'))

const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  error
    ? console.error(`failed to connect to server!!! ${error}`)
    : console.log(`server is running on port ${PORT}...`);
});
