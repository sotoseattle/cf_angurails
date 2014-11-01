(function(){
  var app = angular.module('GemStore');

  app.controller('UsersCtrl', [
    '$scope','$http','$cookies','$location',function($scope, $http, $cookies,$location){
    $scope.create = function(new_user){
      $http({
        method: 'POST',
        url: '/users',
        data: { user: new_user }
      })
      .success(function(data){
        $cookies.c_user = data['email'];
        $location.path('/');
        console.log('user created!');
      })
      .error(function(data, status){
        console.log(data);
        console.log(status);
      });
    };

    $scope.signIn = function(the_user){
      $http({
        method: 'POST',
        url: '/users/sign_in',
        data: { user: the_user}
      })
      .success(function(data){
        $cookies.c_user = data['email'];
        $location.path('/path');
      })
      .error(function(data,status){
        // console.log(data);
        // console.log(status);
      });
    };
  }]);
})()
