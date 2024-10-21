const bad_request_handler = (error, req, res, next) => {
    if (error.status === 400 || error.type === 'entity.parse.failed') {
        console.log('Error 400 capturado:', error);

        return res.status(400).json({
            success: false,
            response: error,
            message: "Solicitud incorrecta - Bad Request"
        });
    }
    next(error);
};

export default bad_request_handler;