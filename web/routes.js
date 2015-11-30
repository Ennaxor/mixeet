var express = require('express');
module.exports = function(app, passport) {

	//LA RUTA / SIRVE PARA ANGULARJS, TODAS LAS RUTAS DE ANGULAR SE DEFINEN EN public/app/app.js LAS ALTERNATIVAS SE DEFINEN ARRIBA
	app.get('/home',function(req, res){
	 res.sendFile('index.html', { root: __dirname+"/public" });
	});

	app.get('/auth/youtube', passport.authenticate('youtube', { scope : ['profile', 'email'] }));

	app.get('/auth/youtube/callback', passport.authenticate('youtube', {
            successRedirect : '/example',
            failureRedirect : '/'
    }));
	

};


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}






	

	
