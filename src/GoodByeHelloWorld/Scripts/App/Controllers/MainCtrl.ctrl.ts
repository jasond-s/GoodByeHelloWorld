/// <reference path="../main.ts"/>

app.controller("MainCtrl", ['$scope', 'MainService', ($scope: IMainCtrlScope, MainService) => {

        $scope.title = 'Hello World';

}]);