(function () {
  function ClientDetailCtrl ($http, $stateParams) {

		var $ctrl = this;

		$http.get('/api/clients/' + $stateParams.id)
			.then(function(response) {
				$ctrl.client = response.data;
				console.log('Client Name: ' + $ctrl.client.name)
			});


  }
  angular
    .module("ricochetCMS")
    .controller("ClientDetailCtrl", ClientDetailCtrl);
})();
