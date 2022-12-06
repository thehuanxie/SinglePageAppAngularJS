# Creating Custom Filters

## Step 1 : Define Filter Factory Function 
```
    function CustomFilterFactory(){
        return function (input){
            //change input
            return changedInput;
            //filter output
        };
    }
```

## Step 2: Register Filter Factory With Module
It is the similar way as register our contollers
```
    angular.module('app',[])
    .controller('ctrl', Ctrl)
    .filter('custom', CustomFilterFactory);
```
The name of filter must be a valid angular expression identifier.

## Step3: (JavaScript) Inject it W/ *name***Filter**
```
    Ctrl.$inject = ['scope', 'customFilter'];

    function Ctrl($scope, customFilter){
        var msg = "Some input";
        customFilter(msg);
    };
```    

=> When we're injecting our custom filter straight into the controller, Angular calls our registered filter factory for us.

In the process, Angular names the actual filter function we inject, using the name we registered a factory function plus the word filter appended at the end.

So if we registered a factory function called custom, AngularJs will execute our factory to create the actual filter function and name it customFilter, appending the name filter to the end of the registered factory name.