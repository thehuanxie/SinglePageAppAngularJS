(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ShoppingListAddController', ShoppingListAddController)
        .controller('ShoppingListShowController', ShoppingListShowController)
        .controller('ShoppingListBoughtController', ShoppingListBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ShoppingListAddController.$inject = ['ShoppingListCheckOffService'];
    function ShoppingListAddController(ShoppingListCheckOffService) {
        var itemAdder = this;

        itemAdder.itemName = "";
        itemAdder.itemQuantity = "";

        itemAdder.addItem = function () {
            ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
        };
    }


    ShoppingListShowController.$inject = ['ShoppingListCheckOffService'];
    function ShoppingListShowController(ShoppingListCheckOffService) {
        var showList = this;
        
        showList.items = ShoppingListCheckOffService.getItems();
        showList.boughtItem = ShoppingListCheckOffService.getBoughtItems();

        showList.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        };

        showList.addBoughtItem = function (itemIndex) {
            ShoppingListCheckOffService.addBoughtItem(itemIndex); 
        };

       showList.checkAllBought = ShoppingListCheckOffService.checkAllBought();
       
    }

    ShoppingListBoughtController.$inject = ['ShoppingListCheckOffService'];
    function ShoppingListBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;

        boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var items = [];
        var boughtItems = [];


        service.addItem = function (itemName, quantity) {   
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        };

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
           
        };

        service.getItems = function () {
            return items;
        };

        service.addBoughtItem = function (itemIndex) {
            var boughtItem = {
                name: items[itemIndex].name,
                quantity: items[itemIndex].quantity
            };
            boughtItems.push(boughtItem);
            items.splice(itemIndex, 1);
            
        };  
        
        service.checkAllBought = function(){
            if ((boughtItems.length > 0) && (items.length === 0 )){
                return true;
            };
        }; 

        // service.toBuy = function(){
        //     var msg = "";
        //     if (items.length > 0 && boughtItems.length === 0) {
        //         msg = "Nothing bought yet.";
                
        //     };
        //     return msg;
        // };
        // service.msg = function(){
        //     var msg = "";
        //     if ((boughtItems.length >0) && (items.length == 0 )){
        //         msg = "everything is bought";
        //     } else if ((boughtItems.length == 0) && (items.length > 0)){
        //         msg = "Nothing bought yet.";
        //     };
        //     return msg;
        // };

        service.getBoughtItems = function () {
            return boughtItems;
        };

    }
}) ();