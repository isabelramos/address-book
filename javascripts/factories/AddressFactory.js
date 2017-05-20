app.factory("AddressFactory", function($http, $q, FIREBASE_CONFIG) {

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

  let getSingleAddress = (id) => {
    return $q ((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses/${id}.json`)
      .then((results) => {
        results.data.id = id;
        resolve(results);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let editAddress = (address) => {
    return $q ((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/addresses/${address.id}.json`, 
        JSON.stringify({
          name: address.name,
          street_address: address.street_address,
          city: address.city,
          state: address.state,
          photo: address.photo
      })
      ).then((results) => {
          resolve(results);
      }).catch((error) => {
          reject(error);
        });
    });
  };




return {getAddressList:getAddressList, postNewAddress:postNewAddress, getSingleAddress:getSingleAddress, editAddress:editAddress};


});