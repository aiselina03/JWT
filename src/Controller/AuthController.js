import jwt from "jsonwebtoken"
import { UserModel } from "../Model/UserModel.js";

export const handleLoginController = async (req, res) => {
    try {
        const { userName, password } = req.body
        const user = await UserModel.findOne({ userName })
        if (!user) {
            res.send("user not found")
            return
        }
        if (user.password !== password) {
            res.send("password not valid")
            return
        }

        var token = jwt.sign({ userName, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        res.send(token)

    } catch (error) {
        res.send(error.message)
    }

}

export const handleRegisterController = async (req, res) => {
    try {
        const { userName, password } = req.body
        const newUser = new UserModel({ userName, password })
        var token = jwt.sign({ userName:newUser.userName, role: newUser.role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        await newUser.save()
        res.send(token)
    } catch (error) {
        res.send(error.message)
    }
}
