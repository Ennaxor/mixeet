var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

//DEFINE LA CARPETA DESDE LA CUAL SE SIRVEN ARCHIVOS ESTATICOS (CSS, JS, IMGS, etc...)
var static = express();
app.use('/static', static);
static.use(express.static('public')); 

app.use(require('cookie-parser')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));


http.listen(port, function(){
  console.log('listening on *:'+port);
});
