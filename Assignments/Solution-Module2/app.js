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

        itemAdder.checkAllBought = function(){
            ShoppingListCheckOffService.checkAllBought();

        }

    };

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

    };

    ShoppingListBoughtController.$inject = ['ShoppingListCheckOffService'];
    function ShoppingListBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;

        boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();

    };

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var items = [];
        var count = 0;
        var boughtItems = [];


        service.addItem = function (itemName, quantity) {   
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
            count++;
            console.log("addItem",count);

        };

        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
            count--;
            console.log("removeItem",count);

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
            count--;
            console.log("addBought",count);

        };  
        
        service.checkAllBought = function(){
            var done = false;
            console.log("bought items",boughtItems.length);
            console.log("items",items.length);
            console.log("done before if",done);

            if ( items.length === 0  && boughtItems.length >0){
                done = true; 
            };
            console.log("bought items after if",boughtItems.length);
            console.log("items after if",items.length);
            console.log("done after if",done);
            return done;
            
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

    };
}) ();