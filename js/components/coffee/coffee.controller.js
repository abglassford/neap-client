(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['coffeeService'];

  function coffeeController(coffeeService) {
    /*jshint validthis: true */
    const vm = this;
    vm.form = false;
    vm.coffeeObj = {}
    vm.showForm = () => {
      vm.form = !vm.form
    }
    vm.addCoffee = () => {
      coffeeService.addCoffee(vm.coffeeObj)
      .then(data => coffeeService.getAllCoffee())
      .then(coffee => vm.coffee = coffee.data.data)
      vm.coffeeObj = {};
      vm.showForm();
    }
    coffeeService.getAllCoffee()
    .then((data) => {
      vm.coffee = data.data.data;
    })
    .catch(err => {console.log(err);});

    coffeeService.getSingleCoffee(1)
    .then((data) => console.log(data));

  }

})();
