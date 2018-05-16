const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const dbConnection = require("./db"); // loads our connection to the mongo database
const passport = require("./passport");
const app = express();
const PORT = process.env.PORT || 3001;

// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/public"));
// Add routes, both API and view
app.use(routes);


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
