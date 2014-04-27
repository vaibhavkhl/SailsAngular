myApp.factory('TodoService', function($http){
	return {
	    get : function() {
	    return $http.get('/todo');
	    },
	    store : function(todoData){
	    	return $http ({
                method: 'POST',
                url: '/todo/create',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(todoData)
	    	});
	    }
	}
});