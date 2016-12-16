var app = angular.module('seasonalBeerApp', ['ngRoute', 'ngAnimate']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'beerInventoryController',
                templateUrl: 'app/partials/full-list.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/product/:productID',
            {
                controller: 'beerDetailedInfoController',
                templateUrl: '/app/partials/beerDetails.html'
            })
        /*//Define a route that has a route parameter in it (:customerID)
        .when('/orders',
            {
                controller: 'OrdersController',
                templateUrl: '/app/partials/orders.html'
            })*/
        .otherwise({ redirectTo: '/' });
});