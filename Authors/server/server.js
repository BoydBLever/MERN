const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "authors"

// --- middleware ---
app.use(cors(), express.json(), express.urlencoded({extended:true}))

// -- database connection
require("./config/config")(DB)

//connect the routes
require('./routes/route')(app)

app.listen(PORT, () => console.log(`✅ SERVER ${PORT} RUNNING`))

