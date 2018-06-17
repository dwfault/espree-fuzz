//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 restricted property tests

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o260 = Module['setStatus']

function e(o3, name) {
    try {
o7.o11(o3.hasOwnProperty('caller'), name + " reports that it has own property 'caller'")
}catch(e){}
    try {
o7.o11(o3.hasOwnProperty('arguments'), name + " reports that it has own property 'arguments'")
}catch(e){}

    var o12 = Object.getOwnPropertyNames(o3);
    try {
o7.o8(-1, o12.findIndex((o13) => { try {
return o13 === 'arguments';
}catch(e){} }), name + " has 'arguments' own property");
}catch(e){}
    try {
o7.o8(-1, o12.findIndex((o13) => { try {
return o13 === 'caller';
}catch(e){} }), name + " has 'caller' own property");
}catch(e){}

    try {
o2(o3, 'caller', { writable: false, enumerable: false, configurable: false }, name);
}catch(e){}
    try {
o7.o14(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
}catch(e){}
    try {
o2(o3, 'arguments', { writable: false, enumerable: false, configurable: false }, name);
}catch(e){}
    try {
o7.o14(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");
}catch(e){}

    try {
o7.o9(null, o3.caller, name + " says 'caller' property is null")
}catch(e){}
    try {
o7.o9(null, o3.arguments, name + " says 'arguments' property is null")
}catch(e){}

    try {
o7.o15(function() { try {
o3.caller = 'something';
}catch(e){} }, name + " has 'caller' property which can't be assigned to");
}catch(e){}
    try {
o7.o15(function() { try {
o3.arguments = 'something';
}catch(e){} }, name + " has 'arguments' property which  can't be assigned to");
}catch(e){}

    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
o3.caller = 'something';
}catch(e){} }, o17, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}
    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
o3.arguments = 'something';
}catch(e){} }, o17, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}

    try {
o7.o9(null, o3.caller, name + " says 'caller' property is null")
}catch(e){}
    try {
o7.o9(null, o3.arguments, name + " says 'arguments' property is null")
}catch(e){}

    try {
o7.o16(function() { try {
Object.defineProperty(o3, 'arguments', { value: 123 });
}catch(e){} }, o17, name + " has 'arguments' property as non-writable, non-configurable", "Cannot modify non-writable property 'arguments'");
}catch(e){}
    try {
o7.o16(function() { try {
Object.defineProperty(o3, 'caller', { value: 123 });
}catch(e){} }, o17, name + " has 'caller' property as non-writable, non-configurable", "Cannot modify non-writable property 'caller'");
}catch(e){}

    try {
o7.o14(delete o3.arguments, name + " has 'arguments' property as non-configurable so delete returns false");
}catch(e){}
    try {
o7.o14(delete o3.caller, name + " has 'caller' property as non-configurable so delete returns false");
}catch(e){}

    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
delete o3.caller;
}catch(e){} }, o17, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'caller' is not allowed in strict mode");
}catch(e){}
    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
delete o3.arguments;
}catch(e){} }, o17, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'arguments' is not allowed in strict mode");
}catch(e){}
}

