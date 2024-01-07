import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    userName:{
        type: String,
        unique: true
    } ,
    password: String,
    role:{
        type: String,
        default: "User"
    }
}, {timestamps: true})

export const UserModel = mongoose.model('User', userSchema);