mixeet.controller('graphicCtrl', function($scope, $rootScope){

	var gl;
	var horizAspect = 480.0/640.0;

	var mvMatrix = mat4.create();
    var pMatrix = mat4.create();

	/*$rootScope.$watch(function() { 
      	$scope.drawScene(num);
      	return true; 
    });
*/
    // ----------- FUNCIONES TRANSFORMACIONES -----------//

    $scope.setMatrixUniforms = function() {
	/** actualiza las matrices de vista y de proyeccion **/
        gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
        gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
    }

	$scope.initWebGL = function(canvas){
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
		return gl;
	}
	// --------------- FUNCION ON LOAD ----------------- //
	$scope.start = function(){
		var canvas = document.getElementById("glcanvas");
		gl = $scope.initWebGL(canvas); //inicializamos el contexto de canvas
		if (gl){
		    gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Establecer el color base en negro, totalmente opaco
		    gl.enable(gl.DEPTH_TEST);                               // Habilitar prueba de profundidad
		    gl.depthFunc(gl.LEQUAL);                                // Objetos cercanos opacan objetos lejanos
		    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // Limpiar el buffer de color asi como el de profundidad
		}

		$scope.initShaders();
		$scope.initBuffers();
		//
		$scope.drawScene(1);
	}


	// ---------------- CARGA DEL FRAGMENT Y DEL VERTEX SHADER ----------
	$scope.initShaders = function(){
		var fragmentShader = $scope.getShader(gl, "shader-fs"); //Obtenemos de la DOM cada uno de los shaders
		var vertexShader = $scope.getShader(gl, "shader-vs");




		//Creamos el 'programa' y vinculamos los shaders
		shaderProgram = gl.createProgram();
		gl.attachShader(shaderProgram, vertexShader);
		gl.attachShader(shaderProgram, fragmentShader);
		gl.linkProgram(shaderProgram);

		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) alert("Imposible inicializar el shader");
		gl.useProgram(shaderProgram);
  
  		//Para la posición de los vertices
  		vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
  		gl.enableVertexAttribArray(vertexPositionAttribute);		   

        shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
        shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");

        //Para los colores en los vertices
        vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
        gl.enableVertexAttribArray(vertexColorAttribute);
	}

	//----- CARGA DESDE LA DOM -----
	//Cada pixel de un poligono es un FRAGMENTO, el shader se encarga de definir el color de ese pixel
	// el vertex se encarga de definir la POSICION y la FORMA de cada vertice
	$scope.getShader = function(gl, id){
		var shaderScript, currentChild;
		var content; //contenido del elemento

		shaderScript = document.getElementById(id);

		if(!shaderScript) return null; //no existe el shader

		content = "";
		currentChild = shaderScript.firstChild;

		while(currentChild){
			if(currentChild.nodeType == currentChild.TEXT_NODE){
				content += currentChild.textContent;
			}
			currentChild = currentChild.nextSibling;
		}
		//COMMPROBAR QUE TIPO DE SHADER ES
		var shader;
		if (shaderScript.type == "x-shader/x-fragment")
			shader = gl.createShader(gl.FRAGMENT_SHADER);
		else if (shaderScript.type == "x-shader/x-vertex") 
		    shader = gl.createShader(gl.VERTEX_SHADER);
		else
		    return null; //desconocido
		

		gl.shaderSource(shader, content);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert("Ha ocurrido un error al compilar el shader"+gl.getShaderInfoLog(shader));
            return null;
        }

        return shader;
	}

	// ------------- CREAR BUFFER QUE CONTIENE LOS VERTICES ------------ //
	$scope.initBuffers = function(){
		squareVerticesBuffer = gl.createBuffer();
  		gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

  		var vertices = [
  			1.0,  1.0,  0.0, //sup dcha
	       -1.0,  1.0,  0.0, //sup izq
	     	1.0, -1.0,  0.0, //inf dcha
	       -1.0, -1.0,  0.0  //inf izq
	 	 ]; //nuestro cuadrado


	 	var colors = [
	 		1.0, 1.0, 1.0, 1.0, //blanco
	 		1.0, 0.0, 0.0, 1.0, //rojo
	 		0.0, 1.0, 0.0, 1.0, //verde
	 		0.0, 0.0, 1.0, 1.0  //azul
	 	];

	 	squareVerticesColorBuffer = gl.createBuffer(); //creamos el buffer para los colores

	 	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW); //establecer vertices

	 	squareVerticesBuffer.itemSize = 3;
        squareVerticesBuffer.numItems = 4;

        gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
  		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW); //establecer colores
	}

	// ----------- YA PODEMOS DIBUJAR LA ESCENA ----------- SE HACE EN CADA VUELTA //
	$scope.drawScene = function(num){

		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);  //borrar color del fondo

		mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);
		mat4.identity(mvMatrix);

		mat4.translate(mvMatrix, [-5.5, 2.0, -8.0]);
		$scope.setMatrixUniforms();
		
		//borra antes de dibujar
		gl.clearColor(0.0, 0.0, 0.0, 1.0);


		for(var i=0; i<num; i++){
			//if(num == 5) mat4.translate(mvMatrix, [0.5, 0.0, -8.0]);
			
			mat4.translate(mvMatrix, [2.5, 0.0, 0.0]);
			

			gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

			gl.vertexAttribPointer(vertexPositionAttribute, squareVerticesBuffer.itemSize, gl.FLOAT, false, 0, 0);
			
			$scope.setMatrixUniforms();
			
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVerticesBuffer.numItems);

			//dibujar los colores
			gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
			gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
		}
  		
	}

	// ----------- REDIBUJAR ----------//
	$scope.reDraw = function(){
		var num = document.getElementById('num-forms').value;
		$scope.drawScene(num);
	}




	//------------------- PARSEAR UN .OBJ --------------------//
	/* v  -> vertice
	   vt -> coordenada de la textura del vertice
	   vn -> vector normal del vertice
	   f  -> cara
	*/

	/*  DATOS DE LAS CARAS
		f 8/11/7 7/12/7 6/10/7
		f v1     v2     v3
		v1 -> X/Y/Z 
		      X -> qué vértice usar (indice empieza en 1)
		      Y -> qué coordenada de textura usar
		      Z -> qué normal usar
	*/

	$scope.loadOBJData = function(str){
		var lines = str.split("\n");
		var positions = [];
		var normals = [];
		var vertices = [];

		for(var i=0; i<lines.length; i++){
			var sections = lines[i].trimRight().split(" ");
			if(sections.length > 0){ //CADA UNO DE LOS CASOS SALVO vt
				if(sections[0] == 'v')
					positions.push(vec3.fromValues(parseFloat(sections[1]), parseFloat(sections[2]), parseFloat(sections[3])));
				else if(sections[0] == 'vn')
					normals.push(vec3.fromValues(parseFloat(sections[1]), parseFloat(sections[2]), parseFloat(sections[3])));
				else if(sections[0] == 'f'){
					var v1 = sections[1].split('/');
          			var v2 = sections[2].split('/');
          			var v3 = sections[3].split('/');

          			Array.prototype.push.apply(vertices, positions[parseInt(v1[0]) - 1]);
          			Array.prototype.push.apply(normals, positions[parseInt(v1[2]) - 1]);

          			Array.prototype.push.apply(vertices, positions[parseInt(v2[0]) - 1]);
          			Array.prototype.push.apply(normals, positions[parseInt(v2[2]) - 1]);

          			Array.prototype.push.apply(vertices, positions[parseInt(v3[0]) - 1]);
          			Array.prototype.push.apply(normals, positions[parseInt(v3[2]) - 1]);
				}
			}
		}
		var vertexCount = vertices.length / 6;
		console.log("Loaded mesh with " + vertexCount + " vertices");
		return {
		    primitiveType: 'TRIANGLES',
		    vertices: new Float32Array(vertices),
		    vertexCount: vertexCount
		};
	}


});