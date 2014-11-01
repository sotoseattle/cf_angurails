(function() {
  var app = angular.module('GemStore');

  app.controller('StoreController',
    ['$http', '$scope', '$location', function($http, $scope, $location) {
    $scope.products = [];

    $http.get("/store-products.json").success(function(data) {
      $scope.products = data;
    });

  }]);
})();

