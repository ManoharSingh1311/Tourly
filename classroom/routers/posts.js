const express = require("express");
const router = express.Router();

// Posts
// Index route
router.get("/", (req, res) => {
    res.send("Get for posts");
});

// Show route
router.get("/:id", (req, res) => {
    res.send("Get for post id");
});

// Post route
router.post("/", (req, res) => {
    res.send("Post for posts");
});

// Delete route
router.delete("/:id", (req, res) => {
    res.send("Delete for post id");  // Corrected response message
});

module.exports = router;
