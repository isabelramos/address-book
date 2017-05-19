app.controller("AddressListCtrl", function($scope, AddressFactory) {
	$scope.addresses = [];

	let getAddresses = () => {
    	AddressFactory.getAddressList().then((addressez) => {
    		$scope.addresses = addressez;
    	}).catch((error) => {
      		console.log("error", error);
    	});
  	};

	getAddresses();





















});

