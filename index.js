const express = require('express')
const app = express();
require('dotenv').config();

require("./db");

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Welcome to our E-commerce');
})

// Import the router files
const userRoutes=require("./routes/userRoutes");

app.use('/user', userRoutes);
  
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})