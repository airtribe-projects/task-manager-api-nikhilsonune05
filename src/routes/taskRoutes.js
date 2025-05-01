const express = require('express');
const router = express.Router();

const tasks = require("../models/tasksModel");
const {
    createTask,
    updateTask,
    deleteTask,
    getAllTasks,
    getSingleTask
} = require("../controllers/taskControllers");

router.get('', getAllTasks);

router.get('/:id', getSingleTask);

router.post('/', createTask);

router.patch('/:id', updateTask)

router.delete('/:id', deleteTask)

module.exports = router;