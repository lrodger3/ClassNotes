# JS Fundamentals

> A programming language is a language that lets you give instructions to a computer.

- In _English_ we write __SENTENCES__ composed of __WORDS__, which have __TYPES__ (noun, verb, adj, etc).

- In _Javascript_ we write __STATEMENTS__ composed of __VALUES__, which have __TYPES__ (numbers, strings, booleans, etc)

## Comments

> Comments give developers the ability to write notes to themselves or others about the code they've written

```javascript

// here is a comment!

/* multi line!

wow

*/

```

As a general rule, write comments all the time - writes lots of them!  Don't spend more time writing comments vs code

## Variables

> Container that holds a certain value or piece of information

- A lot like nicknames for values you care about
- Naming these variables is very important
  - Don't give them silly names
  
We declare variables using the `var` keyword in javascript

`var myName = <SOME VALUE>`
`myName`

### Variable Names

Variables must start with a `letter`, `_`, or `$`.  Variables can include any amount of `number` characters __AFTER__ the first character

Valid
- foo
- bar
- __secretSauce
- $wallet

Invalid
- 2Fast2Furious
- 100Balloons
- me&you
- lots-of-stuff


## Primitive Types

> All data in JS has a type - there are 5 primitive types

Simplest representations of data

### Number

> In JS, a `Number` can have either an integer value _or_ a decimal value.

#### Literal
> A literal syntax is just the value by itself

4
112.366678
3.33333333333333333333333333333

#### Operators

`+` - Adds numbers together
`-` - subtracts
`*` - multiply
`/` - divide
`%` - Modulo - Remainder of division


### String

> A `String` is a series of characters (text)

#### Literal

""
'hello'
"goodbye"
"the quick brown fox jumped over the lazy dog"

'that is "so" cool'
"don't"

Escaping a character, tells javascript to not treat a character as it normally would.
'don\'t'
"that is \"so\" cool"

#### Operators

`+` - concatenation - like glueing 2 strings together

#### Properties
> Strings are Strings, except for when they're Objects in JS
They have accessible properties through dot notation

"hello".length
       .split()
       
> Strings also have numbered Indexes accessible through bracket notation

Indexes in JS are 0-indexed

"hello"[0] => "h"
"hello"[2] => "l"
"hello"["hello".length] => undefined
"hello"["hello".length - 1] => "o"

var theThingSomeoneTyped = "???"


### Boolean

> Booleans are all about logic

#### Literal

true
false

#### Operators

##### Comparison Operators

- `==`  - if 2 values are equal (will perform type coersion)
  - "4" == 4 => true
- `===` - if 2 values are equal (literal equality / strict equality)
  - "4" === 4 => false
  
- `!=`  - if 2 values are NOT equal (will perform type coersion)
- `!==` - if 2 values are STRICTLY not equal

- `>` - greater than
  - 5 > 100 => false
- `>=` - greather than or equal to
  - 4 >= 4 => true
- `<`
- `<=`

##### Logical Operators
> Evaluate a series of conditions to a single true/false value

- `&&` - and - All conditions must be true for the whole thing to be true.  One false value will make the entire value false
  - (5 > 4) && ("dog" == "dog")
  - true &&  true
  - true
  
- `||` - or - Only ONE condition needs to be true for the whole thing to be true. ALL conditions must be false for the "or" to evaluate to false

  - (5 > 4) || ("dog" == "cat")
  -  true   ||  false
  -  true

- `!` - bang / not operator - unary operator (operates on ONE operand)
  - var cool = true
  - !cool => false
  - !!!cool => false


#### Truthy and Falsey values
> All values in JS have an inherent truthy or falsey value

true => truthy
false => falsey

"dog" => truthy
""    => falsey

0     => falsey
-10   => truthy
104.3 => truthy

if(CONDITION 1){
  // if CONDITION 1 was truthy, run this code
}
else if(CONDITION 2){
  // if CONDITION 1 was falsey AND
  // if CONDITION 2 was truthy, run this code
}
else{
  // if ALL the CONDITION's were falsey, run this code
}

if( 5 < 10 ){
  console.log('5 is way less');
}
else{

}

### undefined

falsey value

#### Literal

undefined

### null

falsey value

#### Literal

null

Biggest Difference between `undefined` and `null` is that `undefined` is a value you can see in JS - a value that naturally occurs

`null` is a value that must be explicitly set - does not occur naturally











