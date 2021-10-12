const mongoose = require("mongoose");




mongoose.connect("mongodb://127.0.0.1:27017/taskmanager")
        .then(() => console.log(" DATABASE CONNECTED"))
        .catch((error) => console.log(error));




module.exports = mongoose;