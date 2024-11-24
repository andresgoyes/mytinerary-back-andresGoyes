import joi from "joi-oid";

const citySchema = joi.object({
    name: joi.string().required().messages({
        'string.empty': 'Name is required',
        'any.required': 'Name is required',
        'string.base': 'Name must be a string',
    }), 
    photo: joi.string().required().messages({
        'string.empty': 'Photo is required',
        'any.required': 'Photo is required',
        'string.base': 'Photo must be a string',
    }), 
    country: joi.string().required().messages({
        'string.empty': 'Country is required',
        'any.required': 'Country is required',
        'string.base': 'Country must be a string',
    }), 
    continent: joi.string().required().messages({
        'string.empty': 'Continent is required',
        'any.required': 'Continent is required',
        'string.base': 'Continent must be a string',
    }),
    currency: joi.string().required().messages({
        'string.empty': 'Currency is required',
        'any.required': 'Currency is required',
        'string.base': 'Currency must be a string',
    }),
    description: joi.string().required().messages({
        'string.empty': 'Description is required',
        'any.required': 'Description is required',
        'string.base': 'Description must be a string',
    }),
    likes: joi.number().required().messages({
        'number.empty': 'Likes is required',
        'any.required': 'Likes is required',
        'number.base': 'Likes must be a number',
    }),
    
    itineraries: joi.array().items(joi.string().pattern(/^[0-9a-fA-F]{24}$/)).optional().messages({
        "string.base": "El ID de itinerario debe ser un texto",
        "string.pattern.base": "El ID de itinerario debe ser un ObjectId válido",
        "any.required": "El ID de itinerario es obligatorio",
    })
});

export default citySchema;