// (function () {
//     "use strict";

//     var DIAppJS = angular.module("DIApp", []);

//     DIAppJS.controller("DIController", DIController);

//     DIController.$inject = ['$scope','$filter'];
//     function DIController($scope, $filter) {
//         $scope.name = "Huan";

//         $scope.upper = function () {
//             var upCase = $filter("uppercase");
//             $scope.name = upCase($scope.name);
//         };
//     }

// })();

//inline array solution:
// angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function e(n,o){n.name="Huan",n.upper=function(){var e=o("uppercase");n.name=e(n.name)}}]);

// $inject property to the function object
!function(){"use strict";function e(e,n){e.name="Huan",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
