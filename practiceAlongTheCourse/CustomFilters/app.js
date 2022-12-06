(function(){
    'use strict';

    angular.module('MsgApp',[])
    .controller('MsgController', MsgController)
    .filter('loves',LovesFilterFactory)
    .filter('truth',TruthFilterFactory);

    MsgController.$inject = ['$scope','lovesFilter','$filter'];
    //$inject array elements have respect the same order than controler arguments order
    function MsgController($scope, lovesFilter, $filter){
        $scope.name = "Huan";
        $scope.stateOfBeing = "waiting";
        $scope.LatteEat = .72;

        $scope.sayMessage = function(){
            var msg = "Huan likes to paint :)";
            var output = $filter('uppercase')(msg);
            return output;
        };
        
        $scope.saylovesMessage = function(){
            var msg = "Huan likes to paint :)";
            var output = lovesFilter(msg);
            return output;
        };

        $scope.callLatte = function(){
            $scope.stateOfBeing = "called";
        };
    }

    function LovesFilterFactory(){
        return function (input){
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    };

    function TruthFilterFactory(){
        return function(input, target, replace){
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
    }

})();