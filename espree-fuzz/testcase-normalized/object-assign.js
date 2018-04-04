//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Object.is(x,y) API extension tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Object.assign should exist and have length 2",
        o4: function () {
            o5.o6(Object.hasOwnProperty('assign'), "Object should have an assign method");
            o5.o9(2, Object.assign.length, "assign method takes two arguments");
        }
    },
    {
        name: "Object.assign(o1, ...) should call ToObject on its sources",
        o4: function () {
            o5.o9({}, Object.assign(1), "Call ToObject on target");
            o5.o9({}, Object.assign(1, 2, 3), "Call ToObject on target and sources");
            o5.o9({}, Object.assign({}, 2, 3), "Call ToObject on sources");
        }
    },

    {
        name: "Object.assign(object, null) and Object.assign(object, undefined) are no-op",
        o4: function () {
            o5.o9({ o12: 1 }, Object.assign({ o12: 1 }, undefined), "Passing undefined as nextSource in assign method is a no-op");
            o5.o9({ o12: 1 }, Object.assign({ o12: 1 }, null), "Passing null as nextSource in assign method is a no-op");
        }
    },
    {
        name: "Object.assign(target) returns target",
        o4: function () {
            var o14 = {o15:10, o16:20, o17:30}
            o5.o6(o14 === Object.assign(o14), "Object.assign(target) should return the same object");
            o5.o6(o14 === Object.assign(o14, { o12: 1 }), "Object.assign(target, source) should return the same object");
            o5.o6(o14 === Object.assign(o14, { o18: 2 }, { o19: 3 }), "Object.assign(target, source1, source2) should return the same object");
        }
    },
    {
        name: "Object.assign({}, object) clone should work",
        o4: function () {
            o5.o9({ o12: 1 }, Object.assign({}, { o12: 1 }), "Create a clone of a object");
            o5.o9([1], Object.assign({}, [1]), "Create a clone of a array");
            o5.o9(new String("hello"), Object.assign({}, new String("hello")), "Create a clone of a string");
        }
    },
    {
        name: "Object.assign(o1, o2, o3) Merging objects should work",
        o4: function () {
            o5.o9({ o12: 1, o18: 2}, Object.assign({ o12: 1 }, { o18: 2 }), "Merging 2 plain objects should work");
            o5.o9({ o12: 1, o18: 2, o19: 3 }, Object.assign({ o12: 1 }, { o18: 2 }, { o19: 3 }), "Merging 3 plain objects should work");
            o5.o9({ o12: 1, o18: 2, o19: 3, o21: 4 }, Object.assign({ o12: 1 }, { o18: 2 }, { o19: 3 }, { o21: 4 }), "Merging 4 plain objects should work");
        }
    },
    {
        name: "Object.assign(o1, o2, o3) overlapping property names should preference last set",
        o4: function () {
            o5.o9({ o12: 2 }, Object.assign({ o12: 1 }, { o12: 2 }), "Merging 2 plain objects with the overlapping property name should work");
            o5.o9({ o12: 1, o18: 2, o19: 3, o17: 3 }, Object.assign({ o12: 1, o17: 1 }, { o18: 2, o17: 2 }, { o19: 3, o17: 3 }), "Merging 3 plain objects with overlapping property name should work");
        }
    },
    {
        name: "Object.assign(o1, o2) throw exception if GetOwnProperty for any enumerable property in o2 if enumeration fails",
        o4: function () {
            try
            {
                Object.assign({}, { get o15() { throw "xyz"; } });
                o5.o22("Exception is not thrown when GetOwnProperty fails");
            }
            catch (o23)
            {
            }
        }
    },
    {
        name: "Object.assign(o1, o2) exception if SetProperty for any enumerable property in o2 if enumeration fails",
        o4: function () {
            try {
                Object.assign({ set o15(o12) { throw "xyz"; } }, { o15: 10 });
                o5.o22("Exception is not thrown when SetProperty fails");
            }
            catch (o23) {
            }
        }
    },
    {
        name: "Object.assign(o1, o2, o2) should work on undefined values",
        o4: function () {
            o5.o9({o15: undefined}, Object.assign({}, {o15 : 40}, { o15: undefined }), "Undefined values for the property keys are propagated");
        }
    },
    {
        name: "Object.assign(o1, o2, o2) ignore non-enumerable values",
        o4: function () {
            var o24 = { o16: 40 };
            Object.defineProperty(o24, "x", {value: 50, enumerable:false})
            o5.o9({o16: 40}, Object.assign({}, o24), "Non enumerable values are not ignored");
        }
    },
    {
        name: "Object.assign(Object.create(Array.prototype), o2) create pattern",
        o4: function () {
            o5.o9({ o15: 10, o16: 40 }, Object.assign(Object.create(Array.prototype), { o15: 10, o16: 40 }), "Object.create pattern should work ");
        }
    },
    {
        name: "Object.assign(o1, o2) works for symbols",
        o4: function () {
            var o24 = {};
            var o16 = Symbol("y");
            o24[o16] = 10;
            o5.o6((Object.assign({}, o24))[o16] === 10, "Symbols are assigned to target object ");
        }
    },
    {
        name: "Object.assign(o1, o2) works for index properties",
        o4: function () {
            o5.o9([1, 2, 3], Object.assign([], [1, 2, 3]), "Indexed properties are assigned to the target object");
        }
    },
    {
        name: "Object.assign(o1, o2) exception if SetProperty fails due to preventExtentions on o1",
        o4: function () {
                o5.o32((function() { 'use strict'; var o14 = Object.preventExtensions([,0]);Object.assign(o14,'xo');}), o34, "Invalid operand to 'Object.assign': Object expected");
        }
    },
    {
        name: "OS Bug 3080673: Object.assign(o1, o2) exception if SetProperty fails due to non-writable on o1 when o1's value is a String",
        o4: function () {
            o5.o32((function() {
                    var o35 = "aaa";
                    var o24 = "babbb";
                    Object.assign(o35, o24);
            }), o34, "Exception is not thrown when SetProperty fails", "Cannot modify non-writable property '0'");
        }
    },

];

o36.o37(o2, { o38: o0.o39[0] != "summary" });
