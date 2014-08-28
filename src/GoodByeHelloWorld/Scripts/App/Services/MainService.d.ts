/// <reference path="../main.d.ts" />
declare class MainService {
    private $http;
    static $inject: string[];
    constructor($http: ng.IHttpService);
}
