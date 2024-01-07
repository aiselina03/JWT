import express from 'express'
import { createBlogs, deleteBlog, getAllBlogs, getBlog, updateBlogs } from '../Controller/BlogController.js'

export const blogRouter= express.Router()

blogRouter.get('/', getAllBlogs )
blogRouter.get('/:id',getBlog)
blogRouter.post('/', createBlogs)
blogRouter.put('/:id', updateBlogs )
blogRouter.delete('/:id', deleteBlog)