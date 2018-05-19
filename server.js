const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true, limit: '3mb', parameterLimit: 3000 }));
app.use(bodyParser.json({limit: '3mb'}));
// Serve up static assets
app.use(express.static("client/public"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/carpoolGuardian");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "apitemp.html"));
  });

app.post("/createFaceSet", function(req, res) {
    console.log(req.body);
  });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
