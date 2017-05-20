app.controller("AddressEditCtrl", function($location, $routeParams, $scope, AddressFactory) {
	$scope.addedAddress = {};

	AddressFactory.getSingleAddress($routeParams.id).then((results) => {
		$scope.addedAddress = results.data;
	}).catch((error) => {
	  	console.log("getSingleAddress error", error);
	});

	$scope.addNewAddress = () => {
	  	AddressFactory.editAddress($scope.addedAddress).then(() => {
	  		$location.url("/address/list");
	  	}).catch((error) => {
	  		console.log("editAddress error", error);
	  	});
	};

});