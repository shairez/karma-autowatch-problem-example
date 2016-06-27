(function () {
  angular
    .module('badAutowatch')
    .config(config);

  config.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ]

  function config($stateProvider,
    $urlRouterProvider) {

    $stateProvider
      .state('registration', {
        url: '/',
        template: '<ld-registration></ld-registration>'
      })

    $urlRouterProvider.otherwise('/');

  }
})();