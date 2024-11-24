import User from "../../models/User.js";

let allUsers = async (req, res, next) => {
    try {
        let all = await User.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
};

let userById = async (req, res, next) => {
    try {
        let userId = req.params.id;
        let user = await User.findById(userId);

        if (user) {
            return res.status(200).json({
                response: user
            });
        } else {
            return res.status(404).json({
                response: "User not found with the specified ID"
            });
        }
    } catch (error) {
        next(error);
    }
};

export { allUsers, userById };