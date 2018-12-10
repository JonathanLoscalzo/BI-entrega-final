var config = require('./config/index')
var mongoose = require('mongoose');
mongoose.connect(config.MONGO.CONNECTION_STRING, { useNewUrlParser: true });

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var speechesRouter = require('./routes/speech')
var statsRouter = require('./routes/stats')

var app = express();
const corsOption = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOption))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/speeches', speechesRouter);
app.use('/stats', statsRouter);

module.exports = app;
