'use strict';

function TMalla(fichero){
	this.fichero = fichero;

	//Varios atributos...
	this.ambient = null;
  	this.diffuse = null;
  	this.specular = null;
  	this.vertices = null;

  	this.position = null;
  	this.size     = null;
  	this.rotation = null;
}

TMalla.prototype = new TEntidad;

TMalla.prototype.getFichero = function(){
	return this.fichero;
}

TMalla.prototype.getPosition = function() {
	return this.position;
};

TMalla.prototype.setPosition = function(position) {
	this.position = position;
};

TMalla.prototype.getRotation = function() {
	return this.rotation;
};

TMalla.prototype.setRotation = function(rotation) {
	this.rotation = rotation;
};

TMalla.prototype.setSize = function(size) {
	this.size = size;
};

TMalla.prototype.getSize = function() {
	return this.size;
};

TMalla.prototype.beginDraw = function(){
	console.log("BEGIN DRAW de TMALLA");

}

TMalla.prototype.endDraw = function() {
	console.log("END DRAW de TMALLA");
}
