//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Iterators for-of loop tests -- verifies the for-of loop behavior

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = {
    [Symbol.iterator]: function () {
        try {
return {
            next: function () {
                try {
return {
                    done: true,
                    value: 0
                };
}catch(e){}
            }
        };
}catch(e){}
    }
};

var o3 = {
    [Symbol.iterator]: function () {
        try {
return {
            o4: 0,
            next: function () {
                try {
return {
                    done: this.o4 == 3,
                    value: this.o4++
                };
}catch(e){}
            }
        };
}catch(e){}
    }
};

var o5 = {
    [Symbol.iterator]: function () {
        try {
return {
            o4: 0,
            next: function () {
                try {
return {
                    done: false,
                    value: this.o4++
                };
}catch(e){}
            }
        };
}catch(e){}
    }
};

var o6 = [
    {
        name: "for (var ... form declares a variable at function scope and assigns it every iteration",
        o7: function () {
            var o4 = 0;
            var o8 = [];
            try {
o9.o10(undefined, o11, "x is available before for-of loop and is initialized with undefined");
}catch(e){}

            try {
for (var o11 of o3) {
                try {
o8.push(o11);
}catch(e){}
                try {
o9.o10(o4++, o11, "x is available within the for-of loop and has a new value each iteration");
}catch(e){}
            }
}catch(e){}

            try {
o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");
}catch(e){}

            try {
o9.o10(2, o11, "x is still available after for-of loop and has the last iteration's value");
}catch(e){}
        }
    },
    {
        name: "for (let ... form declares a variable at loop scope and assigns it every iteration",
        o7: function () {
            var o4 = 0;
            var o8 = [];
            try {
o9.o12(function () { try {
eval('x');
}catch(e){} }, o13, "x is not available before for-of loop", "'x' is undefined");
}catch(e){}

            try {
for (let o11 of o3) {
                try {
o8.push(o11);
}catch(e){}
                try {
o9.o10(o4++, o11, "x is available within the for-of loop and has a new value each iteration");
}catch(e){}

                try {
o11 = 5;
}catch(e){}
                try {
o9.o10(5, o11, "x can be reassigned; it is not const");
}catch(e){}
            }
}catch(e){}

            try {
o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");
}catch(e){}

            try {
o9.o12(function () { try {
eval('x');
}catch(e){} }, o13, "x is not available after for-of loop", "'x' is undefined");
}catch(e){}
        }
    },
    {
        name: "for (let/const x of x) is a use before declaration error",
        o7: function () {
            try {
o9.o12(function () { try {
eval("for (let x of x) { }");
}catch(e){} }, o13, "for (let x of x) is a use before declaration error", "Use before declaration");
}catch(e){}
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

            try {
for (o11 of o3) {
                try {
o8.push(o11);
}catch(e){}
                try {
o9.o10(o4++, o11, "x is available within the for-of loop and has a new value each iteration");
}catch(e){}
            }
}catch(e){}

            try {
o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");
}catch(e){}

            try {
o9.o10(2, o11, "x has the last iteration's value");
}catch(e){}


            try {
o9.o12(
                function () {
                    try {
"use strict";
}catch(e){}
                    try {
for (o14 of o3) { }
}catch(e){}
                },
                o13,
                "for (<identifier> ... form does not declare a new variable and thus in strict mode throws if the identifier is not already defined",
                "Variable undefined in strict mode");
}catch(e){}
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
                    try {
o15++;
}catch(e){}
                    try {
return this;
}catch(e){}
                }
            };

            try {
for (o16.o17().o4 of o3) {
                try {
o8.push(o16.o4);
}catch(e){}
                try {
o9.o10(o4++, o16.o4, "o.i is assigned each value of the iterator");
}catch(e){}
            }
}catch(e){}

            try {
o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");
}catch(e){}
            try {
o9.o10(3, o15, "verify that o.f() was called once for each iteration");
}catch(e){}
            try {
o9.o10(2, o16.o4, "o.i still has the last value of the last iteration");
}catch(e){}
        }
    },
    {
        name: "for-of does not execute body for iterator that is initially complete",
        o7: function () {
            try {
for (let o11 of o2) {
                try {
o9.o18("loop body should not execute");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "infinite iterators are no different, break and continue work correctly",
        o7: function () {
            var o19 = 0;
            var o20 = 0;

            try {
for (var o11 of o5) {
                try {
o19++;
}catch(e){}

                try {
if (o11 == 3 || o11 == 5 || o11 == 7)
                    try {
continue;
}catch(e){}
}catch(e){}

                try {
o20++;
}catch(e){}

                try {
if (o11 == 9)
                    try {
break;
}catch(e){}
}catch(e){}
            }
}catch(e){}

            try {
o9.o10(10, o19, "loop iterated 10 times");
}catch(e){}
            try {
o9.o10(7, o20, "loop continued 3 times");
}catch(e){}
            try {
o9.o10(9, o11, "x has last iteration's value");
}catch(e){}
        }
    },
    {
        name: "for-of does not execute loop body for null and undefined collections (i.e. before trying to call @@iterator)",
        o7: function () {
            try {
for (let o11 of null) {
                try {
o9.o18("loop body should not execute for null iterator");
}catch(e){}
            }
}catch(e){}

            try {
for (let o11 of undefined) {
                try {
o9.o18("loop body should not execute for undefined iterator");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "for-of throws TypeError for non-object iterator values",
        o7: function () {
            var o21 = { [Symbol.iterator]: function () { try {
return null;
}catch(e){} } };
            var o22 = { [Symbol.iterator]: function () { try {
return undefined;
}catch(e){} } };
            var o23 = { [Symbol.iterator]: function () { try {
return true;
}catch(e){} } };
            var o24 = { [Symbol.iterator]: function () { try {
return 10;
}catch(e){} } };
            var o25 = { [Symbol.iterator]: function () { try {
return "hello";
}catch(e){} } };
            var o26 = { [Symbol.iterator]: function () { try {
return Symbol();
}catch(e){} } };

            try {
o9.o12(function () { try {
for (let o11 of o21) { }
}catch(e){} }, o27, "for-of throws when @@iterator returns non-object; null", "Object expected");
}catch(e){}
            try {
o9.o12(function () { try {
for (let o11 of o22) { }
}catch(e){} }, o27, "for-of throws when @@iterator returns non-object; undefined", "Object expected");
}catch(e){}
            try {
o9.o12(function () { try {
for (let o11 of o23) { }
}catch(e){} }, o27, "for-of throws when @@iterator returns non-object; boolean", "Object expected");
}catch(e){}
            try {
o9.o12(function () { try {
for (let o11 of o24) { }
}catch(e){} }, o27, "for-of throws when @@iterator returns non-object; number", "Object expected");
}catch(e){}
            try {
o9.o12(function () { try {
for (let o11 of o25) { }
}catch(e){} }, o27, "for-of throws when @@iterator returns non-object; string", "Object expected");
}catch(e){}
            try {
o9.o12(function () { try {
for (let o11 of o26) { }
}catch(e){} }, o27, "for-of throws when @@iterator returns non-object; symbol", "Object expected");
}catch(e){}
        }
    },
    {
        name: "for-of throws TypeError for collection expressions that do not have an @@iterator method",
        o7: function () {
            try {
o9.o12(function () { try {
for (let o11 of { }) { }
}catch(e){} }, o27, "for-of throws when the collection object does not have an @@iterator property", "Object doesn't support property or method 'Symbol.iterator'");
}catch(e){}
            try {
o9.o12(function () { try {
for (let o11 of { [Symbol.iterator]: { } }) { }
}catch(e){} }, o27, "for-of throws when the collection object has an @@iterator property but the value is not a function", "Function expected");
}catch(e){}
            try {
o9.o12(function () { try {
for (let o11 of 0) { }
}catch(e){} }, o27, "for-of throws when the collection object does not have an @@iterator property; number literal", "Object doesn't support property or method 'Symbol.iterator'");
}catch(e){}
        }
    },
    {
        name: "for-of behavior when the special named properties are missing or iterator result is not an object",
        o7: function () {
            var o28 = { [Symbol.iterator]: function () { try {
return { };
}catch(e){} } };
            var o29 = { [Symbol.iterator]: function () { try {
return { next: function () { try {
return undefined;
}catch(e){} } };
}catch(e){} } };
            var o30 = { [Symbol.iterator]: function () { try {
return { next: function () { try {
return { };
}catch(e){} } };
}catch(e){} } };
            var o31 = { [Symbol.iterator]: function () { try {
return { next: function () { try {
return { done: false };
}catch(e){} } };
}catch(e){} } };

            try {
o9.o12(function () { try {
for (let o11 of o28) { }
}catch(e){} }, o27, "for-of throws TypeError if the iterator object does not have a next method", "Object doesn't support property or method 'next'");
}catch(e){}
            try {
o9.o12(function () { try {
for (let o11 of o29) { }
}catch(e){} }, o27, "for-of throws TypeError if the iterator object whose next method does not return an object", "Object expected");
}catch(e){}

            try {
for (let o11 of o30) {
                // infinite loop because no done property produces undefined which ToBooleans to false
                try {
o9.o10(undefined, o11, "x gets undefined because value is not defined on the iterator result");
}catch(e){}
                try {
break;
}catch(e){}
            }
}catch(e){}

            try {
for (let o11 of o31) {
                try {
o9.o10(undefined, o11, "x gets undefined because value is not defined on the iterator result");
}catch(e){}
                try {
break;
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "for-of parsing with interesting combinations of the pseudo keywords 'let' and 'of'",
        o7: function () {
            var o8 = [];
            var o4 = 0;
            try {
for (let of of o3) {
                try {
o8.push(of);
}catch(e){}
                try {
o9.o10(o4++, of, "of is the local loop variable of a for-of loop");
}catch(e){}
            }
}catch(e){}
            try {
o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");
}catch(e){}

            try {
o8 = [];
}catch(e){}
            try {
o4 = 0;
}catch(e){}
            try {
for (let of in { o32: 0, o33: 0, o34: 0 }) {
                try {
o8.push(of);
}catch(e){}
                try {
o9.o10('a' + o4++, of, "of is the local loop variable of a for-in loop");
}catch(e){}
            }
}catch(e){}
            try {
o9.o10(['a0', 'a1', 'a2'], o8, "verify the correct number of iterations occurred");
}catch(e){}

            // These two cases would be ambiguous if the spec allowed 'let' to start
            // the LHSExpression of the LHSExpression form of for-of loops
            //
            // for (let of of [0]) { }
            // for (let of of ([0])) { }
            try {
o8 = [];
}catch(e){}
            try {
o4 = 0;
}catch(e){}
            try {
for (let of of [0]) {
                try {
o8.push(of);
}catch(e){}
                try {
o9.o10(o4++, of, "of is the local loop variable of a for-of loop with array literal object expression");
}catch(e){}
            }
}catch(e){}
            try {
o9.o10([0], o8, "verify the correct number of iterations occurred");
}catch(e){}

            try {
o8 = [];
}catch(e){}
            try {
o4 = 0;
}catch(e){}
            try {
for (let of of ([0])) {
                try {
o8.push(of);
}catch(e){}
                try {
o9.o10(o4++, of, "of is the local loop variable of a for-of loop with parenthesized array literal object expression");
}catch(e){}
            }
}catch(e){}
            try {
o9.o10([0], o8, "verify the correct number of iterations occurred");
}catch(e){}


            // Make sure for loop still works using let to declare of variable
            try {
for (let of; false; ) { }
}catch(e){}
            try {
for (let of, o35; false; ) { }
}catch(e){}
            try {
for (let of = 10; false; ) { }
}catch(e){}

            // 'let' cannot be used as an identifier name at the beginning of the LHSExpression of a for-of
            // and thus 'for (let of' always parses as a let declaration of a variable named 'of'.
            try {
o9.o12(function () { try {
eval('for (let of simpleIterator) { }');
}catch(e){} }, o36, "'for (let of' is always parsed such that it is a let declaration of a variable named 'of'");
}catch(e){}
            try {
o9.o12(function () { try {
eval('for (let of of) { }');
}catch(e){} }, o36, "'for (let of' is always parsed such that it is a let declaration of a variable named 'of'");
}catch(e){}

            // Should still be able to use let identifier in LHSExpression via parentheses
            try {
o8 = [];
}catch(e){}
            try {
o4 = 0;
}catch(e){}
            var o37;
            try {
for ((o37) of o3) {
                try {
o8.push(o37);
}catch(e){}
                try {
o9.o10(o4++, o37, "let is the loop variable of a for-of loop, declared outside the for-of loop");
}catch(e){}
            }
}catch(e){}
            try {
o9.o10([0, 1, 2], o8, "verify the correct number of iterations occurred");
}catch(e){}
            try {
o9.o10(2, o37, "let is equal to the last iteration value");
}catch(e){}
        }
    },
    {
        name: "break and continue work correctly with nested and labels",
        o7: function () {
            var o19 = 0;
            var o20 = 0;

            try {
while (true) {
                try {
for (var o11 of o5) {
                    try {
o19++;
}catch(e){}

                    try {
if (o11 == 3 || o11 == 5 || o11 == 7)
                        try {
continue;
}catch(e){}
}catch(e){}

                    try {
o20++;
}catch(e){}

                    try {
if (o11 == 9)
                        try {
break;
}catch(e){}
}catch(e){}
                }
}catch(e){}

                // non-trivialize the while(true) loop's break
                // to avoid optimizing away the while loop.
                try {
if (o5)
                    try {
break;
}catch(e){}
}catch(e){}
            }
}catch(e){}

            try {
o9.o10(10, o19, "loop iterated 10 times");
}catch(e){}
            try {
o9.o10(7, o20, "loop continued 3 times");
}catch(e){}
            try {
o9.o10(9, o11, "x has last iteration's value");
}catch(e){}

            var o38 = 0;
            var o39 = 0;

            try {
o40: try {
for (var o11 of o5) {
                try {
o38++;
}catch(e){}

                try {
for (var o14 of o5) {
                    try {
o39++;
}catch(e){}

                    try {
if (o11 + o14 === 0)
                        try {
break;
}catch(e){}
}catch(e){}

                    try {
if (o11 + o14 === 1)
                        try {
continue;
}catch(e){}
}catch(e){}

                    try {
if (o14 === 1)
                        try {
continue o40;
}catch(e){}
}catch(e){}

                    try {
if (o11 === 2)
                        try {
break o40;
}catch(e){}
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
}catch(e){}

            try {
o9.o10(3, o38, "breaks and continues lead outer loop to execute 3 times");
}catch(e){}
            try {
o9.o10(4, o39, "breaks and continues lead inner loop to execute 4 times");
}catch(e){}

            var o41 = 0;
            var o42 = 0;
            var o43 = 0;
            try {
do {
                try {
o41++;
}catch(e){}
                try {
for (var o11 of o5) {
                    try {
o42++;
}catch(e){}
                    try {
for (var o4 = 0; true; o4++) {
                        try {
o43++;
}catch(e){}
                        try {
break;
}catch(e){}
                    }
}catch(e){}
                    try {
break;
}catch(e){}
                }
}catch(e){}
                try {
break;
}catch(e){}
            } while (true);
}catch(e){}

            try {
o9.o10(1, o41, "do-while executes once");
}catch(e){}
            try {
o9.o10(1, o42, "for-of executes once");
}catch(e){}
            try {
o9.o10(1, o43, "for executes once");
}catch(e){}
        }
    },
    {
        name: "expect AssignmentExpression after 'of'",
        o7: function () {
            try {
o9.o12(() => eval("for (let x of [], []);"), o36, "'for ( ForDeclaration of Expression )' is invalid", "Expected ')'")
}catch(e){}
            try {
o9.o12(() => eval("for (var x of [], []);"), o36, "'for ( var ForBinding of Expression )' is invalid", "Expected ')'")
}catch(e){}
            try {
o9.o12(() => eval("let x; for (x of [], []);"), o36, "'for ( LeftHandSideExpression of Expression )' is invalid", "Expected ')'")
}catch(e){}
        }
    },
];

try {
o44.o45(o6, { o46: o0.o47[0] != "summary" });
}catch(e){}
