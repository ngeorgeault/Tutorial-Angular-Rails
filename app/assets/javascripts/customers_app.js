
var app = angular.module( 'customers',[
                                      'ngRoute',
                                      'templates',
                                        ]
);


app.config([
            "$routeProvider",
    function($routeProvider) {

      $routeProvider.when("/", {
        controller:  "CustomerSearchController",
        templateUrl: "customer_search.html"
      });
      $routeProvider.when("/:id", {
        controller:  "CustomerDetailController",
        templateUrl: "customer_detail.html"
      });

    }
]);

app.controller("CustomerSearchController", 
                    [ '$scope', '$http', '$location',
              function($scope,   $http ,  $location) {

    $scope.customers = [ ];
    var page = 0;

    $scope.search = function(searchTerm) {
      
      if (searchTerm.length < 3) {
        return;
      }
      
      $http ({
                  method: 'GET',
                  url: '/customers.json',
                  params: { "keywords": searchTerm, "page": page }
                }).
                then(function successCallback(response) {
                    $scope.customers = response.data;
                    $scope.status = response.status;
                }, 
                function errorCallback(response) {
                  $scope.status = response.status;
                  alert("There was a problem: " + response.status);
                });

    }

    $scope.previousPage = function() {
      if (page > 0) {
        page = page -1;
        $scope.search($scope.keywords);
      }
    }

    $scope.nextPage = function() {
        page = page +1;
        $scope.search($scope.keywords);
    }

    $scope.viewDetails = function(customerid) {
      $location.path("/" + customerid);
    }

  }
]);


app.controller("CustomerDetailController", [
                '$scope', '$http', '$routeParams',
        function($scope,   $http,   $routeParams) {

          customerID = $routeParams.id;
          $scope.customer = {};

        $http ({
                  method: 'GET',
                  url: '/customers/' + customerID + '.json'
                }).
                then(function successCallback(response) {
                    $scope.customer = response.data;
                }, 
                function errorCallback(response) {
                  alert("There was a problem: " + response.status);
                });


}]);
