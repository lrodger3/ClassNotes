# Filters and Factories

## Filters

- In Angular, `Filters` are typically used to _format_ values
  - 3.05      => "$3.05"
  - 123908123 => "123,908,123"
  - "dog"     => "DOG"

- To USE a filter in angular : 

```html
<p> {{toy.price | currency}} </p>
```
{{EXPRESSION | FILTER:arg1:arg2...}}

- the filters `orderBy` and `filter` are special filters that are normally used with an `ngRepeat`.the

  - orderBy => sorts/re-orders items
  - filter  => only displays certain items

## Factories
> Angular component used for passing data / methods to multiple controllers

- Holding / sharing information
- Closest likened to the `M` of `MVC`

- Like controllers, they are registered to a MODULE
- What are they used for?
  - Most often for DATA or common METHODS
  - Can be used in multiple CONTROLLERS
    - share data between them
    
- Factories are `singletons`
  - Factories are only ever created ONCE
  - Extremely similar to the `require` paradigm in Node - first require runs the file and gets the exports, subsequent requires just reference the already created exports











