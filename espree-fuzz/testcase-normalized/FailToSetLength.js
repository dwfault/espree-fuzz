//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Some of the Array.prototype built-in functions set the length property of the array object and
// should throw a TypeError if setting the length property fails. Tests in this file verify that
// we throw TypeError when we're supposed to.
// See BLUE: 559834 for more details

if (this.o0 && this.o0.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

var o2 = [
    {
        name: "Array.prototype built-in functions called with object that has length property with no setter",
        o4: function () {
            var o5 = { 0: 0, 1: 1, get length() { return 2; }};

            o7.o8(function() { Array.prototype.pop.call(o5); }, o13, "Array.prototype.pop throws when obj has a getter for length but is missing a setter", "Cannot define property: object is not extensible");
            o7.o8(function() { Array.prototype.push.call(o5, 2); }, o13, "Array.prototype.push throws when obj has a getter for length but is missing a setter", "Cannot define property: object is not extensible");
            o7.o8(function() { Array.prototype.shift.call(o5); }, o13, "Array.prototype.shift throws when obj has a getter for length but is missing a setter", "Cannot define property: object is not extensible");
            o7.o8(function() { Array.prototype.unshift.call(o5, 2); }, o13, "Array.prototype.unshift throws when obj has a getter for length but is missing a setter", "Cannot define property: object is not extensible");
            o7.o8(function() { Array.prototype.splice.call(o5, 0, 1); }, o13, "Array.prototype.splice throws when obj has a getter for length but is missing a setter", "Cannot define property: object is not extensible");
        }
    },
    {
        name: "Array.prototype built-in functions called with object that has length property with no setter and length property has zero value",
        o4: function () {
            var o5 = { 0: 0, 1: 1, get length() { return 0; }};

            o7.o8(function() { Array.prototype.pop.call(o5); }, o13, "Array.prototype.pop throws when obj has a getter for length which returns zero", "Cannot define property: object is not extensible");
            o7.o8(function() { Array.prototype.push.call(o5, 2); }, o13, "Array.prototype.push throws when obj has a getter for length which returns zero", "Cannot define property: object is not extensible");
            o7.o8(function() { Array.prototype.shift.call(o5); }, o13, "Array.prototype.shift throws when obj has a getter for length which returns zero", "Cannot define property: object is not extensible");
            o7.o8(function() { Array.prototype.unshift.call(o5, 2); }, o13, "Array.prototype.unshift throws when obj has a getter for length which returns zero", "Cannot define property: object is not extensible");
            o7.o8(function() { Array.prototype.splice.call(o5, 0, 1); }, o13, "Array.prototype.splice throws when obj has a getter for length which returns zero", "Cannot define property: object is not extensible");
        }
    },
    {
        name: "Array.prototype built-in functions called with object that has length property which is non-configurable and non-writable",
        o4: function () {
            var o5 = { 0: 0, 1: 1 };
            Object.defineProperty(o5, "length", { value: 2, writable: false, configurable: false });

            o7.o8(function() { Array.prototype.pop.call(o5); }, o13, "Array.prototype.pop throws when obj has a length property which is not writable and not configurable", "Object doesn't support this action");
            o7.o8(function() { Array.prototype.push.call(o5, 2); }, o13, "Array.prototype.push throws when obj has a length property which is not writable and not configurable", "Object doesn't support this action");
            o7.o8(function() { Array.prototype.shift.call(o5); }, o13, "Array.prototype.shift throws when obj has a length property which is not writable and not configurable", "Object doesn't support this action");
            o7.o8(function() { Array.prototype.unshift.call(o5, 2); }, o13, "Array.prototype.unshift throws when obj has a length property which is not writable and not configurable", "Object doesn't support this action");
            o7.o8(function() { Array.prototype.splice.call(o5, 0, 1); }, o13, "Array.prototype.splice throws when obj has a length property which is not writable and not configurable", "Object doesn't support this action");
        }
    },
    {
        name: "Array.prototype built-in functions called with object that has properties with index we need to set in prototype chain and property is an accessor with no setter",
        o4: function () {
            var o23 = {};
            var o5 = {0:1, 1:1, 2:1, 3:-109, length:4};
            o5.__proto__ = o23;
            Object.defineProperty(o23, "4", {configurable: true, get: function() { return 31; }});

            o7.o8(function() { Array.prototype.unshift.call(o5, 200, 201, 202); }, o13, "Array.prototype.unshift throws when obj prototype-chain has a property named one of the indices we need to set which is an accessor with no setter", "Cannot define property: object is not extensible");
            o7.o8(function() { Array.prototype.push.call(o5, 200); }, o13, "Array.prototype.push throws when obj prototype-chain has a property named one of the indices we need to set which is an accessor with no setter", "Cannot define property: object is not extensible");
        }
    },
];

o26.o27(o2, { o28: o0.o29[0] != "summary" });
