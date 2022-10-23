const  mongoose = require('mongoose');
const { use } = require('../controllers/jobs', '../controllers/users');

const usersSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        default: "",
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    }
});


module.exports = mongoose.model('User', usersSchema);
