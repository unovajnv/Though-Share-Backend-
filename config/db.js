const mongoose = require("mongoose");
require("dotenv").config();

// const connection = mongoose.connect(process.env.DB_URL);

const DB = process.env.MONGO_URI;
//console.log(DB);
const connection = mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Your code here
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

module.exports = { connection };
