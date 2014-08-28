var MainCtrl = (function () {
    function MainCtrl($scope, service) {
        this.$scope = $scope;
        this.service = service;
        $scope.title = "Hello World";
    }
    MainCtrl.$inject = [
        '$scope',
        'MainService'
    ];
    return MainCtrl;
})();
//# sourceMappingURL=MainCtrl.js.map
