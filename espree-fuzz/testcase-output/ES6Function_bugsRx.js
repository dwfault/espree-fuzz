//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests from bugfixes

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "OS1558391: assignment to 'length' after defineProperty with getter function should not trigger assertion",
        o3: function() {
            var o40 = o9(3, 4)
            Object.defineProperty(o4, 'length', {
                get: function () { }
            });
            o5.o6(function () { o4.length = 1; }, "assertion failure on assignment to 'length' after defineProperty with getter");
         }
    },
    o10.o11(true, '' instanceof o14, "'' instanceof O"),
    {
        name: "OS1658052: defineProperty with value after sealing a function object should not trigger assertion",
        o3: function() {
            function o7(name) {
                var o4=function () { }
                Object.seal(o4);
                Object.defineProperty(o4, name, {
                    value: 0
                    });
            }
            o5.o6(function () { o7('length') }, "assertion failure on defineProperty 'length' with value after sealing a function object");
            o5.o8(function () { o7('arguments') }, o9, "Cannot redefine non-configurable property 'arguments'");
            o5.o8(function () { o7('caller') }, o9, "Cannot redefine non-configurable property 'caller'");
         }
    },
    {
        name: "OS1893544: defineProperty with {writable: false, configurable:true} after defineProperty with getter on a function object should not trigger assertion",
        o3: function() {
            function o7(name) {
                var o4=function () { }
                Object.defineProperty(o4, name, {
                    get: function () { },
                    });
                Object.defineProperty(o4, name, {
                    writable: false,
                    configurable: true
                    });
            }
            o5.o6(function () { o7('length') }, "assertion failure on defineProperty 'length' with {writable: false, configurable:true} after defineProperty with getter on a function object");
            o5.o8(function () { o7('arguments') }, o9, "Cannot redefine non-configurable property 'arguments'");
            o5.o8(function () { o7('caller') }, o9, "Cannot redefine non-configurable property 'caller'");
         }
    },
];

o10.o11(o2, { o12: o0.o13[0] != "summary" });

