'use strict';

function TLuz(intensidad){
	this.intensidad = intensidad;
}

TLuz.prototype = new TEntidad;

TLuz.prototype.setIntensidad = function(intensidad){
	this.intensidad = intensidad;
}

TLuz.prototype.getIntensidad = function(){
	return this.intensidad;
}

TLuz.prototype.beginDraw = function(){
	console.log("BEGIN DRAW de TLUZ");
}

TLuz.prototype.endDraw = function(){
	console.log("END DRAW de TLUZ");
}