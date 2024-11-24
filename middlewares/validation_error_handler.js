const validation_error_handler = (error, req, res, next) => {
    if (error.name === 'ValidationError') {
        let errors = {};
        Object.keys(error.errors).forEach((key) => {
            errors[key] = error.errors[key].message;
        });

        return res.status(400).json({
            success: false,
            message: 'Validation Error',
            errors: errors,
        });
    }
    next(error);
};

export default validation_error_handler;