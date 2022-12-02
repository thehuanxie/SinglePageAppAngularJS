(function(){
    'use strict';

    angular.module('MsgApp',[])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];

    function MsgController($scope){
        $scope.name = "Huan";
        $scope.stateOfBeing = "waiting";

        $scope.sayMessage = function(){
            return "Huan likes to paint :)"
        };

        $scope.callLatte = function(){
            $scope.stateOfBeing = "called";
        };
    }

})();