/*
input: string containing integers and/or commands separated by spaces
output: none. print the value in the register if PRINT command is present.
requirements/ mental model:
initialize empty stack and register to 0
break string into numbers and commands
for each one:
if number, assign number to register
if PUSH, insert number to stack and keep number at register
if POP, remove the topmost number from stack and assign to register
if PRINT, console log the number at the register
if operation, remove topmost number from stack, operate against number at register, and assign it to register

dt structures: array and integers
algorithm:
split commands into array of commands
initialize stack and register
for each command
if command is number, assign number to register
if PUSH, push number to stack and keep number at register
if POP, pop last number from stack and assign to register
if PRINT, console log the number at the register
if operation, remove topmost number from stack, operate against number at register, and assign it to register
if DIV or MOD, result should be an integer
*/

function minilang(commands) {
  commands = commands.split(' ');
  var stack = [];
  var register = 0;
  var number;

  commands.forEach(function (command) {
    number = parseInt(command, 10);
    if (number) {
      register = number;
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'PRINT') {
      console.log(register);
    } else if (command === 'POP') {
      register = stack.pop();
    } else if (command === 'MULT') {
      register *= stack.pop();
    } else if (command === 'ADD') {
      register += stack.pop();
    } else if (command === 'SUB') {
      register -= stack.pop();
    } else if (command === 'DIV') {
      register = Math.round(register/stack.pop());
    } else if (command === 'MOD') {
      register = register % stack.pop();
    } else {
      throw "Error: Token " + command + " is invalid";
    }

    if (isNaN(register)) {
      throw "Error: Stack is empty";
    }
  });
}
minilang('PO A')
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

