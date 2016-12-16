app.service('BeerListService', function($http, $q) {

	var APIKey = 'MDowZWE0N2Y5OC1jMDgyLTExZTYtODc1MS0yYjAyYzVjMzcyNWM6cmVLMm9GVDRib3ZDV0FmTUVDbWZQRGxvNks3QXF1czhudUJx';
	// Use of simple query to make sure that no result was left off
	var query = 'Beau\'s';
	var producerName = 'Beau\'s All Natural Brewing';
	// Array to store list of seasonal beers
	var listOfBeers = [];
	// Array to store nearby stores
	var listOfStores = [];

	

	this.getListOfSeasonalBeers = function() {
		var request = $http({
			method: 'GET',
			// had to use the query parameter because producer_name & name filters did not work
			url: 'https://lcboapi.com/products?q=' + query + '&where=is_seasonal&where_not=is_dead'
				 + '&access_key=' + APIKey
		});

		return(request.then(function(response) {
			// empty the array before repopulating it
			listOfBeers = [];
			// stores the array of result into a variable and loops over to filter 
			response.data.result.forEach(function(result, index) {
				// if statement to double check that result is indeed a beau's beer
				if (result.producer_name === producerName) {
					listOfBeers.push(result);
				};
			});
			return listOfBeers;
		}, this.errorCallBack));
	},


	this.getBeerDetails = function(productID) {
		var request = $http({
			method: 'GET',
			url: 'https://lcboapi.com/products/' + productID + '?access_key=' + APIKey
		});

		return(request.then(function(response) {
			var beerDetails = response.data.result;
			return beerDetails;
		}, this.errorCallBack));
	},


	this.getStoreNearby = function(productID, postalCode) {
		var request = $http({
			url: 'https://lcboapi.com/stores?geo=' + postalCode + '&product_id=' + productID 
			+ '&access_key=' + APIKey,
			// use of jsonp to by-pass Cross origin issues with ajax call
			dataType: 'jsonp'
		});
		return(request.then(function(response) {
			// empty the array before repopulating it
			listOfStores = [];
			// stores the first three stores from the results into listOfStores 
			for (var i = 0; i < 3; i++) {
				listOfStores.push(response.data.result[i]);
			};
			return listOfStores;
		}, this.errorCallBack));
	},


	this.errorCallBack = function(response) {
		alert('sorry, there was an error with the asynchronous request: ',response.status, response.statusText);
	}
});