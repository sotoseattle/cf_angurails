(function() {
  var app = angular.module("StoreDirectives", []);

  app.directive("productDescription", function() {
    return {
      restrict: "A",
      templateUrl: "templates/product-description.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: "A",
      templateUrl: "templates/product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict: "A",
      templateUrl: "templates/product-specs.html"
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: "A",
      templateUrl: "templates/product-tabs.html",
      controller: function() {
        this.tab = 1;
        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };
        this.setTab = function(activeTab) {
          return this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive("productGallery", function() {
    return {
      restrict: "A",
      templateUrl: "templates/product-gallery.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber) {
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });
})();
