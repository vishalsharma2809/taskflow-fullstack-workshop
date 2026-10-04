const Task = require("../models/Task");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .sort({ createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tasks",
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create task",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update task",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Task deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete task",
    });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};