(function () {
  function HomeCtrl () {
    this.text = "First angular text"
  }
  angular
    .module("ricochetCMS")
    .controller("HomeCtrl", HomeCtrl);
})();
