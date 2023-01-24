const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 1337;


app.use(cors(), express.json(), express.urlencoded({extended:true}));

app.listen(PORT, () => console.log(`🏃🏽🏃‍♂️${PORT} RUNNING`));