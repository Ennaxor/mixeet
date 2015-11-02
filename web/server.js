var express = require('express');
var app = express();

var http = require('http').Server(app);

var port = process.env.PORT || 3000;


//DEFINE LA CARPETA DESDE LA CUAL SE SIRVEN ARCHIVOS ESTATICOS (CSS, JS, IMGS, etc...)
var static = express();
app.use('/static', static);
static.use(express.static('public')); 

//LA RUTA / SIRVE PARA ANGULARJS, TODAS LAS RUTAS DE ANGULAR SE DEFINEN EN public/app/app.js LAS ALTERNATIVAS SE DEFINEN ARRIBA
app.get('/*',function(req, res){
 res.sendFile('index.html', { root: __dirname+"/public" });
});


http.listen(port, function(){
  console.log('listening on *:'+port);
});