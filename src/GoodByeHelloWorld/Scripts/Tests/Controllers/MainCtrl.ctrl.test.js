'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('GoodByeHelloWorld'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    describe('will have a title in the view scope', function () {
        it('should be equal to the initial Hello World value', function () {
            expect(scope.title).toBe('Hello World');
        });
    });

});