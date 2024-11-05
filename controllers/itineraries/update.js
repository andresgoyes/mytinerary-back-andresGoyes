import Itinerary from "../../models/Itinerary.js";

let update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const itineraryData = req.body;
        let updatedItinerary = await Itinerary.findByIdAndUpdate(id, itineraryData, {
            new: true,
            runValidators: true,
        });

        if (!updatedItinerary) {
            return res.status(404).json({
                message: "Itinerary not found."
            });
        }

        return res.status(200).json({
            response: updatedItinerary,
            message: "Itinerary updated successfully."
        });
    } catch (error) {
        next(error);
    }
};

export { update };