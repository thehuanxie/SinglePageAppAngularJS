# Expression:{{exp}}
Something that evaluates to some value

* processed by Angular & roughly similar to the resulte of [eval(some_js)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/eval)

* Executed in the context of the scope & has access to properties on `$scope`

* Doesn't throw errors if it results in a TypeError or ReferenceError => display an empty string or an emplty value

* Control flow functions (e.g., 'if' statements, etc.) are not allowed

* Accept a filter or a filter chain to format the output

# Interpolation
process of evaluating a *string literal* containing one or more placeholders, which are replaced with values

* In Angular, this string : 
    ~~~~
    message is {{message}}
    
    //(provided message = "hello") is interpolated into this string:

    message is hello
    ~~~~

* Still connected to the original *message* property
    * if `$scope.message` changes, so will the interpolation result    