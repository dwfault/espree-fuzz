//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Generators functionality tests -- verifies behavior of generator functions

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2() {
    this.o3 = "Expected Exception";
}

var o4 = 0;
function o5(o6, o7, o8) {
    return {
        [Symbol.iterator]: function () {
            var o11 = { o12 : 1 };
            if (o6) {
                o11.next = o6;
            }
            if (o7) {
                o11.return = o7;
            }
            if (o8) {
                o11.throw = o8;
            }
            return o11;
        }
    }
}

function o16() {
    return {
        done: this.o12 == 3,
        value: this.o12++
    };
}

function o19() {
    o4++;
    return {
        done: true,
        value: undefined
    };
}

function o21() {
    o4++;
    return {
        done: true,
        value: undefined
    };
}

var global = (function() { return this; }());

var o23 = [
    {
        name: "Simple generator functions with no parameters or locals or captures",
        o25: function () {
            function* o26() { }
            o27.o28({ value: undefined, done: true }, o26().next(), "Empty generator is complete on first call to next and returns undefined");

            function* o29() { return 123; }
            o27.o28({ value: 123, done: true }, o29().next(), "Generator that returns value but does not yield is complete on first call to next and returns that value");

            function* o30() { yield 1; }
            var o31 = o30();
            o27.o28({ value: 1, done: false }, o31.next(), "Generator that yields once is not complete on the first call but returns the yielded value");
            o27.o28({ value: undefined, done: true }, o31.next(), "Generator that yields once is complete on the second call and returns undefined");

            function* o32() { yield 1; return 123; }
            var o33 = o32();
            o27.o28({ value: 1, done: false }, o33.next(), "Generator that yields once is not complete on the first call but returns the yielded value");
            o27.o28({ value: 123, done: true }, o33.next(), "Generator that yields once and has explicit return is complete on the second call and returns the specified value");

            function* o34() { yield 1; yield 2; yield 3; return 10; }
            var o35 = o34();
            o27.o28({ value: 1, done: false }, o35.next(), "Generator with three yields, first call to next gives first yielded value");
            o27.o28({ value: 2, done: false }, o35.next(), "Generator with three yields, second call to next gives second yielded value");
            o27.o28({ value: 3, done: false }, o35.next(), "Generator with three yields, third call to next gives third yielded value");
            o27.o28({ value: 10, done: true }, o35.next(), "Generator with three yields, fourth call to next gives return value");
        }
    },
    {
        name: "Calling a completed generator returns { value: undefined, done: true }",
        o25: function () {
            function* o36() { yield 1; return 0; }
            var o37 = o36();

            o27.o28({ value: 1, done: false }, o37.next(), "Just make sure we get the yield value");
            o27.o28({ value: 0, done: true }, o37.next(), "Just make sure we get the return value");
            o27.o28({ value: undefined, done: true }, o37.next(), "Calling completed generator gives back undefined and iteration complete");
            o27.o28({ value: undefined, done: true }, o37.next(), "Calling completed generator gives back undefined and iteration complete second time");
            o27.o28({ value: undefined, done: true }, o37.next(), "Calling completed generator gives back undefined and iteration complete every time");
        }
    },
    {
        name: "A single generator function creates distinct generator objects each time it is called",
        o25: function () {
            function* o36() { yield 1; yield 2; yield 3; return 0; }

            var o38 = o36();
            var o39 = o36();

            o27.o28({ value: 1, done: false }, o38.next(), "next() on first generator returns first yielded value");
            o27.o28({ value: 1, done: false }, o39.next(), "interleaved call to next() on second generator returns first yielded value");
            o27.o28({ value: 2, done: false }, o38.next(), "interleaved next() on first generator returns second yielded value");
            o27.o28({ value: 2, done: false }, o39.next(), "interleaved call to next() on second generator returns second yielded value");
            o27.o28({ value: 3, done: false }, o38.next(), "interleaved next() on first generator returns third yielded value");
            o27.o28({ value: 3, done: false }, o39.next(), "interleaved call to next() on second generator returns third yielded value");
            o27.o28({ value: 0, done: true }, o38.next(), "interleaved next() on first generator finishes it with return value");
            o27.o28({ value: 0, done: true }, o39.next(), "interleaved call to next() on second generator finishes it with return value");

            var o31 = o36();

            o27.o28({ value: 1, done: false }, o31.next(), "independent next() on third generator returns first yielded value");
            o27.o28({ value: 2, done: false }, o31.next(), "independent next() on third generator returns second yielded value");
            o27.o28({ value: 3, done: false }, o31.next(), "independent next() on third generator returns third yielded value");
            o27.o28({ value: 0, done: true }, o31.next(), "independent next() on third generator finishes it with return value");
        }
    },
    {
        name: "Sanity check: generator used in for-of works as expected",
        o25: function () {
            function* o36() { yield 1; yield 2; yield 3; return 0; }
            var o40 = [];

            for (let o4 of o36()) {
                o40.push(o4);
            }

            o27.o28(3, o40.length, "for-of loop only had as many iterations as there were yields in the generator");
            o27.o28(1, o40[0], "for-of loop first iteration value was first yielded value of generator");
            o27.o28(2, o40[1], "for-of loop second iteration value was second yielded value of generator");
            o27.o28(3, o40[2], "for-of loop third iteration value was third yielded value of generator");
        }
    },
    {
        name: "Yield expression result value is the argument value that was passed to next()",
        o25: function () {
            function* o36() {
                o27.o28('a', yield 1, "Second call to next() passes argument as result of first yield");
                o27.o28('b', yield 2, "Third call to next() passes argument as result of first yield");
                o27.o28('c', yield 3, "Fourth call to next() passes argument as result of first yield");
                return 0;
            }

            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next('ignored'), "Sanity check that result value is first yield value and note that the argument to the first call to next is silently ignored");
            o27.o28({ value: 2, done: false }, o37.next('a'), "Sanity check that result value is second yield value");
            o27.o28({ value: 3, done: false }, o37.next('b'), "Sanity check that result value is third yield value");
            o27.o28({ value: 0, done: true }, o37.next('c'), "Sanity check that result value is return value");
        }
    },
    {
        name: "Generator function with locals that span yields",
        o25: function () {
            function* o36() {
                var o40 = 0, o43 = 1;

                yield o40; o40 += o43++;
                yield o40; o40 += o43++;
                yield o40; o40 += o43++;
            }

            var o37 = o36();
            o27.o28(0, o37.next().value, "Initial value of a from the generator");
            o27.o28(1, o37.next().value, "Second value of a, incremented by initial value of b, from the generator");
            o27.o28(3, o37.next().value, "Third value of a, incremented by second value of b, from the generator");
        }
    },
    {
        name: "Generator function with parameters",
        o25: function () {
            function* o36(o40, o43, o44) {
                yield o40;
                yield o43;
                yield o44;
            }

            var o37 = o36(0, 1, 2);
            o27.o28(0, o37.next().value, "Initial value is first argument");
            o27.o28(1, o37.next().value, "Second value is second argument");
            o27.o28(2, o37.next().value, "Third value is third argument");

            o37 = o36(0);
            o27.o28(0, o37.next().value, "Initial value is first and only given argument");
            o27.o28(undefined, o37.next().value, "Second value is undefined for unspecified argument");
            o27.o28(undefined, o37.next().value, "Third value is undefined for unspecified argument");

            o37 = o36(3, 4, 5, 6, 7);
            o27.o28(3, o37.next().value, "Initial value is first argument (more arguments than formal parameters)");
            o27.o28(4, o37.next().value, "Second value is second argument (more arguments than formal parameters)");
            o27.o28(5, o37.next().value, "Third value is third argument (more arguments than formal parameters)");
            o27.o28(undefined, o37.next().value, "Last value is undefined, extra arguments ignored");
        }
    },
    {
        name: "Generator functions with rest parameter",
        o25: function () {
            function* o26(...o45) {
                for (var o12 = 0; o12 < o45.length; o12 += 1) {
                    yield o45[o12];
                }
            }

            var o37 = o26();
            o27.o28({ value: undefined, done: true }, o37.next(), "gf1 yields no values when given no arguments");

            o37 = o26(0);
            o27.o28(0, o37.next().value, "Initial value is first argument passed in");
            o27.o28({ value: undefined, done: true }, o37.next(), "gf1 is complete after first argument yielded");

            o37 = o26(0, 1, 2, 3);
            o27.o28(0, o37.next().value, "Initial value is first argument passed in");
            o27.o28(1, o37.next().value, "Second value is second argument passed in");
            o27.o28(2, o37.next().value, "Third value is third argument passed in");
            o27.o28(3, o37.next().value, "Fourth value is fourth argument passed in");
            o27.o28(undefined, o37.next().value, "gf1 is complete after last argument yielded");

            function* o29(o40, o43, ...o45) {
                for (var o12 = o45.length - 1; o12 >= 0; o12 -= 1) {
                    yield o45[o12];
                }
                yield o43;
                yield o40;
            }

            o37 = o29();
            o27.o28({ value: undefined, done: false }, o37.next(), "Initial value is undefined for unspecified second argument");
            o27.o28({ value: undefined, done: false }, o37.next(), "Second value is undefined for unspecified first argument");
            o27.o28({ value: undefined, done: true }, o37.next(), "gf2 is complete after yielding first two formal parameters despite them being unspecified");

            o37 = o29(0, 1);
            o27.o28({ value: 1, done: false }, o37.next(), "Initial value is second argument");
            o27.o28({ value: 0, done: false }, o37.next(), "Second value is first argument");
            o27.o28({ value: undefined, done: true }, o37.next(), "gf2 is complete after yielding first two formal parameters since rest parameter is empty");

            o37 = o29(0, 1, 2, 3, 4);
            o27.o28({ value: 4, done: false }, o37.next(), "Initial value is third rest parameter argument");
            o27.o28({ value: 3, done: false }, o37.next(), "Second value is second rest parameter argument");
            o27.o28({ value: 2, done: false }, o37.next(), "Third value is first rest parameter argument");
            o27.o28({ value: 1, done: false }, o37.next(), "Fourth value is second argument");
            o27.o28({ value: 0, done: false }, o37.next(), "Fifth value is first argument");
            o27.o28({ value: undefined, done: true }, o37.next(), "gf2 is complete after yielding first two formal parameters since rest parameter is empty");
        }
    },
    {
        name: "Generator functions with this reference",
        o25: function () {
            function* o36(o40) {
                yield 1 + o40 + this.o40;
            }
            o37 = o36.call({o40 : 100}, 10);
            o27.o28({value : 111, done: false}, o37.next(), "Returns the sum of 1, argument and the this's property's");
            o27.o28({value: undefined, done: true}, o37.next(), "Generator is in completed state");
        }
    },
    {
        name: "Generator declarations and methods cannot be used as a constructor",
        o25: function () {
            function* o36(o40) { yield 1 + o40 + this.o40; }
            o27.o47( function () { new o36(); }, o48, "Generator declarations used as constructor throws TypeError", "Function is not a constructor");
            o27.o47( function () { new o36(10); }, o48, "Generator declarations used as constructor with parameters throws TypeError", "Function is not a constructor");

            var o49 = { *o36() {} };
            o27.o47( function () { new o49.o36(); }, o48, "Generator methods used as constructor throws TypeError", "Function is not a constructor");

            class o44 { *o36() {} };
            var o50 = new o44();
            o27.o47( function () { new o50.o36(); }, o48, "Generator methods in class used as constructor throws TypeError", "Function is not a constructor");
        }
    },
    {
        name: "Generator function using arguments.length where arguments does not escape",
        o25: function () {
            function* o36() {
                return arguments.length;
            }

            o27.o28(0, o36().next().value, "Passing zero arguments should result in length of 0");
            o27.o28(1, o36(0).next().value, "Passing one arguments should result in length of 1");
            o27.o28(3, o36(0, 1, 2).next().value, "Passing three arguments should result in length of 3");
        }
    },
    {
        name: "Generator function using arguments elements where arguments does not escape",
        o25: function () {
            function* o36() {
                for (var o12 = 0; o12 < arguments.length; o12 += 1) {
                    yield arguments[o12];
                }
            }

            var o37 = o36();
            o27.o28({ value: undefined, done: true }, o37.next(), "No results yielded if arguments is empty");

            o37 = o36(0);
            o27.o28({ value: 0, done: false }, o37.next(), "Passing one argument should yield back that argument");
            o27.o28({ value: undefined, done: true }, o37.next(), "Generator is in completed state after yielding the one argument");

            o37 = o36(0, 1, 2);
            o27.o28({ value: 0, done: false }, o37.next(), "First value is the first argument");
            o27.o28({ value: 1, done: false }, o37.next(), "Second value is the second argument");
            o27.o28({ value: 2, done: false }, o37.next(), "Third value is the third argument");
            o27.o28({ value: undefined, done: true }, o37.next(), "Generator is in completed state after yielding the three arguments");
        }
    },
    {
        name: "Generator function that captures outer scope locals",
        o25: function () {
            function o52(o40) {
                let o43 = 0;
                function* o36() {
                    yield o40++;
                    yield o43++;
                    yield o40++;
                    yield o43++;
                }
                return o36;
            }

            var o36 = o52(10);
            var o37 = o36();

            o27.o28(10, o37.next().value, "First value for a is initial 10 from the argument given in the call to f()");
            o27.o28( 0, o37.next().value, "First value for b is 0 from initialization in f()");
            o27.o28(11, o37.next().value, "Second value for a is the next integer value");
            o27.o28( 1, o37.next().value, "Second value for b is the next integer value");
            o27.o28(undefined, o37.next().value, "Only four yields, return value is undefined");

            o37 = o36();

            o27.o28(12, o37.next().value, "New generator uses the same a so this is the third value which is the next integer value");
            o27.o28( 2, o37.next().value, "New generator uses the same b so this is the third value which is the next integer value");
            o27.o28(13, o37.next().value, "Fourth value for a is the next integer value");
            o27.o28( 3, o37.next().value, "Fourth value for b is the next integer value");
            o27.o28(undefined, o37.next().value, "Only four yields, so again, return value is undefined");

            o36 = o52(5);
            o37 = o36();

            o27.o28(5, o37.next().value, "New instance of the generator function from a second call to f where a starts at the argument given in the second call to f()");
            o27.o28(0, o37.next().value, "New instance of the generator function from a second call to f where b is 0 from initialization in f()");
            o27.o28(6, o37.next().value, "Second value for a in new environment is the next integer value");
            o27.o28(1, o37.next().value, "Second value for b in new environment is the next integer value");
        }
    },
    {
        name: "Yield expressions inside control flow constructs: if/else-if/else statement",
        o25: function () {
            function* o36(o40) {
                if (o40 === 'if') {
                    yield 1;
                } else if (o40 === 'else if') {
                    yield 2;
                } else {
                    yield 3;
                }
                return 0;
            }

            var o37 = o36('if');
            o27.o28(1, o37.next().value, "This generator yields from the if branch");
            o27.o28(0, o37.next().value, "It does not yield from the else-if or else branches and hits the return statement");

            o37 = o36('else if');
            o27.o28(2, o37.next().value, "This generator yields from the else-if branch");
            o27.o28(0, o37.next().value, "It does not yield from the else branch and hits the return statement");

            o37 = o36();
            o27.o28(3, o37.next().value, "This generator yields from the else branch");
            o27.o28(0, o37.next().value, "And hits the return statement");
        }
    },
    {
        name: "Yield expressions inside control flow constructs: switch statement",
        o25: function () {
            function* o36(o40) {
                switch (o40) {
                    case 1:
                        yield 1;
                        break;
                    case 2:
                        yield 2;
                        // fallthrough
                    case 3:
                        yield 3;
                        break;
                    default:
                        yield -1;
                        break;
                }
                return 0;
            }

            var o37 = o36(1);
            o27.o28(1, o37.next().value, "This generator yields from case 1");
            o27.o28(0, o37.next().value, "It then breaks and hits the return statement");

            o37 = o36(2);
            o27.o28(2, o37.next().value, "This generator yields from case 2");
            o27.o28(3, o37.next().value, "It then falls through and yields from case 3");
            o27.o28(0, o37.next().value, "And then it breaks and hits the return statement");

            var o37 = o36(3);
            o27.o28(3, o37.next().value, "This generator yields from case 3");
            o27.o28(0, o37.next().value, "It then breaks and hits the return statement");

            var o37 = o36(4);
            o27.o28(-1, o37.next().value, "This generator yields from the default case");
            o27.o28(0, o37.next().value, "It then breaks and hits the return statement");
        }
    },
    {
        name: "Yield expressions inside control flow constructs: while loop statement",
        o25: function () {
            function* o36() {
                var o40 = 1;
                while (o40 < 3) {
                    yield o40;
                    o40 += 1;
                }
                return 0;
            }

            var o37 = o36();
            o27.o28(1, o37.next().value, "This generator yields 1 on the first iteration of the while loop");
            o27.o28(2, o37.next().value, "This generator yields 2 on the second iteration of the while loop");
            o27.o28(0, o37.next().value, "And completes the loop there and hits the return statement");
        }
    },
    {
        name: "Yield expressions inside control flow constructs: for loop statement",
        o25: function () {
            function* o36() {
                for (var o40 = 1; o40 < 3; o40++) {
                    yield o40;
                }
                return 0;
            }

            var o37 = o36();
            o27.o28(1, o37.next().value, "This generator yields 1 on the first iteration of the for loop");
            o27.o28(2, o37.next().value, "This generator yields 2 on the second iteration of the for loop");
            o27.o28(0, o37.next().value, "And completes the loop there and hits the return statement");
        }
    },
    {
        name: "Yield expressions inside control flow constructs: for-in loop statement",
        o25: function () {
            function* o36() {
                var o53 = { o40: '', o43: '' };
                for (var o40 in o53) {
                    yield o40;
                }
                return 0;
            }

            var o37 = o36();
            o27.o28('a', o37.next().value, "This generator yields property name 'a' on the first iteration of the for-in loop");
            o27.o28('b', o37.next().value, "This generator yields property name 'b' on the second iteration of the for-in loop");
            o27.o28(0, o37.next().value, "And completes the loop there and hits the return statement");
        }
    },
    {
        name: "Yield expressions inside control flow constructs: for-of loop statement",
        o25: function () {
            function* o36() {
                for (var o40 of [1, 2]) {
                    yield o40;
                }
                return 0;
            }

            var o37 = o36();
            o27.o28(1, o37.next().value, "This generator yields 1 on the first iteration of the for-of loop");
            o27.o28(2, o37.next().value, "This generator yields 2 on the second iteration of the for-of loop");
            o27.o28(0, o37.next().value, "And completes the loop there and hits the return statement");
        }
    },
    {
        name: "Yield expression in a return statement doesn't clobber R0 register used by return statement",
        o25: function () {
            function* o26() {
                return {
                    [yield 1]: 2
                };
            }

            var o37 = o26();
            o27.o28({ value: 1, done: false }, o37.next(), "The yield's result value is not somehow corrupted by being part of a return statement (in computed property)");
            o27.o28({ value: { o54: 2 }, done: true }, o37.next("foo"), "The generator's return value is not corrupted by the yield");

            function* o29() {
                return yield 1;
            }

            o37 = o29();
            o27.o28({ value: 1, done: false }, o37.next(), "The yield's result value is not somehow corrupted by being part of a return statement");
            o27.o28({ value: 2, done: true }, o37.next(2), "The generator's return value is the yield's result value");
        }
    },
    {
        name: "Generator that throws is put in completed state",
        o25: function () {
            function* o36() {
                throw new Error();
                yield 10;
                return 20;
            }

            var o37 = o36();

            o27.o47(function () { o37.next(); }, Error, "Generator immediately throws a new Error object");
            o27.o28({ value: undefined, done: true }, o37.next(), "The generator is now completed so successive calls to next() return done: true; it does not yield 10");
            o27.o28({ value: undefined, done: true }, o37.next(), "The generator is now completed so successive calls to next() return done: true; it does not return 20");
        }
    },
    {
        name: "Cannot reenter an active generator function",
        o25: function () {
            function* o36() {
                o27.o47(function () { o37.next() }, o48, "Calling next() on an active generator throws TypeError", "Generator.prototype.next: Cannot execute generator function because it is currently executing");
                o27.o47(function () { o37.return(1) }, o48, "Calling return() on an active generator throws TypeError", "Generator.prototype.return: Cannot execute generator function because it is currently executing");
                o27.o47(function () { o37.throw(1) }, o48, "Calling throw() on an active generator throws TypeError", "Generator.prototype.throw: Cannot execute generator function because it is currently executing");
                return 123;
            }
            var o37 = o36();

            o27.o28({ value: 123, done: true }, o37.next(), "Ensure that gf() executed");
        }
    },
    {
        name: "toString() of a generator function should match the script code same as normal functions",
        o25: function () {
            function* o26() { }
            function* o29(o40, o43, o44) {
                yield o40 + o43 + o44;
            }
            var o30 = function* () { };

            o27.o28("function* gf1() { }", o26.toString(), "generator function declaration as a string");
            o27.o28("function* gf2(a, b, c) {\r\n                yield a + b + c;\r\n            }", o29.toString(), "generator function declaration with new lines, parameters and body as a string");
            o27.o28("function* () { }", o30.toString(), "anonymous generator function expression as a string");
        }
    },
    {
        name: "GeneratorFunction constructor creates generator functions named anonymous",
        o25: function () {
            var o57 = Object.getPrototypeOf(function* () { }).constructor;

            var o36 = new o57('yield 1; return 0;');

            var o37 = o36();

            o27.o28("function* anonymous(\n) {yield 1; return 0;\n}", o36.toString(), "toString of GeneratorFunction constructed function is named anonymous");

            o27.o28({ value: 1, done: false }, o37.next(), "gf is a generator function whose body yield's 1 then returns 0");
            o27.o28({ value: 0, done: true }, o37.next(), "gf is a generator function whose body yield's 1 then returns 0");

            o36 = new o57('a', 'b', 'c', 'yield a; yield b; yield c;');
            o37 = o36(1, 2, 3);

            o27.o28("function* anonymous(a,b,c\n) {yield a; yield b; yield c;\n}", o36.toString(), "toString of GeneratorFunction constructed function is named anonymous with specified parameters");

            o27.o28({ value: 1, done: false }, o37.next(), "gf is a generator function that takes three parameters and yields each of them in turn");
            o27.o28({ value: 2, done: false }, o37.next(), "gf is a generator function that takes three parameters and yields each of them in turn");
            o27.o28({ value: 3, done: false }, o37.next(), "gf is a generator function that takes three parameters and yields each of them in turn");
            o27.o28({ value: undefined, done: true }, o37.next(), "gf is a generator function that takes three parameters and yields each of them in turn");
        }
    },
    {
        name: "Generator function expression with name should map name to the generator function object",
        o25: function () {
            var o36 = function* o61() {
                return o61;
            };
            var o4 = o36().next().value;

            o27.o28(o36, o4, "gfrec should refer to the same object returned by the function expression");
        }
    },
    {
        name: "Yield from try and catch blocks",
        o25: function () {
            var o36 = function* () { try { yield 1; } catch (o62) { }}
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Second next call should have done as true");

            o36 = function* () { try { throw ""; } catch (o62) { yield 1; }}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from catch block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from catch block");

            o36 = function* () { yield 1; try { yield 2; throw 3; } catch (o62) { yield o62; } yield 4; return 5;}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the function body");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the try block");
            o27.o28({ value: 3, done: false }, o37.next(), "Third next call should return 3 from the catch block");
            o27.o28({ value: 4, done: false }, o37.next(), "Forth next call should return 4 from the function body");
            o27.o28({ value: 5, done: true }, o37.next(), "Return statement from function body");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from catch block");

            o36 = function* () { try { throw 2; } catch (o62) { yield 1; throw new o2(); } o27.o63("Control shouldn't reach here"); }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from catch block with throw");
            o27.o47(function() { o37.next() }, o2, "Second next call is expected to throw an exception");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from catch block");
        }
    },
    {
        name: "Yield from try-finally blocks",
        o25: function () {
            var o36 = function* o36() { try { yield 1; } finally { yield 2; return 3; }}
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from finally block");
            o27.o28({ value: 3, done: true }, o37.next(), "Third next call should return 3 from finally block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Forth next call should have done as true");

            o36 = function* () { try { yield 1; throw new o2(); } finally { yield 2; }}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from finally block");
            o27.o47(function() { o37.next() }, o2, "Third next call is expected to throw an exception from try block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Forth next call should have done as true");

            o36 = function* () { try { yield 1; } finally { yield 2; throw new o2(); }}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from finally block");
            o27.o47(function() { o37.next(); }, o2, "Third next call is expected to throw an exception from finally block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Forth next call should have done as true");

            o36 = function* () { try { return 2; } finally { yield 1; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: 2, done: true }, o37.next(), "Second next call should return 2 from finally block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Forth next call should have done as true");
        }
    },
    {
        name: "Nested blocks of try-catch-finally blocks",
        o25: function () {
            var o36 = function* () { yield 1; try { yield 2; throw 3; } catch (o64) { yield o64; } finally { yield 4; } yield 5; }
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the function body");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the try block");
            o27.o28({ value: 3, done: false }, o37.next(), "Third next call should return 3 from the catch block");
            o27.o28({ value: 4, done: false }, o37.next(), "Forth next call should return 4 from the finally block");
            o27.o28({ value: 5, done: false }, o37.next(), "Fifth next call should return 5 from the function body");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from catch block");

            o36 = function* () { yield 1; try { try { yield 2; throw 4; } finally { yield 3; } yield 100; } catch (o64) { yield o64; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the function body");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the inner try block");
            o27.o28({ value: 3, done: false }, o37.next(), "Third next call should return 3 from the inner finally block");
            o27.o28({ value: 4, done: false }, o37.next(), "Forth next call should return 4 from the outer catch block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from catch block");

            o36 = function* () { yield 1; try { try { yield 2; throw new o2(); } finally { yield 3; } yield 100; } finally { yield 4; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the function body");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the inner try block");
            o27.o28({ value: 3, done: false }, o37.next(), "Third next call should return 3 from the inner finally block");
            o27.o28({ value: 4, done: false }, o37.next(), "Forth next call should return 4 from the outer finally block");
            o27.o47(function() { o37.next(); }, o2, "Fifth next call is expected to throw an exception");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from catch block");

            o36 = function* () { yield 1; try { try { yield 2; throw 3; } catch(o62) { yield o62; } throw 4; } catch(o62) { yield o62; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the function body");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the inner try block");
            o27.o28({ value: 3, done: false }, o37.next(), "Third next call should return 3 from the inner catch block");
            o27.o28({ value: 4, done: false }, o37.next(), "Forth next call should return 4 from the outer catch block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from catch block");

            o36 = function* () { yield 1; try { try { yield 2; throw 3; } catch(o62) { yield o62; } throw new o2(); } finally { yield 4; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the function body");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the inner try block");
            o27.o28({ value: 3, done: false }, o37.next(), "Third next call should return 3 from the inner catch block");
            o27.o28({ value: 4, done: false }, o37.next(), "Forth next call should return 4 from the outer finally block");
            o27.o47(function() { o37.next(); }, o2, "Fifth next call is expected throw an exception");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from catch block");

            o36 = function* () { yield 1; try { yield 2; try { yield 3; throw 4; } catch (o62) { yield o62; } yield 5; throw 6; } catch (o62) { yield o62; } return 7;}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the function body");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the outer try block");
            o27.o28({ value: 3, done: false }, o37.next(), "Third next call should return 3 from the inner try block");
            o27.o28({ value: 4, done: false }, o37.next(), "Forth next call should return 4 from the inner catch body");
            o27.o28({ value: 5, done: false }, o37.next(), "Fifth next call should return 5 after the end of inner catch body");
            o27.o28({ value: 6, done: false }, o37.next(), "Sixth next call should return 6 from the outer catch body");
            o27.o28({ value: 7, done: true }, o37.next(), "Return statement from function body");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from catch block");

            o36 = function* () { yield 1; try { yield 2; throw 6; } catch (o62) { try { yield 3; throw 4; } catch (o62) { yield o62; } yield 5; yield o62; } return 7;}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the function body");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the outer try block");
            o27.o28({ value: 3, done: false }, o37.next(), "Third next call should return 3 from the inner try block from the outer catch block");
            o27.o28({ value: 4, done: false }, o37.next(), "Forth next call should return 4 from the inner catch body from the outer catch block");
            o27.o28({ value: 5, done: false }, o37.next(), "Fifth next call should return 5 after the end of inner catch body from the outer catch block");
            o27.o28({ value: 6, done: false }, o37.next(), "Sixth next call should return 6 from the outer catch body");
            o27.o28({ value: 7, done: true }, o37.next(), "Return statement from function body");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from catch block");

            o36 = function* () { var o4 = 1; yield o4; try { o4 = 2; yield o4; o4 = 3; try { yield o4; o4 = 4; throw o4; } catch (o62) { yield o62; o4 = 5; } yield o4; throw (o4 = 6); } catch (o62) { yield o4; } o4 = 7; return o4;}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return the value of x as 1 from the function body");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return the value of x as 2 from the outer try block");
            o27.o28({ value: 3, done: false }, o37.next(), "Third next call should return the value of x as 3 from the inner try block");
            o27.o28({ value: 4, done: false }, o37.next(), "Forth next call should return the value of x as 4 from the inner catch body");
            o27.o28({ value: 5, done: false }, o37.next(), "Fifth next call should return the value of x as 5 after the end of inner catch body");
            o27.o28({ value: 6, done: false }, o37.next(), "Sixth next call should return the value of x as 6 from the outer catch body");
            o27.o28({ value: 7, done: true }, o37.next(), "Return statement from function the value of x as body");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from catch block");

            o36 = function* () { try { try { return 100; } finally { throw 1; } } catch(o64) { yield o64; } yield 2; }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the outer catch block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the outer function body cancelling the return statement");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from the function body");
        }
    },
    {
        name: "Test cases with throw api invoked at different states of a generator function where the exception is thrown out of the method",
        o25: function () {
            var o36 = function* () { yield 1; yield 2; yield 3; return 5; }
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1");
            o27.o47(function() { o37.throw(new o2()); }, o2, "Throw call is expected to throw the exception out as the function is not handling it");
            o27.o28({ value: undefined, done: true }, o37.next(), "Second next call should return undefined as the throw caused a completion of the generator");

            o36 = function* () { yield 1; }
            o37 = o36();
            o27.o47(function() { o37.throw(new o2()); }, o2, "Throw call is expected to throw the exception out as the function is not handling it");
            o27.o28({ value: undefined, done: true }, o37.next(), "Next call after throw should return undefined as the throw caused a completion of the generator");

            o36 = function* () { yield 1; }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1");
            o27.o47(function() { o37.throw(new o2()); }, o2, "Throw call is expected to throw the exception out as the function is not handling it");
            o27.o28({ value: undefined, done: true }, o37.next(), "Next call after throw should return undefined as the throw caused a completion of the generator");

            o36 = function* () { yield 1; yield 2; }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1");
            o27.o47(function() { o37.throw(new o2()); }, o2, "Throw call is expected to throw the exception out as the function is not handling it");
            o27.o47(function() { o37.throw(new o2()); }, o2, "Second Throw call is also expected to throw the exception out as the function is not handling it");
            o27.o28({ value: undefined, done: true }, o37.next(), "Next call after throw should return undefined as the throw caused a completion of the generator");

            o36 = function* () { yield 1; }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1");
            o27.o47(function() { o37.throw(); }, undefined, "Throw call without any args should throw undefined");
            o27.o28({ value: undefined, done: true }, o37.next(), "Next call after throw should return undefined as the throw caused a completion of the generator");
        }
    },
    {
        name: "test cases for throw api where the exception is handled by the generator through catch block",
        o25: function() {
            var o36 = function* () { try { yield 1; throw 100; } catch (o62) { yield o62; }}
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({value: 2, done: false }, o37.throw(2), "After throwing the yield should happen from the catch block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Generator is in completed state");

            o36 = function* () { try { yield 1; throw 2; } catch (o62) { yield o62; yield 100; } o27.o63("Control should never reach here"); }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({value: 2, done: false }, o37.next(), "Second next call should return 2 from the catch block");
            o27.o47(function() { o37.throw(new o2()) }, o2, "The throw happens before the try block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Generator is in completed state");
        }
    },
    {
        name: "Test cases to make sure when a throw occurs the finally blocks are executed as expected",
        o25: function () {
            var o36 = function* () { try { yield 1; } finally { yield 2; } o27.o63("Control should never reach here"); }
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: 2, done: false }, o37.throw(new o2()), "Throw will causes the execution of the finally block");
            o27.o47(function() { o37.next() }, o2, "Second next call should cause the exception to occur after ");
            o27.o28({ value: undefined, done: true }, o37.next(), "Forth next call should have done as true");

            o36 = function* () { try { yield 1; throw 100; } finally { yield 2; }}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: 2, done: false }, o37.throw(new o2()), "Throw causes the execution of the finally block");
            o27.o47(function() { o37.next() }, o2, "Second next call is expected to throw an exception from try block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Forth next call should have done as true");

            o36 = function* () { try { yield 1; } finally { yield 2; throw new o2(); }}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: 2, done: false }, o37.throw(3), "Throw causes the execution of the finally block");
            o27.o47(function() { o37.next(); }, o2, "Second next call is expected to throw an exception from finally block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Forth next call should have done as true");

            o36 = function* () { try { return 2; } finally { yield 1; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o47(function() { o37.throw(new o2()) }, o2, "Throw causes the return to be aborted and the exception to occur");
            o27.o28({ value: undefined, done: true }, o37.next(), "Second next call should have done as true");
        }
    },
    {
        name: "Throw api called when the generator resumes from inside the nested blocks of try-catch-finally",
        o25: function () {
            var o36 = function* () { try { yield 1; } catch (o64) { yield o64; } finally { yield 3; } o27.o63("Control should not reach here"); }
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the try block");
            o27.o28({ value: 2, done: false }, o37.throw(2), "Throw causes the catch block to be executed");
            o27.o28({ value: 3, done: false }, o37.next(), "Second next call should return 3 from the finally block");
            o27.o47(function() { o37.throw(new o2()); }, o2, "Second throw causes a throw from finally and ends the method");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            o36 = function* () { try { try { yield 1; } finally { yield 2; } o27.o63("Control should never reach here"); } catch (o64) { yield o64; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the inner try block");
            o27.o28({ value: 2, done: false }, o37.throw(3), "Throw causes the inner finally block to be executed");
            o27.o28({ value: 3, done: false }, o37.next(), "Second next call should return 3 from the catch block");
            o27.o47(function() { o37.throw(new o2()) }, o2, "Second throw causes an exception from the catch block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            o36 = function* () { try { try { yield 1; throw 100; } finally { yield 2; yield 100; } } finally { yield 3; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the inner try block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the inner finally block");
            o27.o28({ value: 3, done: false }, o37.throw(new o2()), "Exception on the inner finally block causes the execution of the second finally block");
            o27.o47(function() { o37.next() }, o2, "Third next call causes the previous exception to be thrown");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            o36 = function* () { try { try { yield 1; throw 2; } catch(o62) { yield o62; } throw 100; } catch(o62) { yield o62; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the inner try block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the inner catch block");
            o27.o28({ value: 3, done: false }, o37.throw(3), "Throw causes an exception from inner catch block and the outer catch block catches it");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            o36 = function* () { try { try { yield 1; throw 2; } catch(o62) { yield o62; } yield 3; } finally { yield 4; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the inner try block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the inner catch block");
            o27.o28({ value: 3, done: false }, o37.next(), "Third next call should return 3 from the inner catch block");
            o27.o28({ value: 4, done: false }, o37.throw(new o2()), "Throw causes the execution of finally block");
            o27.o47(function() { o37.next(); }, o2, "Forth next call is expected throw an exception");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            var o4 = 1;
            o36 = function* () { try { yield o4; o4 = 2; try { yield o4; } catch (o62) { yield o62; o4 = 4; } yield o4; } catch (o62) { yield o4; } o4 = 6; return o4;}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return the value of x as 1 from the outer try block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return the value of x as 2 from the inner try block");
            o27.o28({ value: 3, done: false }, o37.throw(o4 = 3), "Throw causes the execution of inner catch block");
            o27.o28({ value: 4, done: false }, o37.next(), "Third next call should return the value of x as 4 after the inner catch block");
            o27.o28({ value: 5, done: false }, o37.throw(o4 = 5), "Second throw causes the outer catch block to be executed");
            o27.o28({ value: 6, done: true }, o37.next(), "Forth next call should return the value of x as 6 from the function body");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            o36 = function* () { try { try { return 100; } finally { yield 1; } } catch(o64) { yield o64; } yield 3; }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the finally block");
            o27.o28({ value: 2, done: false }, o37.throw(2), "Throw causes the execution of the catch block");
            o27.o28({ value: 3, done: false }, o37.next(), "Second next call should return 1 from the outer catch block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");
        }
    },
    {
        name: "Test cases with return api invoked at different state of the generator method",
        o25: function () {
            var o36 = function* () { yield 1; o27.o63("Control should never reach here"); }
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First yield call returns 1");
            o27.o28({ value: 2, done: true }, o37.return(2), "Return statement returns the value passed in");
            o27.o28({ value: undefined, done: true }, o37.next(), "Earlier return api invocation completes the method");

            o36 = function* () { o27.o63("Control should never reach here"); }
            o37 = o36();
            o27.o28({ value: 1, done: true }, o37.return(1), "Calling return when function is in the suspended start state will cause the value to be returned");
            o27.o28({ value: undefined, done: true }, o37.next(), "Function is in complete state after the return call")

            o36 = function* () { yield 1; }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First yield call returns 1");
            o27.o28({ value: 2, done: true }, o37.return(2), "Return statement returns the value passed in");
            o27.o28({ value: 3, done: true }, o37.return(3), "Return statement returns the value passed in even if the method is in complete state");
            o27.o28({ value: undefined, done: true }, o37.next(), "Earlier return api invocation completes the method");

            o36 = function* () { for (o12 = 1; o12 < 3; o12 += 2) { yield o12; } o27("Control should never reach here"); }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First yield call returns 1 from the loop");
            o27.o28({ value: 2, done: true }, o37.return(2), "Return statement returns the value passed in");
            o27.o28({ value: undefined, done: true }, o37.next(), "Earlier return api invocation completes the method");

            o36 = function* () { yield 1; return "Control should never reach here"; }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call returns 1");
            o27.o28({ value: 2, done: true }, o37.return(2), "Return statement returns the value passed in");
            o27.o28({ value: undefined, done: true }, o37.next(), "Earlier return api invocation completes the method");

            o36 = function* () { yield 1; }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1");
            o27.o28({ value: undefined, done: true }, o37.return(), "Return call without any args should return undefined");
            o27.o28({ value: undefined, done: true }, o37.next(), "Next call after throw should return undefined as the throw caused a completion of the generator");
        }
    },
    {
        name: "Test cases with return api invoked while the generator resumes inside one of the try-catch-finally block",
        o25: function () {
            var o36 = function* () { try { yield 1; } catch (o62) { }}
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: 2, done: true }, o37.return(2), "Return statement completes the function from try block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Generator is already in completed state");

            o36 = function* () { try { try { yield 1; } finally { yield 2; } } catch (o64) { yield o64; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the inner try block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call returns from the finally block");
            o27.o28({ value: 3, done: true }, o37.return(3), "Return skips the catch block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            o36 = function* () { try { yield 1; o27.o63("Control should never reach here"); } finally { yield 2; return 3; }}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: 2, done: false }, o37.return(100), "Return next call should return 2 from finally block");
            o27.o28({ value: 3, done: true }, o37.next(), "Return call causes return from the finally block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Generator is already in completed state");

            o36 = function* () { try { throw 1; } catch (o64) { yield o64; } finally { yield 2; return 3; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the catch block");
            o27.o28({ value: 2, done: false }, o37.return(100), "Return causes the finally block to execute");
            o27.o28({ value: 3, done: true }, o37.next(), "Second next call should return 3 from the end of finally block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            o36 = function* () { try { throw 1; } catch (o64) { yield o64; } finally { yield 2; throw new o2(); } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the catch block");
            o27.o28({ value: 2, done: false }, o37.return(100), "Return causes the finally block to execute");
            o27.o47(function () { o37.next(); }, o2, "Second next call should throw from finally block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");
        }
    },
    {
        name: "Return api scenarios where the actual return statement is ignored",
        o25: function () {
            var o36 = function* () { try { yield 1; } finally { yield 2; return 100; }}
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from finally block");
            o27.o28({ value: 3, done: true }, o37.return(3), "Return call causes return from the finally block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Generator is already in completed state");

            o36 = function* () { try { try { return 100; } finally { throw 1; } } catch(o64) { yield o64; } o27.o63("Control should never reach here"); }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the outer catch block");
            o27.o28({ value: 2, done: true }, o37.return(2), "Return call completes the generator and the exception will not be visible");
            o27.o28({ value: undefined, done: true }, o37.next(), "Return from the function body");

            o36 = function* () { try { throw 1; } catch (o64) { yield o64; } finally { yield 2; } return 100; }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the catch block");
            o27.o28({ value: 2, done: false }, o37.return(3), "Return causes the finally block to execute");
            o27.o28({ value: 3, done: true }, o37.next(), "Second next call should return 3 from the function body");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            o36 = function* () { var o4 = yield 1; if (o4) { yield o4; return "Control should never reach here"; } else { yield o4; return 4; }}
            var o38 = o36();
            o27.o28({ value: 1, done: false }, o38.next(), "First next call returns 1");
            o27.o28({ value: 2, done: false }, o38.next(2), "Second next call returns e");
            o27.o28({ value: 3, done: true }, o38.return(3), "Return call returns from the if block");
            var o39 = o36();
            o27.o28({ value: 1, done: false }, o39.next(), "First next call returns 1");
            o27.o28({ value: 0, done: false }, o39.next(0), "Second next call returns e");
            o27.o28({ value: 2, done: true }, o39.return(2), "Return call returns from the if block");
        }
    },
    {
        name: "Return api scenarios where thrown exceptions are ignored",
        o25: function () {
            var o36 = function* () { try { try { yield 1; throw 100; } finally { yield 2; } } finally { yield 3; } }
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from the inner try block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from the inner finally block");
            o27.o28({ value: 3, done: false }, o37.return(4), "Return api causes the execution of second finally block");
            o27.o28({ value: 4, done: true }, o37.next(), "Second next call should return 2 from the inner finally block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            o36 = function* () { try { yield 1; throw 100; } finally { yield 2; }}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from try block");
            o27.o28({ value: 2, done: false }, o37.next(), "Second next call should return 2 from finally block");
            o27.o28({ value: 3, done: true }, o37.return(3), "Return causes the exception to be ignored and return normally from the generator");
            o27.o28({ value: undefined, done: true }, o37.next(), "Forth next call should have done as true");

            o36 = function* () { try { throw ""; } catch (o62) { yield 1; }}
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1 from catch block");
            o27.o28({ value: 2, done: true }, o37.return(2), "Return statement completes the function from catch block");
            o27.o28({ value: undefined, done: true }, o37.next(), "Generator is already in completed state");
        }
    },
    {
        name: "Working of next, return and throw apis together",
        o25: function () {
            var o36 = function* () { try { yield 1; } finally { yield 2; o27.o63("Control should not reach here"); } }
            var o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1");
            o27.o28({ value: 2, done: false }, o37.throw(100), "Throw call causes the second yield to be executed");
            o27.o28({ value: 3, done: true }, o37.return(3), "Return call overrides the throw work flow");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            o36 = function* () { var o4 = yield 1; var o65 = yield o4; yield o65; }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1");
            o27.o28({ value: 2, done: false }, o37.next(2), "Second next call assigns a value to x");
            o27.o28({ value: 3, done: true }, o37.return(3), "Return call overrides the throw work flow");
            o27.o28({ value: undefined, done: true }, o37.next(), "Method execution has finished");

            o36 = function* () { try { try { } finally { yield 1; } } finally { yield 2; } }
            o37 = o36();
            o27.o28({ value: 1, done: false }, o37.next(), "First next call should return 1");
            o27.o28({ value: 2, done: false }, o37.throw(100), "Throw call causes the second yield to be executed");
            o27.o28({ value: 3, done: true }, o37.return(3), "Return call overrides the throw work flow");
        }
    },
    {
        name: "Return and throw apis arguments are propagated on yield*",
        o25: function () {
            o4 = 0;
            var o66 = o5(o16, o19, null);
            var o36 = function* () { yield* o66; }
            var o37 = o36();
            o27.o28({value: 1, done: false}, o37.next(), "Get the first yield value from the inner iterator");
            o27.o28({value: undefined, done: true}, o37.return(3), "Returns the value from inner iterator");
            o27.o28(1, o4, "Make sure that iterator's return is executed");

            o4 = 0;
            var o66 = o5(o16, undefined, o19);
            var o36 = function* () { yield* o66; }
            o37 = o36();
            o27.o28({value: 1, done: false}, o37.next(), "Get the first yield value from the inner iterator");
            o27.o28({value:undefined, done: true}, o37.throw(new o2()), "Returns the value from inner iterator");
            o27.o28(1, o4, "Make sure that iterator's throw is executed");
        }
    },
    {
        name: "Return api with generators on yield*",
        o25: function () {
            var o26 = function* () { yield 1; yield 2; }
            var o38 = o26();
            var o29 = function* () { yield* o38; }
            var o39 = o29();
            o27.o28({value: 1, done: false}, o39.next(), "Get the first yield value from the inner generator");
            o27.o28({value: 3, done: true}, o39.return(3), "Returns the passed in value");
            o27.o28({value: undefined, done: true}, o38.next(), "Inner generator is in complete state");
            o27.o28({value: undefined, done: true}, o39.next(), "Outer generator is in complete state");

            o38 = o26();
            o39 = o29();
            function* o30() { yield* o39; }
            var o31 = o30();
            o27.o28({value: 1, done: false}, o31.next(), "Get the first yield value from the inner generator");
            o27.o28({value: 3, done: true}, o31.return(3), "Returns the passed in value");
            o27.o28({value: undefined, done: true}, o38.next(), "Return gets propagated to the lowest level");
            o27.o28({value: undefined, done: true}, o39.next(), "Return gets propagated to the second level also");
            o27.o28({value: undefined, done: true}, o31.next(), "Return completes the first level of generator also");
        }
    },
    {
        name: "Throw api with generators on yield*",
        o25: function () {
            function* o26() { yield 1; yield 2; }
            var o38 = o26();
            function* o29() { yield* o38; }
            var o39 = o29();
            o27.o28({value: 1, done: false}, o39.next(), "Get the first yield value from the inner generator");
            o27.o47(function () { o39.throw(new o2()); }, o2, "Throw comes out of the generator loop as nobody handles it");
            o27.o28({value: undefined, done: true}, o38.next(), "Throw gets propagated to the lowest level");
            o27.o28({value: undefined, done: true}, o39.next(), "Throw gets propagated to the top level also");

            o38 = o26();
            o39 = o29();
            function* o30() { yield* o39; }
            var o31 = o30();
            o27.o28({value: 1, done: false}, o31.next(), "Get the first yield value from the inner generator");
            o27.o47(function () { o31.throw(new o2()); }, o2, "Throw comes out of the generator loop as nobody handles it");
            o27.o28({value: undefined, done: true}, o38.next(), "Throw gets propagated to the lowest level");
            o27.o28({value: undefined, done: true}, o39.next(), "Throw gets propagated to the second level also");
            o27.o28({value: undefined, done: true}, o31.next(), "Throw completes the first level of generator also");
        }
    },
    {
        name: "Exceptions from outer yield* can be caught in the inner generators",
        o25: function () {
            var o26 = function* () {
                try {
                    yield 1;
                    o27.o63("Control should never reach here");
                } catch (o64) {
                    o27.o28(2, o64, "Catch the exception from the outer yield");
                    yield 100;
                }
                yield 3;
            }
            var o38 = o26();
            var o29 = function* () { yield* o38; }
            var o39 = o29();
            var o30 = function* () { yield* o39; }
            var o31 = o30();
            o27.o28({value: 1, done: false}, o31.next(), "Yield 1 from the inner generator");
            o27.o28({value: 100, done: false}, o31.throw(2), "The exception is caught by the inner generator");
            o27.o28({value: 3, done: false}, o31.next(), "The generator is not in complete state yet");
            o27.o28({value: undefined, done: true}, o38.next(), "First generator is in complete state");
            o27.o28({value: undefined, done: true}, o39.next(), "Second generator is in complete state");
            o27.o28({value: undefined, done: true}, o31.next(), "Third generator is in complete state");

            o26 = function* () { yield 1; o27.o63("Control should never reach here"); }
            o38 = o26();
            o29 = function* () {
                try {
                    yield *o38;
                } catch (o64) {
                    o27.o28(2, o64, "Catch the exception here");
                    yield 100;
                }
                yield 3;
            }
            o39 = o29();
            o31 = o30();
            o27.o28({value: 1, done: false}, o31.next(), "Yield 1 from the inner generator");
            o27.o28({value: 100, done: false}, o31.throw(2), "The exception is caught by the second generator");
            o27.o28({value: undefined, done: true}, o38.next(), "First generator does not handle the exception so it is in complete state");
            o27.o28({value: 3, done: false}, o31.next(), "Third generator is not in complete state yet");
            o27.o28({value: undefined, done: true}, o39.next(), "Second generator is in complete state");
            o27.o28({value: undefined, done: true}, o31.next(), "Third generator is in complete state");
        }
    },
    {
        name: "Throw and return invokes all the finally blocks in the yield* stack",
        o25: function () {
            o4 = 0;
            var o26 = function* () {
                try {
                    yield 1;
                    o27.o63("Control should never reach here");
                } finally {
                    o4 += 1;
                }
            }
            var o38 = o26();
            var o29 = function* () {
                try {
                    yield* o38;
                    o27.o63("Control should never reach here");
                } finally {
                    o4 += 3;
                }
            }
            var o39 = o29();
            var o30 = function* () {
                try {
                    yield* o39;
                    o27.o63("Control should never reach here");
                } finally {
                    o4 += 5;
                }
            }
            var o31 = o30();
            o27.o28({value: 1, done: false}, o31.next(), "Yield 1 from the first generator");
            o27.o47(function () { o31.throw(new o2()); }, o2, "The exception thrown comes out as the outer generator does not handle it");
            o27.o28(9, o4, "All finally blocks must be executed");
            o27.o28({value: undefined, done: true}, o38.next(), "First generator should be in complete state");
            o27.o28({value: undefined, done: true}, o39.next(), "Second generator should be in complete state");
            o27.o28({value: undefined, done: true}, o31.next(), "Third generator should be in complete state");

            o4 = 0;
            o38 = o26();
            o39 = o29();
            o31 = o30();
            o27.o28({value: 1, done: false}, o31.next(), "Yield 1 from the first generator");
            o27.o28({value: 2, done: true}, o31.return(2), "Gets the return value as it is passed in");
            o27.o28(9, o4, "All finally blocks must be executed");
            o27.o28({value: undefined, done: true}, o38.next(), "First generator should be in complete state");
            o27.o28({value: undefined, done: true}, o39.next(), "Second generator should be in complete state");
            o27.o28({value: undefined, done: true}, o31.next(), "Third generator should be in complete state");

            o26 = function* () {
                try {
                    yield 1;
                    o27.o63("Control should never reach here");
                } finally {
                    o4 += 1;
                    return 100;
                }
            }
            o4 = 0;
            o38 = o26();
            o29 = function* () {
                try {
                    yield* o38;
                } finally {
                    o4 += 3;
                }
            }
            o39 = o29();
            o30 = function* () {
                try {
                    yield* o39;
                } finally {
                    o4 += 5;
                }
            }
            o31 = o30();
            o27.o28({value: 1, done: false}, o31.next(), "Yield 1 from the first generator");
            o27.o28({value: undefined, done: true}, o31.throw(new o2()), "The exception thrown is replaced with a return completion in the finally block, but it isn't propagated to the outer generator");
            o27.o28(9, o4, "All finally blocks must be executed");
            o27.o28({value: undefined, done: true}, o38.next(), "First generator should be in complete state");
            o27.o28({value: undefined, done: true}, o39.next(), "Second generator should be in complete state");
            o27.o28({value: undefined, done: true}, o31.next(), "Third generator should be in complete state");

            o26 = function* () {
                try {
                    try {
                        yield 1;
                        o27.o63("Control should never reach here");
                    } finally {
                        o4 += 1;
                    }
                } finally {
                    o4 += 2;
                }
            }
            o38= o26();
            o29 = function* () {
                try {
                    try {
                        try {
                            yield* o38;
                            o27.o63("Control should never reach here");
                        } finally {
                            o4 += 4;
                        }
                    } finally {
                        o4 += 8;
                    }
                } finally {
                    o4 += 16;
                }
            }
            o39 = o29();
            o30 = function* () {
                try {
                    yield* o39;
                    o27.o63("Control should never reach here");
                } finally {
                    o4 += 32;
                }
            }
            o31 = o30();
            o4 = 0;
            o27.o28({value: 1, done: false}, o31.next(), "Yield 1 from the first generator");
            o27.o47(function () { o31.throw(new o2()); }, o2, "The exception thrown comes out as the outer generator does not handle it");
            o27.o28(63, o4, "All finally blocks must be executed");
            o27.o28({value: undefined, done: true}, o38.next(), "First generator should be in complete state");
            o27.o28({value: undefined, done: true}, o39.next(), "Second generator should be in complete state");
            o27.o28({value: undefined, done: true}, o31.next(), "Third generator should be in complete state");

            o4 = 0;
            o38 = o26();
            o39 = o29();
            o31 = o30();
            o27.o28({value: 1, done: false}, o31.next(), "Yield 1 from the first generator");
            o27.o28({value: 2, done: true}, o31.return(2), "Gets the return value as it is passed in");
            o27.o28(63, o4, "All finally blocks must be executed");
            o27.o28({value: undefined, done: true}, o38.next(), "First generator should be in complete state");
            o27.o28({value: undefined, done: true}, o39.next(), "Second generator should be in complete state");
            o27.o28({value: undefined, done: true}, o31.next(), "Third generator should be in complete state");
        }
    },
    {
        name: "Exceptions from inner iterator are propagated",
        o25: function () {
            var o26 = function* () {
                try {
                    yield 1;
                    o27.o63("Control should never reach here");
                } catch (o64) {
                    o27.o28(2, o64, "Catch the outer exception here");
                    throw new o2();
                }
            }
            var o38 = o26();
            var o29 = function* () { yield* o38; }
            var o39 = o29();
            o27.o28({value: 1, done: false}, o39.next(), "Yield 1 from the inner generator");
            o27.o47(function () { o39.throw(2); }, o2, "Exception from the inner generator overrides the outer exception");
            o27.o28({value: undefined, done: true}, o38.next(), "First generator should be in complete state");
            o27.o28({value: undefined, done: true}, o39.next(), "Second generator should be in complete state");

            o26 = function* () {
                try {
                    yield 1;
                } finally {
                    throw new o2();
                }
            }
            o38 = o26();
            o39 = o29();
            o27.o28({value: 1, done: false}, o39.next(), "Yield 1 from the inner generator");
            o27.o47(function () { o39.return(100); }, o2, "Exception from the inner generator overrides the return");
            o27.o28({value: undefined, done: true}, o38.next(), "First generator should be in complete state");
            o27.o28({value: undefined, done: true}, o39.next(), "Second generator should be in complete state");

            o38 = o26();
            o39 = o29();
            o27.o28({value: 1, done: false}, o39.next(), "Yield 1 from the inner generator");
            o27.o47(function () { o39.throw(2); }, o2, "Exception from the inner generator overrides the outer exception");
            o27.o28({value: undefined, done: true}, o38.next(), "First generator should be in complete state");
            o27.o28({value: undefined, done: true}, o39.next(), "Second generator should be in complete state");
        }
    },
    {
        name: "Returning from the inner iterator will override the return call",
        o25: function () {
            var o26 = function* () {
                try {
                    yield 1;
                    o27.o63("Control should never reach here");
                } finally {
                    return 2;
                }
            }
            var o38 = o26();
            var o29 = function* () { yield* o38; }
            o38 = o26();
            o39 = o29();
            o27.o28({value: 1, done: false}, o39.next(), "Yield 1 from the inner generator");
            o27.o28({value: 2, done: true}, o39.return(100), "Return 2 from the inner generator overriding the value passed in");

            o26 = function* ()  {
                try {
                    return 100;
                } finally {
                    yield 1;
                }
            }
            o38 = o26();
            o39 = o29();
            o27.o28({value: 1, done: false}, o39.next(), "Yield 1 from the inner generator's finally");
            o27.o28({value: 2, done: true}, o39.return(2), "Return 2 overriding the return value from the inner generator's try body");
        }
    },
    {
        name: "yield* when used with an iterator that has incorrect return, and throw properties",
        o25: function () {
            var o67 = o5(o16);
            var o36 = function* () { yield* o67; }
            var o37 = o36();
            o27.o28({value: 1, done: false}, o37.next(), "Get the first yield value from the inner iterator");
            o27.o28({value: 2, done: true}, o37.return(2), "As the return property is missing the yield* just returns as is");
            o37 = o36();
            o27.o28({value: 1, done: false}, o37.next(), "Get the first yield value from the inner iterator");
            o27.o47(function () { o37.throw(new o2()); }, o48, "As the throw property is missing a TypeError is thrown", "The value of the property 'throw' is not a Function object");

            var o68 = o5(o16, null);
            o36 = function* () { yield* o68; };
            o37 = o36();
            o27.o28({value: 1, done: false}, o37.next(), "Get the first yield value from the inner iterator");
            o27.o28({value: 2, done: true}, o37.return(2), "As the return property is null the yield* just returns as is");

            var o69 = false;
            var o70 = o5(o16, () => { o69 = true; return { done: true }; }, null);
            o36 = function* () { yield* o70; };
            o37 = o36();
            o27.o28({value: 1, done: false}, o37.next(), "Get the first yield value from the inner iterator");
            o27.o47(() => o37.throw(), o48, "As the throw property is null a TypeError is thrown", "The value of the property 'throw' is not a Function object");
            o27.o71(o69, "As the throw property is null, .return() is called");

            var o72 = o5(o16, {}, {});
            o36 = function* () { yield* o72; }
            o37 = o36();
            o27.o28({value: 1, done: false}, o37.next(), "Get the first yield value from the inner iterator");
            o27.o47(function () { o37.return(100); }, o48, "Trying to invoke the return method which is an object not method causes a TypeError", "The value of the property 'return' is not a Function object");
            o37 = o36();
            o27.o28({value: 1, done: false}, o37.next(), "Get the first yield value from the inner iterator");
            o27.o47(function () { o37.throw(100); }, o48, "Trying to invoke the throw method which is an object not method causes a TypeError", "The value of the property 'throw' is not a Function object");

            var o73 = o5(o16, () => { return this.o12; }, () => { return this.o12; });
            o36 = function* () { yield* o73; }
            o37 = o36();
            o27.o28({value: 1, done: false}, o37.next(), "Yield 1 from the iterator");
            o27.o47(function () { o37.return(100); }, o48, "Result of the return method from iterator should be an object", "Object expected");
            o37 = o36();
            o27.o28({value: 1, done: false}, o37.next(), "Yield 1 from the iterator");
            o27.o47(function () { o37.throw(new o2()); }, o48, "Result of the throw method from iterator should be an object", "Object expected");

            var o74 = o5(() => { return {done: false}; }, () => { return {done: true}; }, () => { return {done: true}; });
            o36 = function* () { yield* o74; }
            o37 = o36();
            o37.next();
            o27.o28({value: undefined, done: true}, o37.return(100), "As the value property is missing undefined is returned");
        }
    },
    {
        name: "Yield* with iterator",
        o25: function () {
            var o66 = o5(o16);
            function* o36 () { yield* o66; return 4; }
            var o37 = o36();
            o27.o28({value: 1, done: false}, o37.next(), "Yield 1 from the iterator");
            o27.o28({value: 2, done: false}, o37.next(), "Yield 2 from the iterator");
            o27.o28({value: 4, done: true}, o37.next(), "Returned 4 from the generator");
        }
    },
    {
        name: "yield* doesn't unwrap and rewrap iterator result if the done property is falsy",
        o25: function () {
            var o11 = { o75: 7 };
            var o36 = function* () {
                yield* o5(() => o11);
            };
            var o37 = o36();
            o27.o71(o37.next() === o11, "yield* doesn't unwrap and rewrap iterator results if the 'done' property is falsy");
            o27.o28({ o75: 7 }, o37.next(), "yield* doesn't modify the iterator result");
        }
    },
    {
        name: "Yield* with multiple levels of generators",
        o25: function () {
            function* o26 () { yield 1; return 100; }
            function* o29 () { yield* o26(); yield* o26(); }
            var o37 = o29();
            o27.o28({value: 1, done: false}, o37.next(), "Yield 1 from the first inner generator");
            o27.o28({value: 1, done: false}, o37.next(), "Yield 1 from the second inner generator");
            o27.o28({value: undefined, done: true}, o37.next(), "Generator is in complete state");
        }
    },
    {
        name: "yield* when used with iterators that have incorrect next methods",
        o25: function () {
            function o76() {}
            var o36 = function* () { yield* o76; };
            o27.o47(function () { o36().next(); }, o48, "yield* throws TypeError if its operand does not have the [Symbol.iterator] method", "Object doesn't support property or method 'Symbol.iterator'");

            var o77 = o5();
            o36 = function* () { yield* o77; };
            o27.o47(function () { o36().next(); }, o48, "yield* throws TypeError if its operand does not have the next method", "Object doesn't support property or method 'next'");

            var o78 = o5({});
            o36 = function* () { yield* o78; };
            o27.o47(function () { o36().next(); }, o48, "yield* throws TypeError if the next property is not a function", "Function expected");

            var o78 = o5(function () { return 100; });
            o36 = function* () { yield* o78; };
            o27.o47(function () { o36().next(); }, o48, "yield* throws TypeError if the value returned by next method is not an object", "Object expected");
        }
    },
    {
        name: "yield* forwards .next() parameter to iterable's .next() call",
        o25: function () {
            function* o79() {
                o27.o28(yield, "a");
            }
            function* o80() {
                yield* o79();
            }

            var o81 = o80();
            o81.next();
            o81.next("a");
        }
    },
    {
        name: ".throw() forwarded by yield* is intercepted by the catch and finally blocks",
        o25: function () {
            const o82 = new o2();
            let o83;

            let o84 = false;
            function* o85() {
                try {
                    yield 1;
                    o27.o63("Control should never reach here");
                } finally {
                    o84 = true;
                }
            }

            function* o86() {
                try {
                    yield 2;
                    o27.o63("Control should never reach here");
                } catch (o64) {
                    o27.o28(o64, o82);
                    yield 3;
                }
            }

            function* o87() {
                try {
                    yield 4;
                    o27.o63("Control should never reach here");
                } finally {
                    yield 5;
                }
            }

            function* o88() {
                try {
                    yield 6;
                    o27.o63("Control should never reach here");
                } catch (o64) {
                    return 101;
                }
            }

            function* o89() {
                try {
                    yield 7;
                    o27.o63("Control should never reach here");
                } finally {
                    return 102;
                }
            }

            function* o90(o85) {
                o83 = yield* o85();
                yield 10;
            }

            let o81 = o90(o85);
            o27.o28({ value: 1, done: false }, o81.next(), "yield 1 from gen");
            o27.o47(() => o81.throw(o82), o2, ".throw() isn't caught");
            o27.o71(o84, ".throw() is forwarded to gen");
            o27.o28({ value: undefined, done: true }, o81.next(), "Generator is in complete state");

            o81 = o90(o86);
            o27.o28({ value: 2, done: false }, o81.next(), "yield 2 from genWhichYieldsInsideCatch");
            o27.o28({ value: 3, done: false }, o81.throw(o82), "yield 3 from genWhichYieldsInsideCatch (.throw() is caught)");
            o27.o28({ value: 10, done: false }, o81.next(), "yield 10 from wrap");
            o27.o28({ value: undefined, done: true }, o81.next(), "Generator is in complete state");

            o81 = o90(o87);
            o27.o28({ value: 4, done: false }, o81.next(), "yield 4 from genWhichYieldsInsideFinally");
            o27.o28({ value: 5, done: false }, o81.throw(o82), "yield 5 from genWhichYieldsInsideFinally (.throw() is 'paused' by the finally block)");
            o27.o47(() => o81.next(), o2, "The exception is thrown after the resumption of the finally block");
            o27.o28({ value: undefined, done: true }, o81.next(), "Generator is in complete state");

            o81 = o90(o88);
            o27.o28({ value: 6, done: false }, o81.next(), "yield 6 from genWhichReturnsInsideCatch");
            o27.o28({ value: 10, done: false }, o81.throw(new o2()), "The exception is overwritten inside the catch block");
            o27.o28(o83, 101, "The value returned from the catch block is used as the yield*'s value");
            o27.o28({ value: undefined, done: true }, o81.next(), "Generator is in complete state");

            o81 = o90(o89);
            o27.o28({ value: 7, done: false }, o81.next(), "yield 7 from genWhichReturnsInsideFinally");
            o27.o28({ value: 10, done: false }, o81.throw(new o2()), "The exception is overwritten inside the finally block");
            o27.o28(o83, 102, "The value returned from the catch block is used as the yield*'s value");
            o27.o28({ value: undefined, done: true }, o81.next(), "Generator is in complete state");
        }
    },
    {
        name: ".return() forwarded by yield* is intercepted by the finally block",
        o25: function () {
            let o83;

            let o91 = false;
            function* o85() {
                try {
                    yield 1;
                    o27.o63("Control should never reach here");
                } finally {
                    o91 = true;
                }
            }

            function* o87() {
                try {
                    yield 4;
                    o27.o63("Control should never reach here");
                } finally {
                    yield 5;
                }
            }

            function* o89() {
                try {
                    yield 6;
                    o27.o63("Control should never reach here");
                } finally {
                    return 101;
                }
            }

            function* o90(o85) {
                o92 = yield* o85();
                yield 10;
            }

            let o81 = o90(o85);
            o27.o28({ value: 1, done: false }, o81.next(), "yield 1 from gen");
            o27.o28({ value: 100, done: true }, o81.return(100), ".return() sets the generator's state to completed")
            o27.o71(o91, ".return() is forwarded to gen");
            o27.o28({ value: undefined, done: true }, o81.next(), "The generator is in complete state");

            o81 = o90(o87);
            o27.o28({ value: 4, done: false }, o81.next(), "yield 4 from genWhichYieldsInsideFinally");
            o27.o28({ value: 5, done: false }, o81.return(100), "yield 5 from genWhichYieldsInsideFinally (.return() is overwritten by the yield inside the finally block)");
            o27.o28({ value: 10, done: false }, o81.next(), "yield 10 from wrap");
            o27.o28({ value: undefined, done: true }, o81.next(), "Generator is in complete state");

            o81 = o90(o89);
            o27.o28({ value: 6, done: false }, o81.next(), "yield 6 from genWhichReturnsInsideFinally");
            o27.o28({ value: 101, done: true }, o81.return(100), "The returned value is overwritten inside the finally block");
            o27.o28({ value: undefined, done: true }, o81.next(), "Generator is in complete state");

        }
    },
    {
        name: "Testing 'super' reference inside a generator function",
        o25: function () {
            class o93 {
                o94 () { return 0; }
                o95 () { return "BASE"; }
            }

            class o96 extends o93 {
                *o36 () {
                    yield super.o94();
                    return super.o95();
                }
            };

            var o53 = new o96();
            var o37 = o53.o36();

            o27.o28(0, o37.next().value, "Generator function should be able to yield with 'super' reference");
            o27.o28("BASE", o37.next().value, "Generator function should be able to return with 'super' reference");
        }
    },
    {
        name: "Cross-site scenarios for generators",
        o25: function () {
            if (o0 && o0.o97) {
                var global = o0.o97("var obj = { *gf() { yield this.x; return this.y; }, x : 10, y: 11 }; var g = obj.gf();", "samethread");
                var o98 = global.o37.next();
                o27.o28(10, o98.value, "Next call on the generator object created on a different context should yield fine on this thread");
                o27.o28(false, o98.done, "The generator object is not closed yet");

                o98 = global.o37.next();
                o27.o28(11, o98.value, "Next call on the generator object created on a different context should return fine on this thread");
                o27.o28(true, o98.done, "Generator object is in closed state");

                global = o0.o97("var obj = { *gf() { yield this.x; return this.y; }, x : 10, y: 11 }; var g = obj.gf();", "samethread");
                global.o37.next();
                o98 = global.o37.return(100);
                o27.o28(100, o98.value, "Return call on the generator object created on a different context should return fine on this thread");
                o27.o28(true, o98.done, "Generator object is closed by the return call");

                global = o0.o97("var obj = { *gf() { try { yield this.x; } catch (e) { throw { value : this.x } } }, x : 200 }; var g = obj.gf();", "samethread");
                global.o37.next();
                try {
                    global.o37.throw(100);
                } catch (o64) {
                    o27.o28(200, o64.value, "Throw call on the generator object created on a different context should should propagate the inner throw result");
                }
            }
        }
    },
    {
        name: "This object validation for strict and non-strict generator functions",
        o25: function () {
            var o99 = null;
            function* o100() { o99 = this; };
            o100().next();
            o27.o28(global, o99, "In non-strict mode generators should use the global this");

            o99 = null;
            function* o101() { 'use strict'; o99 = this; };
            o101().next();
            o27.o28(undefined, o99, "In strict mode generators should follow the strict mode semantics and use undefined");
        }
    },
    {
        name: "Iterator protocol violation scenarios",
        o25: function () {
            var o102 = false;
            var o38, o39;
            function* o26() { yield 1; }
            function* o29() { yield *o38; };


            o38 = o26();
            o38.throw = undefined,
            o38.return = function() { o102 = true; return {done: true}; }
            o39 = o29();
            o39.next();
            o27.o47(function() { o39['throw'](new o2()) }, o48, "As the throw property is missing a TypeError is thrown", "The value of the property 'throw' is not a Function object");
            o27.o71(o102, "When throw method is not defined on the iterator IteratorClose is called");

            o38 = o26();
            o38.throw = undefined,
            o38.return = function() {  throw new o2(); }
            o39 = o29();
            o39.next();
            o27.o47(function () { o39['throw']({value : 1}); }, o2, "Inner exceptions from IteratorClose are propagated");

            o38 = o26();
            o38.throw = undefined,
            o38.return = function() { return 10; }
            o39 = o29();
            o39.next();
            o27.o47(function () { o39['throw']({value : 1}); }, o48, "A TypeError is thrown if the inner result of iterator close is not an object", "Object expected");
        }
    },
    {
        name: "Generator method body using super property",
        o25: function () {
            var o11 = {
                *o54() {  return super.toString; }
            };

            o11.toString = null;

            o27.o28(Object.prototype.toString, o11.o54().next().value);
        }
    },
    {
        name: "Generator method body using super property as default argument",
        o25: function () {
            var o11 = {
                *o54(o40 = super.toString) {  return o40; }
            };

            o11.toString = null;

            o27.o28(Object.prototype.toString, o11.o54().next().value);
        }
    },
    {
        name: "super method calls in object literal concise generator",
        o25: function () {
            var o104 = {
                o105() {  return 42; }
            };

            var o106 = {
                *o37() {  yield super.o105();  }
            };

            Object.setPrototypeOf(o106, o104);

            o27.o28(42, o106.o37().next().value,
                "The value of `object.g().next().value` is `42`, after executing `Object.setPrototypeOf(object, proto);`"
            );
        }
    },
    // TODO: Test yield in expression positions of control flow constructs, e.g. initializer, condition, and increment of a for loop
];

o108.o109(o23, { o110: o0.o111[0] != "summary" });
