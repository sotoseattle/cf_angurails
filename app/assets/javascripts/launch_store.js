//= require_self
//= require_tree ./angular_store_app
(function() {
  var app = angular.module('GemStore', ['StoreDirectives', 'ngRoute', 'ngCookies']);

  app.config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers
      .common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers
      .common.Accept = 'application/json';
  }]);

  app.run(['$rootScope','$cookieStore', '$location', function($rootScope, $cookieStore, $location) {

    $rootScope.isLoggedIn = function() {
      return ($cookieStore.get('logged_user') ? true : false);
    };

    $rootScope.logged_user = function() {
      return $cookieStore.get('logged_user').email;
    };

    $rootScope.StorePath = function() {
      $location.path('/store_front');
    };
    $rootScope.UserEntrancePath = function() {
      $location.path('/admin');
    };
    $rootScope.AdminDashboardPath = function() {
      $location.path('/dashboard');
    };

  }]);
})();
