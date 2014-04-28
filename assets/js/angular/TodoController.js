myApp.controller('TodoController', function ($scope, $http, TodoService){
	$scope.todoData = {};
	var socket = io.connect();
    socket.on('connect', function socketConnected() {
    	console.log('someone connected');
    	socket.on('message', function messageReceived(message) {
    		console.log('hello');
    		$scope.todos.push(message.data);
    		$scope.$apply();
    	});
    });
	socket.get('/todo', function(data){
		$scope.todos = data
		$scope.$apply();
	});

	// TodoService.get()
	//     .success(function(data){
	//     	$scope.todos = data;
	//     })
	//     .error(function(err){
	//     	console.log(err);
	//     });
	$scope.submitTodo = function(todoData) {
		TodoService.store(todoData)
		.success(function(data) {
			TodoService.get()
			    .success(function(data){
			    	$scope.todos = data;
			    })
	    	$scope.todos = data;
	    })
	    .error(function(err){
	    	console.log(err);
	    });
	};
});