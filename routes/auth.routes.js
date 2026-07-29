const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/auth.controller");
const verifyToken = require("../middleware/auth.middleware");

router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route example
router.get("/profile", verifyToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Protected profile data accessed successfully",
        user: req.user
    });
});

module.exports = router;

