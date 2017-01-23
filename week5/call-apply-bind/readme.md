# Call, Apply, and Bind

> These are methods that are attached to functions and they help control `this`

`this` often refers to the `host object` (the object the method being called is attached to)

When functions are called with the `new` keyword, we lose that context and `this` becomes an empty object.  Calling functions with the `new` keyword is calling that function in the context of CONSTRUCTING new objects

## Call
> Call is a method that calls (invokes) a function but allows us to FORCE a value for `this`

`METHOD.call(THIS, arg1, arg2,...)`
`Wizard.call(this, alchemistInfo)`

> Call also allows us to pass in arguments to the function.  These arguments are defined AFTER the value for `this`

!! This immediately invokes the function


## Apply
> Apply is a method that calls (invokes) a function but allows us to FORCE a value for `this`

`METHOD.apply(THIS, [arg1, arg2,...])`

> Apply also allows us to pass in arguments to the function.  These arguments are defined AFTER the value for `this`

!! This immediately invokes the function

## Call vs Apply
> Exactly the same except for how they accept arguments to hand off to the original function

Call  - comma separated list
Apply - array of arguments to be passed in

EX:
method.call(this, [1,2,3])
method([1,2,3])

method.apply(this, [1,2,3])
method(1,2,3)

## Bind
> Call and Apply are pretty cool, but they are immediately executed - one-time use

Bind creates a NEW version of the function with a custom value for `this` AND, if necessary, arguments

Syntactically, `bind` is most similar to `call`

`METHOD.bind(THIS, arg1, arg2,...)`

!! This is NOT immediately invoked








