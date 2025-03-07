import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    phone: {
        type: Number,
        required: true
    },
    fullName: {
        type: String,
        required: true
    }
})

const User = mongoose.model("user", userSchema)

export default {User}