import { Request, Response, RequestHandler } from "express"
import Todo from "../models/Todo"

let todos: Todo[] = []

const getAllTodos = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Getting all todos"
  })
}

const getTodoById: RequestHandler = (req, res) => {
  const { id } = req.params

  res.status(200).json({
    message: `Getting todo with id: ${id}`
  })
}

const createTodo: RequestHandler = (req, res) => {

  const text = (req.body as { text: string }).text

  const newTodo = new Todo(crypto.randomUUID(), text)
  todos = [...todos, newTodo]

  res.status(201).json({
    message: "Todo created"
  })

}

type UpdateTodoParams = {
  id: string
}

const updateTodo: RequestHandler<UpdateTodoParams> = (req, res) => {
  const id = req.params.id

  // Search the todo and update

  res.status(200).json({
    message: "Todo updated"
  })
}

export {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo
}