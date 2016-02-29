/* ------------------- TGESTORRECURSOS ----------------- */

function TGestorRecursos(recursos){
	this.recursos   = recursos   || []; //variable vector
}

TGestorRecursos.prototype.getRecurso = function(nombre){
	for(var i=0; i<recursos.length; i++){
		if(recursos[i] == nombre){
			return recursos[i];
		}
		else{
			TRecurso nuevorecurso = new TRecurso();
			nuevorecurso.cargarFichero(nombre);
			recursos.push(nuevorecurso);
			return nuevorecurso;
		}
	}
}

/* ---------------- TRECURSO ------------ */

function TRecurso(nombre){
	this.nombre = nombre;
}

TRecurso.prototype.getNombre = function(){
	return this.nombre;
}

TRecurso.prototype.setNombre = function(nombre){
	this.nombre = nombre;
}

/* --------- T RECURSO MALLA ------------ */

function TRecursoMalla(vertices, normales, texturas){

}

TRecursoMalla.prototype = new TRecurso;

TRecursoMalla.prototype.cargarFichero = function(){
	
}