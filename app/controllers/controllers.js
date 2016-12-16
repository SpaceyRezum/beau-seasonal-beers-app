app.controller('beerInventoryController', function($window, $scope, BeerListService) {

	init();

	function init() {
		// init function pulls data from the BeerListService factory and paste it into a listOfBeers object
	    BeerListService.getListOfSeasonalBeers().then(function(data){
	    	$scope.listOfBeers = data;
	    });
	}
});

//This controller retrieves data from the BeerListService and associates it with the $scope
//The $scope is bound to the order view
app.controller('beerDetailedInfoController', function ($scope, $routeParams, BeerListService) {
    // clears the scope before re-populating it with the selected product
    $scope.beer = {};
    $scope.listOfStores = [];

    init();

    function init() {
        //Grab productID off of the route & converts it to an integer
        var productID = parseInt($routeParams.productID);
        if (productID > 0) {
            // collects beer details from factory and paste it in the scope
            BeerListService.getBeerDetails(productID).then(function(data) {
                $scope.beer = data;
            });
        };
    }

    $scope.getListOfStores = function(postalCode) {
        // empty listOfStores if needed
        if ($scope.listOfStores.length > 1) {
            $scope.listOfStores = [];
        }
        // if the postalCode's format is the same as goodFormat, carries on with function, else tells the user 
        var goodFormat = /\w\d\w\d\w\d/;
        if (goodFormat.test(postalCode)) {
            var productID = parseInt($routeParams.productID);
            if (productID > 0) {
                // collects list of stores from factory and paste it in the scope
                BeerListService.getStoreNearby(productID, postalCode).then(function(data) {
                    $scope.listOfStores = data;
                    // toggles the ng-hide class to make the store-locator-results visible
                    $('.store-locator-results').toggleClass('ng-hide');
                    console.log($scope.listOfStores);
                });
            };
        } else {
            alert(postalCode + ' does not respect the required format.\n' +
                'Please enter a postal code with a similar format as M6R2K5 or V5V3M9.\n' +
                '(i.e: LetterDigitLetterDigitLetterDigit)');
        };
    }
});