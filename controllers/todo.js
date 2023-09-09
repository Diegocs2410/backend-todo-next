const Todo = require("../models/todo")
const asyncWrapper = require("../utils/asyncWrapper")

const createTodo = async (req, res) => {
  const { title, description } = req.body
  try {
    const newTodo = await Todo.create({ title, description })
    res.status(200).json({
      status: true,
      newTodo,
    })
  } catch (error) {
    console.log(error.message)
  }
}

const getTodos = async (_req, res) => {
  try {
    const todos = await Todo.find()
    if (!todos) return res.status(400).json("Todos not found")
    return res.status(200).json({
      status: true,
      todos,
    })
  } catch (error) {
    console.log(error.message)
  }
}

const getTodoById = asyncWrapper(async (req, res) => {
  const { id } = req.params
  try {
    const todo = await Todo.findById(id)
    if (!todo) return res.status(400).json("Todo not found")
    return res.status(200).json({
      status: true,
      todo,
    })
  } catch (error) {
    console.log(error.message)
  }
})

const deleteTodo = asyncWrapper(async (req, res) => {
  const { id } = req.params
  try {
    const todo = await Todo.findByIdAndDelete(id)
    if (todo) return res.status(200).json({ status: true, msg: "Todo Deleted" })
    return res.status(400).json({ status: false, msg: "Todo not found" })
  } catch (error) {
    console.log(error.message)
  }
})

const updateTodo = asyncWrapper(async (req, res) => {
  const { id } = req.params
  const { title, description, done } = req.body
  try {
    const todo = Todo.findById(id)
    if (!todo)
      return res.status(400).json({ status: false, msg: "Todo not found" })
    const updatedTodo = {
      title: title ?? todo.title,
      description: description ?? todo.description,
      done: done ?? todo.done,
    }
    const newTodo = await Todo.findOneAndUpdate({ _id: id }, updatedTodo, {
      new: true,
    })
    return res.status(200).json({ status: true, updatedTodo: newTodo })
  } catch (error) {
    console.log(error.message)
  }
})

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  deleteTodo,
  updateTodo,
}
