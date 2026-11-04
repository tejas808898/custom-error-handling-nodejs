const express = require("express");
const router = express.Router();

const {
    getProductById,
    testServerError
} = require("../controllers/productController");

// Static route FIRST
router.get("/test-server-error", testServerError);

// Dynamic route SECOND
router.get("/:id", getProductById);

module.exports = router;