const express = require('express');
const cors = require('cors');
const { createServer } = require('node:http');
const cookieParser = require('cookie-parser');
const { BASE_URI } = require('./const');
const clientRouter = require('./routes/clientsRouter');
const orderRouter = require('./routes/orderRouter');

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
const server = createServer(app);
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

app.use(`${BASE_URI}/clients`, clientRouter);
app.use(`${BASE_URI}/orders`, orderRouter);

module.exports = server;
