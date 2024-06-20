import { Router } from "express"
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo
} from "../controllers/todos.controller"

const router = Router()

router.get("/", getAllTodos)
router.get("/:id", getTodoById)
router.post("/", createTodo)
router.put("/", updateTodo)

export default router