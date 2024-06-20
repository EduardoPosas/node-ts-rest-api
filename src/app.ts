import express, { NextFunction, Request, Response } from "express"
import { json } from "body-parser"
import todosRoutes from "./routes/todos"

const app = express()
const PORT = 3000

// body parser
app.use(json())

// custom typed router
app.use("/todos", todosRoutes)

// custom typed middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: error.message })
})

// index typed routes
app.get("/", (req: Request, res: Response) => {
  res.send("hola")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})