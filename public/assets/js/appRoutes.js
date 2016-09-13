angular.module('appRoutes',[]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'views/home.html',
    controller: 'MainController'
  })
  .when('/nerds',{
    templateUrl: 'views/nerd.html',
    controller: 'NerdController'
  })
  .when('/about',{
    templateUrl: 'views/about.html',
    controller: 'PageController'
  });

  $locationProvider.html5Mode(true);
}]);