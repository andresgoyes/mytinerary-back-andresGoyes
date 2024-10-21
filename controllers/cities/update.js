import City from "../../models/City.js";

let update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cityData = req.body;
        let updatedCity = await City.findByIdAndUpdate(id, cityData, {
            new: true,
            runValidators: true,
        });

        if (!updatedCity) {
            return res.status(404).json({
                message: "City not found."
            });
        }

        return res.status(200).json({
            response: updatedCity,
            message: "City updated successfully."
        });
    } catch (error) {
        next(error);
    }
};

export { update };
