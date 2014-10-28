(function() {
  var app = angular.module('GemStore');

  app.controller('StoreController', ['$http', '$scope', function($http, $scope) {
      $scope.products = [];

      $http.get("/store-products.json").success(function(data) {
        $scope.products = data;
      });
    }]);
})();
