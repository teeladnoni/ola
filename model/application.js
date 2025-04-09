import mongoose from "mongoose";
const ApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    Dob:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    }
})

const Applicants = mongoose.model('Applicants', ApplicationSchema);

export default Applicants;

