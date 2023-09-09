const {
  createTodo,
  getTodos,
  getTodoById,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo")
const { Router } = require("express")

const router = Router()

router.route("/").post(createTodo).get(getTodos)
router.route("/:id").get(getTodoById).delete(deleteTodo).put(updateTodo)
module.exports = router
