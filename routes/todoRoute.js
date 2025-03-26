import express from "express";
import { createToDo, getAllTodos, updateTodo, deleteTodo } from "../controllers/todolist.js";

const router = express.Router();

router.get("/get_all", getAllTodos);
router.post("/add_todo", createToDo);
router.patch("/update_todo/:id", updateTodo);
router.delete("/delete_todo/:id", deleteTodo);

export default router;