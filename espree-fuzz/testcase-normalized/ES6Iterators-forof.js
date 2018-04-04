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

var o8 = {
    [Symbol.iterator]: function () {
        return {
            o9: 0,
            next: function () {
                return {
                    done: this.o9 == 3,
                    value: this.o9++
                };
            }
        };
    }
};

var o10 = {
    [Symbol.iterator]: function () {
        return {
            o9: 0,
            next: function () {
                return {
                    done: false,
                    value: this.o9++
                };
            }
        };
    }
};

var o11 = [
    {
        name: "for (var ... form declares a variable at function scope and assigns it every iteration",
        o13: function () {
            var o9 = 0;
            var o14 = [];
            o15.o16(undefined, o18, "x is available before for-of loop and is initialized with undefined");

            for (var o18 of o8) {
                o14.push(o18);
                o15.o16(o9++, o18, "x is available within the for-of loop and has a new value each iteration");
            }

            o15.o16([0, 1, 2], o14, "verify the correct number of iterations occurred");

            o15.o16(2, o18, "x is still available after for-of loop and has the last iteration's value");
        }
    },
    {
        name: "for (let ... form declares a variable at loop scope and assigns it every iteration",
        o13: function () {
            var o9 = 0;
            var o14 = [];
            o15.o20(function () { eval('x'); }, o22, "x is not available before for-of loop", "'x' is undefined");

            for (let o18 of o8) {
                o14.push(o18);
                o15.o16(o9++, o18, "x is available within the for-of loop and has a new value each iteration");

                o18 = 5;
                o15.o16(5, o18, "x can be reassigned; it is not const");
            }

            o15.o16([0, 1, 2], o14, "verify the correct number of iterations occurred");

            o15.o20(function () { eval('x'); }, o22, "x is not available after for-of loop", "'x' is undefined");
        }
    },
    {
        name: "for (let/const x of x) is a use before declaration error",
        o13: function () {
            o15.o20(function () { eval("for (let x of x) { }"); }, o22, "for (let x of x) is a use before declaration error", "Use before declaration");
            // TODO: for-in and for-of incorrectly give an uninitialized const error when const is used to declare the variable
            //assert.throws(function () { eval("for (const x of x) { }"); }, ReferenceError, "for (const x of x) is a use before declaration error", "Use before declaration");
        }
    },
    {
        name: "for (const ... form declares a variable at loop scope and assigns it every iteration, disallows assignments to it",
        o13: function () {
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
        o13: function () {
            var o9 = 0;
            var o14 = [];
            var o18;

            for (o18 of o8) {
                o14.push(o18);
                o15.o16(o9++, o18, "x is available within the for-of loop and has a new value each iteration");
            }

            o15.o16([0, 1, 2], o14, "verify the correct number of iterations occurred");

            o15.o16(2, o18, "x has the last iteration's value");


            o15.o20(
                function () {
                    "use strict";
                    for (o23 of o8) { }
                },
                o22,
                "for (<identifier> ... form does not declare a new variable and thus in strict mode throws if the identifier is not already defined",
                "Variable undefined in strict mode");
        }
    },
    {
        name: "for (<expr> ... form does not declare a variable and evaluates and assigns to <expr> every iteration",
        o13: function () {
            var o9 = 0;
            var o14 = [];
            var o24 = 0;
            var o25 = {
                o9: 0,
                o26: function () {
                    o24++;
                    return this;
                }
            };

            for (o25.o26().o9 of o8) {
                o14.push(o25.o9);
                o15.o16(o9++, o25.o9, "o.i is assigned each value of the iterator");
            }

            o15.o16([0, 1, 2], o14, "verify the correct number of iterations occurred");
            o15.o16(3, o24, "verify that o.f() was called once for each iteration");
            o15.o16(2, o25.o9, "o.i still has the last value of the last iteration");
        }
    },
    {
        name: "for-of does not execute body for iterator that is initially complete",
        o13: function () {
            for (let o18 of o2) {
                o15.o27("loop body should not execute");
            }
        }
    },
    {
        name: "infinite iterators are no different, break and continue work correctly",
        o13: function () {
            var o28 = 0;
            var o29 = 0;

            for (var o18 of o10) {
                o28++;

                if (o18 == 3 || o18 == 5 || o18 == 7)
                    continue;

                o29++;

                if (o18 == 9)
                    break;
            }

            o15.o16(10, o28, "loop iterated 10 times");
            o15.o16(7, o29, "loop continued 3 times");
            o15.o16(9, o18, "x has last iteration's value");
        }
    },
    {
        name: "for-of does not execute loop body for null and undefined collections (i.e. before trying to call @@iterator)",
        o13: function () {
            for (let o18 of null) {
                o15.o27("loop body should not execute for null iterator");
            }

            for (let o18 of undefined) {
                o15.o27("loop body should not execute for undefined iterator");
            }
        }
    },
    {
        name: "for-of throws TypeError for non-object iterator values",
        o13: function () {
            var o30 = { [Symbol.iterator]: function () { return null; } };
            var o31 = { [Symbol.iterator]: function () { return undefined; } };
            var o32 = { [Symbol.iterator]: function () { return true; } };
            var o33 = { [Symbol.iterator]: function () { return 10; } };
            var o34 = { [Symbol.iterator]: function () { return "hello"; } };
            var o35 = { [Symbol.iterator]: function () { return Symbol(); } };

            o15.o20(function () { for (let o18 of o30) { } }, o36, "for-of throws when @@iterator returns non-object; null", "Object expected");
            o15.o20(function () { for (let o18 of o31) { } }, o36, "for-of throws when @@iterator returns non-object; undefined", "Object expected");
            o15.o20(function () { for (let o18 of o32) { } }, o36, "for-of throws when @@iterator returns non-object; boolean", "Object expected");
            o15.o20(function () { for (let o18 of o33) { } }, o36, "for-of throws when @@iterator returns non-object; number", "Object expected");
            o15.o20(function () { for (let o18 of o34) { } }, o36, "for-of throws when @@iterator returns non-object; string", "Object expected");
            o15.o20(function () { for (let o18 of o35) { } }, o36, "for-of throws when @@iterator returns non-object; symbol", "Object expected");
        }
    },
    {
        name: "for-of throws TypeError for collection expressions that do not have an @@iterator method",
        o13: function () {
            o15.o20(function () { for (let o18 of { }) { } }, o36, "for-of throws when the collection object does not have an @@iterator property", "Object doesn't support property or method 'Symbol.iterator'");
            o15.o20(function () { for (let o18 of { [Symbol.iterator]: { } }) { } }, o36, "for-of throws when the collection object has an @@iterator property but the value is not a function", "Function expected");
            o15.o20(function () { for (let o18 of 0) { } }, o36, "for-of throws when the collection object does not have an @@iterator property; number literal", "Object doesn't support property or method 'Symbol.iterator'");
        }
    },
    {
        name: "for-of behavior when the special named properties are missing or iterator result is not an object",
        o13: function () {
            var o37 = { [Symbol.iterator]: function () { return { }; } };
            var o38 = { [Symbol.iterator]: function () { return { next: function () { return undefined; } }; } };
            var o39 = { [Symbol.iterator]: function () { return { next: function () { return { }; } }; } };
            var o40 = { [Symbol.iterator]: function () { return { next: function () { return { done: false }; } }; } };

            o15.o20(function () { for (let o18 of o37) { } }, o36, "for-of throws TypeError if the iterator object does not have a next method", "Object doesn't support property or method 'next'");
            o15.o20(function () { for (let o18 of o38) { } }, o36, "for-of throws TypeError if the iterator object whose next method does not return an object", "Object expected");

            for (let o18 of o39) {
                // infinite loop because no done property produces undefined which ToBooleans to false
                o15.o16(undefined, o18, "x gets undefined because value is not defined on the iterator result");
                break;
            }

            for (let o18 of o40) {
                o15.o16(undefined, o18, "x gets undefined because value is not defined on the iterator result");
                break;
            }
        }
    },
    {
        name: "for-of parsing with interesting combinations of the pseudo keywords 'let' and 'of'",
        o13: function () {
            var o14 = [];
            var o9 = 0;
            for (let of of o8) {
                o14.push(of);
                o15.o16(o9++, of, "of is the local loop variable of a for-of loop");
            }
            o15.o16([0, 1, 2], o14, "verify the correct number of iterations occurred");

            o14 = [];
            o9 = 0;
            for (let of in { o42: 0, o43: 0, o44: 0 }) {
                o14.push(of);
                o15.o16('a' + o9++, of, "of is the local loop variable of a for-in loop");
            }
            o15.o16(['a0', 'a1', 'a2'], o14, "verify the correct number of iterations occurred");

            // These two cases would be ambiguous if the spec allowed 'let' to start
            // the LHSExpression of the LHSExpression form of for-of loops
            //
            // for (let of of [0]) { }
            // for (let of of ([0])) { }
            o14 = [];
            o9 = 0;
            for (let of of [0]) {
                o14.push(of);
                o15.o16(o9++, of, "of is the local loop variable of a for-of loop with array literal object expression");
            }
            o15.o16([0], o14, "verify the correct number of iterations occurred");

            o14 = [];
            o9 = 0;
            for (let of of ([0])) {
                o14.push(of);
                o15.o16(o9++, of, "of is the local loop variable of a for-of loop with parenthesized array literal object expression");
            }
            o15.o16([0], o14, "verify the correct number of iterations occurred");


            // Make sure for loop still works using let to declare of variable
            for (let of; false; ) { }
            for (let of, o45; false; ) { }
            for (let of = 10; false; ) { }

            // 'let' cannot be used as an identifier name at the beginning of the LHSExpression of a for-of
            // and thus 'for (let of' always parses as a let declaration of a variable named 'of'.
            o15.o20(function () { eval('for (let of simpleIterator) { }'); }, o46, "'for (let of' is always parsed such that it is a let declaration of a variable named 'of'");
            o15.o20(function () { eval('for (let of of) { }'); }, o46, "'for (let of' is always parsed such that it is a let declaration of a variable named 'of'");

            // Should still be able to use let identifier in LHSExpression via parentheses
            o14 = [];
            o9 = 0;
            var o47;
            for ((o47) of o8) {
                o14.push(o47);
                o15.o16(o9++, o47, "let is the loop variable of a for-of loop, declared outside the for-of loop");
            }
            o15.o16([0, 1, 2], o14, "verify the correct number of iterations occurred");
            o15.o16(2, o47, "let is equal to the last iteration value");
        }
    },
    {
        name: "break and continue work correctly with nested and labels",
        o13: function () {
            var o28 = 0;
            var o29 = 0;

            while (true) {
                for (var o18 of o10) {
                    o28++;

                    if (o18 == 3 || o18 == 5 || o18 == 7)
                        continue;

                    o29++;

                    if (o18 == 9)
                        break;
                }

                // non-trivialize the while(true) loop's break
                // to avoid optimizing away the while loop.
                if (o10)
                    break;
            }

            o15.o16(10, o28, "loop iterated 10 times");
            o15.o16(7, o29, "loop continued 3 times");
            o15.o16(9, o18, "x has last iteration's value");

            var o48 = 0;
            var o49 = 0;

            outer: for (var o18 of o10) {
                o48++;

                for (var o23 of o10) {
                    o49++;

                    if (o18 + o23 === 0)
                        break;

                    if (o18 + o23 === 1)
                        continue;

                    if (o23 === 1)
                        continue o50;

                    if (o18 === 2)
                        break o50outer: for (var x of infiniteIterator) {
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
                        break outero50: for (var x of infiniteIterator) {
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

            o15.o16(3, o48, "breaks and continues lead outer loop to execute 3 times");
            o15.o16(4, o49, "breaks and continues lead inner loop to execute 4 times");

            var o51 = 0;
            var o52 = 0;
            var o53 = 0;
            do {
                o51++;
                for (var o18 of o10) {
                    o52++;
                    for (var o9 = 0; true; o9++) {
                        o53++;
                        break;
                    }
                    break;
                }
                break;
            } while (true);

            o15.o16(1, o51, "do-while executes once");
            o15.o16(1, o52, "for-of executes once");
            o15.o16(1, o53, "for executes once");
        }
    },
    {
        name: "expect AssignmentExpression after 'of'",
        o13: function () {
            o15.o20(() => eval("for (let x of [], []);"), o46, "'for ( ForDeclaration of Expression )' is invalid", "Expected ')'")
            o15.o20(() => eval("for (var x of [], []);"), o46, "'for ( var ForBinding of Expression )' is invalid", "Expected ')'")
            o15.o20(() => eval("let x; for (x of [], []);"), o46, "'for ( LeftHandSideExpression of Expression )' is invalid", "Expected ')'")
        }
    },
];

o54.o55(o11, { o56: o0.o57[0] != "summary" });
