import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import { blogRouter } from './src/Routers/BlogRouter.js'
import { authRouter } from './src/Routers/AuthRouter.js'
import { userRouter } from './src/Routers/UserRouter.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/blogs", blogRouter)
app.use("/api/users", userRouter)
app.use("/", authRouter)

mongoose.connect(process.env.DB_SECRET_KEY)
    .then(() => console.log('Connected!'))
    .catch((err) => console.log("not"))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

// app.get('/api/blogs', async (req, res) => {
//     try {
//         const blogs = await BlogModel.find({});
//         res.json(blogs)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/api/blogs/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const blog = await BlogModel.findById(id);
//         res.json(blog)
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.post('/api/blogs/', async (req, res) => {
//     try {
//         const { title, author, body } = req.body
//         const newBlog = new BlogModel({ title, author, body })
//         await newBlog.save()
//         res.status(200).json('Blog elave olundu!')
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.put('/api/blogs/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const { title, author, body } = req.body
//         const blog = await BlogModel.findByIdAndUpdate(id,{ title, author, body});
//         res.json(blog)
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.delete('/api/blogs/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const blog = await BlogModel.findByIdAndDelete(id);
//         res.json(blog)
//     } catch (error) {
//         res.send(error.message);
//     }
// })

