"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.createTodo = exports.getTodoById = exports.getAllTodos = void 0;
const Todo_1 = __importDefault(require("../models/Todo"));
let todos = [];
const getAllTodos = (req, res) => {
    res.status(200).json({
        message: "Getting all todos"
    });
};
exports.getAllTodos = getAllTodos;
const getTodoById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        message: `Getting todo with id: ${id}`
    });
};
exports.getTodoById = getTodoById;
const createTodo = (req, res) => {
    const text = req.body.text;
    const newTodo = new Todo_1.default(crypto.randomUUID(), text);
    todos = [...todos, newTodo];
    res.status(201).json({
        message: "Todo created"
    });
};
exports.createTodo = createTodo;
const updateTodo = (req, res) => {
    const id = req.params.id;
    // Search the todo and update
    res.status(200).json({
        message: "Todo updated"
    });
};
exports.updateTodo = updateTodo;
