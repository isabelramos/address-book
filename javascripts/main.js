app.run((FIREBASE_CONFIG) => {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.controller("AddressCtrl", ($scope) => {
	$scope.print = "blah.";
});