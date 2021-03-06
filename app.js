var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const localPassport = require('./lib/localPassport')
const jwtPassport = require('./lib/jwtPassport')
var usersRouter = require('./routes/users');
const session = require('express-session')
const flash = require('express-flash')
const router = require('./routes/index')
var app = express();

app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret:'chapter7',
  resave:false,
  saveUninitialized:false
}))

// library passport
app.use(localPassport.initialize())
app.use(jwtPassport.initialize())
app.use(localPassport.session())
app.use(flash())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(router)
app.use('/users', usersRouter);

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
