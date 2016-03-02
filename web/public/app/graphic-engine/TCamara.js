'use strict';

function TCamara(esPerspectiva, cercano, lejano){
	this.esPerspectiva = esPerspectiva;
	this.cercano = cercano;
	this.lejano = lejano;
}

TCamara.prototype = new TEntidad;

TCamara.prototype.setPerspectiva = function(){

}

TCamara.prototype.setParalela = function(){
	
}

TCamara.prototype.beginDraw = function(){
	//suele estar vacio
	console.log("BEGIN DRAW de TCAMARA");
}

TCamara.prototype.endDraw = function(){
	//suele estar vacio
	console.log("END DRAW de TCAMARA");
}