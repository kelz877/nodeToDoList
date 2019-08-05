const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')




app.listen(3000, () => {
    console.log("Server is running")
})


let toDoList = []

app.use(cors())

app.use(bodyParser.json())

//root URL
app.get('/', (req,res) =>{
    res.send("Hello, welcome to the To Do List!")
})

// / GET todos
app.get('/todos', (req, res) => {
    res.json(toDoList)
})

//POST todos

app.post('/todos', (req, res) => {
    let taskName = req.body.taskName
    let taskPriority = req.body.taskPriority
    let toDoItem = {Name: taskName, Priority: taskPriority}

    toDoList.push(toDoItem)
    console.log(taskName)
    console.log(taskPriority)

    //res.send("List Item Saved!")
    res.send(toDoList)
})
