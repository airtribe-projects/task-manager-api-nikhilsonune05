let tasks = require("../models/tasksModel");

const getAllTasks = (req, res) => {
    const localTasks = tasks ?? [];
    return res.status(200).send(localTasks);
}

const getSingleTask = (req, res) => {
    const localTasks = tasks ?? [];
    const id = parseInt(req.params.id);
    const task = localTasks.find(task => task.id === id);
    if(task) {
        return res.status(200).send(task);
    } 
    return res.status(404).send("Not Found!!");
}

const createTask = (req, res) => {
    const localTasks = tasks ?? [];
    const { title, description, completed } = req.body;

    if (title && description && typeof completed === 'boolean') {
        const id = localTasks.length + 1;
        localTasks.push({
            id, title, description, completed
        });
        return res.status(201).send(tasks);
    } else {
        return res.status(400).send("Payload mismatch!!");
    }
}

const updateTask = (req, res) => {
    const localTasks = tasks ?? [];
    const id = parseInt(req.params.id);
    const isPresent = localTasks.some(task => task.id === id);
    if (isPresent) {
        const { completed } = req.body;
        const task = localTasks.find(task => task.id === id);
        task.completed = completed;
        return res.status(200).send(localTasks);
    } else {
        return res.status(404).send("Task not found!!");
    }
}

const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const isPresent = tasks.some(task => task.id === id);
    if (isPresent) {
        tasks = tasks.filter(task => task.id !== id);
        return res.status(200).send(tasks);
    } else {
        return res.status(404).send("Task not found!!");
    }
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getSingleTask
}