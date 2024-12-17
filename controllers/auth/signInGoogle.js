import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true }
        );
        return res.redirect(`https://mytinerary-devfluencer.web.app/home?token=${req.token}`);
    } catch (error) {
       next(error) 
    }
}