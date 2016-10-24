(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['coffeeService'];

  function coffeeController(coffeeService) {
    /*jshint validthis: true */
    this.greeting = 'Hello Coffee!';
    this.test = coffeeService.test

    coffeeService.getAllCoffee()
    .then((data) => {
      console.log(data);
    })
  }

})();
