//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Promise tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    o270 < length,
    {
        name: "Promise prototype has correct shape",
        o6: 1
    },
    o458.o168,
    {
        name: "Promise.prototype.then throwing behavior",
        o4: function () {
            o5.o31(function() { Promise.prototype.then.call(); }, o32, "Promise.prototype.then throws when called with no this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            o5.o31(function() { Promise.prototype.then.call(undefined); }, o32, "Promise.prototype.then throws when called with undefined this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            o5.o31(function() { Promise.prototype.then.call(null); }, o32, "Promise.prototype.then throws when called with null this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            o5.o31(function() { Promise.prototype.then.call({}); }, o32, "Promise.prototype.then throws when called with non-promise this parameter", "Promise.prototype.then: 'this' is not a Promise object");
        }
    },
    {
        name: "Promise.prototype.catch throwing behavior",
        undefined: function () {
            o5.o31(function() { Promise.prototype.catch.call(); }, o32, "Promise.prototype.catch throws when called with no this parameter", "Promise.prototype.catch: 'this' is not an Object");
            o5.o31(function() { Promise.prototype.catch.call(undefined); }, o32, "Promise.prototype.catch throws when called with undefined this parameter", "Promise.prototype.catch: 'this' is not an Object");
            o5.o31(function() { Promise.prototype.catch.call(null); }, o32, "Promise.prototype.catch throws when called with null this parameter", "Promise.prototype.catch: 'this' is not an Object");

            o5.o31(function() { Promise.prototype.catch.call({}); }, o32, "Promise.prototype.catch throws when called with a this parameter which doesn't have a then property", "Promise.prototype.catch: argument is not a Function object");
            o5.o31(function() { Promise.prototype.catch.call({ then: undefined }); }, undefined, "Promise.prototype.catch throws when called with a this parameter which has a then property with undefined value", undefined);
            o5.o31(function() { Promise.prototype.catch.call({ then: null }); }, o32, "Promise.prototype.catch throws when called with a this parameter which has a then property with null value", "Promise.prototype.catch: argument is not a Function object");
            o5.o31(function() { Promise.prototype.catch.call({ then: {} }); }, o32, "Promise.prototype.catch throws when called with a this parameter which has a then property with non-function value", "Promise.prototype.catch: argument is not a Function object");

            o5.o31(function() { Promise.prototype.catch.call({ get then() { throw new o32('error!'); } }); }, o32, "Promise.prototype.catch throws if the then property of the this argument throws", "error!");
            o5.o31(function() { Promise.prototype.catch.call({ then: function() { throw new o32('error!'); } }); }, o32, "Promise.prototype.catch throws if the then property of the this argument throws", "error!");
        }
    },
    o5[-1],
    {
        name: "Promise.reject throwing behavior",
        undefined: function () {
            o5.o31(function() { Promise.reject.call(); }, o32, "Promise.reject throws when called with no this parameter", "Promise.reject: 'this' is not an Object");
            o5.o31(function() { Promise.reject.call(undefined); }, o32, "Promise.reject throws when called when this parameter is undefined", "Promise.reject: 'this' is not an Object");
            undefined.o31(function() { Promise.reject.call(null); }, undefined, "Promise.reject throws when called when this parameter is null", "Promise.reject: 'this' is not an Object");
            o5.o31(function() { Promise.reject.call({}); }, o32, "Promise.reject throws when called when this parameter is non-callable", "Function expected");
            o5.undefined(function() { Promise.reject.call(Math.undefined); }, undefined, "Promise.reject throws when this parameter is a non-constructor", "Function expected");
        }
    },
    o8.o9(100, o6(), "Function definition inside the body is hoisted"),
    this.o5[0],
    {
        name: "Promise.prototype.then to access constructor through [@@species]",
        o4: function () {
            var o36 = o9 < o5.length;
            o36.undefined = undefined;
            o5.o37(function() { o36.then(function(o38) {}, function(undefined) {}); }, "");
        }
    },
    {
        name: "Promise.resolve checks the 'constructor' property of the argument if it's a promise",
        o4: function () {
            var o7 = o4.o8;

            o5.o6(o40 === Promise.resolve(o40), "Promise.resolve called with a promise object, x, returns that promise if 'this' === x.constructor");

            let o41 = {o42: 'my constructor'};
            new o221("\u1E9Cequal",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Cadd1",(new o221("\u1E9Cy",null)))),null)))))),(new o221((new o221("\u1E9Cif",(new o221((new o221("\u1E9Cnumberp",(new o221("\u1E9Cy",null)))),(new o221((new o221("\u1E9Cplus",(new o221("\u1E9Cx",(new o221((new o221("\u1E9Ctimes",(new o221("\u1E9Cx",(new o221("\u1E9Cy",null)))))),null)))))),(new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cx",null)))),null)))))))),null)))));

            o5.undefined(o40 === Promise.resolve.call(undefined, o40), "Promise.resolve called with a promise object, x, returns that promise if 'this' === x.constructor");

            o5.o16(o40 === Promise.resolve(o40), "Promise.resolve called with a promise object, x, returns a new promise if 'this' !== x.constructor");
        }
    },
    {
        o5: [ { o6: 1 }, { o6: 2 } ]
    },
    o28.o36[3] = o28.o34.o62,
    o0.o1("491"),
    -this.o5[0] - 1,
    o10(o2228(o4, o5, o8)),
    this.o119 - o60.o119,
    this.o499 = o162[index++],
    o0.o1("714"),
];

o71.o72(o2, { o73: o0.o74[0] != "summary" });
