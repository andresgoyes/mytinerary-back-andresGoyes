import Itinerary from "../../models/Itinerary.js";

let create = async (req, res, next) => {
    try {
        let itinerary = req.body;
        let newItinerary = await Itinerary.create(itinerary);
        return res.status(201).json({
            response: newItinerary,
            message: "Itinerary created sucessfully."
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let itineraries = req.body;
        let allItineraries = await Itinerary.insertMany(itineraries);
        return res.status(201).json({
            response: allItineraries,
            message: "Itineraries created sucessfully."
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };