(function () {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: 'home/_home.html'
      });
  }
  angular
    .module("ricochetCMS", ["ui.router"])
    .config(config);
})()