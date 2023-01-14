var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors')

var usersRouter = require('./routes/users');
var forumRouter = require('./routes/forum');
var consultRouter = require('./routes/consult');

var app = express();



app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: "hnr2023",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/forum', forumRouter);
app.use('/consult', consultRouter);

// Put all routes before this
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/app/build/index.html'));
});

module.exports = app;
