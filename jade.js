var express = require("express");
var app = express();

app.set("view engine", "jade");
app.set("views", __dirname + "/templates");

app.get("/home", function(request, response) {
    response.render("index", {date: new Date().toDateString()});
})
app.listen(process.argv[2]);
