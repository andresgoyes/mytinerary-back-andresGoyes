import Itinerary from "../../models/Itinerary.js";

let deleteItinerary = async (req, res, next) => {
    try {
        const { id } = req.params;
        let deletedItinerary = await Itinerary.findByIdAndDelete(id);

        if (!deletedItinerary) {
            return res.status(404).json({
                message: "Itinerary not found."
            });
        }

        return res.status(200).json({
            response: deletedItinerary,
            message: "Itinerary deleted successfully."
        });
    } catch (error) {
        next(error);
    }
};

export { deleteItinerary };