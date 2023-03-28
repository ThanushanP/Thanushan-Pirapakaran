const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
    title: {
        type: String,
    },
    date: {
        type: String,
    },
    location: {
        type: String,
    },
    sub:{ 
        type: String,
    },
    one: {
        type: String,
        required: true

    },
    two: {
        type: String,
    },
    three: {
        type: String,
    },
    four: {
        type: String,
    },
},{timestamps: true});

const ResumeInfo = mongoose.model('resumedatas', ResumeSchema);
module.exports = ResumeInfo;