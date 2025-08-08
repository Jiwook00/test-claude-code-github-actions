const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api/hello", (req, res) => {
    res.json({ message: "wolrd" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});