const mongoose = require("mongoose");



const TaskSchema = new  mongoose.Schema({
    title : {
        type : String,
        trim :true,
        minlength :10
    },
    _listId :{
        type : mongoose.Types.ObjectId,
        required : true
    },
    Status : {
        type : Boolean,
        required : true,
        default : false
    }
}) 



const Task = mongoose.model("task",TaskSchema);
module.exports = Task;