app.run((FIREBASE_CONFIG) => {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.controller("AddressCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
	$scope.showListView = true;
	$scope.addresses = [];

	$scope.newAddress = () => {
		$scope.showListView = false;
	};

	$scope.showAllAddresses = () => {
		$scope.showListView = true;
	};

	let getAddressList = () => {
		let addressez = [];
		return $q ((resolve, reject) => {
    		$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json`)
    		.then((firebaseItems) => {
	        	let itemCollection = firebaseItems.data;
	        	Object.keys(itemCollection).forEach((key) => {
	            itemCollection[key].id = key;
	            addressez.push(itemCollection[key]);
         	});
          	resolve(addressez);
	      	}).catch((error) => {
	        	reject(error);
	     	});
    	}); 
 	};


	let getAddresses = () => {
    	getAddressList().then((addressez) => {
    		$scope.addresses = addressez;
    	}).catch((error) => {
      		console.log("error", error);
    	});
  	};

	getAddresses();

	let postNewAddress = (newAddress) => {
		return $q ((resolve, reject) => {
    		$http.post(`${FIREBASE_CONFIG.databaseURL}/addresses.json`, JSON.stringify(newAddress))
    		.then((results) => {
    			resolve(results);
      		}).catch((error) => {
      			reject(error);
      		});
    	});
  	};

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