function o18(o3, name) {
    try {
function () { try {
Array.prototype.keys.call(undefined);
}catch(e){} }(o3.hasOwnProperty('caller'), name + " does not report that it has own property 'caller'")
}catch(e){}
    try {
o7.o14(o3.hasOwnProperty('arguments'), name + " does not report that it has own property 'arguments'")
}catch(e){}

    var o291 = Object.getOwnPropertyNames(o3);
    try {
o7.o9(-1, o12.findIndex((o13) => { try {
return o13 === 'arguments';
}catch(e){} }), name + " does not have 'arguments' own property");
}catch(e){}
    try {
o7.o9(-1, o12.findIndex((o13) => { try {
return o13 === 'caller';
}catch(e){} }), name + " does not have 'caller' own property");
}catch(e){}

    try {
o7.o9(undefined, Object.getOwnPropertyDescriptor(o3, 'caller'), name + " does not have 'caller' own property")
}catch(e){}
    try {
o7.o14(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
}catch(e){}
    try {
o7.o9(undefined, Object.getOwnPropertyDescriptor(o3, 'arguments'), name + " does not have 'arguments' own property");
}catch(e){}
    try {
o7.o14(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");
}catch(e){}

    try {
o7.o16(function() { try {
o3.caller;
}catch(e){} }, o17, name + " throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}
    try {
o7.o16(function() { try {
o3.arguments;
}catch(e){} }, o17, name + " throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}

    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
o3.caller;
}catch(e){} }, o17, name + " throws on access to 'caller' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}
    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
o3.arguments;
}catch(e){} }, o17, name + " throws on access to 'arguments' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}

    try {
o7.o16(function() { try {
o3.caller = 'something';
}catch(e){} }, o17, name + " throws trying to assign to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}
    try {
o7.o16(function() { try {
o3.arguments = 'something';
}catch(e){} }, o17, name + " throws trying to assign to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}

    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
o3.caller = 'something';
}catch(e){} }, o17, name + " throws trying to assign to 'caller' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}
    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
o3.arguments = 'something';
}catch(e){} }, o17, name + " throws trying to assign to 'arguments' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}

    try {
o7.o11(delete o3.arguments, name + " allows deleting own property named 'arguments' if that property doesn't exist");
}catch(e){}
    try {
o7.o15(function() { try {
Object.defineProperty(o3, 'arguments', { value: 123, writable: true, enumerable: true, configurable: true });
}catch(e){} }, name + " doesn't have own 'arguments' property");
}catch(e){}
    try {
o7.o11(o3.hasOwnProperty('arguments'), name + " has own property 'arguments' after defineProperty")
}catch(e){}
    try {
o7.o11(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is enumerable if it is an enumerable own property");
}catch(e){}
    try {
o7.o9(123, o3.arguments, name + " can have an own property defined for 'arguments'")
}catch(e){}
    try {
o2(o3, 'arguments', { writable: true, enumerable: true, configurable: true }, name);
}catch(e){}
    try {
o7.o11(delete o3.arguments, name + " allows deleting own property named 'arguments' if that property does exist");
}catch(e){}
    try {
o7.o14(o3.hasOwnProperty('arguments'), name + " doesn't have own property 'arguments' after delete")
}catch(e){}

    try {
o7.o11(delete o3.caller, name + " allows deleting own property named 'caller' if that property doesn't exist");
}catch(e){}
    try {
o7.o15(function() { try {
Object.defineProperty(o3, 'caller', { value: 123, writable: true, enumerable: true, configurable: true });
}catch(e){} }, name + " doesn't have own 'caller' property");
}catch(e){}
    try {
o7.o11(o3.hasOwnProperty('caller'), name + " has own property 'caller' after defineProperty")
}catch(e){}
    try {
o7.o11(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is enumerable if it is an enumerable own property");
}catch(e){}
    try {
o7.o9(123, o3.caller, name + " can have an own property defined for 'caller'")
}catch(e){}
    try {
o2(o3, 'caller', { writable: true, enumerable: true, configurable: true }, name);
}catch(e){}
    try {
o7.o11(delete o3.caller, name + " allows deleting own property named 'caller' if that property does exist");
}catch(e){}
    try {
o7.o14(o3.hasOwnProperty('caller'), name + " doesn't have own property 'caller' after delete")
}catch(e){}

    // Remove Function.prototype from the prototype chain.
    try {
Object.setPrototypeOf(o3, Object.prototype);
}catch(e){}
    try {
o7.o9(undefined, o3.arguments, name + " does not initially have 'arguments' property when disconnected from Function.prototype");
}catch(e){}
    try {
o7.o15(function() { try {
o3.arguments = 'abc';
}catch(e){} }, name + " can set the 'arguments' property when disconnected from Function.prototype");
}catch(e){}
    try {
o7.o9('abc', o3.arguments, name + " can set the 'arguments' property when disconnected from Function.prototype");
}catch(e){}
    try {
o7.o11(o3.hasOwnProperty('arguments'), name + " has 'arguments' own property")
}catch(e){}
    try {
o7.o11(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is enumerable if it is an enumerable own property");
}catch(e){}
    try {
o2(o3, 'arguments', { writable: true, enumerable: true, configurable: true }, name);
}catch(e){}
    try {
o7.o11(delete o3.arguments, name + " allows deleting own property named 'arguments' if that property does exist");
}catch(e){}
    try {
o7.o14(o3.hasOwnProperty('arguments'), name + " doesn't have own property 'arguments' after delete")
}catch(e){}

    try {
o7.o9(undefined, o3.caller, name + " does not initially have 'caller' property when disconnected from Function.prototype");
}catch(e){}
    try {
o7.o15(function() { try {
o3.caller = 'abc';
}catch(e){} }, name + " can set the 'caller' property when disconnected from Function.prototype");
}catch(e){}
    try {
o7.o9('abc', o3.caller, name + " can set the 'caller' property when disconnected from Function.prototype");
}catch(e){}
    try {
o7.o11(o3.hasOwnProperty('caller'), name + " has 'caller' own property")
}catch(e){}
    try {
o7.o11(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is enumerable if it is an enumerable own property");
}catch(e){}
    try {
o2(o3, 'caller', { writable: true, enumerable: true, configurable: true }, name);
}catch(e){}
    try {
o7.o11(delete o3.caller, name + " allows deleting own property named 'caller' if that property does exist");
}catch(e){}
    try {
o7.o14(o3.hasOwnProperty('caller'), name + " doesn't have own property 'caller' after delete")
}catch(e){}
}

var o35 = (o16.push((o18 ^= -4.00753612819473E+18), o17[(((174 >= 0 ? 174 : 0)) & 0XF)], o14.o28))
        ;

try {
o31.o32(o19, { o33: o0.o34[0] != "summary" });
}catch(e){}
