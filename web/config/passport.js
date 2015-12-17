var youtubeStrategy = require('passport-youtube-v3').Strategy;
var plusStrategy = require('passport-google-oauth2').Strategy;
var User = require('../models/user.js');

/* RECUPERAMOS CREDENCIALES DE NUESTRA CONSOLA DEVELOPER */
var fs = require('fs');
var file = __dirname + '/credentials.json';
var data = fs.readFileSync(file);
var credentials = JSON.parse(data);
var CLIENT_ID = credentials.web.client_id;
var CLIENT_SECRET = credentials.web.client_secret;
var REDIRECT = credentials.web.redirect_uris;

module.exports = function(passport) {

	// serialize and deserialize
	passport.serializeUser(function(user, done) {
		console.log('serializeUser: ' + user._id)
        done(null, user._id);
	});
	passport.deserializeUser(function(obj, done) {
		done(null, obj);
	});

	passport.use(new plusStrategy({
			clientID: CLIENT_ID,
		    clientSecret: CLIENT_SECRET,
		    callbackURL: "http://localhost:3000/auth/youtube/callback",
		    scope: [//'https://www.googleapis.com/auth/youtube.readonly',
		    			'https://www.googleapis.com/auth/plus.me',
		    			'https://www.googleapis.com/auth/plus.login',
		    		'https://www.googleapis.com/auth/userinfo.email'
		    	]
		},
		function(accessToken, refreshToken, profile, done) {
			 process.nextTick(function() {
			 	User.findOne({ userId: profile.id }, function (err, user) {
			 		if(err) return done(err);
			    	if(user) return done(null, user);
			    	else{
			    		var newUser = new User();
			    		console.log(profile);
			    		newUser.id    = profile.id; // set the users facebook id                   
                   		newUser.token = accessToken; // we will save the token that facebook provides to the user                    
	                    newUser.name  = profile.displayName; // look at the passport user profile to see how names are returned
	                    newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

	                    newUser.save(function(err) {
	                        if (err) throw err;
	                        return done(null, newUser);
	                    });
			    	}
			 	});
			 });
		}
	));

};