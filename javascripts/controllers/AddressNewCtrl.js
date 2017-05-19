app.controller("AddressNewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, AddressFactory) {

	$scope.addNewAddress = () => {
		$scope.addedAddress.city = "Nashville";
		$scope.addedAddress.state = "Tennessee";
    	postNewAddress($scope.addedAddress).then(() => {
      	$scope.addedAddress = {};
      	$scope.showListView = true;
    	getAddresses();
    	}).catch((error) => {
     		console.log("add error", error);
   		});
 	 };

});