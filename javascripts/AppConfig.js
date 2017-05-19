app.run(function(FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
  $routeProvider
    .when("/address/list", {
      templateUrl: "partials/address-list.html",
      controller: "AddressListCtrl"
    })
    .when("/address/new", {
      templateUrl: "partials/address-new.html",
      controller: "AddressNewCtrl"
    })
    .when("/address/view/:id", {
      templateUrl: "partials/address-view.html",
      controller: "AddressViewCtrl"
    })
    .when("/address/edit/:id", {
      templateUrl: "partials/address-new.html",
      controller: "AddressEditCtrl"
    })
    .otherwise("/address/list");
});