'use strict'; //javascript seguro

function TNodo(entidad, hijos, padre){
	this.entidad = entidad || ''; //variable de tipo TEntidad
	this.hijos   = hijos   || []; //variable vector

	if(padre) padre.addChild(this);
	else this.padre = ''; //variable de tipo TNodo... Por eso se comrpueba que exista ya antes o no
}

TNodo.prototype.getEntidad = function(){
	return this.entidad;
}

TNodo.prototype.setEntidad = function(entidad){
	if(entidad instanceof Entidad) this.entidad = entidad;
	else console.log("Este elemento no es de tipo Entidad");
}

TNodo.prototype.getPadre = function(){
	return this.padre;
}

TNodo.prototype.setPadre = function(padre){
	if(padre instanceof TNodo) this.padre = padre;
	else console.log("Este elemento no es un Nodo");
}

TNodo.prototype.getNumHijos = function(){
	return this.hijos.length;
}

TNodo.prototype.getHijos = function(){
	return this.hijos;
}

TNodo.prototype.existeHijo = function(hijo) {
	if(this.hijos.indexOf(hijo) != -1) return true;
	else return false;
};

TNodo.prototype.getHijo = function(index_hijo) {
	if(this.existeHijo(this.hijos(index_hijo))) return this.hijos(index_hijo);
	else return null;
};

TNodo.prototype.addHijo = function(hijo){
	hijo.setPadre(this); //fijamos el nodo actual como padre del hijo recién creado
	this.hijos.push(hijo); //añadimos a nuestro vector HIJOS el nuevo nodo HIJO
	return this.getNumHijos; //DEVOLVER POR DEVOLVER
}

TNodo.prototype.removeHijo = function(hijo){
	if(this.existeHijo(hijo)){
		var index = this.hijos.indexOf(hijo);
		this.hijos.splice(index, 1);
	}
	else console.log("No se ha podido eliminar el hijo");
}

TNodo.prototype.removeHijos = function(){
	this.hijos = [];
}

TNodo.prototype.firstHijo = function(){
	return this.getHijo(0); //pasamos índice
}

TNodo.prototype.lastHijo = function(){
	return this.getHijo(this.getNumHijos() - 1);
}

TNodo.prototype.draw = function(){
	this.entidad.beginDraw();
	for(var i=0; i<this.hijos.length;i++){
		hijos[i].draw();
	}
	this.entidad.endDraw();
}


