const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please inpnt a name'],
        trim: true,
        maxlength: [20, 'you can not input more']
    },
    complited: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Tasks', TaskSchema)