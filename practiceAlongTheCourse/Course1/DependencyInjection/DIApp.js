(function () {
    "use strict";

    var DIAppJS = angular.module("DIApp", []);

    DIAppJS.controller("DIController", DIController);

    function DIController($scope, $filter) {
        $scope.name = "Huan";

        $scope.upper = function () {
            var upCase = $filter("uppercase");
            $scope.name = upCase($scope.name);
        };
    }

})();