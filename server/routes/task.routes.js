const Task = require('../controllers/task.controller');

module.exports = (app) => {
    // Create
    app.post('/task/new', Task.create)
    // Retrieve all
    app.get('/tasks', Task.findAll)
    //Retrieve one 
    app.get('/task/:id', Task.findOne)
    // Update
    app.put('/task/update/:id', Task.update)
    // Delete
    app.delete('/task/delete/:id', Task.delete)
}