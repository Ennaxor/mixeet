var pila = [];
var matrizActual = mat4.create();

/* ----------------------- TENTIDAD  ------------------------ */

function TEntidad(){

}

TEntidad.prototype.beginDraw = function(){
	console.log("BEGIN DRAW de TENTIDAD");
}

TEntidad.prototype.endDraw = function(){
	console.log("END DRAW de TENTIDAD");
}

/* -------------------- TNODO ------------------ */
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
	if(entidad instanceof TEntidad) this.entidad = entidad;
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
	return this.getNumHijos(); //DEVOLVER POR DEVOLVER
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
	if(this.entidad) this.entidad.beginDraw();
	for(var i=0; i<this.hijos.length;i++){
		this.hijos[i].draw();
	}
	if(this.entidad) this.entidad.endDraw();
}


/* ----------------------- TTRANSFORM ------------------------ */

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

/* ----------------------- TLUZ ------------- */

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

TLuz.prototype.beginDraw = function(pasada){
	console.log("BEGIN DRAW de TLUZ");
}

TLuz.prototype.endDraw = function(){
	console.log("END DRAW de TLUZ");
}

/* --------------------- TCAMARA --------------- */
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

TCamara.prototype.beginDraw = function(pasada){
	//suele estar vacio
	console.log("BEGIN DRAW de TCAMARA");
}

TCamara.prototype.endDraw = function(){
	//suele estar vacio
	console.log("END DRAW de TCAMARA");
}

/* -------------- TMALLA --------------- */
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


function ElementoRegistro(nodo){
    this.activa = false;
    this.matriz = mat4.create();
    this.nodo = nodo;
}
function ElementoRegistroVP(posicion, tamanyo){
    this.posicion = posicion;
    this.tamanyo = tamanyo;
    this.activa = false;
}


function TMotorTAG(){
    this.escena = new TNodo;
    this.gestorRecursos = new TGestorRecursos;
    //atributos de luces, camaras y viewport
    this.matAuxLuces = new Array();
    this.matAuxCamara = mat4.create();
    this.viewports = new Array();
    this.luces = new Array();
    this.camaras = new Array();
}

TMotorTAG.prototype.crearNodo = function(padre, entidad){
	var nodo = new TNodo;
	padre.addHijo(nodo);
    nodo.setEntidad(entidad);
    return nodo;
}

TMotorTAG.prototype.crearTransform = function(){
	var transf = new TTransform;
	return transf;
}

TMotorTAG.prototype.crearCamara = function(){
	var cam = new TCamara;
	return cam;
}

TMotorTAG.prototype.crearNodoCamara = function(padre, camara){
    var cam = new TNodo;
    cam.setEntidad(camara);
    padre.addHijo(cam);
    return cam;
}

TMotorTAG.prototype.crearLuz = function(){
	var luz = new TLuz;
	return luz;
}

TMotorTAG.prototype.crearNodoLuz = function(padre, luzA){
    var luz = new TNodo;
    luz.setEntidad(luzA);
    padre.addHijo(luz);
    return luz;
}

TMotorTAG.prototype.crearMalla = function(src){
	var malla = new TMalla;

	//CARGAR FICHERO
}

//METODOS PARA EL REGISTRO Y MANEJO

TMotorTAG.prototype.registrarLuz = function(nodoLuz){
    this.luces.push(new ElementoRegistro(nodoLuz));
    return this.luces.length-1;
}

TMotorTAG.prototype.setLuzActiva = function(nLuz){
    if(this.luces[nLuz].activa) this.luces[nLuz].activa = false;
    else this.luces[nLuz].activa = true;
}

TMotorTAG.prototype.registrarCamara = function(nodoCam){
    this.camaras.push(new ElementoRegistro(nodoCam));
    return this.camaras.length-1;
}

TMotorTAG.prototype.setCamaraActiva = function(nCamara){
    for(var i in this.camaras){
        if(this.camaras[i].activa) this.camaras[i].activa = false;
    }
    this.camaras[nViewport].activa = true;
}

TMotorTAG.prototype.getCamaraActiva = function(){
    var cam = null;
    for(var i in this.camaras){
        if(this.camaras[i].activa) cam = this.camaras[i];
    }
    return cam;
}

TMotorTAG.prototype.registrarViewport = function(posicion, tamanyo){
    this.viewports.push(new ElementoRegistroVP(posicion, tamanyo));
    return this.viewports.length-1;
}

TMotorTAG.prototype.setViewportActivo = function(nViewport){
    for(var i in this.viewports){
        if(this.viewports[i].activa) this.viewports[i].activa = false;
    }
    this.viewports[nViewport].activa = true;
}

TMotorTAG.prototype.getViewportActivo = function(){
    var vp = null;
    for(var i in this.viewports){
        if(this.viewports[i].activa) vp = this.viewports[i];
    }
    return vp;
}

TMotorTAG.prototype.draw = function(){
	//Inicializar CANVAS Y LIBRERIAS
	var canvas = document.getElementById("mixeet-canvas");

    gl = initWebGL(canvas); //inicializamos el contexto de canvas
    if (gl){
        gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Establecer el color base en negro, totalmente opaco
        gl.enable(gl.DEPTH_TEST);                               // Habilitar prueba de profundidad
        gl.depthFunc(gl.LEQUAL);                                // Objetos cercanos opacan objetos lejanos
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // Limpiar el buffer de color asi como el de profundidad
    }

    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  	//perspective() será la función que se ejecutará junto con la cámara
    mat4.perspective(pMatrix, gradToRad(45), gl.viewportWidth / gl.viewportHeight, 0.1, 100.0);
    mat4.identity(mvMatrix);

    mat4.translate(mvMatrix, mvMatrix, [-1.5,0.0,-8.0]); //sitúa la matriz de vista
    setMatrixUniforms();

    this.escena.draw();

}