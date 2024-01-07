import { BlogModel } from "../Model/BlogModel.js";

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find({});
        res.json(blogs)
    } catch (error) {
        res.send(error.message)
    }
}

export const getBlog =  async (req, res) => {
    try {
        const { id } = req.params
        const blog = await BlogModel.findById(id);
        res.json(blog)
    } catch (error) {
        res.send(error.message);
    }
}

export const createBlogs = async (req, res) => {
    try {
        const { title, author, body } = req.body
        const newBlog = new BlogModel({ title, author, body })
        await newBlog.save()
        res.status(200).json('Blog elave olundu!')
    } catch (error) {
        res.send(error.message)
    }
}

export const updateBlogs = async (req, res) => {
    try {
        const { id } = req.params
        const { title, author, body } = req.body
        const blog = await BlogModel.findByIdAndUpdate(id,{ title, author, body});
        res.json(blog)
    } catch (error) {
        res.send(error.message);
    }
}
export const deleteBlog =  async (req, res) => {
    try {
        const { id } = req.params
        const blog = await BlogModel.findByIdAndDelete(id);
        res.json(blog)
    } catch (error) {
        res.send(error.message);
    }
}
