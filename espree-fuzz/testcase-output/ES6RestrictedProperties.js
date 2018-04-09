//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 restricted property tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3, o4, o5, name) {
    var o6 = Object.getOwnPropertyDescriptor(o3, o4);

    o7.o8(undefined, o6, name + " does not have property named " + o4);

    o7.o9(o5.writable, o6.writable, name + " has property named " + o4 + " with writable = " + o5.writable);
    o7.o9(o5.enumerable, o6.enumerable, name + " has property named " + o4 + " with enumerable = " + o5.enumerable);
    o7.o9(o5.configurable, o6.configurable, name + " has property named " + o4 + " with configurable = " + o5.configurable);
}

function o10(o3, name) {
    o7.o11(o3.hasOwnProperty('caller'), name + " reports that it has own property 'caller'")
    o7.o11(o3.hasOwnProperty('arguments'), name + " reports that it has own property 'arguments'")

    var o12 = Object.getOwnPropertyNames(o3);
    o7.o8(-1, o12.findIndex((o13) => { return o13 === 'arguments'; }), name + " has 'arguments' own property");
    o7.o8(-1, o12.findIndex((o13) => { return o13 === 'caller'; }), name + " has 'caller' own property");

    o2(o3, 'caller', { writable: false, enumerable: false, configurable: false }, name);
    o7.o14(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
    o2(o3, 'arguments', { writable: false, enumerable: false, configurable: false }, name);
    o7.o14(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");

    o7.o9(null, o3.caller, name + " says 'caller' property is null")
    o7.o9(null, o3.arguments, name + " says 'arguments' property is null")

    o7.o15(function() { o3.caller = 'something'; }, name + " has 'caller' property which can't be assigned to");
    o7.o15(function() { o3.arguments = 'something'; }, name + " has 'arguments' property which  can't be assigned to");

    o7.o16(function() { 'use strict'; o3.caller = 'something'; }, o17, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");
    o7.o16(function() { 'use strict'; o3.arguments = 'something'; }, o17, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");

    o7.o9(null, o3.caller, name + " says 'caller' property is null")
    o7.o9(null, o3.arguments, name + " says 'arguments' property is null")

    o7.o16(function() { Object.defineProperty(o3, 'arguments', { value: 123 }); }, o17, name + " has 'arguments' property as non-writable, non-configurable", "Cannot modify non-writable property 'arguments'");
    o7.o16(function() { Object.defineProperty(o3, 'caller', { value: 123 }); }, o17, name + " has 'caller' property as non-writable, non-configurable", "Cannot modify non-writable property 'caller'");

    o7.o14(delete o3.arguments, name + " has 'arguments' property as non-configurable so delete returns false");
    o7.o14(delete o3.caller, name + " has 'caller' property as non-configurable so delete returns false");

    o7.o16(function() { 'use strict'; delete o3.caller; }, o17, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'caller' is not allowed in strict mode");
    o7.o16(function() { 'use strict'; delete o3.arguments; }, o17, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'arguments' is not allowed in strict mode");
}

function o18(o3, name) {
    o7.o14(o3.hasOwnProperty('caller'), name + " does not report that it has own property 'caller'")
    o7.o14(o3.hasOwnProperty('arguments'), name + " does not report that it has own property 'arguments'")

    var o12 = Object.getOwnPropertyNames(o3);
    o7.o9(-1, o12.findIndex((o13) => { return o13 === 'arguments'; }), name + " does not have 'arguments' own property");
    o7.o9(-1, o12.findIndex((o13) => { return o13 === 'caller'; }), name + " does not have 'caller' own property");

    o7.o9(undefined, Object.getOwnPropertyDescriptor(o3, 'caller'), name + " does not have 'caller' own property")
    o7.o14(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
    o7.o9(undefined, Object.getOwnPropertyDescriptor(o3, 'arguments'), name + " does not have 'arguments' own property");
    o7.o14(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");

    o7.o16(function() { o3.caller; }, o17, name + " throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    o7.o16(function() { o3.arguments; }, o17, name + " throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    o7.o16(function() { 'use strict'; o3.caller; }, o17, name + " throws on access to 'caller' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    o7.o16(function() { 'use strict'; o3.arguments; }, o17, name + " throws on access to 'arguments' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    o7.o16(function() { o3.caller = 'something'; }, o17, name + " throws trying to assign to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    o7.o16(function() { o3.arguments = 'something'; }, o17, name + " throws trying to assign to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    o7.o16(function() { 'use strict'; o3.caller = 'something'; }, o17, name + " throws trying to assign to 'caller' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    o7.o16(function() { 'use strict'; o3.arguments = 'something'; }, o17, name + " throws trying to assign to 'arguments' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    o7.o11(delete o3.arguments, name + " allows deleting own property named 'arguments' if that property doesn't exist");
    o7.o15(function() { Object.defineProperty(o3, 'arguments', { value: 123, writable: true, enumerable: true, configurable: true }); }, name + " doesn't have own 'arguments' property");
    o7.o11(o3.hasOwnProperty('arguments'), name + " has own property 'arguments' after defineProperty")
    o7.o11(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is enumerable if it is an enumerable own property");
    o7.o9(123, o3.arguments, name + " can have an own property defined for 'arguments'")
    o2(o3, 'arguments', { writable: true, enumerable: true, configurable: true }, name);
    o7.o11(delete o3.arguments, name + " allows deleting own property named 'arguments' if that property does exist");
    o7.o14(o3.hasOwnProperty('arguments'), name + " doesn't have own property 'arguments' after delete")

    o7.o11(delete o3.caller, name + " allows deleting own property named 'caller' if that property doesn't exist");
    o7.o15(function() { Object.defineProperty(o3, 'caller', { value: 123, writable: true, enumerable: true, configurable: true }); }, name + " doesn't have own 'caller' property");
    o7.o11(o3.hasOwnProperty('caller'), name + " has own property 'caller' after defineProperty")
    o7.o11(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is enumerable if it is an enumerable own property");
    o7.o9(123, o3.caller, name + " can have an own property defined for 'caller'")
    o2(o3, 'caller', { writable: true, enumerable: true, configurable: true }, name);
    o7.o11(delete o3.caller, name + " allows deleting own property named 'caller' if that property does exist");
    o7.o14(o3.hasOwnProperty('caller'), name + " doesn't have own property 'caller' after delete")

    // Remove Function.prototype from the prototype chain.
    Object.setPrototypeOf(o3, Object.prototype);
    o7.o9(undefined, o3.arguments, name + " does not initially have 'arguments' property when disconnected from Function.prototype");
    o7.o15(function() { o3.arguments = 'abc'; }, name + " can set the 'arguments' property when disconnected from Function.prototype");
    o7.o9('abc', o3.arguments, name + " can set the 'arguments' property when disconnected from Function.prototype");
    o7.o11(o3.hasOwnProperty('arguments'), name + " has 'arguments' own property")
    o7.o11(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is enumerable if it is an enumerable own property");
    o2(o3, 'arguments', { writable: true, enumerable: true, configurable: true }, name);
    o7.o11(delete o3.arguments, name + " allows deleting own property named 'arguments' if that property does exist");
    o7.o14(o3.hasOwnProperty('arguments'), name + " doesn't have own property 'arguments' after delete")

    o7.o9(undefined, o3.caller, name + " does not initially have 'caller' property when disconnected from Function.prototype");
    o7.o15(function() { o3.caller = 'abc'; }, name + " can set the 'caller' property when disconnected from Function.prototype");
    o7.o9('abc', o3.caller, name + " can set the 'caller' property when disconnected from Function.prototype");
    o7.o11(o3.hasOwnProperty('caller'), name + " has 'caller' own property")
    o7.o11(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is enumerable if it is an enumerable own property");
    o2(o3, 'caller', { writable: true, enumerable: true, configurable: true }, name);
    o7.o11(delete o3.caller, name + " allows deleting own property named 'caller' if that property does exist");
    o7.o14(o3.hasOwnProperty('caller'), name + " doesn't have own property 'caller' after delete")
}

var o19 = [
    {
        name: "Restricted properties of Function.prototype",
        o20: function () {
            var o3 = Function.prototype;

            o7.o11(o3.hasOwnProperty('caller'), "Function.prototype has own property 'caller'")
            o7.o11(o3.hasOwnProperty('arguments'), "Function.prototype has own property 'arguments'")

            var o6 = Object.getOwnPropertyDescriptor(o3, 'caller');
            o7.o14(o6.enumerable, "Function.prototype function has 'caller' own property which is not enumerable");
            o7.o14(o6.configurable, "Function.prototype function has 'caller' own property which is not configurable");
            o7.o14(o3.propertyIsEnumerable('caller'), "Function.prototype says 'caller' property is not enumerable");
            o7.o9('function', typeof o6.get, "Function.prototype['caller'] has get accessor function");
            o7.o9('function', typeof o6.set, "Function.prototype['caller'] has set accessor function");
            o7.o16(function() { o6.get(); }, o17, "Function.prototype['caller'] has get accessor which throws");
            o7.o16(function() { o6.set(); }, o17, "Function.prototype['caller'] has set accessor which throws");
            o7.o11(o6.get === o6.set, "Function.prototype returns the same ThrowTypeError function for get/set accessor of 'caller' property");

            var o21 = Object.getOwnPropertyDescriptor(o3, 'arguments');
            o7.o14(o21.enumerable, "Function.prototype function has 'arguments' own property which is not enumerable");
            o7.o14(o21.configurable, "Function.prototype function has 'arguments' own property which is not configurable");
            o7.o14(o3.propertyIsEnumerable('arguments'), "Function.prototype says 'arguments' property is not enumerable");
            o7.o9('function', typeof o21.get, "Function.prototype['arguments'] has get accessor function");
            o7.o9('function', typeof o21.set, "Function.prototype['arguments'] has set accessor function");
            o7.o16(function() { o21.get(); }, o17, "Function.prototype['arguments'] has get accessor which throws");
            o7.o16(function() { o21.set(); }, o17, "Function.prototype['arguments'] has set accessor which throws");
            o7.o11(o21.get === o21.set, "Function.prototype returns the same ThrowTypeError function for get/set accessor of 'arguments' property");

            o7.o11(o6.get === o21.get, "Function.prototype returns the same ThrowTypeError function for accessor of both 'arguments' and 'caller' properties");

            var o12 = Object.getOwnPropertyNames(o3);
            o7.o8(-1, o12.findIndex((o13) => { return o13 === 'arguments'; }), "Function.prototype has 'arguments' own property");
            o7.o8(-1, o12.findIndex((o13) => { return o13 === 'caller'; }), "Function.prototype has 'caller' own property");

            o7.o16(function() { o3.caller; }, o17, "Function.prototype throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            o7.o16(function() { o3.arguments; }, o17, "Function.prototype throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

            o7.o16(function() { o3.caller = 'something'; }, o17, "Function.prototype throws trying to assign to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            o7.o16(function() { o3.arguments = 'something'; }, o17, "Function.prototype throws trying to assign to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

            // TODO: These descriptors should have configurable set to true so remaining asserts in this test should actually succeed
            o7.o16(function() { Object.defineProperty(o3, 'arguments', { value: 123 }); }, o17, "Function.prototype has 'arguments' property as non-configurable", "Cannot redefine non-configurable property 'arguments'");
            o7.o16(function() { Object.defineProperty(o3, 'caller', { value: 123 }); }, o17, "Function.prototype has 'caller' property as non-configurable", "Cannot redefine non-configurable property 'caller'");

            o7.o14(delete o3.arguments, "Function.prototype has 'arguments' property as non-configurable so delete returns false");
            o7.o14(delete o3.caller, "Function.prototype has 'caller' property as non-configurable so delete returns false");

            o7.o16(function() { 'use strict'; delete o3.caller; }, o17, "Function.prototype has 'caller' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'caller' is not allowed in strict mode");
            o7.o16(function() { 'use strict'; delete o3.arguments; }, o17, "Function.prototype has 'arguments' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'arguments' is not allowed in strict mode");
        }
    },
    {
        name: "Restricted properties of non-strict function",
        o20: function () {
            function o3() {};

            o10(o3, "Non-strict function");
        }
    },
    {
        name: "Restricted properties of strict function",
        o20: function () {
            function o22() { 'use strict'; };

            o18(o22, "Strict function");
        }
    },
    {
        name: "Restricted properties of class",
        o20: function () {
            class o23 { };

            o18(o23, "Class");
        }
    },
    {
        name: "Restricted properties of class static method",
        o20: function () {
            class o23 {
                static o24() { }
            };

            o18(o23.o24, "Class static method");
        }
    },
    {
        name: "Restricted properties of strict-mode class static method",
        o20: function () {
            class o23 {
                static o24() { 'use strict'; }
            };

            o18(o23.o24, "Class strict-mode static method");
        }
    },
    {
        name: "Restricted properties of class method",
        o20: function () {
            class o23 {
                o25() { }
            };

            o18(o23.prototype.o25, "Class method");
        }
    },
    {
        name: "Restricted properties of strict-mode class method",
        o20: function () {
            class o23 {
                o25() { 'use strict'; }
            };

            o18(o23.prototype.o25, "Class strict-mode method");
        }
    },
    {
        name: "Restricted properties of class with 'caller' static method",
        o20: function () {
            var o3 = class o23 {
                static caller() { return 42; }
            };

            o7.o11(o3.hasOwnProperty('caller'), "Class does has own property 'caller'")
            o7.o14(o3.hasOwnProperty('arguments'), "Class does not report that it has own property 'arguments'")

            o7.o9('{"writable":true,"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'caller')), "Class does not have 'caller' own property")
            o7.o9(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'arguments')), "Class does not have 'arguments' own property");
            o7.o9('["caller","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(o3).sort()), "Class does not have 'caller' and 'arguments' own properties");

            o7.o9(42, o3.caller(), "Accessing the 'caller' property is not restricted");
            o7.o16(function() { o3.arguments; }, o17, "Class throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
        }
    },
    {
        name: "Restricted properties of class with 'arguments' static get method",
        o20: function () {
            var o3 = class o23 {
                static get arguments() { return 42; }
            };

            o7.o14(o3.hasOwnProperty('caller'), "Class does not report that it has own property 'caller'")
            o7.o11(o3.hasOwnProperty('arguments'), "Class has own property 'arguments'")

            o7.o9(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'caller')), "Class does not have 'caller' own property")
            o7.o9('{"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'arguments')), "Class has 'arguments' own property");
            o7.o9('["arguments","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(o3).sort()), "Class has 'arguments' own property, no 'caller' own property");

            o7.o16(function() { o3.caller; }, o17, "Class method throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            o7.o9(42, o3.arguments, "Accessing the 'arguments' property is not restricted");
        }
    },
    {
        name: "Restricted properties of class with 'arguments' set method",
        o20: function () {
            var o26;
            class o23 {
                set arguments(o27) { o26 = o27; }
            };
            var o3 = o23;

            o7.o14(o3.hasOwnProperty('caller'), "Class does not report that it has own property 'caller'")
            o7.o14(o3.hasOwnProperty('arguments'), "Class does not report that it has own property 'arguments'")

            o7.o9(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'caller')), "Class does not have 'caller' own property")
            o7.o9(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'arguments')), "Class has 'arguments' own property");
            o7.o9('["length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(o3).sort()), "Class has 'arguments' own property, no 'caller' own property");

            o7.o16(function() { o3.caller; }, o17, "Class method throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            o7.o16(function() { o3.arguments; }, o17, "Class method throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

            var o28 = new o23();

            o7.o14(o28.hasOwnProperty('caller'), "Class instance does not report that it has own property 'caller'")
            o7.o14(o28.hasOwnProperty('arguments'), "Class instance does not report that it has own property 'arguments'")

            o7.o14(o28.__proto__.hasOwnProperty('caller'), "Class prototype does not report that it has own property 'caller'")
            o7.o11(o28.__proto__.hasOwnProperty('arguments'), "Class prototype has own property 'arguments'")

            o28.arguments = 50;
            o7.o9(50, o26, "Accessing the 'arguments' property was not restricted");

            o7.o9(undefined, o28.caller, "Access to class instance 'caller' property doesn't throw - instance is not a function");

            o28.caller = 123;

            o7.o9(123, o28.caller, "Assignment to class instance 'caller' property works normally");
        }
    },
    {
        name: "Restricted properties of lambda",
        o20: function () {
            var o3 = () => { }

            o18(o3, "Lambda");
        }
    },
    {
        name: "Restricted properties of strict-mode lambda",
        o20: function () {
            var o3 = () => { 'use strict'; }

            o18(o3, "Strict-mode lambda");
        }
    },
    {
        name: "Restricted properties of bound function",
        o20: function () {
            function target() {}
            var o3 = target.bind(null);

            o18(o3, "Bound function");
        }
    },
    {
        name: "Restricted properties of bound strict-mode function",
        o20: function () {
            function target() { 'use strict'; }
            var o3 = target.bind(null);

            o18(o3, "Bound strict-mode function");
        }
    },
    {
        name: "Restricted properties of generator function",
        o20: function () {
            function* o29() { }

            o18(o29, "Generator function");
        }
    },
    {
        name: "Restricted properties of strict-mode generator function",
        o20: function () {
            function* o29() { 'use strict'; }

            o18(o29, "Generator strict-mode function");
        }
    },
    {
        name: "Restricted properties of object-literal function",
        o20: function () {
            var o3 = { o30() { } }

            o10(o3.o30, "Object-literal function");
        }
    },
    {
        name: "Restricted properties of strict-mode object-literal function",
        o20: function () {
            var o3 = { o30() { 'use strict'; } }

            o18(o3.o30, "Object-literal strict-mode function");
        }
    },
];

o31.o32(o19, { o33: o0.o34[0] != "summary" });
