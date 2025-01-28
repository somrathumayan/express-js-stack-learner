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
    // res.send("Hello about");
    fs.readFile("./pages/about.html", (err, data) => {
        if(err){
            console.log("Error Data");
            res.send(`<h1>Something Wrong</h1>`);
        } else{
            res.write(data);
            res.end();
        }
    })
})

app.get("/contact", (req, res) => {
    res.send("Hello contact");
})

app.get("/blog", (req, res) => {
    // res.send("Hello blog");
    fs.readFile("./pages/blog.html", (err, data) => {
        if(err){
            console.log("Error");
            res.send(`Something went wrong on blog`);
        }
        else {
            res.write(data);
            res.end();
        }
    })
})

app.listen(8000, () => {
    console.log("Server is running");
});