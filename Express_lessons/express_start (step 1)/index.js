const express = require('express');
const path = require('path');
const dotenv = require('dotenv')


const app = express()

app.use(express.static('public'))


dotenv.config();
PORT = process.env.PORT;

app.listen(PORT, () => console.log(`app is listening to port ${PORT}`))