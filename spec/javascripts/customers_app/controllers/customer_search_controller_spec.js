describe ("CustomerSearchController", function() {
  
// ########## Initialization test ######################
// #####################################################
  describe("Initialization", function(){

    // Load up fresh app module before each test
    beforeEach(module("customers"));

    // Make scope and controller vars available
    var scope = null;
    var controller = null;


    // Use angular.mocks.inject to obtain access to $controller and $rootScope
    // angular base functions, pass these as arguments into beforeEach and
    // then assign them to scope and controller. The scope is a true scope object
    // and the controller is assigned all of the sub-functions of the controller with
    // a name matching the string passed in as an argument to $controller
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      controller = $controller("CustomerSearchController", {
        $scope: scope
      });
    }));

    it("defaults to an empty customer list", function() {
      expect(scope.customers).toEqualData([]);
    });
  });
// ########## Initialization test ######################
// #####################################################



// ########## Search results test ######################
// #####################################################
  describe("Fetching Search Results", function() {
    beforeEach(module("customers"));
    var scope       = null,
        controller  = null,
        httpBackend = null,
        serverResults = [
          {
            id:          123,
            first_name: "Bob",
            last_name:  "Jones",
            email:      "bjones@foo.net",
            username:   "jonesy"
          },
          {
            id:          456,
            first_name: "Bob",
            last_name:  "Johnsons",
            email:      "johnboy@bar.info",
            username:   "bobbyj"
          }
        ];

    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;
      controller = $controller("CustomerSearchController", {
        $scope: scope
      });
    }));

    beforeEach(function() {
      httpBackend.when('GET', './customers.json?keywords=bob&page=0').
                  respond(serverResults);
    });

    it("populates customer search list with results from a search", function(){
      scope.search("bob");
      httpBackend.flush();
      expect(scope.customers).toEqualData(serverResults);
    });
  });
// ########## Search results test ######################
// #####################################################



// ########## Error handling test ######################
// #####################################################
  describe("Error Handling", function() {
    
    beforeEach(module("customers"));
    
    var scope       = null,
        controller  = null,
        httpBackend = null;

    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;
      controller = $controller("CustomerSearchController", {
        $scope: scope
      });
    }));

    beforeEach(function() {
      httpBackend.when('GET', './customers.json?keywords=bob&page=0').
                  respond(500, 'Internal Server Error');
      spyOn(window, "alert");
    });

    it("alerts the user to an error", function() {
      scope.search("bob");
      httpBackend.flush();
      expect(scope.customers).toEqualData([]);
      expect(window.alert).toHaveBeenCalledWith(
                                "There was a problem: 500");
    });
  });
// ########## Error handling test ######################
// #####################################################


});