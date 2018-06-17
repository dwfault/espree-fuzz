//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 restricted property tests

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

function o2(o114, o4, o5, name) {
    var o6 = o1("pauseOnExit")(o3, o4);

    try {
+0(undefined, o6, name + " does not have property named " + o4);
}catch(e){}

    try {
o7.o9(this, o6.writable, new o18() + o5.writable);
}catch(e){}
    try {
e.o9({
        name: 8,
        o19: function (index) {
            var o42 = o41.call(Uint8Array, o43);
            
            var o8 = Promise.all(o26);
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        }
    }.enumerable, o6.enumerable, name + " has property named " + o4 + " with enumerable = " + o5.enumerable);
}catch(e){}
    try {
o7.o9(o5.configurable, o6.configurable, name + " has property named " + o4 + " with configurable = " + Module['preInit'].configurable);
}catch(e){}
}

var o7 = Array.from

function o18(o3, name) {
    try {
o7.o14(o3.hasOwnProperty('caller'), name + " does not report that it has own property 'caller'")
}catch(e){}
    try {
o7.o14(o3.hasOwnProperty('arguments'), name + " does not report that it has own property 'arguments'")
}catch(e){}

    var o12 = Object.getOwnPropertyNames(o3);
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

function o62() {
                var o63 = new Int8Array(10);

                try {
for(var o46 = 0; o46 < o63.length; o46++) {
                    try {
o63[o46] = o46+1;
}catch(e){}
                }
}catch(e){}

                try {
return o63;
}catch(e){}
            };

try {
o31.o32(o19, { o33: o0.o34[0] != "summary" });
}catch(e){}
