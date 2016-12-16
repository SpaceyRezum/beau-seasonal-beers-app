## Description

This app was developed in the realm of HackerYou TechChallenge. 

Following fictional requirements from Beau's (a Canadian Brewery), the web app was supposed to display Beau's selection of Seasonal Beers fetched from the LCBO (Liquor Control Board of Ontario) API, give details about each of these beers and give the user directions to nearby stores carrying the product.

Some brand identity elements were given by the challenge, others were taken from [Beau's official website](http://beaus.ca).

The app is coded in Javascript using the AngularJS framework & the jQuery library (all scripts are downloaded from the googleAPI CDN).

## Launch & Usage

Since the AJAX calls to the LCBO API are using an API Key, it might be necessary to view the final project on a local server (to avoid Cross-Origin restriction issues). 

The app usage is pretty simple, a list of seasonal beer is displayed as soon as the user launches the mainView.html page. The list can be navigated horizontally using scroll functions and any beer image can be clicked to retrieve the product details. On the detail page, entering a canadian postal code will display a maximum of 3 of the closest liquor store currently carrying the product.  

## API Reference

Information about the LCBO API can be found [here](https://lcboapi.com/docs/v1)

## Future improvement

This app displays a way to use the AngularJS Framework to create multiple-view, API-data fetching web-app. Further implementation could be added, such as:
	- two navigational button wrapping the beer list to improve the experience of users who would not horizontal scroll naturally
	- an effort to render the app in a responsive way was made, however, improvements could be brought to further improve the UX on different devices
	- fetching beer images from beaus.ca as LCBO API does not provide all of them
	- use of different liquor store API to cover more stores in cities throughout the country (Canada)
	- if the app were to be used online, a deeper look at performance optimization could benefit the loading speed both for desktop and mobile 
