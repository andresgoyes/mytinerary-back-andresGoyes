import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let account = await User.findOne({ email: req.body.email })
        if (account) {
            req.user = {
                name: account.name,
                lastname: account.lastName,
                email: account.email,
                password: account.password,
                photoUrl: account.photoUrl
            }
            return next()
        }
        return res.status(400).json({
            success: false,
            response: 'Account not exist'
        })
    } catch (error) {
        next(error)
    }
}