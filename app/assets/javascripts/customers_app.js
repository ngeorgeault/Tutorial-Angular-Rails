
var app = angular.module( 'customers',[
                                      'ngRoute',
                                      'ngResource',
                                      'ngMessages',
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
                '$scope', '$resource', '$routeParams',
        function($scope,   $resource,   $routeParams) {

          $scope.customerID = $routeParams.id;
          var Customer = $resource('/customers/:customerID.json');
          $scope.customer = Customer.get({"customerID": $scope.customerID});

            $scope.save = function(){
              if($scope.form.$valid){
                alert("Save!")
              }
            }
        }

        
]);

app.controller("CustomerCreditCardController", [
                  '$scope', '$resource',
          function($scope,   $resource) {
            
            var CreditCardInfo = $resource('/fake_billing.json');

            $scope.setCardHolderID = function(cardholderID){
              $scope.creditCard = CreditCardInfo.get({"cardholder_id": cardholderID});
            }
          }
]);
