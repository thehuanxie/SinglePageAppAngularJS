(function(){
    'use strict';

    angular.module('MsgApp',[])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope','$filter'];

    function MsgController($scope,$filter){
        $scope.name = "Huan";
        $scope.stateOfBeing = "waiting";

        $scope.sayMessage = function(){
            var msg = "Huan likes to paint :)";
            var output = $filter('uppercase')(msg);
            return output;
        };

        $scope.callLatte = function(){
            $scope.stateOfBeing = "called";
        };
    }

})();