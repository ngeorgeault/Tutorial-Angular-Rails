describe ("CustomerSearchController", function() {
  
  describe("Initialization", function(){

    // Make scope and controller vars available to further tests
    var scope = null;
    var controller = null;

    // Load up fresh app module before each test
    beforeEach(module("customers"));

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
});