/// <reference path="../main.ts"/>

class MainService {

    public static $inject = [
        '$http'
    ];

    constructor(private $http: ng.IHttpService) {

    }
}