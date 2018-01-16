app.controller("AddressListCtrl", function($rootScope, $scope, AddressFactory) {
	$scope.addresses = [];

	let getAddresses = () => {
    	AddressFactory.getAddressList($rootScope.user.uid).then((addressez) => {
    		$scope.addresses = addressez;
            console.log(addressez);
    	}).catch((error) => {
      		console.log("error", error);
    	});
  	};

	getAddresses();


    $scope.deleteAddress = (id) => {
    	AddressFactory.deletz(id).then(() => {
    		getAddresses();
    	}).catch((error) => {
    		console.log("deleteAddress error", error);
    	});
    };


});

