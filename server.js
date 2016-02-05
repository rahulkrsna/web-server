var express = require("express");
var app = express();
const PORT = 3000;


var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log("private route hit!");
		next();
	},
	logger: function(req, res, next) {
		console.log("Request: " + new Date().toString() + " " + req.method + " " + req.originalUrl);
		next();
	}
}

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get("/about", middleware.requireAuthentication, function(request, response) {
	response.send("About Us: Rahul Krishna Vasantham.")
})

// allow the public folder for access
app.use(express.static(__dirname+"/public"))

// console.log(__dirname); // Get the root directory of the webserver

app.listen(PORT, function() {
	console.log("Express server started and listening on port "+PORT+"!");
});


// app.get("/",function (request, response) {
// 	response.send("Hello Express!");
// });