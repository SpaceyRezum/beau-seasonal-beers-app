## Description

This app was developed in the realm of HackerYou TechChallenge. 

Following fictional requirements from Beau's (a Canadian Brewery), the web app was supposed to display Beau's selection of Seasonal Beers fetched from the LCBO (Liquor Control Board of Ontario) API, give details about each of these beers and give the user directions to nearby stores carrying the product.

Some brand identity elements were given by the challenge, others were taken from [Beau's official website](http://beaus.ca).

The app is coded in Javascript using the AngularJS framework & the jQuery library (all scripts are downloaded from the googleAPI CDN).

## Launch & Usage

The app usage is pretty simple: a list of seasonal beer is displayed as soon as the user launches the mainView.html page. The list can be navigated horizontally using scroll functions and any beer image can be clicked to retrieve the product details. On the detail page, entering a canadian postal code will display a maximum of 3 of the closest liquor store currently carrying the product.

## API Reference

Information about the LCBO API can be found [here](https://lcboapi.com/docs/v1)
