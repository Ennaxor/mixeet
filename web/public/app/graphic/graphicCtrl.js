mixeet.controller('graphicCtrl', function($scope){

	var gl;

	$scope.initWebGL = function(canvas){
		gl = null;
		try{
			gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

		}catch(e){
			
		}

		if(!gl){
			alert("Imposible inicializar WebGL. Tu navegador no lo soporta.");
			gl = null;
		}
		return gl;
	}

	$scope.start = function(){
		var canvas = document.getElementById("glcanvas");
		gl = $scope.initWebGL(canvas); //inicializamos el contexto de canvas
		if (gl){
		    gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Establecer el color base en negro, totalmente opaco
		    gl.enable(gl.DEPTH_TEST);                               // Habilitar prueba de profundidad
		    gl.depthFunc(gl.LEQUAL);                                // Objetos cercanos opacan objetos lejanos
		    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // Limpiar el buffer de color asi como el de profundidad
		}
	}




});