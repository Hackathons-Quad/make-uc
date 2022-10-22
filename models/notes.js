const  mongoose = require('mongoose');
const { use } = require('../controllers/notes');

const usersSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        lowercase:true
    },
    username: {
        type: String,
        required: true,
        default: "",
        unique:true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: "Please enter a valid email"
        },
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: true
    },
    bodyOfMail: {
        type: String,
        required: true
    },
    isAuthenticated: {
        type: Boolean,
        required: true,
        
    }
});
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
    email: usersSchema.email,
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
const feedbacksSchema = new mongoose.Schema({
    jobId: jobsSchema.jobId ,
    feedback: {
        type: String,
        required: true,
        default: ""
    }
});
const bookmarksSchema = new mongoose.Schema({
    email:usersSchema.email,
    jobId:jobsSchema.jobId  
});

module.exports = mongoose.model('User', usersSchema);
module.exports = mongoose.model('Job', jobsSchema);
module.exports = mongoose.model('Feedback', feedbacksSchema);
module.exports = mongoose.model('Bookmark', bookmarksSchema);