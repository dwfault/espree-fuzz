//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 for/for-in/for-of loops per iteration loop variable bindings tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "[slot array] for-in and for-of loops have per iteration bindings for let and const variables",
        o3: function () {
            var o4 = [];
            var o5 = 0;

            for (let o6 in { o4: 1, o7: 2, o8: 3 }) {
                o4[o5++] = function () { return o6; };
            }

            for (const o6 in { o4: 1, o7: 2, o8: 3 }) {
                o4[o5++] = function () { return o6; };
            }

            for (let o6 of [ 1, 2, 3 ]) {
                o4[o5++] = function () { return o6; };
            }

            for (const o6 of [ 1, 2, 3 ]) {
                o4[o5++] = function () { return o6; };
            }

            o9.o10('a', o4[0](), "first for-let-in function captures x when it is equal to 'a'");
            o9.o10('b', o4[1](), "second for-let-in function captures x when it is equal to 'b'");
            o9.o10('c', o4[2](), "third for-let-in function captures x when it is equal to 'c'");

            o9.o10('a', o4[3](), "first for-const-in function captures x when it is equal to 'a'");
            o9.o10('b', o4[4](), "second for-const-in function captures x when it is equal to 'b'");
            o9.o10('c', o4[5](), "third for-const-in function captures x when it is equal to 'c'");

            o9.o10(1, o4[6](), "first for-let-of function captures x when it is equal to 1");
            o9.o10(2, o4[7](), "second for-let-of function captures x when it is equal to 2");
            o9.o10(3, o4[8](), "third for-let-of function captures x when it is equal to 3");

            o9.o10(1, o4[9](), "first for-const-of function captures x when it is equal to 1");
            o9.o10(2, o4[10](), "second for-const-of function captures x when it is equal to 2");
            o9.o10(3, o4[11](), "third for-const-of function captures x when it is equal to 3");
        }
    },
    {
        name: "[activation object] for-in and for-of loops have per iteration bindings for let and const variables",
        o3: function () {
            var o4 = [];
            var o5 = 0;

            for (let o6 in { o4: 1, o7: 2, o8: 3 }) {
                o4[o5++] = function () { return eval("x"); };
            }

            for (const o6 in { o4: 1, o7: 2, o8: 3 }) {
                o4[o5++] = function () { return eval("x"); };
            }

            for (let o6 of [ 1, 2, 3 ]) {
                o4[o5++] = function () { return eval("x"); };
            }

            for (const o6 of [ 1, 2, 3 ]) {
                o4[o5++] = function () { return eval("x"); };
            }

            o9.o10('a', o4[0](), "first for-let-in function captures x when it is equal to 'a'");
            o9.o10('b', o4[1](), "second for-let-in function captures x when it is equal to 'b'");
            o9.o10('c', o4[2](), "third for-let-in function captures x when it is equal to 'c'");

            o9.o10('a', o4[3](), "first for-const-in function captures x when it is equal to 'a'");
            o9.o10('b', o4[4](), "second for-const-in function captures x when it is equal to 'b'");
            o9.o10('c', o4[5](), "third for-const-in function captures x when it is equal to 'c'");

            o9.o10(1, o4[6](), "first for-let-of function captures x when it is equal to 1");
            o9.o10(2, o4[7](), "second for-let-of function captures x when it is equal to 2");
            o9.o10(3, o4[8](), "third for-let-of function captures x when it is equal to 3");

            o9.o10(1, o4[9](), "first for-const-of function captures x when it is equal to 1");
            o9.o10(2, o4[10](), "second for-const-of function captures x when it is equal to 2");
            o9.o10(3, o4[11](), "third for-const-of function captures x when it is equal to 3");
        }
    },
    {
        name: "const variables in for-in and for-of loops cannot be assigned",
        o3: function () {
            o9.o11(function () { for (const o6 in { o4: 1 }) { o6 = 1; } }, o12, "assignment to const known at parse time in for-in loop", "Assignment to const");
            o9.o11(function () { for (const o6 of [ 0 ]) { o6 = 1; } }, o12, "assignment to const known at parse time in for-of loop", "Assignment to const");

            o9.o11(function () { eval("for (const x in { a: 1 }) { x = 1; }"); }, o12, "assignment to const known at eval parse time in for-in loop", "Assignment to const");
            o9.o11(function () { for (const o6 in { o4: 1 }) { eval("x = 1;"); } }, o12, "assignment to const only known at run time in for-in loop", "Assignment to const");
            o9.o11(function () { eval("for (const x of [ 0 ]) { x = 1; }"); }, o12, "assignment to const known at eval parse time in for-of loop", "Assignment to const");
            o9.o11(function () { for (const o6 of [ 0 ]) { eval("x = 1;"); } }, o12, "assignment to const only known at run time in for-of loop", "Assignment to const");
        }
    },
    {
        name: "Referring to a let or const loop variable in the collection expression of a for-in or for-of loop is a use before declaration",
        o3: function () {
            o9.o11(function () { for (let o6 in { o4: o6 }) { } }, o13, "for-let-in register use before declaration", "Use before declaration");
            o9.o11(function () { for (const o6 in { o4: o6 }) { } }, o13, "for-const-in register use before declaration", "Use before declaration");
            o9.o11(function () { for (let o6 of [ o6 ]) { } }, o13, "for-let-of register use before declaration", "Use before declaration");
            o9.o11(function () { for (const o6 of [ o6 ]) { } }, o13, "for-const-of register use before declaration", "Use before declaration");

            o9.o11(function () { for (let o6 in { o4: (() => o6)() }) { } }, o13, "for-let-in slot array use before declaration", "Use before declaration");
            o9.o11(function () { for (const o6 in { o4: (() => o6)() }) { } }, o13, "for-const-in slot array use before declaration", "Use before declaration");
            o9.o11(function () { for (let o6 of [ (() => o6)() ]) { } }, o13, "for-let-of slot array use before declaration", "Use before declaration");
            o9.o11(function () { for (const o6 of [ (() => o6)() ]) { } }, o13, "for-const-of slot array use before declaration", "Use before declaration");

            o9.o11(function () { for (let o6 in { o4: eval("x") }) { } }, o13, "for-let-in activation object use before declaration", "Use before declaration");
            o9.o11(function () { for (const o6 in { o4: eval("x") }) { } }, o13, "for-const-in activation object use before declaration", "Use before declaration");
            o9.o11(function () { for (let o6 of [ eval("x") ]) { } }, o13, "for-let-of activation object use before declaration", "Use before declaration");
            o9.o11(function () { for (const o6 of [ eval("x") ]) { } }, o13, "for-const-of activation object use before declaration", "Use before declaration");

            var o14 = null, o15 = null;
            var o16 = null, o17 = null;

            function o18() {
                for (var o6 in { o4: o14 = o6 }) {
                    o15 = o6;
                }

                for (var o19 of [ o16 = o19 ]) {
                    o17 = o19;
                }
            }
            o18();

            o9.o10(undefined, o14, "register var declaration in for-in loop can be referenced before initialization");
            o9.o10('a', o15, "sanity check that the for-in loop runs as expected");
            o9.o10(undefined, o16, "register var declaration in for-of loop can be referenced before initialization");
            o9.o10(undefined, o17, "sanity check that the for-of loop runs as expected");

            var o20 = null, o21 = null;
            var o22 = null, o23 = null;

            function o24() {
                for (var o6 in { o4: o20 = o6 }) {
                    o21 = (function () { return o6; })();
                }

                for (var o19 of [ o22 = o19 ]) {
                    o23 = (function () { return o19; })();
                }
            }
            o24();

            o9.o10(undefined, o20, "slot array var declaration in for-in loop can be referenced before initialization");
            o9.o10('a', o21, "sanity check that the for-in loop runs as expected");
            o9.o10(undefined, o22, "slot array var declaration in for-of loop can be referenced before initialization");
            o9.o10(undefined, o23, "sanity check that the for-of loop runs as expected");

            var o25 = null, o26 = null;
            var o27 = null, o28 = null;

            function o29() {
                for (var o6 in { o4: o25 = o6 }) {
                    o26 = eval("x");
                }

                for (var o19 of [ o27 = o19 ]) {
                    o28 = eval("y");
                }
            }
            o29();

            o9.o10(undefined, o25, "slot array var declaration in for-in loop can be referenced before initialization");
            o9.o10('a', o26, "sanity check that the for-in loop runs as expected");
            o9.o10(undefined, o27, "slot array var declaration in for-of loop can be referenced before initialization");
            o9.o10(undefined, o28, "sanity check that the for-of loop runs as expected");
        }
    },
    {
        name: "Capturing a let or const loop variable in the collection expression of a for-in or for-of loop still leads to a use before declaration",
        o3: function () {
            var o4 = [], o7 = [];
            var o5 = 0, o30 = 0;

            for (let o6 in { o4: o4[o5++] = () => o6 }) { o7[o30++] = () => o6; }
            for (const o6 in { o4: o4[o5++] = () => o6 }) { o7[o30++] = () => o6; }
            for (let o6 of [ o4[o5++] = () => o6 ]) { o7[o30++] = () => o6; }
            for (const o6 of [ o4[o5++] = () => o6 ]) { o7[o30++] = () => o6; }

            for (let o6 in { o4: o4[o5++] = () => eval("x") }) { o7[o30++] = () => eval("x"); }
            for (const o6 in { o4: o4[o5++] = () => eval("x") }) { o7[o30++] = () => eval("x"); }
            for (let o6 of [ o4[o5++] = () => eval("x") ]) { o7[o30++] = () => eval("x"); }
            for (const o6 of [ o4[o5++] = () => eval("x") ]) { o7[o30++] = () => eval("x"); }

            o9.o11(o4[0], o13, "for-let-in slot array capture use before declaration", "Use before declaration");
            o9.o11(o4[1], o13, "for-const-in slot array capture use before declaration", "Use before declaration");
            o9.o11(o4[2], o13, "for-let-of slot array capture use before declaration", "Use before declaration");
            o9.o11(o4[3], o13, "for-const-of slot array capture use before declaration", "Use before declaration");

            o9.o11(o4[4], o13, "for-let-in activation object capture use before declaration", "Use before declaration");
            o9.o11(o4[5], o13, "for-const-in activation object capture use before declaration", "Use before declaration");
            o9.o11(o4[6], o13, "for-let-of activation object capture use before declaration", "Use before declaration");
            o9.o11(o4[7], o13, "for-const-of activation object capture use before declaration", "Use before declaration");

            o9.o10('a', o7[0](), "sanity check for-let-in slot array capture body still initialized", "Use before declaration");
            o9.o10('a', o7[1](), "sanity check for-const-in slot array capture body still initialized", "Use before declaration");
            o9.o10(o4[2], o7[2](), "sanity check for-let-of slot array capture body still initialized", "Use before declaration");
            o9.o10(o4[3], o7[3](), "sanity check for-const-of slot array capture body still initialized", "Use before declaration");

            o9.o10('a', o7[4](), "sanity check for-let-in activation object capture body still initialized", "Use before declaration");
            o9.o10('a', o7[5](), "sanity check for-const-in activation object capture body still initialized", "Use before declaration");
            o9.o10(o4[6], o7[6](), "sanity check for-let-of activation object capture body still initialized", "Use before declaration");
            o9.o10(o4[7], o7[7](), "sanity check for-const-of activation object capture body still initialized", "Use before declaration");
        }
    },
    {
        name: "[slot array] for loops have per iteration bindings for let variables",
        o3: function () {
            var o4 = [];
            var o5 = 0;

            for (let o6 = 0; o6 < 3; o6 += 1) {
                o4[o5++] = function () { return o6; };
            }

            o9.o10(0, o4[0](), "first for-let function captures x when it is equal to 0");
            o9.o10(1, o4[1](), "second for-let function captures x when it is equal to 1");
            o9.o10(2, o4[2](), "third for-let function captures x when it is equal to 2");
        }
    },
    {
        name: "[activation object] for loops have per iteration bindings for let variables",
        o3: function () {
            var o4 = [];
            var o5 = 0;

            for (let o6 = 0; o6 < 3; o6 += 1) {
                o4[o5++] = function () { return eval("x"); };
            }

            o9.o10(0, o4[0](), "first for-let function captures x when it is equal to 0");
            o9.o10(1, o4[1](), "second for-let function captures x when it is equal to 1");
            o9.o10(2, o4[2](), "third for-let function captures x when it is equal to 2");
        }
    },
    {
        name: "for loops allow const loop variables but cannot assign to them anywhere including the increment expression", // so they're kinda useless
        o3: function () {
            o9.o11(function () { for (const o6 = 0; o6++ < 3; ) { } }, o12, "assignment to const known at parse time in the test expression", "Assignment to const");
            o9.o11(function () { for (const o6 = 0; o6 < 3; o6 += 1) { } }, o12, "assignment to const known at parse time in the increment expression", "Assignment to const");
            o9.o11(function () { for (const o6 = 0; o6 < 3; ) { o6 += 1; } }, o12, "assignment to const known at parse time in the body", "Assignment to const");

            o9.o11(function () { eval("for (const x = 0; x++ < 3; ) { }"); }, o12, "assignment to const known at eval parse time in the test expression", "Assignment to const");
            o9.o11(function () { for (const o6 = 0; eval("x++") < 3; ) { } }, o12, "assignment to const known at run time in the test expression", "Assignment to const");
            o9.o11(function () { eval("for (const x = 0; x < 3; x += 1) { }"); }, o12, "assignment to const known at eval parse time in the increment expression", "Assignment to const");
            o9.o11(function () { for (const o6 = 0; o6 < 3; eval("x += 1")) { } }, o12, "assignment to const known at run time in the increment expression", "Assignment to const");
            o9.o11(function () { eval("for (const x = 0; x < 3; ) { x += 1; }"); }, o12, "assignment to const known at eval parse time in the body", "Assignment to const");
            o9.o11(function () { for (const o6 = 0; o6 < 3; ) { eval("x += 1"); } }, o12, "assignment to const known at run time in the body", "Assignment to const");
        }
    },
    {
        name: "for loops have separate binding for the initializer expression for let variables",
        o3: function () {
            var o4 = [];

            for (let o6 = (o4[0] = () => o6, 0); o6 < 1; o6 += 1) {
                o6 += 1;
                o4[1] = () => o6;
            }

            o9.o10(0, o4[0](), "x captured in the initializer expression is a binding scoped only to the initializer expression");
            o9.o10(1, o4[1](), "x captured in the initializer expression is a binding scoped only to the initializer expression");
        }
    },
    {
        name: "for loop per iteration binding includes the test and increment expressions and ends before the increment expression",
        o3: function () {
            var o31 = [], o32 = 0;
            var o7 = [], o33 = 0;
            var o5 = [], o34 = 0;
            var o35 = [], o36 = 0;

            for (let o6 = 0;
                 // test expression
                 o31[o32++] = () => o6,
                     o35[o36++] = o19 => o6 = o19,
                     o6 < 2;
                 // increment expression
                 o5[o34++] = () => o6,
                     o6 += 1) {
                // body
                o7[o33++] = () => o6;
            }

            o9.o10(0, o31[0](), "Initially first test function captures first loop binding with value 0");
            o9.o10(0, o7[0](), "Initially first body function captures first loop binding with value 0");
            o9.o10(1, o5[0](), "Initially first increment function captures second loop binding with value 1");

            o35[0]('a');

            o9.o10('a', o31[0](), "Now first test function returns the new value of the first loop binding of x, 'a'");
            o9.o10('a', o7[0](), "Now first body function returns the new value of the first loop binding of x, 'a'");
            o9.o10(1, o5[0](), "But first increment function still returns 1 because it is a separate binding");

            o9.o10(1, o31[1](), "Initially second test function captures second loop binding with value 1");
            o9.o10(1, o7[1](), "Initially second body function captures second loop binding with value 1");
            o9.o10(2, o5[1](), "Initially second increment function captures third loop binding with value 2");

            o35[1]('b');

            o9.o10('b', o5[0](), "And now first increment function returns 'b'");

            o9.o10('b', o31[1](), "Now second test function returns the new value of the second loop binding of x, 'b'");
            o9.o10('b', o7[1](), "Now second body function returns the new value of the second loop binding of x, 'b'");
            o9.o10(2, o5[1](), "But second increment function still returns 2 because it is a separate binding");

            o9.o10(2, o31[2](), "Initially third test function captures third loop binding with value 2");
            o9.o10(undefined, o7[2], "There is no third body function because the loop terminated");
            o9.o10(undefined, o5[2], "There is no third increment function because the loop terminated");

            o35[2]('c');
            o9.o10('b', o5[0](), "And now second increment function returns 'c'");

            o9.o10('b', o31[1](), "Now third test function returns the new value of the third loop binding of x, 'c'");
        }
    },
    {
        name: "Destructuring adds the possibility of more than one loop variable -- quick smoke test",
        o3: function () {
            var o4 = [];
            var o5 = 0;

            for (let [ o6, o19, o37 ] in { o38: 0, o39: 1 }) {
                o4[o5++] = [ () => o6, () => o19, () => o37 ];
            }

            for (const { o6xo6, o19yo19, o37zo37 } of [ { o6: 1, o19: 2, o37: 3 }, { o6: 4, o19: 5, o37: 6 } ]) {
                o4[o5++] = [ () => o6, () => o19, () => o37 ];
            }

            for (let [ o6, o19, o37 ] = [ 0, 1, 2 ];
                 o6 < 2;
                 [ o6, o19, o37 ] = [ o6 + 1, o19 + 2, o37 + 3 ]) {
                o4[o5++] = [ () => o6, () => o19, () => o37 ];
            }

            o9.o10('a', o4[0][0](), "for-let-in array destructuring first x gets 'a' from 'abc'");
            o9.o10('b', o4[0][1](), "for-let-in array destructuring first y gets 'b' from 'abc'");
            o9.o10('c', o4[0][2](), "for-let-in array destructuring first z gets 'c' from 'abc'");

            o9.o10('d', o4[1][0](), "for-let-in array destructuring second x gets 'd' from 'def'");
            o9.o10('e', o4[1][1](), "for-let-in array destructuring second y gets 'e' from 'def'");
            o9.o10('f', o4[1][2](), "for-let-in array destructuring second z gets 'f' from 'def'");

            o9.o10(1, o4[2][0](), "for-const-of object destructuring first x gets 1 from x");
            o9.o10(2, o4[2][1](), "for-const-of object destructuring first y gets 2 from y");
            o9.o10(3, o4[2][2](), "for-const-of object destructuring first z gets 3 from z");

            o9.o10(4, o4[3][0](), "for-const-of object destructuring second x gets 4 from x");
            o9.o10(5, o4[3][1](), "for-const-of object destructuring second y gets 5 from y");
            o9.o10(6, o4[3][2](), "for-const-of object destructuring second z gets 6 from z");

            o9.o10(0, o4[4][0](), "for-let array destructuring first x gets 0 from [ 0, 1, 2 ]");
            o9.o10(1, o4[4][1](), "for-let array destructuring first y gets 1 from [ 0, 1, 2 ]");
            o9.o10(2, o4[4][2](), "for-let array destructuring first z gets 2 from [ 0, 1, 2 ]");

            o9.o10(1, o4[5][0](), "for-let array destructuring second x gets 4 from [ x + 1, y + 2, z + 3 ]");
            o9.o10(3, o4[5][1](), "for-let array destructuring second y gets 5 from [ x + 1, y + 2, z + 3 ]");
            o9.o10(5, o4[5][2](), "for-let array destructuring second z gets 6 from [ x + 1, y + 2, z + 3 ]");
        }
    },
];

o40.o41(o2, { o42: o0.o43[0] != "summary" });
