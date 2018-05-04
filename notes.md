- anonymous function (function expression?)

- closures : functions retain access to variables in its enclosing scope (closure);

- JavaScript's lexical scoping rules

Be able to explain clearly the following topics:

- primitive values, types and type conversions

PRIMITIVE VALUES

there are five of them. They are the most basic values one can think of including undefined, null, boolean, string, and numbers. Primitive values are passed by value

TEMPORARY TYPE COERCION

when we try to access a property or call a method on a string primitive, JavaScript automatically converts it to a String object. As such, we can use the String.prototype.NAME_HERE property with a string primitive.

when primitive values call a method, javascript temporarily coerces it to it's object correspondent in order to execute that method, since primitives don't have methods.

IMPLICIT COERCION

can lead to unexpected results. For example, + is an operator for summing numbers and concatenating strings, but other operators only operate on numbers. Javascript will convert strings to numbers when using the operator -, for example, but keep them as strings when using +.

- variable scopes and hoisting

- function declarations, expressions and scopes

- object properties and mutation

arrays are implemented with objects internally. arrays have a length property, which objects do not.

- assignments and comparison

VARIABLE INITIALIZATION AND ASSIGNMENT

A variable initialization and assignment at the same line doesn't have a return value (returns undefined). An assignment (or reassignment) returns the value assigned to the variable.

STRINGS COMPARISON

Recall that strings are compared based on standard lexicographical ordering, using Unicode values.

OBJECTS COMPARISON

=== returns true only for the same object (not different objects holding same values)

- pure functions and side effects




