var express = require("express");
const nodemon = require("nodemon");

var app = express();

app.use(express.static('public'));
app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});







app.listen(3000, () => {
    nodemon['app.js'];
    console.log("Server running on port 3000");
});
