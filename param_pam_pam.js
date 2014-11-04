var express = require("express");
var crypto = require("crypto");
var app = express();

app.put("/message/:id", function(request, response) {
    var id = request.params.id;
    var date = crypto
        .createHash("sha1")
        .update(new Date().toDateString() + id)
        .digest("hex");
    response.send(date);
});
app.listen(process.argv[2]);
