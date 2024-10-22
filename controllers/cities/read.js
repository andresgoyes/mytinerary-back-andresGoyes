import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        let { name } = req.query;
        let query = {};

        if (name) {
            query.name = { $regex: '^' + name, $options: 'i' };
        }

        let all = await City.find(query);
        if (all.length > 0) {
            return res.status(200).json({
                response: all
            });
        } else {
            return res.status(404).json({
                response: "No cities found with the specified name"
            });
        }
    } catch (error) {
        next(error);
    }
};

let cityByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.name;
        let name = await City.find({ name: { $regex: nameQuery, $options: 'i' } });

        if (name.length > 0) {
            return res.status(200).json({
                response: name
            });
        } else {
            return res.status(404).json({
                response: "No cities found with the specified name"
            });
        }
    } catch (error) {
        next(error);
    }
};

let cityByCountry = async (req, res, next) => {
    try {
        let countryQuery = req.params.country;
        let cities = await City.find({ country: countryQuery });

        if (cities.length > 0) {
            return res.status(200).json({
                response: cities
            });
        } else {
            return res.status(404).json({
                response: "No cities found for the specified country"
            });
        }
    } catch (error) {
        next(error);
    }
};

let cityById = async (req, res, next) => {
    try {
        let cityId = req.params.id;
        let city = await City.findById(cityId);

        if (city) {
            return res.status(200).json({
                response: city
            });
        } else {
            return res.status(404).json({
                response: "City not found with the specified ID"
            });
        }
    } catch (error) {
        next(error);
    }
};

export { allCities, cityByName, cityByCountry, cityById };