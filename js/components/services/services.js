(function() {
  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', CoffeeService);

    CoffeeService.$inject = ['$http'];

  function CoffeeService ($http) {
    this.getAllCoffee = () => {
    return $http.get('https://guarded-thicket-41107.herokuapp.com/coffee')
    }

    this.test = 'this is a service';

  }
}());
