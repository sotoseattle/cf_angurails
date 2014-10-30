(function(){
  var app = angular.module('GemStore');

  app.controller('AdminCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.products = [];
    $scope.errors = [];

    $scope.index = function(){
      $http.get('/api/products')
        .success(function(data){ $scope.products = data; })
        .error(function(data, status){
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        })
    };

    $scope.create = function(the_product){
      $http.post('/api/products', {product: the_product})
        .success(function(data) {
          $scope.products.push(data) })
        .error(function(data, status){
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        })
    };

    // $scope.update = function(note){};

    $scope.destroy = function(product){
      $http({
        method: 'DELETE',
        url: '/api/products/' + product.id })
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
