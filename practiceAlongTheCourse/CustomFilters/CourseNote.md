# Creating Custom Filters

### Step 1 : Define Filter Factory Function 
```
    function CustomFilterFactory(){
        return function (input){
            //change input
            return changedInput;
            //filter output
        };
    }
```

### Step 2: Register Filter Factory With Module
It is the similar way as register our contollers
```
    angular.module('app',[])
    .controller('ctrl', Ctrl)
    .filter('custom', CustomFilterFactory);
```
The name of filter must be a valid angular expression identifier.

### Step3: (JavaScript) Inject it W/ *name***Filter**
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

## Custom filters with custom arguments 

### Step 1: Define Filter (Factory) Function **W/ Custom Arguments**
```   
    function CustomFilterFactory(){
        return function (input, arg1){
            // change input
            return changedInput;
        };
    }
```   

### Step 2: Register Filter (Factory) Function **W/ Custom Arguments**
```
    angular.module('app',[])
    .controller('ctrl', Ctrl)
    .filter('custom', CustomFilterFactory);
```

### Step3: (JavaScript) Inject it W/ *name***Filter**
```
    Ctrl.$inject = ['scope', 'customFilter'];

    function Ctrl($scope, customFilter){
        var msg = "Some input";
        customFilter(msg, "some val");
    };
```    

### Step3: (HTML) Use it as registered name

```   
    {{ "Hello" | custom }}
```   

Here `|custom` is the name the filter **factory** was registered with.

If we use our custom filter in HMTL, there is no need to inject filter into the controller.

#### Filters in HTML: Pass extra args with :arg

```   
    {{ "Hello" | custom : arg1 ; arg2 }}
```   

#### Chaining FIlters in HTML

```   
    {{ "Hello" | custom | uppercase }}
``` 