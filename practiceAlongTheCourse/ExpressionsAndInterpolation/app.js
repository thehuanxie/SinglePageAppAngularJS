(function(){
    'use strict';

    var MsgApp = angular.module("MsgApp",[]);

    MsgApp.controller = ('MsgController', MsgController);

    MsgController.$inject = ["$scope"];

    function MsgController($scepe){
        $scepe.name = "Huan";
    }

})();