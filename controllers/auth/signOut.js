import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: false }
        );

        return res.status(200).json({
            success: true,
            message: "Disconnected",
        });
    } catch (error) {
        next(error);
    }
};