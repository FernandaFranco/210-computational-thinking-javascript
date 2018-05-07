- anonymous function (function expression?)

CLOSURE

functions retain access to variables in its enclosing scope (closure); provide a way for functions to use variables that are defined at an outer scope;

- JavaScript's lexical scoping rules


================================================
Be able to explain clearly the following topics:
================================================

- primitive values, types and type conversions

PRIMITIVE VALUES (PRIMITIVE DATA TYPES)

there are five of them. Are immutable. They are the most basic values one can think of: undefined,
null,
boolean: true or false; result of a comparison operation;
string: supports the + operator for concatenation. JavaScript always performs concatenation when + is used with a string operand; otherwise, it performs addition; String object has a length property; Also supports comparison operators;
numbers: double precision float. supports the basic arithmetic operations;


Primitive values are passed by value.

TYPES

object is a compound data type. Objects are mutable, which means you can modify them without losing their identity.

TYPE CONVERSIONS

TEMPORARY TYPE COERCION

when we try to access a property or call a method on a string primitive, JavaScript automatically converts it to a String object. As such, we can use the String.prototype.NAME_HERE property with a string primitive.

when primitive values call a method, javascript temporarily coerces it to it's object correspondent in order to execute that method, since primitives don't have methods.

IMPLICIT COERCION

can lead to unexpected results. For example, + is an operator for summing numbers and concatenating strings, but other operators only operate on numbers. Javascript will convert strings to numbers when using the operator -, for example, but keep them as strings when using +. Same thing with relaxed comparison operators: When the operands are of different types, JavaScript tries to implicitly convert them to suitable types. This implicit conversion can cause significant problems.

- variable scopes and hoisting

VARIABLE SCOPES

VARIABLE SHADOWING

a variable defined in a inner scope (function declaration for example) shadows a variable with the same name defined in a outer scope. if the variable doing the shadowing is initialized in the inner scope, it temporarily shadows the other one when the function is being called, but the outer variable keeps

HOISTING

- function declarations, expressions and scopes

STATEMENT VS EXPRESSION

Expression is code that resolves to a value: assignment, function calls, operations etc; expressions can contain other expressions;

Unlike expressions, statements in JavaScript don't necessarily resolve to a value. Statements generally control the execution of the program. For example, variable assignments are expressions, but variable declarations are statements; There are other types of statements, such as if ... else ... and switch for branching logic (conditionals), while and for for looping, etc. Statements help you do something, instead of giving a value to use;

- object properties and mutation

arrays are implemented with objects internally. arrays have a length property, which objects do not.

- assignments and comparison

VARIABLE INITIALIZATION AND ASSIGNMENT

A variable initialization and assignment at the same line doesn't have a return value (returns undefined). An assignment (or reassignment) returns the value assigned to the variable. Because they resolve to a value, assignments are expressions;

STRINGS COMPARISON

Recall that strings are compared based on standard lexicographical ordering, using Unicode values.

OBJECTS COMPARISON

=== returns true only for the same object (not different objects holding same values)

- pure functions and side effects




