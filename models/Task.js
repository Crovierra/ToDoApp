import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    status: {
        type: Boolean,
        default: false
    }

})

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema) 

export default Task