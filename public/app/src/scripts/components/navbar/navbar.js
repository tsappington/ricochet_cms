(function() {
    var navbarObj = {
      bindings: {},
      templateUrl: '/app/src/scripts/components/navbar/navbar.html',
      controller: navbarCtrl
    }

    function navbarCtrl($rootScope, $scope) {
      var $ctrl = this;
    }

    angular
        .module('ricochetCMS')
        .component('navbar', navbarObj);
})();
