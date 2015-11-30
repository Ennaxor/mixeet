var express = require('express');
var app = express();
var http = require('http').Server(app);

var port = process.env.PORT || 3000;

var fs = require('fs');

var passport = require('passport');
var youtubeStrategy = require('passport-youtube-v3').Strategy;

/* RECUPERAMOS CREDENCIALES DE NUESTRA CONSOLA DEVELOPER */
var file = __dirname + '/credentials.json';
var data = fs.readFileSync(file);
var credentials = JSON.parse(data);
var CLIENT_ID = credentials.web.client_id;
var CLIENT_SECRET = credentials.web.client_secret;

//DEFINE LA CARPETA DESDE LA CUAL SE SIRVEN ARCHIVOS ESTATICOS (CSS, JS, IMGS, etc...)
var static = express();
app.use('/static', static);
static.use(express.static('public')); 

//LA RUTA / SIRVE PARA ANGULARJS, TODAS LAS RUTAS DE ANGULAR SE DEFINEN EN public/app/app.js LAS ALTERNATIVAS SE DEFINEN ARRIBA
app.get('/home',function(req, res){
 res.sendFile('index.html', { root: __dirname+"/public" });
});

app.get('/auth/youtube/callback', passport.authenticate('youtube', { failureRedirect: '/' }), function(req, res) {
 	res.sendFile('example.html', { root: __dirname+"/public" });
});




//PASSPORT STUFF
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new youtubeStrategy({
		clientID: CLIENT_ID,
	    clientSecret: CLIENT_SECRET,
	    callbackURL: "http://localhost:3000/auth/youtube/callback",
	    scope: ['https://www.googleapis.com/auth/youtube.readonly']
	},
	function(accessToken, refreshToken, profile, done) {
	    User.findOrCreate({ userId: profile.id }, function (err, user) {
	    	return done(err, user);
	    });
  	}
));


// serialize and deserialize
passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(obj, done) {
	done(null, obj);
});


http.listen(port, function(){
  console.log('listening on *:'+port);
});
