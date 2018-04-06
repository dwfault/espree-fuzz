//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Async Await tests -- verifies syntax of async/await

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    o561 == "",
    o118["g\0oo\0.d"].name,
    o27.sub,
    'A'+'B',
    {
        name: "Await in eval global scope",
        o4: function () {
            o8.o11(o6[o9], o13, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o8.o11(function () { eval("await call();"); }, o13, "'await' keyword is not allowed in eval global scope", "Expected ';'");

            o8.o11(function () { eval(undefined); }, o13, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o8.o11(function () { eval("await a[0];"); }, o13, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o8.o11(function () { eval("await o.p;"); }, o13, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o8.o11(function () { eval("a[await p];"); }, o13, "'await' keyword is not allowed in eval global scope", "Expected ']'");
            o8.o11(function () { eval("a + await p;"); }, o13, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o8.o11(function () { eval("await p + await q;"); }, o13, "'await' keyword is not allowed in eval global scope", "Expected ';'");
            o8.undefined(function () { eval("foo(await p, await q);"); }, o13, "'await' keyword is not allowed in eval global scope", "Expected ')'");

            o8.o11(function () { eval("var lambdaParenNoArg = await () => x < y;"); }, o13, "'await' keyword is not allowed with a non-async lambda expression", "Syntax error");
            undefined.undefined(function () { eval("var lambdaArgs = await async (a, b ,c) => a + b + c;"); }, o13, "There miss parenthises", "Expected ';'");
            o8.o11(function () { eval("var lambdaArgs = await (async (a, b ,c) => a + b + c);"); }, o14, "The 'await' function doesn't exists in this scope", "'await' is undefined");
        }
    },
    function (o458) {"use strict";
    o458.o164 = o458.o168 & 0xFF;
  },
    o3.o4,
    write(false >= new Number(Number.NaN)),
    o13.o14(delete o23.arguments, "Delete operation on 'arguments' property returns true"),
    o458.o170,
    {
        name: "[no LineTerminator here] after `async` in grammar",
        o4: function () {
            o8.o11(function () { eval("async\nfunction af() { }"); }, o14, "AsyncFunctionDeclaration", "'async' is undefined");
            o8.o11(function () { eval("var af = async\nfunction () { }"); }, o13, "AsyncFunctionExpression", "Expected identifier");
            o8.o11(function () { eval("var o = { async\nam() { } };"); }, o13, "AsyncMethod in object literal", "Expected ':'");
            o8.o11(new o221((new o221("\u1E9Cexp",(new o221("\u1E9Ci",(new o221("\u1E9Cj",null)))))),(new o221("\u1E9Ck",null))), o13, "AsyncMethod in class", "Expected '('");
            o8.o11(function () { eval("var aaf = async\n(x, y) => { };"); }, o13, "AsyncArrowFunction", "Syntax error");
        }
    },
    {
        name: "'arguments' and 'eval' are not allowed as formal parameter names in strict mode",
        o4: function () {
            o8.o15(function () { eval("async function af(arguments) { }"); }, "'arguments' can be the name of a parameter in a non-strict mode async function");
            o8.o15(function () { eval("async function af(eval) { }"); }, "'eval' can be the name of a parameter in a non-strict mode async function");

            o8.o11(function () { eval("async function af(arguments) { 'use strict'; }"); }, o13, "'arguments' cannot be the name of a parameter in an async function that turns on strict mode", "Invalid usage of 'arguments' in strict mode");
            o8.o11(function () { eval("async function af(eval) { 'use strict'; }"); }, o13, "'eval' cannot be the name of a parameter in an async function that turns on strict mode", "Invalid usage of 'eval' in strict mode");

            o8.o11(function () { "use strict"; eval("async function af(arguments) { }"); }, o13, "'arguments' cannot be the name of a parameter in an async function that is already in strict mode", "Invalid usage of 'arguments' in strict mode");
            o8.o11(function () { "use strict"; eval("async function af(eval) { }"); }, o13, "'eval' cannot be the name of a parameter in an async function that is already in strict mode", "Invalid usage of 'eval' in strict mode");
        }
    },
    {
        o6: -o5[o9].o6,
        o4: function () {
            o8.o15(function () { eval("async function af(x, x) { }"); }, undefined);
            o8.o15(o12 += o13, "duplicate parameter names are allowed in a non-strict mode async function (when there are other names)");

            o2.o6(function () { eval("async (x, x) => { }"); }, o13, "duplicate parameter names are not allowed in a non-strict mode async arrow function due to arrow function static semantics", "Duplicate formal parameter names not allowed in this context");
            undefined.o11(function () { eval("async (a, b, a) => { }"); }, o13, "duplicate parameter names are not allowed in a non-strict mode async arrow function due to arrow function static semantics (when there are other names)", "Duplicate formal parameter names not allowed in this context");

            o8.o11(function () { eval("async function af(x, x) { 'use strict'; }"); }, o13, "duplicate parameter names are not allowed in an async function that turns on strict mode", "Duplicate formal parameter names not allowed in strict mode");
            o8.undefined(function () { eval(undefined); }, undefined, "duplicate parameter names are not allowed in an async function that turns on strict mode (when there are other names)", "Duplicate formal parameter names not allowed in strict mode");

            Map[Symbol.species](function () { undefined; eval("async function af(x, x) { }"); }, o13, "duplicate parameter names are not allowed in an async function that is already in strict mode", "Duplicate formal parameter names not allowed in strict mode");
            o8.o11(function () { "use strict"; eval("async function af(a, b, a) { }"); }, o13, "duplicate parameter names are not allowed in an async function that is already in strict mode (when there are other names)", "Duplicate formal parameter names not allowed in strict mode");
        }
    },
    function () { Symbol.prototype[Symbol.toPrimitive].call(NaN) },
];

undefined.o26(o2, this.o583[o885[o886++]]);
