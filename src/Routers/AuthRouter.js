import express from 'express'
import { handleLoginController, handleRegisterController } from '../Controller/AuthController.js'
export const authRouter=express.Router()

authRouter.post('/login', handleLoginController)
authRouter.post('/register', handleRegisterController)