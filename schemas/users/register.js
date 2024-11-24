import joi from "joi-oid";

 const registerSchema = joi.object({

    name: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).required().min(3).alphanum().messages({
        'string.base':'Do not use numbers',
        'string.pattern.base':'"name" Do not use numbers and use special characters',
        'string.min':'"name" Must be a minimum of 3 characters'
    }),

    lastName: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).alphanum().min(3).messages({
        'string.base':'Do not use numbers',
        'string.pattern.base':'"lastName" Do not use numbers and use special characters',
        'string.min':'"name" Must be a minimum of 3 characters'
    }),

    email: joi.string().email().required().messages({
        'string.empty': 'Email is required',
        'any.required': 'Email is required',
        'string.base': 'Email must be a string',
        'string.email': 'Email must be a valid email',
    }),
    password: joi.string().required().min(8).max(30).messages({
        'string.empty': 'Password is required',
        'any.required': 'Password is required',
        'string.base': 'Password must be a string',
        'string.min': 'Password must be at least 8 characters',
        'string.max': 'Password must be at most 30 characters',
    }),
    photoUrl: joi.string().required().messages({
        'string.empty': 'Photo URL is required',
        'any.required': 'Photo URL is required',
        'string.base': 'Photo URL must be a string',
    }),
    country: joi.string().required().messages({
        'string.empty': 'Country is required',
        'any.required': 'Country is required',
        'string.base': 'Country must be a string',
    })
});

export default registerSchema
