(function(){
  var app = angular.module('GemStore');

  app.controller('AdminCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.products = [];
    $scope.errors = [];

    $scope.index = function(){
      $http.get('/api/v1/products')
        .success(function(data){ $scope.products = data; })
        .error(function(data, status){
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        })
    };

    $scope.create = function(the_product){
      $http.post('/api/v1/products', {product: the_product})
        .success(function(data) {
          $scope.products.push(data) })
        .error(function(data, status){
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        })
    };

    $scope.update = function(product){
      $http({
        method: 'PATCH',
        url: '/api/v1/products/' + product.id,
        data: product })
        .success(function(){
          product.editing = false; })
        .error(function(data, status){
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        })
    };

    $scope.destroy = function(product){
      $http({
        method: 'DELETE',
        url: '/api/v1/products/' + product.id })
        .success(function(){
          product.deleteConfirm = false;
          $scope.products.splice($scope.products.indexOf(product), 1) })
        .error(function(data, status){
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        })
    };
  }]);
})();
