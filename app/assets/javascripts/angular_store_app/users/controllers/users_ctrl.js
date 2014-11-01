(function(){
  var app = angular.module('GemStore');

  app.controller('UsersCtrl', [
    '$scope','$http','$cookieStore','$location',function($scope, $http, $cookieStore,$location){

    $scope.user = {};
    $scope.new_user = {};

    $scope.signUp = function(new_user){
      data = { user: new_user };
      $http.post('/users', data)
      .success(function(data){
        $scope.new_user = {};
        $cookieStore.put('logged_user', data);
        $scope.setForm('');
        $location.path('/dashboard');
      })
      .error(function(data, status){
        console.log(data);
        console.log(status);
      });
    };

    $scope.signIn = function(new_user){
      data = { user: new_user };
      $http.post('/users/sign_in', data)
      .success(function(data){
        $scope.user = {};
        $cookieStore.put('logged_user', data);
        $scope.setForm('');
        $location.path('/dashboard');
      })
      .error(function(data,status){
        console.log(data);
        console.log(status);
      });
    };

    $scope.signOut = function() {
      $http({
        method: 'DELETE',
        url: 'users/sign_out'
      })
        .success(function() {
          $cookieStore.remove('logged_user');
          $scope.setForm('');
          $location.path('/store_front');
        })
        .error(function(status) {
          console.log(status);
        })
    };

    $scope.setForm = function(form) {
      $scope.form = form;
    };

  }]);
})()
