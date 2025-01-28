const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/about", (req, res) => {
    res.send("Hello about");
})

app.get("/contact", (req, res) => {
    res.send("Hello contact");
})

app.get("/blog", (req, res) => {
    res.send("Hello blog");
})

app.listen(8000, () => {
    console.log("Server is running");
});