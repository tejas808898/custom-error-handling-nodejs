const CustomError = require("../utils/CustomError");
const asyncHandler = require("../utils/asyncHandler");

const testError = asyncHandler(async (req, res) => {

    const statusCode = Number(req.params.statusCode);

    const errorMessages = {
        400: "Bad Request",
        401: "Unauthorized Access",
        403: "Forbidden Access",
        404: "Resource Not Found",
        409: "Resource Conflict",
        500: "Internal Server Error"
    };

    const message = errorMessages[statusCode];

    if (!message) {
        throw new CustomError("Invalid status code", 400);
    }

    throw new CustomError(message, statusCode);

});

module.exports = { testError };