(function() {

  'use strict';

  angular
    .module('myApp.components.user', [])
    .controller('userController', userController);

  userController.$inject = ['userService'];

  function userController(userService) {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'Hello World!';
    vm.user = {}
    vm.newUser = {}
    vm.onSubmit = () => {
      userService.login(vm.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token)
      })
      vm.user = {};
    }
    vm.register = () => {
      userService.register(vm.newUser)
      .then((newUser) => {
        localStorage.setItem('token', newUser.data.token)
      })
      vm.newUser = {}
    }
  }

})();
