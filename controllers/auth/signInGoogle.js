import User from "../../models/User.js";

export default async(req,res,next) => {
    try {        

        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true }
        );
        console.log(req);
        console.log(req.user.name);
        
        return res.redirect('http://localhost:5173/home?token=' + req.token);

    } catch (error) {
       next(error) 
    }
}