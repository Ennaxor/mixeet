var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

var configDB = require('./config/database.js');

//MONGODB & MONGOOSE
var mongoose = require('mongoose');
//mongoose.connect(configDB.url);
mongoose.connect('mongodb://localhost/mixeetdb');

//DEFINE LA CARPETA DESDE LA CUAL SE SIRVEN ARCHIVOS ESTATICOS (CSS, JS, IMGS, etc...)
var static = express();
app.use('/static', static);
static.use(express.static('public')); 

//PASSPORT STUFF
var passport = require('passport');
require('./config/passport.js')(passport);

app.use(require('cookie-parser')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// routes ======================================================================
require('./routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


http.listen(port, function(){
  console.log('listening on *:'+port);
});
