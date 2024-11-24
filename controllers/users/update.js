import User from "../../models/User.js";

let update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        let updatedUser = await User.findByIdAndUpdate(id, userData, {
            new: true,
            runValidators: true,
        });

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        return res.status(200).json({
            response: updatedUser,
            message: "User updated successfully."
        });
    } catch (error) {
        next(error);
    }
};

export default update;
