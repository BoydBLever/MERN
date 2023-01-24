const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 1337;
const DB = "players"

app.use(cors(), express.json(), express.urlencoded({extended:true}));

require("./config/config")(DB)


app.listen(PORT, () => console.log(`🏃🏽🏃‍♂️${PORT} RUNNING`));