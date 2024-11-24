import User from "../../models/User.js";

let deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        let deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        return res.status(200).json({
            response: deletedUser,
            message: "User deleted successfully."
        });
    } catch (error) {
        next(error);
    }
};

export { deleteUser };