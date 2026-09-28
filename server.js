const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow the server to receive JSON data
app.use(express.json());

// Serve website files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Payment endpoint
app.post("/api/payment", (req, res) => {
    const { name, phone, amount } = req.body;

    if (!name || !phone || !amount) {
        return res.status(400).json({
            success: false,
            message: "Please provide all payment details."
        });
    }

    console.log("Payment request received:");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Amount:", amount);

    res.json({
        success: true,
        message: "Payment request received successfully."
    });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Google Update is running on port ${PORT}`);
});