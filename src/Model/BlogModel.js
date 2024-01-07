import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: String,
    author: String,
    body: String
}, {timestamps: true})

export const BlogModel = mongoose.model('Blog', blogSchema);