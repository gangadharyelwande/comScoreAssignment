//Create the module
var mainApp = angular.module("movieTheaterApp", []);

mainApp.controller('movieController', function ($scope){
   //create default values
    $scope.itemDetails = {
        items:
            [
                { itemName: 'Popcorn', itemCost: 3 },
                { itemName: 'Snickers', itemCost: 4 },
                { itemName: 'Soda', itemCost: 2}
            ]
       };
    //Create the empty row when click on Add Item
    $scope.addItem = function () {
        $scope.itemDetails.items.push({
            itemName: '',
            itemCost: ''
        });
    },

    //calculate final total once all items are purchased
    $scope.calculateBasketTotal = function () {
        var basketTotal = 0;
        angular.forEach($scope.itemDetails.items, function (item) {
            if ((item.itemName == 'Snickers') && (item.quantity == 5)) {
                var tempQuantity = 3;
                basketTotal += tempQuantity * item.itemCost;
            }
            else{
                basketTotal += item.quantity * item.itemCost;
            }
        })

        return basketTotal;
    } 
});