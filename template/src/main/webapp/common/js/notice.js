
angular.module('notice', [])
	.controller('noticeController', function($scope){
		$scope.searchInfo = {};

		$scope.selectOption =[
			{name:'제목'},
			{name:'작성자'}
		];
		
	})
	.controller('insertController', function($scope, $http){
		$scope.regiForm = {};

		$scope.insert = function(regiForm){
			console.log(regiForm.title);
			$http.post("/template/notice/insert", regiForm)
				.success(function(data, status, headers, config){

					alert(status);	
				}).
				error(function(data, status,headers, config){
					alert(data);	
				});
		};
	});