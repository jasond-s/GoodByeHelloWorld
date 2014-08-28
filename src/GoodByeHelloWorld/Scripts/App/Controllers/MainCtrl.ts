/// <reference path="../main.ts"/>
/// <reference path="../Services/MainService.ts"/>

/// <reference path="./MainCtrl.scope.ts"/>

class MainCtrl {

    public static $inject = [
        '$scope',
        'MainService'
    ];

    constructor(private $scope: IMainCtrlScope, private service: MainService) {

        $scope.title = "Hello World";

    }
}