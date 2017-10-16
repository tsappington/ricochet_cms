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
				controller: function($stateParams, $http, $scope){
					$http.get('/clients/' + $stateParams.id)
						.then(function(response) {
							$scope.client = response.data;
							console.log('Client Name: ' + $scope.client.name)
						});
				}
			});

			$urlRouterProvider.otherwise('/');

	}
  angular
    .module('ricochetCMS', ['ui.router'])
    .config(config);
})();
