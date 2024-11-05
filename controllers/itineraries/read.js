import Itinerary from "../../models/Itinerary.js";

let allItineraries = async (req, res, next) => {
    try {
        let { city } = req.query;
        let query = {};

        if (city) {
            query.city = city;
        }

        let itineraries = await Itinerary.find(query).populate('name photo price duration hashtags').exec()
        return res.status(200).json({
            response: itineraries
        });
    } catch (error) {
        next(error);
    }
};

let itinerariesByCity = async (req, res, next) => {
    try {

        let name = req.params.itinerary;
        console.log(req.params);

        let all = await Itinerary.find({ city: name });
        console.log(all);

        return res.status(200).json({
            response: all
        });

    } catch (error) {
        next(error);
    }
};


let itineraryById = async (req, res, next) => {
    try {
        let itineraryId = req.params.id;
        let itinerary = await Itinerary.findById(itineraryId);

        if (itinerary) {
            return res.status(200).json({
                response: itinerary
            });
        } else {
            return res.status(404).json({
                response: "Itinerary not found with the specified ID"
            });
        }
    } catch (error) {
        next(error);
    }
};

export { allItineraries, itinerariesByCity, itineraryById };