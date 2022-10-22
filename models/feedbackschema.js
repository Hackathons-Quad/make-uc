const  mongoose = require('mongoose');
const { use } = require('../controllers/notes');

const feedbacksSchema = new mongoose.Schema({
    jobId: {
        type: Number,
        required: true,
        unique:true
    },
    feedback: {
        type: String,
        required: true,
        default: ""
    }
});


module.exports = mongoose.model('Feedback', feedbacksSchema);
