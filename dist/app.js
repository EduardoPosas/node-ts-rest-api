"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
const PORT = 3000;
// body parser
app.use((0, body_parser_1.json)());
// custom typed router
app.use("/todos", todos_1.default);
// custom typed middleware
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});
// index typed routes
app.get("/", (req, res) => {
    res.send("hola");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
