const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors   = require('cors');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'})

connectDB();


const apiRouter = require('./routes/register');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/register', apiRouter)

module.exports = app;
