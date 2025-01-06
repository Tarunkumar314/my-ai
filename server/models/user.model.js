import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    noOfReports: {
        type: Number,
        default: 0
    },
    subStartDate: {
        type: Date,
        default: Date.now
    },
    amtOfReports: {
        type: Number,
        default: 0
    },
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);