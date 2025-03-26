import todolistModel from "../models/todolistModel.js";

export const createToDo = async (req, res) => {
    try {
        const {todo_image, todo_name, todo_desc, todo_status} = req.body

        if (!todo_image || !todo_name || !todo_desc || !todo_status) {
            return res.status(400).json({message:"Please fill in the required fields."})
        }

        const newToDo = await todolistModel.create({
            todo_image,
            todo_name,
            todo_desc,
            todo_status
        });

        res.status(200).json({message: "Created a to do list successfully!", newToDo})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getAllTodos = async (req, res) => {
    try {
        const todos = await todolistModel.find();
        res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const {todo_image, todo_name, todo_desc, todo_status} = req.body;

        const updateData = {
            todo_image,
            todo_name,
            todo_desc,
            todo_status
        };
        const updatedTodo = await todolistModel.findByIdAndUpdate(id, updateData, {new: true});

        if (!updatedTodo) {
            return res.status(404).json({message: "To-do not found"})
        }

        res.status(200).json({message: "To-do updated successfully!", updatedTodo});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedTodo = await todolistModel.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({message: "To-do not found"});
        }

        res.status(200).json({message: "To-do deleted successfully!"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};