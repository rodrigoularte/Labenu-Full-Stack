import express from "express"
import cors from "cors"
import { Task, toDoList } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("O servidor está rodando em http://localhost:3003")
})


//Exercício 1
app.get("/ping", (req, res) => {
  res.send("Pong! 🏓")
})


//Exercício 4
app.get("/todos/:status", (req, res) => {
  const status: string = req.params.status

  const tarefas: Task[] = toDoList.filter((tarefa) => {
    if (status === "done") {
      return tarefa.completed === true
    } else if (status === "not-done") {
      return tarefa.completed === false
    }
  })

  res.send(tarefas)

})


//Exercício 5
app.post("/createTask", (req, res) => {
  const newTask = req.body

  const newToDoList: Task[] = [
    ...toDoList, newTask
  ]

  res.send(newToDoList)
})


//Exercício 6 ?
app.put("/todo/changeStatus/:taskId", (req, res) => {
  const taskId: number = Number(req.params.taskId)

  const newStatus: Task[] = toDoList.filter((task) => {
      return task.id === taskId
    })

  res.send(newStatus)
})


//Exercício 7
app.delete("/todo/:taskId", (req, res) => {
  const taskId: number = Number(req.params.taskId)

  const newToDoList: Task[] = toDoList.filter((task) => {
    return task.id !== taskId
  })

  res.send(newToDoList)
})


//Exercício 8
app.get("/todo/:userId", (req, res) => {
  const userId: number = Number(req.params.userId)

  const userTasks: Task[] = toDoList.filter((task) => {
    return task.userId === userId
  })

  res.send(userTasks)
})


//Exercício 9
//https://documenter.getpostman.com/view/20353976/Uz5Dqxuq