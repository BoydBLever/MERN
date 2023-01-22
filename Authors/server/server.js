const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

// --- middleware ---
app.use(cors(), express.json(), express.urlencoded({extended:true}))


app.listen(PORT, () => console.log(`✅ SERVER ${PORT} RUNNING`))

