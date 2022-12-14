(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ShoppingListToBuy',ShoppingListToBuy)
    .controller('ShoppingListBought',ShoppingListBought)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

})();