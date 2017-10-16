(function () {
  function ClientCtrl ($http) {

		var $ctrl = this;

		console.log('client.js')

		$http.get('/clients')
			.then(function(response) {
				$ctrl.clients = response.data;
				console.log($ctrl.clients)
			});

  }
  angular
    .module("ricochetCMS")
    .controller("ClientCtrl", ClientCtrl);
})();
