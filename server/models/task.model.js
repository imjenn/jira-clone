const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        default: "BACKLOG"
    },
    assignee: {
        type: String
    },
    reporter: {
        type: String
    }
}, {timestamps: true})

module.exports.Task = mongoose.model("Task", TaskSchema);