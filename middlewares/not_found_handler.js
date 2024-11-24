const not_found_handler = (req,res,next) =>{
    return res.status(404).json({
        success: false,
        message: `the request with the method ${req.method} Rute ${req.url} - Not found `
    })
}

export default not_found_handler