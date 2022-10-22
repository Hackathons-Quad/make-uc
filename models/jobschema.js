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
    eemail: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    stipend: {
        type: Number,
        required: true,
        default: ""
    },
    duration: {
        type: Number,
        required: true
    },
    location: {
        required: true,
        type: String,
        default: ""
    },
    
});

module.exports = mongoose.model('Job', jobsSchema);
