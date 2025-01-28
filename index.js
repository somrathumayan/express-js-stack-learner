const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello User");
})

app.listen(8000, () => {
    console.log("Server is running");
});