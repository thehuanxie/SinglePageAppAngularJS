(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ShoppingListToBuy',ShoppingListToBuy)
    .controller('ShoppingListBought',ShoppingListBought)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ShoppingListToBuy.$inject = ['ShoppingListCheckOffService']; 
    function ShoppingListToBuy(ShoppingListCheckOffService){
        

    };

    ShoppingListBought.$inject = ['ShoppingListCheckOffService'];  
    function ShoppingListBought(ShoppingListCheckOffService){

    };  

})();