(function() {
  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', CoffeeService);

  CoffeeService.$inject = ['$http'];

  function CoffeeService ($http) {
    const baseUrl = `https://guarded-thicket-41107.herokuapp.com/coffee/`;

    this.getAllCoffee = () => {
        return $http.get(baseUrl);
      };
    this.getSingleCoffee = (id) => {
        return $http.get(`${baseUrl}${id}`);
      };
    this.addCoffee = (coffee) => {
        return $http.post(baseUrl, coffee)
      }
  }
}());
