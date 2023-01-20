const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "products"

// MIDDLEWARE
app.use(cors())
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"]
// }))
app.use(express.json(), express.urlencoded.apply({extended:true}));

//connected to the DB using mongoose
require("./config/mongoose.config")(DB)

// import routes after DB connection
require("./routes/product.route")(app)

//START THE SERVER
app.listen(PORT, ()=>{
    console.log(`🦄🦄🦄🦄 ${PORT} running`)
});
