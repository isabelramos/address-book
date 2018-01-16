app.controller("AddressNewCtrl", function($rootScope, $http, $location, $q, $scope, FIREBASE_CONFIG, AddressFactory) {

	$scope.addNewAddress = () => {
		$scope.addedAddress.city = "Nashville";
		$scope.addedAddress.state = "Tennessee";
    $scope.addedAddress.photo = "http://www.themeparkinsider.com/assets/PROF_NewUserIcon.png";
    $scope.addedAddress.uid = $rootScope.user.uid;
    	AddressFactory.postNewAddress($scope.addedAddress).then(() => {
      	$scope.addedAddress = {};
        $location.url("/address/list");
    	}).catch((error) => {
     		console.log("add error", error);
   		});
 	 };

});