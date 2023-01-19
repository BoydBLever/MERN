const express = require("express");
const app = express();
const PORT = 8000;
const DB = "jokes_api";

//CONNECT to the DB using mongoose
require("./config/mongoose.config")(DB)
//--MIDDLEWARE
app.use(express.json(), express.urlencoded({extended:true}));

//import the routes AFTER the DB connection
const AllMyJokeRoutes = require("./routes/joke.route");
AllMyJokeRoutes(app);

//--START THE SERVER
app.listen(PORT, () => console.log(`🦄🦄🦄🦄 server up on PORT ${PORT}`));