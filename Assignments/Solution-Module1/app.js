(function(){
    'use strict';

    angular.module("lunchCheckApp", [])
    .controller("lunchController",lunchController);

    lunchController.$inject = ["$scope"];
    
    function lunchController($scope){
       
        $scope.lucnhChecker =function(){
            var lunchMenu = document.getElementById("lunch-menu").value;
            
            $scope.items = lunchMenu.split(',') ;
            
           
            if ($scope.items==''){ //why default arry is ['']?
                $scope.msg= "Please enter data first.";
            } else {
                var count = {};
                $scope.items.forEach(function(i) { count[i] = (count[i]||0) + 1;});
                
                //need to parse the empty value
                // Object.keys = ""
                if (Object.keys(count) != ""){
                    var countNote = Object.values(count);
                    for (var n=0; n<countNote.length; n++){
                        console.log(countNote[n]);
    
                        
                        
                        if (countNote[n]<3 ){
                            $scope.msg = "Enjoy!";
                        } else {
                            $scope.msg = "Too much!";
                        }
                    }  
                }
                  
            }
            return $scope.msg;
        };
    }

    

})();