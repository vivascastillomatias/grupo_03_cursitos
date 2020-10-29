var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override')
const session = require('express-session')
const cookie = require('cookie-parser')

const middleSession = require('./middlewares/app/session');
const log = require('./middlewares/app/log');


//------------------------- Routers ---------------------------------------
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coursesRouter = require('./routes/course');
var carritoRouter = require('./routes/carrito');
//------------------------- Routers ---------------------------------------

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'))
app.set('trust proxy', 1) // trust first proxy



app.use(session({
  secret: 'cursitos',
  resave: false,
  saveUninitialized: true,
}))
app.use(middleSession)
app.use(log)
app.use(cookie())
//------------------------- routes ---------------------------------------
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/carrito', carritoRouter);
//------------------------- end routes ------------------------------------

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