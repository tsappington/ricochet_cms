(function () {
  function config($locationProvider, $stateProvider, $urlRouterProvider) {

		console.log('init')

    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/app/src/scripts/views/home/_home.html',
				controller: 'HomeCtrl as $ctrl'
			})
			.state('clients', {
				// abstract: true,
				url: '/clients',
				templateUrl: '/app/src/scripts/views/client/_client.html',
				controller: 'ClientCtrl as $ctrl'
			})
			.state('clients.detail', {
				url: '/:id',
				templateUrl: '/app/src/scripts/views/client/_client.detail.html',
				controller: 'ClientDetailCtrl as $ctrl'
			});

			$urlRouterProvider.otherwise('/');

	}
  angular
    .module('ricochetCMS', ['ui.router'])
    .config(config);
})();
