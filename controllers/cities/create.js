import City from "../../models/City.js";

let create = async (req, res, next) => {
    try {
        let city = req.body;
        let newCity = await City.create(city);
        return res.status(201).json({
            response: newCity,
            message: "City created sucessfully."
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let cities = req.body;
        let allCities = await City.insertMany(cities);
        return res.status(201).json({
            response: allCities,
            message: "Cities created sucessfully."
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };