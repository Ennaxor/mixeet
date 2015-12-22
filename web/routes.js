var express = require('express');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var userModel = require('./models/user.js');
var auth = function(req,res,next){
	userModel.authorize(req,res,next);
}

/* RECUPERAMOS CREDENCIALES DE NUESTRA CONSOLA DEVELOPER */
var oauth2Client = new OAuth2('927674196118-l6i2kvibbp67g63hf0unvcu40552cntq.apps.googleusercontent.com', '49tddGVHoBgsf_rQ1ETgJlLg', 'http://localhost:3000/users/signin');

module.exports = function(app, passport) {

	//USUARIO
	var users = express.Router();
	app.use('/users', users);

	users.get('/signin', function(req, res){
		if(!req.query.code){
			var scopes = ['https://www.googleapis.com/auth/youtube.readonly',
		    			  'https://www.googleapis.com/auth/plus.me',
		    			  'https://www.googleapis.com/auth/plus.login',
		    		      'https://www.googleapis.com/auth/userinfo.email'
		    	         ];

		  	var url = oauth2Client.generateAuthUrl({
		  		access_type: 'online',
		  		scope: scopes
		  	});

		  	res.redirect(url);
		}
		else{
			oauth2Client.getToken(req.query.code, function(err, tokens){
				if(!err){
					var plus = google.plus('v1');
					var youtube = google.youtube('v3');

					oauth2Client.setCredentials({
						access_token: tokens.access_token
					});
					plus.people.get({userId: 'me', auth: oauth2Client }, function(err2, response){
						var email = response.emails[0].value.toLowerCase();
						var name = response.displayName;
						var image = response.image.url;

						userModel.user.signin(email, tokens.access_token, name, image, tokens.expiry_date, function(isregistered, token, err3){
							if(err3){
								//res.send("Se ha detectado el siguiente error: "+err);
								return;
							} 
							else{
								res.redirect('/landing?token='+token);
								//res.end();
								//res.send("El usuario está registrado? "+isregistered+" con el token "+token);
								
							}
						});


					});

					/*youtube.playlists.list({part: 'snippet', mine: true, auth: oauth2Client }, function(err,response){
						console.log(err);
						console.log(response);
						res.send("OK YUTUB");
					})
					youtube.subscriptions.list({part: 'snippet', mine: true, auth: oauth2Client }, function(err,response){
						console.log(err);
						console.log(response);
						res.send("OK YUTUB");
					})*/
				}
			});
		}

	});


	users.get('/me', auth, function(req,res){
		res.json({email:req.user.email, name:req.user.name, image:req.user.image, location:req.user.location});
	});

	users.post('/me/modify', auth, function(req, res){
		req.user.name = req.body.name;
		req.user.save(function(err, res1){
			if(err) res.status(500).json({msg:'server error'});
			else res.status(200).json({msg:'ok'});
		});
	});

	users.post('/location/new', auth, function(req, res){
		req.user.location = req.body.location;
		req.user.save(function(err, res1){
			if(err) res.status(500).json({msg:'server error'});
			else res.status(200).json({msg:'ok'});
		});
	});



	//LA RUTA / SIRVE PARA ANGULARJS, TODAS LAS RUTAS DE ANGULAR SE DEFINEN EN public/app/app.js LAS ALTERNATIVAS SE DEFINEN ARRIBA
	app.get('/landing', function (req, res) {
	  res.sendfile('landing.html', { root: __dirname+"/public" });
	});

	app.get('*', function (req, res) {
	  res.sendfile('index.html', { root: __dirname+"/public" });
	});

	

	/*app.get('/auth/google', passport.authenticate('google'));//, { scope : ['profile', 'email'] }));

	app.get('/auth/google/callback', passport.authenticate('google', {
            successRedirect : '/home',
            failureRedirect : '/home'
    }));*/
	

};







	

	
