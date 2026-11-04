const express = require("express");
const router = express.Router();

const { testError } = require("../controllers/errorController");

router.get("/:statusCode", testError);

module.exports = router;