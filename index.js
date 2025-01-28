const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    fs.readFile("./pages/index.html", (err, data) => {
        if(err){
            console.log("error");
            res.send(`<h1>Something went wrong</h1>`);
        } else{
            res.write(data);
            res.end()
        }
    });

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