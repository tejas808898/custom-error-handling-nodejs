const errorMiddleware = (err, req, res, next) => {

    if (res.headersSent) {
        return next(err);
    }

    const statusCode = err.statusCode || 500;

    const message = err.isOperational
        ? err.message
        : "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message: message,
        statusCode: statusCode
    });

};

module.exports = errorMiddleware;