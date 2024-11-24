const error_handler = (error, req, res, next) => {
    console.log(error);
    if (error.status === 400) {
        return res.status(400).json({
            success: false,
            message: 'Syntax error in Body JSON',
            message_error: `${error.message}`,
            response: error,
        })
    } else {
        return res.status(500).json({
            success: false,
            message: 'Error in the fields when uploading data',
            message_error: `${error.message}`,
            response: error,
        })
    }
}
export default error_handler