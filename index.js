const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const server = require("./db")
const todoRouter = require("./routes/todo")
require("dotenv").config()

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.get("/", (_req, res) => {
  return res.send("<h1>Hello World</h1>")
})

app.use("/todos", todoRouter)

app.listen(3000, () => {
  server()
  console.log("App listen on port: 3000")
})
