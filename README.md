[![Netlify Status](https://api.netlify.com/api/v1/badges/1e392cad-842b-4e1e-bb6e-8d88ff62d1d2/deploy-status)](https://app.netlify.com/sites/heuristic-banach-184612/deploys)

# [Advice App](https://heuristic-banach-184612.netlify.app/)

![advice-app](advice-app.gif)

React app that calls on the [Advice Slip API](https://api.adviceslip.com/) to display strings of advice.

Technologies used: *React, Materialize CSS*

This project was bootstrapped with Create React App.

## Installation Instructions

1. Fork this repository, clone to your local machine then change into the directory:
```
$ git clone git@github.com:davmcgregor/advice-app.git
$ cd advice-app
```
2. Load dependencies and run the app for both the client and server directories:
```
$ npm install
$ npm start
```

## Further improvements

* Refactoring needed - need to fix placement of Carousel.init. [See here](https://stackoverflow.com/questions/55760448/how-to-initialize-carousel-full-width-and-indicators-with-vanilla-java-script-in)
* Add API call to onClick event so the carousel updates as user moves through it.
* Fix styling for mobile.
