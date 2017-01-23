# JS Structures

## Non-Primitive Types

> Tend to be more complex than primitive types

### Arrays

> Arrays are like lists - they hold multiple values separated by commas

#### Literal

[]
["dog", "cat", "bird"]
[24, true, [1,2,3], "bird"] - mixed type arrays are a pain to deal with

#### Methods / Properties
> Methods are properties that contain functions

ex : console.log() - log method on the console object

`.push(<VALUE>)` - adds a value to the end of an array
`.pop()` - removes the final element in an array
`.splice(<START>, <NUM2REMOVE>, [<THINGS TO PUSH>,...])` - can be used for adding / removing elements at the starting index
`.length` - gives the length of the array

> Can reassign values of an array like the following : 

```javascript

var myThings = ['boat', 'shoes', 'hotdogs']
myThings[2] = 'boots' // Now i have boots instead of shoes

```


### Objects

> Objects are typically used to decribe multiple properties of one thing.  They are composed of key:value pairs - separated by commas

#### Literal

{}
{name : 'bill'}

{
  name : 'Bill',
  age  : 204,
  occupation : null
}

> Access properties on an object typically with dot notation

```javascript

var user = {
  name : 'bill',
  occupation : 'dentist'
}

user.name
user.occupation

```

> Reassign properties very similarly to an array

```javascript

user.name = 'Frank' // now our user is Frank

```


> a For-In loop allows you to loop over an object's keys!

```javascript

for(var key in user){
  console.log(key, user[key]) // list each key and value - bracket notation allows us to pass in the value of the key variable as the property we want to access.
}

```




