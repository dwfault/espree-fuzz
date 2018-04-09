//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Iterators for-of loop tests -- verifies the for-of loop behavior

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = {
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {
                    done: true,
                    value: 0
                };
            }
        };
    }
};

var o3 = {
    [Symbol.iterator]: function () {
        return {
            o4: 0,
            next: function () {
                return {
                    done: this.o4 == 3,
                    value: this.o4++
                };
            }
        };
    }
};

var o5 = {
    [Symbol.iterator]: function () {
        return {
            o4: 0,
            next: function () {
                return {
                    done: false,
                    value: this.o4++
                };
            }
        };
    }
};

var o6 = [
    {
        name: "for (var ... form declares a variable at function scope and assigns it every iteration",
        o7: function () {
            var o4 = 0;
            var o8 = [];
            o9.o10(undefined, o11, "x is available before for-of loop and is initialized with undefined");

            for (var o11 of o3) {
                o8.push(o11);
                o9.o10(o4++, o11, "x is available within the for-of loop and has a new value each iteration");
            }

            o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");

            o9.o10(2, o11, "x is still available after for-of loop and has the last iteration's value");
        }
    },
    {
        name: "for (let ... form declares a variable at loop scope and assigns it every iteration",
        o7: function () {
            var o4 = 0;
            var o8 = [];
            o9.o12(function () { eval('x'); }, o13, "x is not available before for-of loop", "'x' is undefined");

            for (let o11 of o3) {
                o8.push(o11);
                o9.o10(o4++, o11, "x is available within the for-of loop and has a new value each iteration");

                o11 = 5;
                o9.o10(5, o11, "x can be reassigned; it is not const");
            }

            o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");

            o9.o12(function () { eval('x'); }, o13, "x is not available after for-of loop", "'x' is undefined");
        }
    },
    {
        name: "for (let/const x of x) is a use before declaration error",
        o7: function () {
            o9.o12(function () { eval("for (let x of x) { }"); }, o13, "for (let x of x) is a use before declaration error", "Use before declaration");
            // TODO: for-in and for-of incorrectly give an uninitialized const error when const is used to declare the variable
            //assert.throws(function () { eval("for (const x of x) { }"); }, ReferenceError, "for (const x of x) is a use before declaration error", "Use before declaration");
        }
    },
    {
        name: "for (const ... form declares a variable at loop scope and assigns it every iteration, disallows assignments to it",
        o7: function () {
            // TODO: for-in and for-of incorrectly give an uninitialized const error when const is used to declare the variable
            /*
            var i = 0;
            var a = [];
            assert.throws(function () { eval('x'); }, ReferenceError, "x is not available before for-of loop", "'x' is undefined");

            for (const x of simpleIterator) {
                a.push(x);
                assert.areEqual(i++, x, "x is available within the for-of loop and has a new value each iteration");

                assert.throws(function () { eval("x = 5"); }, ReferenceError, "x cannot be reassigned because it is const", "Assignment to const");
            }

            assert.areEqual([0, 1, 2], a, "verify the correct number of iterations occurred");

            assert.throws(function () { eval('x'); }, ReferenceError, "x is not available after for-of loop", "'x' is undefined");
            */
       }
    },
    {
        name: "for (<identifer> ... form does not declare a variable and assigns to <identifier> every iteration",
        o7: function () {
            var o4 = 0;
            var o8 = [];
            var o11;

            for (o11 of o3) {
                o8.push(o11);
                o9.o10(o4++, o11, "x is available within the for-of loop and has a new value each iteration");
            }

            o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");

            o9.o10(2, o11, "x has the last iteration's value");


            o9.o12(
                function () {
                    "use strict";
                    for (o14 of o3) { }
                },
                o13,
                "for (<identifier> ... form does not declare a new variable and thus in strict mode throws if the identifier is not already defined",
                "Variable undefined in strict mode");
        }
    },
    {
        name: "for (<expr> ... form does not declare a variable and evaluates and assigns to <expr> every iteration",
        o7: function () {
            var o4 = 0;
            var o8 = [];
            var o15 = 0;
            var o16 = {
                o4: 0,
                o17: function () {
                    o15++;
                    return this;
                }
            };

            for (o16.o17().o4 of o3) {
                o8.push(o16.o4);
                o9.o10(o4++, o16.o4, "o.i is assigned each value of the iterator");
            }

            o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");
            o9.o10(3, o15, "verify that o.f() was called once for each iteration");
            o9.o10(2, o16.o4, "o.i still has the last value of the last iteration");
        }
    },
    {
        name: "for-of does not execute body for iterator that is initially complete",
        o7: function () {
            for (let o11 of o2) {
                o9.o18("loop body should not execute");
            }
        }
    },
    {
        name: "infinite iterators are no different, break and continue work correctly",
        o7: function () {
            var o19 = 0;
            var o20 = 0;

            for (var o11 of o5) {
                o19++;

                if (o11 == 3 || o11 == 5 || o11 == 7)
                    continue;

                o20++;

                if (o11 == 9)
                    break;
            }

            o9.o10(10, o19, "loop iterated 10 times");
            o9.o10(7, o20, "loop continued 3 times");
            o9.o10(9, o11, "x has last iteration's value");
        }
    },
    {
        name: "for-of does not execute loop body for null and undefined collections (i.e. before trying to call @@iterator)",
        o7: function () {
            for (let o11 of null) {
                o9.o18("loop body should not execute for null iterator");
            }

            for (let o11 of undefined) {
                o9.o18("loop body should not execute for undefined iterator");
            }
        }
    },
    {
        name: "for-of throws TypeError for non-object iterator values",
        o7: function () {
            var o21 = { [Symbol.iterator]: function () { return null; } };
            var o22 = { [Symbol.iterator]: function () { return undefined; } };
            var o23 = { [Symbol.iterator]: function () { return true; } };
            var o24 = { [Symbol.iterator]: function () { return 10; } };
            var o25 = { [Symbol.iterator]: function () { return "hello"; } };
            var o26 = { [Symbol.iterator]: function () { return Symbol(); } };

            o9.o12(function () { for (let o11 of o21) { } }, o27, "for-of throws when @@iterator returns non-object; null", "Object expected");
            o9.o12(function () { for (let o11 of o22) { } }, o27, "for-of throws when @@iterator returns non-object; undefined", "Object expected");
            o9.o12(function () { for (let o11 of o23) { } }, o27, "for-of throws when @@iterator returns non-object; boolean", "Object expected");
            o9.o12(function () { for (let o11 of o24) { } }, o27, "for-of throws when @@iterator returns non-object; number", "Object expected");
            o9.o12(function () { for (let o11 of o25) { } }, o27, "for-of throws when @@iterator returns non-object; string", "Object expected");
            o9.o12(function () { for (let o11 of o26) { } }, o27, "for-of throws when @@iterator returns non-object; symbol", "Object expected");
        }
    },
    {
        name: "for-of throws TypeError for collection expressions that do not have an @@iterator method",
        o7: function () {
            o9.o12(function () { for (let o11 of { }) { } }, o27, "for-of throws when the collection object does not have an @@iterator property", "Object doesn't support property or method 'Symbol.iterator'");
            o9.o12(function () { for (let o11 of { [Symbol.iterator]: { } }) { } }, o27, "for-of throws when the collection object has an @@iterator property but the value is not a function", "Function expected");
            o9.o12(function () { for (let o11 of 0) { } }, o27, "for-of throws when the collection object does not have an @@iterator property; number literal", "Object doesn't support property or method 'Symbol.iterator'");
        }
    },
    {
        name: "for-of behavior when the special named properties are missing or iterator result is not an object",
        o7: function () {
            var o28 = { [Symbol.iterator]: function () { return { }; } };
            var o29 = { [Symbol.iterator]: function () { return { next: function () { return undefined; } }; } };
            var o30 = { [Symbol.iterator]: function () { return { next: function () { return { }; } }; } };
            var o31 = { [Symbol.iterator]: function () { return { next: function () { return { done: false }; } }; } };

            o9.o12(function () { for (let o11 of o28) { } }, o27, "for-of throws TypeError if the iterator object does not have a next method", "Object doesn't support property or method 'next'");
            o9.o12(function () { for (let o11 of o29) { } }, o27, "for-of throws TypeError if the iterator object whose next method does not return an object", "Object expected");

            for (let o11 of o30) {
                // infinite loop because no done property produces undefined which ToBooleans to false
                o9.o10(undefined, o11, "x gets undefined because value is not defined on the iterator result");
                break;
            }

            for (let o11 of o31) {
                o9.o10(undefined, o11, "x gets undefined because value is not defined on the iterator result");
                break;
            }
        }
    },
    {
        name: "for-of parsing with interesting combinations of the pseudo keywords 'let' and 'of'",
        o7: function () {
            var o8 = [];
            var o4 = 0;
            for (let of of o3) {
                o8.push(of);
                o9.o10(o4++, of, "of is the local loop variable of a for-of loop");
            }
            o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");

            o8 = [];
            o4 = 0;
            for (let of in { o32: 0, o33: 0, o34: 0 }) {
                o8.push(of);
                o9.o10('a' + o4++, of, "of is the local loop variable of a for-in loop");
            }
            o9.o10(['a0', 'a1', 'a2'], o8, "verify the correct number of iterations occurred");

            // These two cases would be ambiguous if the spec allowed 'let' to start
            // the LHSExpression of the LHSExpression form of for-of loops
            //
            // for (let of of [0]) { }
            // for (let of of ([0])) { }
            o8 = [];
            o4 = 0;
            for (let of of [0]) {
                o8.push(of);
                o9.o10(o4++, of, "of is the local loop variable of a for-of loop with array literal object expression");
            }
            o9.o10([0], o8, "verify the correct number of iterations occurred");

            o8 = [];
            o4 = 0;
            for (let of of ([0])) {
                o8.push(of);
                o9.o10(o4++, of, "of is the local loop variable of a for-of loop with parenthesized array literal object expression");
            }
            o9.o10([0], o8, "verify the correct number of iterations occurred");


            // Make sure for loop still works using let to declare of variable
            for (let of; false; ) { }
            for (let of, o35; false; ) { }
            for (let of = 10; false; ) { }

            // 'let' cannot be used as an identifier name at the beginning of the LHSExpression of a for-of
            // and thus 'for (let of' always parses as a let declaration of a variable named 'of'.
            o9.o12(function () { eval('for (let of simpleIterator) { }'); }, o36, "'for (let of' is always parsed such that it is a let declaration of a variable named 'of'");
            o9.o12(function () { eval('for (let of of) { }'); }, o36, "'for (let of' is always parsed such that it is a let declaration of a variable named 'of'");

            // Should still be able to use let identifier in LHSExpression via parentheses
            o8 = [];
            o4 = 0;
            var o37;
            for ((o37) of o3) {
                o8.push(o37);
                o9.o10(o4++, o37, "let is the loop variable of a for-of loop, declared outside the for-of loop");
            }
            o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");
            o9.o10(2, o37, "let is equal to the last iteration value");
        }
    },
    {
        name: "break and continue work correctly with nested and labels",
        o7: function () {
            var o19 = 0;
            var o20 = 0;

            while (true) {
                for (var o11 of o5) {
                    o19++;

                    if (o11 == 3 || o11 == 5 || o11 == 7)
                        continue;

                    o20++;

                    if (o11 == 9)
                        break;
                }

                // non-trivialize the while(true) loop's break
                // to avoid optimizing away the while loop.
                if (o5)
                    break;
            }

            o9.o10(10, o19, "loop iterated 10 times");
            o9.o10(7, o20, "loop continued 3 times");
            o9.o10(9, o11, "x has last iteration's value");

            var o38 = 0;
            var o39 = 0;

            outer: for (var o11 of o5) {
                o38++;

                for (var o14 of o5) {
                    o39++;

                    if (o11 + o14 === 0)
                        break;

                    if (o11 + o14 === 1)
                        continue;

                    if (o14 === 1)
                        continue o40;

                    if (o11 === 2)
                        break o40outer: for (var x of infiniteIterator) {
                outerCount++;

                for (var y of infiniteIterator) {
                    innerCount++;

                    if (x + y === 0)
                        break;

                    if (x + y === 1)
                        continue;

                    if (y === 1)
                        continue outer;

                    if (x === 2)
                        break outero40: for (var x of infiniteIterator) {
                outerCount++;

                for (var y of infiniteIterator) {
                    innerCount++;

                    if (x + y === 0)
                        break;

                    if (x + y === 1)
                        continue;

                    if (y === 1)
                        continue outer;

                    if (x === 2)
                        break outer;
                }
            }

            o9.o10(3, o38, "breaks and continues lead outer loop to execute 3 times");
            o9.o10(4, o39, "breaks and continues lead inner loop to execute 4 times");

            var o41 = 0;
            var o42 = 0;
            var o43 = 0;
            do {
                o41++;
                for (var o11 of o5) {
                    o42++;
                    for (var o4 = 0; true; o4++) {
                        o43++;
                        break;
                    }
                    break;
                }
                break;
            } while (true);

            o9.o10(1, o41, "do-while executes once");
            o9.o10(1, o42, "for-of executes once");
            o9.o10(1, o43, "for executes once");
        }
    },
    {
        name: "expect AssignmentExpression after 'of'",
        o7: function () {
            o9.o12(() => eval("for (let x of [], []);"), o36, "'for ( ForDeclaration of Expression )' is invalid", "Expected ')'")
            o9.o12(() => eval("for (var x of [], []);"), o36, "'for ( var ForBinding of Expression )' is invalid", "Expected ')'")
            o9.o12(() => eval("let x; for (x of [], []);"), o36, "'for ( LeftHandSideExpression of Expression )' is invalid", "Expected ')'")
        }
    },
];

o44.o45(o6, { o46: o0.o47[0] != "summary" });
