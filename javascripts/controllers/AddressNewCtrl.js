app.controller("AddressNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, AddressFactory) {

	$scope.addNewAddress = () => {
		$scope.addedAddress.city = "Nashville";
		$scope.addedAddress.state = "Tennessee";
    	AddressFactory.postNewAddress($scope.addedAddress).then(() => {
      	$scope.addedAddress = {};
        $location.url("/address/list");
    	}).catch((error) => {
     		console.log("add error", error);
   		});
 	 };

});