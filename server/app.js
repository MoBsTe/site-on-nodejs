const express = require("express");
// const nodemon = require("nodemon");
const path = require("path");
const middleware = express.static(path.join(__dirname, './../public'));
const app = express();
app.use(middleware);
// const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: "localhost",
//     user: "yourusername",
//     password: "yourpassword"
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE siteOnNodeJS", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//     });
// });


// app.use(express.static('public'));



app.get("/url", (req, res, next) => {

    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food", "Lisa", "Lisa", "Ginger", "Ginger", "Ginger"]);
});


app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './../public', 'index.html'));
});



const port = process.env.PORT || 3000;
app.listen(port, (error) => {

    if (error) {
        console.log('[ERROR] Error start server. \r\n' + error);
        return;
    }
    if (process.env.NODE_ENV === 'production') {
        console.log('[INFO] Server start listening on ' + process.env.HOST_PROD);
    } else {
        console.log('[INFO] Server start listening on localhost:' + port);
    }
    console.log('[INFO] Node environment: ' + process.env.NODE_ENV);
});








// app.listen(3000, () => {
//     nodemon['app.js'];
//     console.log("Server running on port 3000");
// });
