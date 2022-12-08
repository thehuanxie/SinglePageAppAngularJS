# Prototypal Inheritance
## What is Inheritance?
*Inheritance is when an object or a class is based on another object or a class (parent), using the same implementation and/or the same values.*

Ex.: class Animal{numberOfLegs, walk()} => class Dog {numberOfLegs, walk()}

*Technique for code reuse as well as logical entity structure*

## JS Prototypal Inheritance

Prototypal inheritted child can be empty when initialization. To evaluate an expression from child as `child.type`, JS will look up at child object, as it is not existing, JS will look up to the prototype chain to see who is the parent of this object. Once found the value, JS will get it and stop this operation.
As per ex.: class Parent{type:"parent",method()} => class Child{}
`//child.type = "parent"`

However, if the expression is set on the child object, this property masks type inherited from the prototype, JS will get this value and stop.
As per ex.: class Parent{type:"parent", method()} => class Child{type:"child"}
`//child.type = "child"`
