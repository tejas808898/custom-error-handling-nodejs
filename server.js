const express = require("express");

const app = express();

const errorRoutes = require("./routes/errorRoutes");
const productRoutes = require("./routes/productRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

// Middleware
app.use(express.json());

// Routes
app.use("/errors", errorRoutes);
app.use("/products", productRoutes);

// Global Error Handler (must be last)
app.use(errorMiddleware);

// Start Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});