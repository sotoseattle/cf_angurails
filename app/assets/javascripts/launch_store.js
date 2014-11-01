//= require_self
//= require_tree ./angular_store_app
(function() {
  var app = angular.module('GemStore', ['StoreDirectives', 'ngRoute', 'ngCookies']);

  app.config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers
      .common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers
      .common.Accept = 'Application/json';
  }]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'AdminCtrl',
        templateUrl: '/templates/admin_view.html'
      })
      .when('/users', {
        controller: 'UsersCtrl',
        templateUrl: '/templates/users_view.html'
      })
      .otherwise({
        redirectTo: '/users'
      });
  }]);

  app.run(['$rootScope','$cookies','$http', function($rootScope, $cookies,$http){
    $rootScope.isLoggedIn = function(){
      var currentUser = $cookies.c_user;
      return typeof(currentUser) !== 'undefined' && currentUser !== '';
    };
    $rootScope.currentUser = function(){
      console.log($cookies.c_user);
      return $cookies.c_user;
    };
    $rootScope.logOut = function(){
      $http({
        method:'DELETE',
        url: '/users/sign_out'
      })
      .success(function(){
        $cookies.c_user = '';
      })
      .error(function(){
        console.log('error loggin out');
      });
    };
  }]);
})();
