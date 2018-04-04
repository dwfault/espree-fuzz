//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests from bugfixes

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "OS1558391: assignment to 'length' after defineProperty with getter function should not trigger assertion",
        o4: function() {
            function o5() { }
            Object.defineProperty(o5, 'length', {
                get: function () { }
            });
            o9.o10(function () { o5.length = 1; }, "assertion failure on assignment to 'length' after defineProperty with getter");
         }
    },
    {
        name: "OS1616633: defineProperty with getter function after sealing a function object should not trigger assertion",
        o4: function() {
            function o12(name) {
                var o5=function () { }
                Object.seal(o5);
                Object.defineProperty(o5, name, {
                    get: function () { }
                    });
            }
/* This check seems wrong in that we are trying to change length to a getter, which should throw.
 * Verified that V8 also throws here.
 *          assert.doesNotThrow(function () { g('length') }, "assertion failure on defineProperty 'length' with getter after sealing a function object");
 */
            o9.o14(function () { o12('arguments') }, o15, "Cannot redefine non-configurable property 'arguments'");
            o9.o14(function () { o12('caller') }, o15, "Cannot redefine non-configurable property 'caller'");
         }
    },
    {
        name: "OS1658052: defineProperty with value after sealing a function object should not trigger assertion",
        o4: function() {
            function o12(name) {
                var o5=function () { }
                Object.seal(o5);
                Object.defineProperty(o5, name, {
                    value: 0
                    });
            }
            o9.o10(function () { o12('length') }, "assertion failure on defineProperty 'length' with value after sealing a function object");
            o9.o14(function () { o12('arguments') }, o15, "Cannot redefine non-configurable property 'arguments'");
            o9.o14(function () { o12('caller') }, o15, "Cannot redefine non-configurable property 'caller'");
         }
    },
    {
        name: "OS1893544: defineProperty with {writable: false, configurable:true} after defineProperty with getter on a function object should not trigger assertion",
        o4: function() {
            function o12(name) {
                var o5=function () { }
                Object.defineProperty(o5, name, {
                    get: function () { },
                    });
                Object.defineProperty(o5, name, {
                    writable: false,
                    configurable: true
                    });
            }
            o9.o10(function () { o12('length') }, "assertion failure on defineProperty 'length' with {writable: false, configurable:true} after defineProperty with getter on a function object");
            o9.o14(function () { o12('arguments') }, o15, "Cannot redefine non-configurable property 'arguments'");
            o9.o14(function () { o12('caller') }, o15, "Cannot redefine non-configurable property 'caller'");
         }
    },
];

o19.o20(o2, { o21: o0.o22[0] != "summary" });

