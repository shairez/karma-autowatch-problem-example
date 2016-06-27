(function () {
  var componentName = 'ldRegistration';
  var templateUrl = 'app/registration/registration.component.html';

  angular
    .module('badAutowatch')
    .directive(componentName, component)
    .controller(componentName, componentController);
  
  
  function component() {
    return {
      scope: {},
      bindToController: true,
      controllerAs: '$ctrl',
      controller: componentController,
      templateUrl: templateUrl
    }
  }

  function componentController() {
    
    var $ctrl = this;

    $ctrl.createAccount = createAccount;

    function createAccount() {
      console.log('YO YO!');
    }

  }

})();