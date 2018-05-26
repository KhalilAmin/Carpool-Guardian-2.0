const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const dbConnection = require("./models"); // loads our connection to the mongo database
const passport = require("./passport");
const app = express();
const http = require('http')
const socket = require('socket.io');
const path = require("path")
const PORT = process.env.PORT || 8080;


// ===== Middleware ====
app.use(morgan('dev'))

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
app.use(bodyParser.urlencoded({ extended: true, limit: '3mb', parameterLimit: 3000 }));
app.use(bodyParser.json({ limit: '3mb' }));

// Serve up static assets
//app.use(express.static(path.join(__dirname, "client", "build")))
app.use(express.static("client/public"));
// Add routes, both API and view

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// app.get("*", (req, res) => {  
//     res.sendFile(path.join(__dirname, "client", "public", "index.html"));
// });

app.use(routes);

// Start the API server
const server = app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  
  //Socket.io
  io = socket(server);
  
  io.on('connection', (socket) => {
	  console.log("SOCKET ID", socket.id);
	
	  socket.on("CONE_UPDATE", function(data) {
		  console.log("GOT THIS ON SERVER", data)
		  io.emit(data.coneID, data);
	  })
  })
  