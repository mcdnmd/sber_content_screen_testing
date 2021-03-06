const createError = require('http-errors');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const passport = require('passport')
const logger = require('morgan');
//const fetch = require("node-fetch");

// Важные переменные
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const screenRouter = require('./routes/screen');

//const keys = require('./config/keys');

// Запуск Express
const app = express();

// Инициализация базы данных
// mongoose.connect(keys.mongoURI)
//     .then(() => console.log('MongoDB connected.'))
//     .catch( error => console.log(error));

//app.use(passport.initialize());
//require('./middleware/passport')(passport);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/screen',  screenRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
