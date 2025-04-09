import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    picture:{
        type: String,
        required: true,
        default: 'https://via.placeholder.com/150'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    applicants: {
        type: String,
        ref: 'User'
    },
   offerDescription:{
       type: String,
       required: true,

   }
   
});

const Jobs = mongoose.model('MyJob', JobSchema);

export default Jobs;