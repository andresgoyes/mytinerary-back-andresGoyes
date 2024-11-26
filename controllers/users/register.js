import User from "../../models/User.js";

let register = async (req, res, next) => {
    try {
        let user = req.body;
        user.online = false
        let newUser = await User.create(user);
        return res.status(201).json({            
            success: true,
            message: "User created successfully.",
            user: {
                name: newUser.name,
                lastname: newUser.lastName,
                email: newUser.email,
                photoUrl: newUser.photoUrl,
                country: newUser.country
            },
            token: req.token
        });
    } catch (error) {
        next(error);
    }
};

let registerMany = async (req, res, next) => {
    try {
        let users = req.body;
        let allUsers = await User.insertMany(users);
        return res.status(201).json({
            response: allUsers,
            message: "Users created sucessfully."
        });
    } catch (error) {
        next(error);
    }
};

export { register, registerMany };