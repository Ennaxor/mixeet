var gl = null; //webgl para el canvas
var transformaciones = null;
var meshes;

//window.onload = start();

function initWebGL(canvas){
        gl = null;
        try{
            gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
        }catch(e){
            
        }

        if(!gl){
            alert("Imposible inicializar WebGL. Tu navegador no lo soporta.");
            gl = null;
        }
        console.log(gl);
        return gl;
    }
// --------------- FUNCION ON LOAD ----------------- //

function start(){
    var canvas = document.getElementById("mixeet-canvas");

    gl = initWebGL(canvas); //inicializamos el contexto de canvas
    if (gl){
        gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Establecer el color base en negro, totalmente opaco
        gl.enable(gl.DEPTH_TEST);                               // Habilitar prueba de profundidad
        gl.depthFunc(gl.LEQUAL);                                // Objetos cercanos opacan objetos lejanos
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // Limpiar el buffer de color asi como el de profundidad
    }
   // $scope.initShaders();
   // $scope.initBuffers();
    //
    //$scope.drawScene(1);
}

/* ------ FUNCIONES UTILES --- */

function load(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.addEventListener('load', function() {
        callback(request.responseText);
    });
    request.send();
}

function normalizeNaN(vec) {
    return vec.map(a=> { if (Number.isNaN(a)) a = 0; return a; })
}

function handleGeometry(m){
    meshes = m;
    OBJ.initMeshBuffers(gl, meshes.mesh_obj);
    console.log(meshes.mesh_obj);

}

function again(){
    console.log(meshes.mesh_obj);
}

/* ------------- EL GESTOR DE RECURSOS - MALLA, TEXTURA Y MATERIAL ---------------------- */

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
			nuevorecurso = new TRecurso();
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

function TRecursoMalla(){
	this.vertices = 0;
	this.normales = 0;
	this.texturas = 0;
	this.vertTriangulos = 0;
	this.normTriangulos = 0;
	this.textTriangulos = 0;
	this.nTriangulos = 0;
}

TRecursoMalla.prototype = new TRecurso;
TRecursoMalla.prototype.cargarFichero = function(src){
    console.log(src);
    OBJ.downloadMeshes({
        'mesh_obj' : src,
    }, handleGeometry);

}

/*TRecursoMalla.prototype.cargarFichero = function(src){
	//identificar extension  
	var elems = src.split(".");
    var ext = elems[elems.length-1];
    var self = this;
    load(src, function(data){
    	var obj;
    	switch(ext){
    		case "obj": //obj = new OBJ.Mesh(data);
            //obj = self.parseOBJ(data);
                        OBJ.downloadMeshes({
                            'mesh_obj' : src
                        }, handleGeometry);

    console.log("---- Objeto recuperado "+ meshes);
    					break;
    		case "json": obj = self.parseJSON(data);
    					break;
    	}
    	console.log("He cargado el fichero ---"+src);
    	//self.rellenarBuffers(obj);
       // console.log("Vertices: "+obj.iv+" Normales: "+obj.in+" Texturas: "+obj.it); 
    });
}*/

TRecursoMalla.prototype.parseOBJ = function(data){
	var obj = {
        v: [],
        vn: [],
        vt: [],
        iv: [],
        in: [],
        it: []
    };


    var lines = data.split("\n");

    var vertex = lines.filter(function(a) {
        return a[0] === 'v';
    });

    var index = lines.filter(function(a) {
        return a[0] === 'f';
    });

    vertex.forEach(function(item) {
        var elems = item.replace("\r", "").split(" ");
        var key = elems[0];
        obj[key] = obj[key].concat(elems.slice(1).filter(function(a) {
            return a !== "";
        }));
    });

    var tempIndex = [];
    index.forEach(function(item) {
        var elems = item.replace("\r", "").replace("f", "").split(" ");
        tempIndex = tempIndex.concat(elems.slice(1).filter(function(a) {
            return a !== "";
        }));
    });

    tempIndex.forEach(function(item) {
        var elems = item.split("/");

        obj.iv = obj.iv.concat(parseInt(elems[0]) - 1);
        obj.in = obj.in.concat(parseInt(elems[1]) - 1);
        obj.it = obj.it.concat(parseInt(elems[2]) - 1);
        
    });


    return obj;

}

TRecursoMalla.prototype.parseJSON = function(data){
	var obj = {};
    try {
        obj = JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
    return obj;
}

TRecursoMalla.prototype.rellenarBuffers = function(obj){
	console.log("Rellenando buffers...");
}

/* --------- T RECURSO TEXTURA ------------ */

function TRecursoTextura(imagen){
	this.imagen = new Image();
	this.imagen.src = imagen;
	//this.textura = gl.createTexture();

	this.imagen.onload = function() {
		//cosas de texturas...
		console.log("Cargando imagen para textura");
	}
}

TRecursoTextura.prototype = new TRecurso;

/*TRecursoTextura.prototype.getTextura = function(){
	return this.textura;
}*/

/* --------- T RECURSO MATERIAL ------------ */

function TRecursoMaterial(ambient, diffuse, specular, transparent){
	this.ambient = ambient ? vec4.create(ambient) : vec4.create();
  	this.diffuse = diffuse ? vec4.create(diffuse) : vec4.create();
  	this.specular = specular ? vec4.create(specular) : vec4.create();
  	this.transparent = transparent || 200.0;
}

TRecursoMaterial.prototype = new TRecurso;

TRecursoMaterial.prototype.parse = function(data){
	var obj = {};
    var keys=["Ka", "Kd", "Ks", "Ns"];
    var lines = data.split("\n");
    lines.forEach(function(line){
        var elems=line.split(" ");
        var key=elems[0];
        if(keys.indexOf(key)>-1){
            switch(key){
                case "Ns": obj["Ns"]=elems[1];
                break;
                default: obj[key]=elems.slice(1);
            }
        }        
    })    
    return obj;
}

TRecursoMaterial.prototype.cargarMaterial = function(src){
	var self = this;
    load(src, function(data){
		var temp=self.parse(data);
         this.ambient=temp.Ka;
         this.diffuse=temp.Kd;
         this.specular=temp.Ks;
         this.transparent=temp.Ns;
         console.log("Cargando el material ---"+src+"----");
    })
}

TRecursoMaterial.prototype.getAmbient = function(){
	return this.ambient;
}

TRecursoMaterial.prototype.setAmbient = function(ambient){
	this.ambient = utils.normalizeNaN(vec4.create(ambient));
}

TRecursoMaterial.prototype.getDiffuse = function(){
	return this.diffuse;
}

TRecursoMaterial.prototype.setDiffuse = function(diffuse){
	this.diffuse = utils.normalizeNaN(vec4.create(diffuse));
}

TRecursoMaterial.prototype.getSpecular = function(){
	return this.specular;
}

TRecursoMaterial.prototype.setSpecular = function(specular){
	this.specular = utils.normalizeNaN(vec4.create(specular));
}




function Mixengine(canvas, tree){
	this.transformaciones = null;

	gl = Configuration.getGLContext(canvas); //clobal context
	this.canvas = canvas;
}


function cargarFicheros(){
	if (document.getElementById('fileobj') != null) var meshobj = document.getElementById('fileobj').value;
	else var meshobj = null;
	if (meshobj) {
		var startIndex = (meshobj.indexOf('\\') >= 0 ? meshobj.lastIndexOf('\\') : meshobj.lastIndexOf('/'));
		var filename = meshobj.substring(startIndex);
		if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
			filename = filename.substring(1);
		}
		//alert(filename);
		nuevamalla = new TRecursoMalla();
		nuevamalla.cargarFichero(filename);
	}
}
