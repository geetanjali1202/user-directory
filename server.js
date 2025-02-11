const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("public"));

// API endpoint to get user details
app.get("/user/:id", (req, res) => {
    fs.readFile("./data/users.json", "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "Failed to read data" });
            return;
        }
        const users = JSON.parse(data);
        const user = users.find(u => u.id === req.params.id);
        
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
