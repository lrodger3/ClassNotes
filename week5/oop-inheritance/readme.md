# Inheritance
> Inheritance is "extending" a base class that contains common properties and methods with the NEW properties and methods of the `sub` class

- Bequeathing certain properties, etc

## Relationships

`has a` - RESTAURANT has a MENU, DEALERSHIP has a CAR
**`is a`  - DOG is a MAMMAL, KING CHARLES CAVALIER is a DOG**

`is a` relationships are a good use case for inheritance because there is a clear inheritance of properties

SuperClass (Mammal) => SubClass (Dog)

## Why?
> Use inheritance if it makes sense organizationally - but more importantly if it SAVES YOU CODE

- `DO NOT` model relationships and inheritance just for fun

## Inheritance Chain

When you are accessing a property or method on an object it looks for that property or method in the following manner : 

1. Looks on the object itself (does that object have the prop we are looking for?)

2. Then looks on the object's prototype

3. Then looks on the object's prototypes's prototype

4. repeat step 3 until it can't look any higher








