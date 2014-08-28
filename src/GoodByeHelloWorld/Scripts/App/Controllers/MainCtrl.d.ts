/// <reference path="../main.d.ts" />
/// <reference path="../Services/MainService.d.ts" />
/// <reference path="MainCtrl.scope.d.ts" />
declare class MainCtrl {
    private $scope;
    private service;
    static $inject: string[];
    constructor($scope: IMainCtrlScope, service: MainService);
}
