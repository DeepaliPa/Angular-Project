'use strict';

angular.module('myApp.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/templates', {
    templateUrl: 'templates/templates.html',
    controller: 'TempCtrl'
  })
  .when('/templates/:templateId', {
    templateUrl: 'templates/templates-details.html',
    controller: 'TempDetailsCtrl'
  })
}])
.controller('TempCtrl', ['$scope', '$http',function($scope, $http) {
	$http.get('json/templates.json').success(function(data){
		$scope.templates = data;
	});
}])
.controller('TempDetailsCtrl', ['$scope','$routeParams', '$http','$filter', function($scope,$routeParams,$http,$filter) {
	var templateId = $routeParams.templateId;
	$http.get('json/templates.json').success(function(data){
		$scope.template = $filter('filter')(data, function(d){
			return d.id == templateId;
		})[0];
		$scope.mainImage = $scope.template.images[0].name;
	});

	$scope.setImage = function(image){
		$scope.mainImage = image.name;
	}
}]);