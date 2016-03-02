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
	//identificar extension
	var elems = src.split(".");
    var ext = elems[elems.length-1];

    load(src, function(data){
    	var obj;
    	switch(ext){
    		case "obj": obj = this.parseOBJ(data);
    					break;
    		case "obj": obj = this.parseJSON(data);
    					break;
    	}
    	console.log("He cargado el fichero ---"+src+ "---- pasado por parametro y he recuperado "+ obj);
    	this.rellenarBuffers(obj);
    });
}

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
	load(src, function(data){
		var temp=self.parse(data);
         this.ambient=temp.Ka;
         this.diffuse=temp.Kd;
         this.specular=temp.Ks;
         this.transparent=temp.Ns;
         console.log("Cargando el material ---"+src+"----");
	}
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




