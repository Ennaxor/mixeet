'use strict';

var pila = [];
var matrizActual = mat4.create();

function TTransform(){
	this.matriz = mat4.create();
}

TTransform.prototype = new TEntidad;

/* GESTIONAR MATRIZ */
TTransform.prototype.identidad = function(){
	 mat4.identity(this.matriz);
	 console.log("Matriz identidad: "+this.matriz);
}

TTransform.prototype.cargar = function(matriz){
	this.matriz = matriz;
}

TTransform.prototype.trasponer = function(){
	mat4.transpose(this.matriz);
	console.log("Matriz traspuesta: "+this.matriz);
}

TTransform.prototype.invertir = function(){
	mat4.inverse(this.matriz);
	console.log("Matriz inversa: "+this.matriz);
}

/*TTransform.prototype.multiVector = function(vector){
	mat4.inverse(this.matriz);
	console.log("Matriz inversa: "+this.matriz);
}

TTransform.prototype.multiMatriz = function(matriz){
	mat4.inverse(this.matriz);
	console.log("Matriz inversa: "+this.matriz);
}*/

/* TRANSFORMACIONES BASICAS */
TTransform.prototype.trasladar = function(a, b, c){
	var vtras = vec3.create();
	vec3.set(vtras, a, b, c);

	mat4.translate(this.matriz, this.matriz, vtras);
	console.log("Matriz trasladada: "+this.matriz);
}

TTransform.prototype.rotar = function(a, b, c, angulo){
	var vrot = vec3.create();
	vec3.set(vrot, a, b, c);

	var rad = angulo * Math.PI / 180;

	mat4.rotate(this.matriz, this.matriz, rad, vrot);
	console.log("Matriz rotada: "+this.matriz);
}

TTransform.prototype.escalar = function(a, b, c){
	var vesc = vec3.create();
	vec3.set(vesc, a, b, c);

	mat4.scale(this.matriz, this.matriz, vesc);
	console.log("Matriz escalada: "+this.matriz);
}

/* DIBUJADO */
TTransform.prototype.beginDraw = function(){
	pila.push(matrizActual); //apilamos matriz actual
	mat4.multiply(matrizActual, this.matriz, matrizActual);


}

TTransform.prototype.endDraw = function(){
	matrizActual = pila.pop(); //desapilamos y la ponemos como actual
}

