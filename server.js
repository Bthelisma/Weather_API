// ========== CONFIG =============
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();

// app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(__dirname + '/weatherApp/dist'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
// ===============================



// ==== NEW MONGOOSE CODE! =======
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/weather_api');
mongoose.Promise = global.Promise;

// ======================

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});


// ==== SERVER LISTENER! =======
app.listen(8000, function() {
    console.log("Express on port 8000!")
});
// =============================