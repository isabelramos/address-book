app.controller("AddressViewCtrl", function($location, $routeParams, $scope, AddressFactory) {

  $scope.selectedAddress = {};

  AddressFactory.getSingleAddress($routeParams.id).then((results) => {
  	$scope.selectedAddress = results.data;
  }).catch((error) => {
  	console.log("getSingleAddress error", error);
  });


});