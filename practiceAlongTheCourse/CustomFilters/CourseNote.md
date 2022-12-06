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

## Step3: (JavaScript) Inject it W/ *name *Filter*
