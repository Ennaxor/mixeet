mixeet.factory('oauth', function($http, $location){
	return {
        authGet = function(url, success_callback, error_callback){
			if(localStorage.getItem("auth")){
				var auth = JSON.parse(localStorage.getItem("auth"));
				$http.get(url, {headers: {
					"authorization": "bearer "+auth.token
				}}).success(function(res){
					success_callback(res);
				}).error(function(err){
					error_callback(err);
				});
			}
			else{
				window.location = "/landing";
			}
		},
		authPost = function(url, data, success_callback, error_callback){
			if(localStorage.getItem("auth")){
				var auth = JSON.parse(localStorage.getItem("auth"));
			
				$http.post(url, data, {headers: {
					"authorization": "bearer "+auth.token
					} 
				}).success(function(res){
					success_callback(res);
				}).error(function(err){
					error_callback(err);
				});
			}
			else{
				window.location = "/landing";
			}
		}
    }

});