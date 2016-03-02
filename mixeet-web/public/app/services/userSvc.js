mixeet.factory('user', function(api){
	return{
		base: "users",
		signin:function(){
            return api.rest(this.base+"/signin",{
               get:{method:"GET", params:{}}
            });
        },
		me:function(){
            return api.rest(this.base+"/me",{
                get:{method:"GET", params:{}}
            });
        }
        //...
	};
});