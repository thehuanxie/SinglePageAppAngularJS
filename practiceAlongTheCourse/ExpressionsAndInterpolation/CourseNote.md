# Expression:{{exp}}
Something that evaluates to some value

* processed by Angular & roughly similar to the resulte of eval(some_js)

* Executed in the context of the scope & has access to properties on `$scope`

* Doesn't throw errors if it results in a TypeError or ReferenceError => display an empty string or an emplty value

* Control flow functions (e.g., 'if' statements, etc.) are not allowed

* Accept a filter or a filter chain to format the output
