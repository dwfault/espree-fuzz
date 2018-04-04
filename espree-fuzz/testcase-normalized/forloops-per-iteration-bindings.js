//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 for/for-in/for-of loops per iteration loop variable bindings tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "[slot array] for-in and for-of loops have per iteration bindings for let and const variables",
        o4: function () {
            var o5 = [];
            var o6 = 0;

            for (let o7 in { o5: 1, o8: 2, o9: 3 }) {
                o5[o6++] = function () { return o7; };
            }

            for (const o7 in { o5: 1, o8: 2, o9: 3 }) {
                o5[o6++] = function () { return o7; };
            }

            for (let o7 of [ 1, 2, 3 ]) {
                o5[o6++] = function () { return o7; };
            }

            for (const o7 of [ 1, 2, 3 ]) {
                o5[o6++] = function () { return o7; };
            }

            o10.o11('a', o5[0](), "first for-let-in function captures x when it is equal to 'a'");
            o10.o11('b', o5[1](), "second for-let-in function captures x when it is equal to 'b'");
            o10.o11('c', o5[2](), "third for-let-in function captures x when it is equal to 'c'");

            o10.o11('a', o5[3](), "first for-const-in function captures x when it is equal to 'a'");
            o10.o11('b', o5[4](), "second for-const-in function captures x when it is equal to 'b'");
            o10.o11('c', o5[5](), "third for-const-in function captures x when it is equal to 'c'");

            o10.o11(1, o5[6](), "first for-let-of function captures x when it is equal to 1");
            o10.o11(2, o5[7](), "second for-let-of function captures x when it is equal to 2");
            o10.o11(3, o5[8](), "third for-let-of function captures x when it is equal to 3");

            o10.o11(1, o5[9](), "first for-const-of function captures x when it is equal to 1");
            o10.o11(2, o5[10](), "second for-const-of function captures x when it is equal to 2");
            o10.o11(3, o5[11](), "third for-const-of function captures x when it is equal to 3");
        }
    },
    {
        name: "[activation object] for-in and for-of loops have per iteration bindings for let and const variables",
        o4: function () {
            var o5 = [];
            var o6 = 0;

            for (let o7 in { o5: 1, o8: 2, o9: 3 }) {
                o5[o6++] = function () { return eval("x"); };
            }

            for (const o7 in { o5: 1, o8: 2, o9: 3 }) {
                o5[o6++] = function () { return eval("x"); };
            }

            for (let o7 of [ 1, 2, 3 ]) {
                o5[o6++] = function () { return eval("x"); };
            }

            for (const o7 of [ 1, 2, 3 ]) {
                o5[o6++] = function () { return eval("x"); };
            }

            o10.o11('a', o5[0](), "first for-let-in function captures x when it is equal to 'a'");
            o10.o11('b', o5[1](), "second for-let-in function captures x when it is equal to 'b'");
            o10.o11('c', o5[2](), "third for-let-in function captures x when it is equal to 'c'");

            o10.o11('a', o5[3](), "first for-const-in function captures x when it is equal to 'a'");
            o10.o11('b', o5[4](), "second for-const-in function captures x when it is equal to 'b'");
            o10.o11('c', o5[5](), "third for-const-in function captures x when it is equal to 'c'");

            o10.o11(1, o5[6](), "first for-let-of function captures x when it is equal to 1");
            o10.o11(2, o5[7](), "second for-let-of function captures x when it is equal to 2");
            o10.o11(3, o5[8](), "third for-let-of function captures x when it is equal to 3");

            o10.o11(1, o5[9](), "first for-const-of function captures x when it is equal to 1");
            o10.o11(2, o5[10](), "second for-const-of function captures x when it is equal to 2");
            o10.o11(3, o5[11](), "third for-const-of function captures x when it is equal to 3");
        }
    },
    {
        name: "const variables in for-in and for-of loops cannot be assigned",
        o4: function () {
            o10.o13(function () { for (const o7 in { o5: 1 }) { o7 = 1; } }, o14, "assignment to const known at parse time in for-in loop", "Assignment to const");
            o10.o13(function () { for (const o7 of [ 0 ]) { o7 = 1; } }, o14, "assignment to const known at parse time in for-of loop", "Assignment to const");

            o10.o13(function () { eval("for (const x in { a: 1 }) { x = 1; }"); }, o14, "assignment to const known at eval parse time in for-in loop", "Assignment to const");
            o10.o13(function () { for (const o7 in { o5: 1 }) { eval("x = 1;"); } }, o14, "assignment to const only known at run time in for-in loop", "Assignment to const");
            o10.o13(function () { eval("for (const x of [ 0 ]) { x = 1; }"); }, o14, "assignment to const known at eval parse time in for-of loop", "Assignment to const");
            o10.o13(function () { for (const o7 of [ 0 ]) { eval("x = 1;"); } }, o14, "assignment to const only known at run time in for-of loop", "Assignment to const");
        }
    },
    {
        name: "Referring to a let or const loop variable in the collection expression of a for-in or for-of loop is a use before declaration",
        o4: function () {
            o10.o13(function () { for (let o7 in { o5: o7 }) { } }, o15, "for-let-in register use before declaration", "Use before declaration");
            o10.o13(function () { for (const o7 in { o5: o7 }) { } }, o15, "for-const-in register use before declaration", "Use before declaration");
            o10.o13(function () { for (let o7 of [ o7 ]) { } }, o15, "for-let-of register use before declaration", "Use before declaration");
            o10.o13(function () { for (const o7 of [ o7 ]) { } }, o15, "for-const-of register use before declaration", "Use before declaration");

            o10.o13(function () { for (let o7 in { o5: (() => o7)() }) { } }, o15, "for-let-in slot array use before declaration", "Use before declaration");
            o10.o13(function () { for (const o7 in { o5: (() => o7)() }) { } }, o15, "for-const-in slot array use before declaration", "Use before declaration");
            o10.o13(function () { for (let o7 of [ (() => o7)() ]) { } }, o15, "for-let-of slot array use before declaration", "Use before declaration");
            o10.o13(function () { for (const o7 of [ (() => o7)() ]) { } }, o15, "for-const-of slot array use before declaration", "Use before declaration");

            o10.o13(function () { for (let o7 in { o5: eval("x") }) { } }, o15, "for-let-in activation object use before declaration", "Use before declaration");
            o10.o13(function () { for (const o7 in { o5: eval("x") }) { } }, o15, "for-const-in activation object use before declaration", "Use before declaration");
            o10.o13(function () { for (let o7 of [ eval("x") ]) { } }, o15, "for-let-of activation object use before declaration", "Use before declaration");
            o10.o13(function () { for (const o7 of [ eval("x") ]) { } }, o15, "for-const-of activation object use before declaration", "Use before declaration");

            var o16 = null, o17 = null;
            var o18 = null, o19 = null;

            function o20() {
                for (var o7 in { o5: o16 = o7 }) {
                    o17 = o7;
                }

                for (var o21 of [ o18 = o21 ]) {
                    o19 = o21;
                }
            }
            o20();

            o10.o11(undefined, o16, "register var declaration in for-in loop can be referenced before initialization");
            o10.o11('a', o17, "sanity check that the for-in loop runs as expected");
            o10.o11(undefined, o18, "register var declaration in for-of loop can be referenced before initialization");
            o10.o11(undefined, o19, "sanity check that the for-of loop runs as expected");

            var o23 = null, o24 = null;
            var o25 = null, o26 = null;

            function o27() {
                for (var o7 in { o5: o23 = o7 }) {
                    o24 = (function () { return o7; })();
                }

                for (var o21 of [ o25 = o21 ]) {
                    o26 = (function () { return o21; })();
                }
            }
            o27();

            o10.o11(undefined, o23, "slot array var declaration in for-in loop can be referenced before initialization");
            o10.o11('a', o24, "sanity check that the for-in loop runs as expected");
            o10.o11(undefined, o25, "slot array var declaration in for-of loop can be referenced before initialization");
            o10.o11(undefined, o26, "sanity check that the for-of loop runs as expected");

            var o28 = null, o29 = null;
            var o30 = null, o31 = null;

            function o32() {
                for (var o7 in { o5: o28 = o7 }) {
                    o29 = eval("x");
                }

                for (var o21 of [ o30 = o21 ]) {
                    o31 = eval("y");
                }
            }
            o32();

            o10.o11(undefined, o28, "slot array var declaration in for-in loop can be referenced before initialization");
            o10.o11('a', o29, "sanity check that the for-in loop runs as expected");
            o10.o11(undefined, o30, "slot array var declaration in for-of loop can be referenced before initialization");
            o10.o11(undefined, o31, "sanity check that the for-of loop runs as expected");
        }
    },
    {
        name: "Capturing a let or const loop variable in the collection expression of a for-in or for-of loop still leads to a use before declaration",
        o4: function () {
            var o5 = [], o8 = [];
            var o6 = 0, o33 = 0;

            for (let o7 in { o5: o5[o6++] = () => o7 }) { o8[o33++] = () => o7; }
            for (const o7 in { o5: o5[o6++] = () => o7 }) { o8[o33++] = () => o7; }
            for (let o7 of [ o5[o6++] = () => o7 ]) { o8[o33++] = () => o7; }
            for (const o7 of [ o5[o6++] = () => o7 ]) { o8[o33++] = () => o7; }

            for (let o7 in { o5: o5[o6++] = () => eval("x") }) { o8[o33++] = () => eval("x"); }
            for (const o7 in { o5: o5[o6++] = () => eval("x") }) { o8[o33++] = () => eval("x"); }
            for (let o7 of [ o5[o6++] = () => eval("x") ]) { o8[o33++] = () => eval("x"); }
            for (const o7 of [ o5[o6++] = () => eval("x") ]) { o8[o33++] = () => eval("x"); }

            o10.o13(o5[0], o15, "for-let-in slot array capture use before declaration", "Use before declaration");
            o10.o13(o5[1], o15, "for-const-in slot array capture use before declaration", "Use before declaration");
            o10.o13(o5[2], o15, "for-let-of slot array capture use before declaration", "Use before declaration");
            o10.o13(o5[3], o15, "for-const-of slot array capture use before declaration", "Use before declaration");

            o10.o13(o5[4], o15, "for-let-in activation object capture use before declaration", "Use before declaration");
            o10.o13(o5[5], o15, "for-const-in activation object capture use before declaration", "Use before declaration");
            o10.o13(o5[6], o15, "for-let-of activation object capture use before declaration", "Use before declaration");
            o10.o13(o5[7], o15, "for-const-of activation object capture use before declaration", "Use before declaration");

            o10.o11('a', o8[0](), "sanity check for-let-in slot array capture body still initialized", "Use before declaration");
            o10.o11('a', o8[1](), "sanity check for-const-in slot array capture body still initialized", "Use before declaration");
            o10.o11(o5[2], o8[2](), "sanity check for-let-of slot array capture body still initialized", "Use before declaration");
            o10.o11(o5[3], o8[3](), "sanity check for-const-of slot array capture body still initialized", "Use before declaration");

            o10.o11('a', o8[4](), "sanity check for-let-in activation object capture body still initialized", "Use before declaration");
            o10.o11('a', o8[5](), "sanity check for-const-in activation object capture body still initialized", "Use before declaration");
            o10.o11(o5[6], o8[6](), "sanity check for-let-of activation object capture body still initialized", "Use before declaration");
            o10.o11(o5[7], o8[7](), "sanity check for-const-of activation object capture body still initialized", "Use before declaration");
        }
    },
    {
        name: "[slot array] for loops have per iteration bindings for let variables",
        o4: function () {
            var o5 = [];
            var o6 = 0;

            for (let o7 = 0; o7 < 3; o7 += 1) {
                o5[o6++] = function () { return o7; };
            }

            o10.o11(0, o5[0](), "first for-let function captures x when it is equal to 0");
            o10.o11(1, o5[1](), "second for-let function captures x when it is equal to 1");
            o10.o11(2, o5[2](), "third for-let function captures x when it is equal to 2");
        }
    },
    {
        name: "[activation object] for loops have per iteration bindings for let variables",
        o4: function () {
            var o5 = [];
            var o6 = 0;

            for (let o7 = 0; o7 < 3; o7 += 1) {
                o5[o6++] = function () { return eval("x"); };
            }

            o10.o11(0, o5[0](), "first for-let function captures x when it is equal to 0");
            o10.o11(1, o5[1](), "second for-let function captures x when it is equal to 1");
            o10.o11(2, o5[2](), "third for-let function captures x when it is equal to 2");
        }
    },
    {
        name: "for loops allow const loop variables but cannot assign to them anywhere including the increment expression", // so they're kinda useless
        o4: function () {
            o10.o13(function () { for (const o7 = 0; o7++ < 3; ) { } }, o14, "assignment to const known at parse time in the test expression", "Assignment to const");
            o10.o13(function () { for (const o7 = 0; o7 < 3; o7 += 1) { } }, o14, "assignment to const known at parse time in the increment expression", "Assignment to const");
            o10.o13(function () { for (const o7 = 0; o7 < 3; ) { o7 += 1; } }, o14, "assignment to const known at parse time in the body", "Assignment to const");

            o10.o13(function () { eval("for (const x = 0; x++ < 3; ) { }"); }, o14, "assignment to const known at eval parse time in the test expression", "Assignment to const");
            o10.o13(function () { for (const o7 = 0; eval("x++") < 3; ) { } }, o14, "assignment to const known at run time in the test expression", "Assignment to const");
            o10.o13(function () { eval("for (const x = 0; x < 3; x += 1) { }"); }, o14, "assignment to const known at eval parse time in the increment expression", "Assignment to const");
            o10.o13(function () { for (const o7 = 0; o7 < 3; eval("x += 1")) { } }, o14, "assignment to const known at run time in the increment expression", "Assignment to const");
            o10.o13(function () { eval("for (const x = 0; x < 3; ) { x += 1; }"); }, o14, "assignment to const known at eval parse time in the body", "Assignment to const");
            o10.o13(function () { for (const o7 = 0; o7 < 3; ) { eval("x += 1"); } }, o14, "assignment to const known at run time in the body", "Assignment to const");
        }
    },
    {
        name: "for loops have separate binding for the initializer expression for let variables",
        o4: function () {
            var o5 = [];

            for (let o7 = (o5[0] = () => o7, 0); o7 < 1; o7 += 1) {
                o7 += 1;
                o5[1] = () => o7;
            }

            o10.o11(0, o5[0](), "x captured in the initializer expression is a binding scoped only to the initializer expression");
            o10.o11(1, o5[1](), "x captured in the initializer expression is a binding scoped only to the initializer expression");
        }
    },
    {
        name: "for loop per iteration binding includes the test and increment expressions and ends before the increment expression",
        o4: function () {
            var o34 = [], o35 = 0;
            var o8 = [], o36 = 0;
            var o6 = [], o37 = 0;
            var o38 = [], o39 = 0;

            for (let o7 = 0;
                 // test expression
                 o34[o35++] = () => o7,
                     o38[o39++] = o21 => o7 = o21,
                     o7 < 2;
                 // increment expression
                 o6[o37++] = () => o7,
                     o7 += 1) {
                // body
                o8[o36++] = () => o7;
            }

            o10.o11(0, o34[0](), "Initially first test function captures first loop binding with value 0");
            o10.o11(0, o8[0](), "Initially first body function captures first loop binding with value 0");
            o10.o11(1, o6[0](), "Initially first increment function captures second loop binding with value 1");

            o38[0]('a');

            o10.o11('a', o34[0](), "Now first test function returns the new value of the first loop binding of x, 'a'");
            o10.o11('a', o8[0](), "Now first body function returns the new value of the first loop binding of x, 'a'");
            o10.o11(1, o6[0](), "But first increment function still returns 1 because it is a separate binding");

            o10.o11(1, o34[1](), "Initially second test function captures second loop binding with value 1");
            o10.o11(1, o8[1](), "Initially second body function captures second loop binding with value 1");
            o10.o11(2, o6[1](), "Initially second increment function captures third loop binding with value 2");

            o38[1]('b');

            o10.o11('b', o6[0](), "And now first increment function returns 'b'");

            o10.o11('b', o34[1](), "Now second test function returns the new value of the second loop binding of x, 'b'");
            o10.o11('b', o8[1](), "Now second body function returns the new value of the second loop binding of x, 'b'");
            o10.o11(2, o6[1](), "But second increment function still returns 2 because it is a separate binding");

            o10.o11(2, o34[2](), "Initially third test function captures third loop binding with value 2");
            o10.o11(undefined, o8[2], "There is no third body function because the loop terminated");
            o10.o11(undefined, o6[2], "There is no third increment function because the loop terminated");

            o38[2]('c');
            o10.o11('b', o6[0](), "And now second increment function returns 'c'");

            o10.o11('b', o34[1](), "Now third test function returns the new value of the third loop binding of x, 'c'");
        }
    },
    {
        name: "Destructuring adds the possibility of more than one loop variable -- quick smoke test",
        o4: function () {
            var o5 = [];
            var o6 = 0;

            for (let [ o7, o21, o40 ] in { o41: 0, o42: 1 }) {
                o5[o6++] = [ () => o7, () => o21, () => o40 ];
            }

            for (const { o7xo7, o21yo21, o40zo40 } of [ { o7: 1, o21: 2, o40: 3 }, { o7: 4, o21: 5, o40: 6 } ]) {
                o5[o6++] = [ () => o7, () => o21, () => o40 ];
            }

            for (let [ o7, o21, o40 ] = [ 0, 1, 2 ];
                 o7 < 2;
                 [ o7, o21, o40 ] = [ o7 + 1, o21 + 2, o40 + 3 ]) {
                o5[o6++] = [ () => o7, () => o21, () => o40 ];
            }

            o10.o11('a', o5[0][0](), "for-let-in array destructuring first x gets 'a' from 'abc'");
            o10.o11('b', o5[0][1](), "for-let-in array destructuring first y gets 'b' from 'abc'");
            o10.o11('c', o5[0][2](), "for-let-in array destructuring first z gets 'c' from 'abc'");

            o10.o11('d', o5[1][0](), "for-let-in array destructuring second x gets 'd' from 'def'");
            o10.o11('e', o5[1][1](), "for-let-in array destructuring second y gets 'e' from 'def'");
            o10.o11('f', o5[1][2](), "for-let-in array destructuring second z gets 'f' from 'def'");

            o10.o11(1, o5[2][0](), "for-const-of object destructuring first x gets 1 from x");
            o10.o11(2, o5[2][1](), "for-const-of object destructuring first y gets 2 from y");
            o10.o11(3, o5[2][2](), "for-const-of object destructuring first z gets 3 from z");

            o10.o11(4, o5[3][0](), "for-const-of object destructuring second x gets 4 from x");
            o10.o11(5, o5[3][1](), "for-const-of object destructuring second y gets 5 from y");
            o10.o11(6, o5[3][2](), "for-const-of object destructuring second z gets 6 from z");

            o10.o11(0, o5[4][0](), "for-let array destructuring first x gets 0 from [ 0, 1, 2 ]");
            o10.o11(1, o5[4][1](), "for-let array destructuring first y gets 1 from [ 0, 1, 2 ]");
            o10.o11(2, o5[4][2](), "for-let array destructuring first z gets 2 from [ 0, 1, 2 ]");

            o10.o11(1, o5[5][0](), "for-let array destructuring second x gets 4 from [ x + 1, y + 2, z + 3 ]");
            o10.o11(3, o5[5][1](), "for-let array destructuring second y gets 5 from [ x + 1, y + 2, z + 3 ]");
            o10.o11(5, o5[5][2](), "for-let array destructuring second z gets 6 from [ x + 1, y + 2, z + 3 ]");
        }
    },
];

o43.o44(o2, { o45: o0.o46[0] != "summary" });
