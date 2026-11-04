const CustomError = require("../utils/CustomError");
const asyncHandler = require("../utils/asyncHandler");

// Sample product data
const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Keyboard", price: 1500 }
];

// GET PRODUCT BY ID
const getProductById = asyncHandler(async (req, res) => {

    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        throw new CustomError("Invalid product ID", 400);
    }

    const product = products.find(p => p.id === id);

    if (!product) {
        throw new CustomError("Product not found", 404);
    }

    res.status(200).json({
        success: true,
        message: "Product fetched successfully",
        data: product
    });

});

module.exports = { getProductById };
const testServerError = asyncHandler(async (req, res) => {
    throw new Error("Database connection failed");
});

module.exports = {
    getProductById,
    testServerError
};