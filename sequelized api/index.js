const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const userRoute = require("./routes/User");

const exphbs = require('express-handlebars');
const path = require('path');


// Static folder
app.use(express.static(__dirname +'/public'))


//Handlebars
app.engine('handlebars', exphbs());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function (req, res) {
  res.render("register");
});
app.use("/", userRoute);

app.listen(5000);
console.log("Server Started...");
