const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.use(express.json());

// Import Auth Routes
const authRoutes = require("./routes/auth.routes");

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});