(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .run(routeStart);

  function appConfig($routeProvider) {
    $routeProvider
      .when('/coffee', {
        templateUrl: 'js/components/coffee/coffee.view.html',
        controller: 'coffeeController',
        controllerAs: 'vm',
        access: true
      })
      .when('/user', {
        templateUrl: 'js/components/user/user.view.html',
        controller: 'userController',
        controllerAs: 'vm',
        access: true
      })
      .when('/members' ,{
        template: '<h1>Members Only!</h1>',
        access: false
      })
      .otherwise('/coffee');
  }
  function routeStart ($rootScope, $location, $route, userService) {
    $rootScope.$on('$routeChangeStart', (event, next, current) => {
      if (!next.access) {
        if (!localStorage.getItem('token')) {
            $location.path('/user')
        }
      }
    })
  }

})();
