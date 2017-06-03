var app = angular.module("computer", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/main', {
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  }).when('/about', {
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  }).when('/services', {
    templateUrl: 'services.html',
    controller: 'ServicesCtrl'
  }).when('/contact', {
    templateUrl: 'contact.html',
    controller: 'LocationsCtrl'
  }).
  otherwise({
    redirectTo: '/main'
  })
}])

.controller('MainCtrl', ['$scope','$http', function($scope, $http) {

  $scope.person = 'John Doe';
  
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  })

}])

.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('services.json').then(function(response) {

    $scope.services = response.data;

    console.log('This is the Services controller');
  })

}])

.controller('LocationsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('locations.json').then(function(response) {

    $scope.locations = response.data;

  })
}]);