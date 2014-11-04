var express = require("express");
var fs = require("fs");
var app = express();

app.get("/books", function(request, response) {
    fs.readFile(process.argv[3], function(err, data) {
        if (err) return response.send("couldnt read file");
        try{
            var books = JSON.parse(data);
        } catch (err) {
            response.send("couldnt parse data")
        }
        response.send(books);
    });
});
app.listen(process.argv[2]);
