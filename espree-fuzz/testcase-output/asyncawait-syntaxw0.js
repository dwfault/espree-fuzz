//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Async Await tests -- verifies syntax of async/await

o0.o4("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Async and Await keyword as identifier",
        o3: function () {
            var o4 = [2, 3, 4];
            var o5 = 3;
            var o6 = { o4asynco4 };
            o6.o4 = 0;

            o7.o8(2, o4[0], "async[0] === 2");
            o7.o8(3, o5, "await === 3");
            o7.o8(0, o6.o4, "o.async === 0");
        }
    },
    {
        name: "Await keyword as identifier",
        o3: function () {
            function o9() {
                var o5 = 1;
                return o5;
            }
            function o5() {
                return 2;
            }

            o7.o8(1, o9(), "method() === 1");
            o7.o8(2, o5(), "await() === 2");

            o7.o10(function () { eval("async function method() { var await = 1; }"); }, o11, "'await' cannot be used as an identifier in an async function.", "The use of a keyword for an identifier is invalid");
            o7.o10(function () { eval("async function method(await;) { }"); }, o11, "'await' cannot be used as an identifier in an async function.", "The use of a keyword for an identifier is invalid");
            o7.o10(function () { eval("async function method() { var x = await; }"); }, o11, "'await' cannot be used as an identifier in an async function.", "Syntax error");
        }
    },
    {
        name: "Async keyword as generator",
        o3: function () {
            o7.o10(function () { eval("async function* badFunction() { }"); }, o11, "'async' keyword is not allowed with a generator in a statement", "Syntax error");
            o7.o10(function () { eval("var badVariable = async function*() { }"); }, o11, "'async' keyword is not allowed with a generator in an expression", "Syntax error");
            o7.o10(function () { eval("var o { async *badFunction() { } };"); }, o11, "'async' keyword is not allowed with a generator in a object literal member", "Expected ';'");
            o7.o10(function () { eval("class C { async *badFunction() { } };"); }, o11, "'async' keyword is not allowed with a generator in a class member", "Syntax error");
        }
    },
    {
        name: "Async classes",
        o3: function () {
            o7.o10(function () { eval("class A { async constructor() {} }"); }, o11, "'async' keyword is not allowed with a constructor", "Syntax error");
            o7.o10(function () { eval("class A { async get foo() {} }"); }, o11, "'async' keyword is not allowed with a getter", "Syntax error");
            o7.o10(function () { eval("class A { async set foo() {} }"); }, o11, "'async' keyword is not allowed with a setter", "Syntax error");
            o7.o10(function () { eval("class A { async static staticAsyncMethod() {} }"); }, o11, "'async' keyword is not allowed before a static keyword in a function declaration", "Expected '('");
            o7.o10(function () { eval("class A { static async prototype() {} }"); }, o11, "static async method cannot be named 'prototype'", "Syntax error");
        }
    },
    {
        name: "Await in eval global scope",
        o3: function () {
            o7.o10(function () { eval("var result = await call();"); }, o11, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o7.o10(function () { eval("await call();"); }, o11, "'await' keyword is not allowed in eval global scope", "Expected ';'");

            o7.o10(function () { eval("await a;"); }, o11, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o7.o10(function () { eval("await a[0];"); }, o11, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o7.o10(function () { eval("await o.p;"); }, o11, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o7.o10(function () { eval("a[await p];"); }, o11, "'await' keyword is not allowed in eval global scope", "Expected ']'");
            o7.o10(function () { eval("a + await p;"); }, o11, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o7.o10(function () { eval("await p + await q;"); }, o11, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o7.o10(function () { eval("foo(await p, await q);"); }, o11, "'await' keyword is not allowed in eval global scope", "Expected ')'");

            o7.o10(function () { eval("var lambdaParenNoArg = await () => x < y;"); }, o11, "'await' keyword is not allowed with a non-async lambda expression", "Syntax error");
            o7.o10(function () { eval("var lambdaArgs = await async (a, b ,c) => a + b + c;"); }, o11, "There miss parenthises", "Expected ';'");
            o7.o10(function () { eval("var lambdaArgs = await (async (a, b ,c) => a + b + c);"); }, o12, "The 'await' function doesn't exists in this scope", "'await' is undefined");
        }
    },
    {
        name: "Await in a non-async function",
        o3: function () {
            o7.o10(function () { eval("function method() { var x = await call(); }"); }, o11, "'await' cannot be used in a non-async function.", "Expected ';'");
        }
    },
    {
        name: "Await in strict mode",
        o3: function () {
            "strict mode";
            o7.o13(function () { eval("function f() { var await; }"); }, "Can name var variable 'await' in non-generator body");
            o7.o13(function () { eval("function f() { let await; }"); }, "Can name let variable 'await' in non-generator body");
            o7.o13(function () { eval("function f() { const await = 10; }"); }, "Can name const variable 'await' in non-generator body");

            o7.o13(function () { eval("function f() { function await() { } }"); }, "Can name function 'await' in non-generator body");
            o7.o13(function () { eval("function f() { function* await() { } }"); }, "Can name generator function 'await' in non-generator body");
            o7.o13(function () { eval("function f() { var fe = function await() { } }"); }, "Can name function expression 'await' in non-generator body");

            o7.o13(function () { eval("function f() { class await { } }"); }, "Can name class 'await' in non-generator body");

            o7.o13(function () { eval("function f() { var o = { await: 10 } }"); }, "Can name object literal property 'await' in non-generator body");
            o7.o13(function () { eval("function f() { var o = { get await() { } } }"); }, "Can name accessor method 'await' in non-generator body");
            o7.o13(function () { eval("function f() { var o = { await() { } } }"); }, "Can name concise method 'await' in non-generator body");
            o7.o13(function () { eval("function f() { var o = { *await() { } } }"); }, "Can name generator concise method 'await' in non-generator body");
            o7.o13(function () { eval("function f() { var await = 10; var o = { await }; }"); }, "Can name shorthand property 'await' in non-generator body");
            o7.o13(function () { eval("function f() { class C { await() { } } }"); }, "Can name method 'await' in non-generator body");
            o7.o13(function () { eval("function f() { class C { *await() { } } }"); }, "Can name generator method 'await' in non-generator body");
        }
    },
    {
        name: "Async function is not a constructor",
        o3: function () {
            async function o14() { }

            o7.o15(o14.hasOwnProperty('prototype'), "An async function does not have a property named 'prototype'.");

            o7.o10(function () { eval("new foo();"); }, o16, "An async function cannot be instantiated because it is not have a constructor.", "Function is not a constructor");
        }
    },
    {
        name: "async lambda parsing",
        o3: function () {
            var o17 = o4 => o4;
            o7.o8(42, o17(42), "async used as single parameter name for arrow function still works with async feature turned on");

            var o18 = async () => { };
            var o19 = async o20 => o20;
            var o21 = async (o17, o18) => { };
        }
    },
    {
        name: "It is a Syntax Error if FormalParameters Contains AwaitExpression is true",
        o3: function () {
            o7.o10(function () { eval("async function af(a, b = await a) { }"); }, o11, "await expressions not allowed in non-strict async function", "'await' expression not allowed in this context");
            o7.o10(function () { eval("async function af(a, b = await a) { 'use strict'; }"); }, o11, "await expressions not allowed in self-strict async function", "'await' expression not allowed in this context");
            o7.o10(function () { "use strict"; eval("async function af(a, b = await a) { }"); }, o11, "await expressions not allowed in parent-strict async function", "'await' expression not allowed in this context");

            o7.o13(function () { eval("function f(a = async function (x) { await x; }) { a(); } f();"); }, "await is allowed within the body of an async function that appears in a default parameter value expression");

            o7.o10(function () { eval("async function af(x) { function f(a = await x) { } f(); } af();"); }, o11, "await expression is not available within non-async function parameter default expression", "Expected ')'");
        }
    },
    {
        name: "[no LineTerminator here] after `async` in grammar",
        o3: function () {
            o7.o10(function () { eval("async\nfunction af() { }"); }, o12, "AsyncFunctionDeclaration", "'async' is undefined");
            o7.o10(function () { eval("var af = async\nfunction () { }"); }, o11, "AsyncFunctionExpression", "Expected identifier");
            o7.o10(function () { eval("var o = { async\nam() { } };"); }, o11, "AsyncMethod in object literal", "Expected ':'");
            o7.o10(function () { eval("class C { async\nam() { } };"); }, o11, "AsyncMethod in class", "Expected '('");
            o7.o10(function () { eval("var aaf = async\n(x, y) => { };"); }, o11, "AsyncArrowFunction", "Syntax error");
        }
    },
    {
        name: "'arguments' and 'eval' are not allowed as formal parameter names in strict mode",
        o3: function () {
            o7.o13(function () { eval("async function af(arguments) { }"); }, "'arguments' can be the name of a parameter in a non-strict mode async function");
            o7.o13(function () { eval("async function af(eval) { }"); }, "'eval' can be the name of a parameter in a non-strict mode async function");

            o7.o10(function () { eval("async function af(arguments) { 'use strict'; }"); }, o11, "'arguments' cannot be the name of a parameter in an async function that turns on strict mode", "Invalid usage of 'arguments' in strict mode");
            o7.o10(function () { eval("async function af(eval) { 'use strict'; }"); }, o11, "'eval' cannot be the name of a parameter in an async function that turns on strict mode", "Invalid usage of 'eval' in strict mode");

            o7.o10(function () { "use strict"; eval("async function af(arguments) { }"); }, o11, "'arguments' cannot be the name of a parameter in an async function that is already in strict mode", "Invalid usage of 'arguments' in strict mode");
            o7.o10(function () { "use strict"; eval("async function af(eval) { }"); }, o11, "'eval' cannot be the name of a parameter in an async function that is already in strict mode", "Invalid usage of 'eval' in strict mode");
        }
    },
    {
        name: "duplicate formal parameter names are not allowed in strict mode",
        o3: function () {
            o7.o13(function () { eval("async function af(x, x) { }"); }, "duplicate parameter names are allowed in a non-strict mode async function");
            o7.o13(function () { eval("async function af(a, b, a) { }"); }, "duplicate parameter names are allowed in a non-strict mode async function (when there are other names)");

            o7.o10(function () { eval("async (x, x) => { }"); }, o11, "duplicate parameter names are not allowed in a non-strict mode async arrow function due to arrow function static semantics", "Duplicate formal parameter names not allowed in this context");
            o7.o10(function () { eval("async (a, b, a) => { }"); }, o11, "duplicate parameter names are not allowed in a non-strict mode async arrow function due to arrow function static semantics (when there are other names)", "Duplicate formal parameter names not allowed in this context");

            o7.o10(function () { eval("async function af(x, x) { 'use strict'; }"); }, o11, "duplicate parameter names are not allowed in an async function that turns on strict mode", "Duplicate formal parameter names not allowed in strict mode");
            o7.o10(function () { eval("async function af(a, b, a) { 'use strict'; }"); }, o11, "duplicate parameter names are not allowed in an async function that turns on strict mode (when there are other names)", "Duplicate formal parameter names not allowed in strict mode");

            o7.o10(function () { "use strict"; eval("async function af(x, x) { }"); }, o11, "duplicate parameter names are not allowed in an async function that is already in strict mode", "Duplicate formal parameter names not allowed in strict mode");
            o7.o10(function () { "use strict"; eval("async function af(a, b, a) { }"); }, o11, "duplicate parameter names are not allowed in an async function that is already in strict mode (when there are other names)", "Duplicate formal parameter names not allowed in strict mode");
        }
    },
    {
        name: "local variables with same names as formal parameters have proper redeclaration semantics",
        o3: function () {
            o7.o13(function () { eval("async function af(x) { var x; }"); }, "var with same name as formal is not an error");
            o7.o10(function () { eval("async function af(x) { let x; }"); }, o11, "let with same name as formal is an error", "Let/Const redeclaration");
            o7.o10(function () { eval("async function af(x) { const x = 1; }"); }, o11, "const with same name as formal is an error", "Let/Const redeclaration");
            o7.o13(function () { eval("async function af(x) { function x() { } }"); }, "local function with same name as formal is not an error");
            o7.o10(function () { eval("async function af(x) { class x { } }"); }, o11, "class with same name as formal is an error", "Let/Const redeclaration");
        }
    },
];

o22.o23(o2, { o24: o0.o25[0] != "summary" });
