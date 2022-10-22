const  mongoose = require('mongoose');
const { use } = require('../controllers/notes');


const bookmarksSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    jobId: {
        type: Number,
        required: true,
        unique:true
    } 
});

module.exports = mongoose.model('Bookmark', bookmarksSchema);