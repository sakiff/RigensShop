const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const userRoute = require("./routes/User");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
const exphbs = require('express-handlebars');
const path = require('path');




//Handlebars
app.engine('handlebars', exphbs());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');


app.get("/", function (req, res) {
  res.render("register");
});
app.use("/", userRoute);

app.listen(4000);
console.log("Server Started...");
