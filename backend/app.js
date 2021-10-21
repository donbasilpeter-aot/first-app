const express = require('express');
const cors = require("cors") ; // import cors so that apps on different servers can contact (middleware)

const mongoose = require("./database/mongoose"); //returning  connected database

const List = require("./database/models/list") ; // updating models in the database
const Task = require("./database/models/task");

const app = express();   //initialising app
app.use(cors());    //disabiling cors security
app.use(express.json());    // json middleware to get data as json objects

// apis to interact with databases

app.get('/lists', (req,res) => {                // to get all data of the list
    List.find({}) 
    .then(lists => res.send(lists))
    .catch(err => console.log(err));
}) ; 



app.post("/lists", (req, res) => {  //save one list
    (new List({ title : req.body.title}))
    .save()
    .then(list => res.send(list)  )
    .catch(err => console.log(err)) ;

});

app.get("/lists/:Id", (req, res) => { //get list based on id
    List.findById(req.params.Id)
    .then(list => res.send(list))
    .catch(err => console.log(err));

});

app.patch("/lists/:Id", (req,res) => {  //update one 
    List.findOneAndUpdate({ "_id" : req.params.Id},{$set : req.body })
        .then(list => res.send(list))
        .catch(err => console.log(err));

});
 
app.delete("/lists/:Id", (req, res) => {   // delete based on id

    Task.deleteMany({_listId :req.params.Id})
    .then()
    .catch(err => console.log(err));
   

    List.findByIdAndDelete(req.params.Id)
    .then( list => res.send(list))
    .catch(err => console.log(err));
    

});


//apis for tasks

app.get("/tasks/:listId",(req, res) => {     //get  tasks of a particular list
    Task.find({_listId :req.params.listId})
    .then(list => res.send(list))
    .catch(err => res.send(err));
});

app.post("/tasks/:listId", (req,res) => {       //add a new task 
    (new Task({title : req.body.title, _listId : req.params.listId}))
    .save()
    .then(() => res.send({"rescode" :res.statusCode}))
    .catch(err => res.send(err));
    
})  ;

app.get("/tasks/taskId/:taskId", (req, res) => {  // get task by id
    Task.findById(req.params.taskId)
    .then( list => res.send(list))
    .catch(err => res.send(err));
});

app.patch('/tasks/taskId/:taskId', (req, res) => {   //update the status
    Task.findOneAndUpdate({ "_id" : req.params.taskId},{$set : req.body })
    .then( list => res.send(list))
    .catch(err => res.send(err));

});

app.delete('/tasks/taskId/:taskId', (req, res) => {  // delete task by taskid
    Task.findByIdAndDelete(req.params.taskId )
    .then( list => res.send(list))
    .catch(err => res.send(err));
});






  
app.listen(3000,()=> console.log("Server connected"));

