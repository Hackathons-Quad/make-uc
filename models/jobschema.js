const  mongoose = require('mongoose');
const { use } = require('../controllers/jobs', '../controllers/users');

const jobsSchema = new mongoose.Schema({
    jobId: {
        type: Number,
        required: true,
        unique:true
    },
    jobDescription: {
        required: true,
        type: String,
        default: ""
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    stipend: {
        type: String,
        required: true,
        default: ""
    },
    duration: {
        type: String,
        required: true
    },
    location: {
        required: true,
        type: String,
        default: ""
    },
    
});

module.exports = mongoose.model('Job', jobsSchema);
