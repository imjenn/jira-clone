const { Task } = require('../models/task.model');

module.exports = {
    // Create
    create: (req, res) => {
        Task.create(req.body)
            .then(task => res.json(task))
            .catch(err => res.status(400).json(err));
    },

    // Retrieve all tasks
    findAll: (req, res) => {
        Task.find()
            .then(tasks => res.json(tasks))
            .catch(err => res.json(err))
    },

    // Retrieve one task
    findOne: (req, res) => {
        Task.findById(req.params.id) 
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },

    // Update task 
    update: (req, res) => {
        Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedTask => res.json(updatedTask))
            .catch(err => res.status(400).json(err))
    },

    // Delete task
    delete: (req, res) => {
        Task.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result}))
            .catch(err => res.json(err));
    }
}