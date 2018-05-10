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

When + is used with mixed operands that include a string, JavaScript converts the other operand to a string as well. When both operands are a combination of numbers, booleans, nulls, or undefineds, they are converted to numbers and added together. When one of the operands is an object (including arrays and functions), both operands are converted to strings and concatenated together. The other arithmetic operators, -, /, %, etc are only defined for numbers, so JavaScript converts both operands to numbers.

IMPLICIT COERCION IN COMPARISON OPERATIONS:

Equality Operators: The strict operators never perform type coercions. The non-strict operators have a set of rules for coercing types before performing the comparison. When one operand is a string and the other is a number, the string is converted to a number. When one operand is a boolean, it is converted to a number. When one operand is null and the other is undefined, the non-strict operator always returns true. Comparing null or undefined to any other value returns false. When one of the operands is NaN, the comparison always returns false.

Relational Operators: The relational operators, <, >, <=, and >= are defined for numbers (numeric comparison) and strings (lexicographic order). When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them.



- variable scopes and hoisting

VARIABLE SCOPES

JavaScript's lexical scoping rules: variable scoping rules describe how and where the language finds and retrieves values from previously declared variables.

In JavaScript, every Function creates a new variable scope. The code within a Function inherits access to all variables in all surrounding scopes. Scoping in JavaScript is function-level, not block-level.

LEXICAL SCOPING

the source code defines the scope. hierarchy from the local scope of the code up to the program's global scope. When JavaScript tries to find a variable, it searches this hierarchy from the bottom to the top. It stops and returns the first variable it finds with a matching name. This means that variables in a lower scope can shadow, or hide, a variable with the same name in a higher scope.

CLOSURE

functions retain access to variables in its enclosing scope (closure); provide a way for functions to use variables that are defined at an outer scope; A closure retains references to everything that is in scope when the closure is created, and retains those references for as long as the closure exists. This means the Function can still access those references wherever we invoke the Function.

The value of a variable can change after creating a closure that includes the variable. When this happens, the closure sees the new value; the old value is no longer available.

VARIABLE SHADOWING

a variable defined in a inner scope (function declaration for example) shadows a variable with the same name defined in a outer scope. if the variable doing the shadowing is initialized in the inner scope, it temporarily shadows the other one when the function is being called, but the outer variable keeps its reference to the original value in its scope

If a function definition has a parameter with the same name as a variable from an outer scope, the parameter also shadows the outer variable.

HOISTING

JavaScript processes variable declarations before it executes any code within a scope. So, declaring a variable anywhere in a scope is equivalent to declaring it at the top of the scope. function declarations INCLUDING THE BODY are hoisted to the top, above regular variable declarations. variable declarations are hoisted to the top but below functions. variable initializations (assignments) stay in its original place in code.

Function expressions often involve assigning a function to a declared variable; since such expressions are just variable declarations, they obey the hoisting rules for variable declarations.



- function declarations, expressions and scopes

A function declaration (sometimes called a "function statement") defines a variable whose type is function.
A function expression defines a function as part of a larger expression syntax (typically a variable assignment). Also called anonymous function when isn't named. Though most function expressions use anonymous functions, named function expressions are useful for debugging.


STATEMENT VS EXPRESSION

Expression is code that resolves to a value: assignment, function calls, operations etc; expressions can contain other expressions;

Unlike expressions, statements in JavaScript don't necessarily resolve to a value. Statements generally control the execution of the program. For example, variable assignments are expressions, but variable declarations are statements; There are other types of statements, such as if ... else ... and switch for branching logic (conditionals), while and for for looping, etc. Statements help you do something, instead of giving a value to use;

- object properties and mutation

arrays are implemented with objects internally. arrays have a length property, which objects do not.

- assignments and comparison

VARIABLE INITIALIZATION AND ASSIGNMENT

A variable initialization and assignment at the same line doesn't have a return value (returns undefined). This is an statement. An assignment (or reassignment) returns the value assigned to the variable. Because they resolve to a value, assignments are expressions;

STRINGS COMPARISON

Recall that strings are compared based on standard lexicographical ordering, using Unicode values.

OBJECTS COMPARISON

=== returns true only for the same object (not different objects holding same values)

- pure functions and side effects

From Launch School:

"We've seen that Functions can modify external values. They can directly modify variables defined in outer scopes, or they can mutate Objects passed to the Function as arguments. We call such changes to the world outside the Function side effects.

When a Function doesn't have any side effects, we call it a pure function. Pure functions only rely on their arguments to determine their return value. Also, given the same argument value(s), it will always evaluate to the same result."

A function has side effects when:

1. Reassigns/mutates a variable defined in a outer scope;

2. Mutates an object passed as argument;

3. May not return the same value when given same argument values over and over (Because it relies on values defined in an outer scope/not passed as arguments. If the value it relies on changes on the outside, the return value of the function will change). If it relies on a variable that isn't scoped locally to the function, even when called with the same argument as a previous invocation, the function may not return the same value.;

If you use a function for its return value, you usually want the function call as part of an expression, or as the right hand side of an assignment.

If you use a function for a side effect, try to pass the variable(s) you will mutate as argument(s).



