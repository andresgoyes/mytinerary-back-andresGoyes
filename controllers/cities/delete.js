import City from "../../models/City.js";

let deleteCity = async (req, res, next) => {
    try {
        const { id } = req.params;
        let deletedCity = await City.findByIdAndDelete(id);

        if (!deletedCity) {
            return res.status(404).json({
                message: "City not found."
            });
        }

        return res.status(200).json({
            response: deletedCity,
            message: "City deleted successfully."
        });
    } catch (error) {
        next(error);
    }
};

export { deleteCity };