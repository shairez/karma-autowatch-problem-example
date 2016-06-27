describe('ldRegistration', function () {

  var $controller,
    ctrl;

  beforeEach(module('badAutowatch'));

  beforeEach(inject([
    '$controller',
    function (_$controller) {
      $controller = _$controller;

      ctrl = $controller('ldRegistration');

    }]));


  describe('METHOD: createAccount', function () {
    Given(function () {

    });

    When(function () {

      ctrl.createAccount();
    });

    Then(function () {
      expect(1).toBe(1);
    });
  });

});