import joi from "joi-oid";

const itinerarySchema = joi.object({
    creator: joi.string().required().messages({
        'string.empty': 'Name is required',
        'any.required': 'Name is required',
        'string.base': 'Name must be a string',
    }),
    creatorPhoto: joi.string().required().messages({
        'string.empty': 'Photo is required',
        'any.required': 'Photo is required',
        'string.base': 'Photo must be a string',
    }),
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
    price: joi.number().required().messages({
        'number.empty': 'Price is required',
        'any.required': 'Price is required',
        'number.base': 'Price must be a number',
    }),
    duration: joi.number().required().messages({
        'number.empty': 'Duration is required',
        'any.required': 'Duration is required',
        'number.base': 'Duration must be a number',
    }),
    likes: joi.number().required().messages({
        'number.empty': 'Likes is required',
        'any.required': 'Likes is required',
        'number.base': 'Likes must be a number',
    }),
    hashtags: joi.array().required().messages({
        'array.empty': 'Hashtags is required',
        'any.required': 'Hashtags is required',
        'array.base': 'Hashtags must be an array',
    }),
    city: joi.string().required().messages({
        'string.empty': 'City is required',
        'any.required': 'City is required',
        'string.base': 'City must be a string', 
    })
});

export default itinerarySchema