//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 restricted property tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3, o4, o5, name) {
    var o7 = Object.getOwnPropertyDescriptor(o3, o4);

    o10.o11(undefined, o7, name + " does not have property named " + o4);

    o10.o13(o5.writable, o7.writable, name + " has property named " + o4 + " with writable = " + o5.writable);
    o10.o13(o5.enumerable, o7.enumerable, name + " has property named " + o4 + " with enumerable = " + o5.enumerable);
    o10.o13(o5.configurable, o7.configurable, name + " has property named " + o4 + " with configurable = " + o5.configurable);
}

function o17(o3, name) {
    o10.o18(o3.hasOwnProperty('caller'), name + " reports that it has own property 'caller'")
    o10.o18(o3.hasOwnProperty('arguments'), name + " reports that it has own property 'arguments'")

    var o20 = Object.getOwnPropertyNames(o3);
    o10.o11(-1, o20.findIndex((o23) => { return o23 === 'arguments'; }), name + " has 'arguments' own property");
    o10.o11(-1, o20.findIndex((o23) => { return o23 === 'caller'; }), name + " has 'caller' own property");

    o2(o3, 'caller', { writable: false, enumerable: false, configurable: false }, name);
    o10.o24(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
    o2(o3, 'arguments', { writable: false, enumerable: false, configurable: false }, name);
    o10.o24(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");

    o10.o13(null, o3.caller, name + " says 'caller' property is null")
    o10.o13(null, o3.arguments, name + " says 'arguments' property is null")

    o10.o28(function() { o3.caller = 'something'; }, name + " has 'caller' property which can't be assigned to");
    o10.o28(function() { o3.arguments = 'something'; }, name + " has 'arguments' property which  can't be assigned to");

    o10.o29(function() { 'use strict'; o3.caller = 'something'; }, o30, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");
    o10.o29(function() { 'use strict'; o3.arguments = 'something'; }, o30, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");

    o10.o13(null, o3.caller, name + " says 'caller' property is null")
    o10.o13(null, o3.arguments, name + " says 'arguments' property is null")

    o10.o29(function() { Object.defineProperty(o3, 'arguments', { value: 123 }); }, o30, name + " has 'arguments' property as non-writable, non-configurable", "Cannot modify non-writable property 'arguments'");
    o10.o29(function() { Object.defineProperty(o3, 'caller', { value: 123 }); }, o30, name + " has 'caller' property as non-writable, non-configurable", "Cannot modify non-writable property 'caller'");

    o10.o24(delete o3.arguments, name + " has 'arguments' property as non-configurable so delete returns false");
    o10.o24(delete o3.caller, name + " has 'caller' property as non-configurable so delete returns false");

    o10.o29(function() { 'use strict'; delete o3.caller; }, o30, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'caller' is not allowed in strict mode");
    o10.o29(function() { 'use strict'; delete o3.arguments; }, o30, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'arguments' is not allowed in strict mode");
}

function o33(o3, name) {
    o10.o24(o3.hasOwnProperty('caller'), name + " does not report that it has own property 'caller'")
    o10.o24(o3.hasOwnProperty('arguments'), name + " does not report that it has own property 'arguments'")

    var o20 = Object.getOwnPropertyNames(o3);
    o10.o13(-1, o20.findIndex((o23) => { return o23 === 'arguments'; }), name + " does not have 'arguments' own property");
    o10.o13(-1, o20.findIndex((o23) => { return o23 === 'caller'; }), name + " does not have 'caller' own property");

    o10.o13(undefined, Object.getOwnPropertyDescriptor(o3, 'caller'), name + " does not have 'caller' own property")
    o10.o24(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
    o10.o13(undefined, Object.getOwnPropertyDescriptor(o3, 'arguments'), name + " does not have 'arguments' own property");
    o10.o24(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");

    o10.o29(function() { o3.caller; }, o30, name + " throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    o10.o29(function() { o3.arguments; }, o30, name + " throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    o10.o29(function() { 'use strict'; o3.caller; }, o30, name + " throws on access to 'caller' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    o10.o29(function() { 'use strict'; o3.arguments; }, o30, name + " throws on access to 'arguments' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    o10.o29(function() { o3.caller = 'something'; }, o30, name + " throws trying to assign to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    o10.o29(function() { o3.arguments = 'something'; }, o30, name + " throws trying to assign to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    o10.o29(function() { 'use strict'; o3.caller = 'something'; }, o30, name + " throws trying to assign to 'caller' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    o10.o29(function() { 'use strict'; o3.arguments = 'something'; }, o30, name + " throws trying to assign to 'arguments' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    o10.o18(delete o3.arguments, name + " allows deleting own property named 'arguments' if that property doesn't exist");
    o10.o28(function() { Object.defineProperty(o3, 'arguments', { value: 123, writable: true, enumerable: true, configurable: true }); }, name + " doesn't have own 'arguments' property");
    o10.o18(o3.hasOwnProperty('arguments'), name + " has own property 'arguments' after defineProperty")
    o10.o18(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is enumerable if it is an enumerable own property");
    o10.o13(123, o3.arguments, name + " can have an own property defined for 'arguments'")
    o2(o3, 'arguments', { writable: true, enumerable: true, configurable: true }, name);
    o10.o18(delete o3.arguments, name + " allows deleting own property named 'arguments' if that property does exist");
    o10.o24(o3.hasOwnProperty('arguments'), name + " doesn't have own property 'arguments' after delete")

    o10.o18(delete o3.caller, name + " allows deleting own property named 'caller' if that property doesn't exist");
    o10.o28(function() { Object.defineProperty(o3, 'caller', { value: 123, writable: true, enumerable: true, configurable: true }); }, name + " doesn't have own 'caller' property");
    o10.o18(o3.hasOwnProperty('caller'), name + " has own property 'caller' after defineProperty")
    o10.o18(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is enumerable if it is an enumerable own property");
    o10.o13(123, o3.caller, name + " can have an own property defined for 'caller'")
    o2(o3, 'caller', { writable: true, enumerable: true, configurable: true }, name);
    o10.o18(delete o3.caller, name + " allows deleting own property named 'caller' if that property does exist");
    o10.o24(o3.hasOwnProperty('caller'), name + " doesn't have own property 'caller' after delete")

    // Remove Function.prototype from the prototype chain.
    Object.setPrototypeOf(o3, Object.prototype);
    o10.o13(undefined, o3.arguments, name + " does not initially have 'arguments' property when disconnected from Function.prototype");
    o10.o28(function() { o3.arguments = 'abc'; }, name + " can set the 'arguments' property when disconnected from Function.prototype");
    o10.o13('abc', o3.arguments, name + " can set the 'arguments' property when disconnected from Function.prototype");
    o10.o18(o3.hasOwnProperty('arguments'), name + " has 'arguments' own property")
    o10.o18(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is enumerable if it is an enumerable own property");
    o2(o3, 'arguments', { writable: true, enumerable: true, configurable: true }, name);
    o10.o18(delete o3.arguments, name + " allows deleting own property named 'arguments' if that property does exist");
    o10.o24(o3.hasOwnProperty('arguments'), name + " doesn't have own property 'arguments' after delete")

    o10.o13(undefined, o3.caller, name + " does not initially have 'caller' property when disconnected from Function.prototype");
    o10.o28(function() { o3.caller = 'abc'; }, name + " can set the 'caller' property when disconnected from Function.prototype");
    o10.o13('abc', o3.caller, name + " can set the 'caller' property when disconnected from Function.prototype");
    o10.o18(o3.hasOwnProperty('caller'), name + " has 'caller' own property")
    o10.o18(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is enumerable if it is an enumerable own property");
    o2(o3, 'caller', { writable: true, enumerable: true, configurable: true }, name);
    o10.o18(delete o3.caller, name + " allows deleting own property named 'caller' if that property does exist");
    o10.o24(o3.hasOwnProperty('caller'), name + " doesn't have own property 'caller' after delete")
}

var o36 = [
    {
        name: "Restricted properties of Function.prototype",
        o37: function () {
            var o3 = Function.prototype;

            o10.o18(o3.hasOwnProperty('caller'), "Function.prototype has own property 'caller'")
            o10.o18(o3.hasOwnProperty('arguments'), "Function.prototype has own property 'arguments'")

            var o7 = Object.getOwnPropertyDescriptor(o3, 'caller');
            o10.o24(o7.enumerable, "Function.prototype function has 'caller' own property which is not enumerable");
            o10.o24(o7.configurable, "Function.prototype function has 'caller' own property which is not configurable");
            o10.o24(o3.propertyIsEnumerable('caller'), "Function.prototype says 'caller' property is not enumerable");
            o10.o13('function', typeof o7.get, "Function.prototype['caller'] has get accessor function");
            o10.o13('function', typeof o7.set, "Function.prototype['caller'] has set accessor function");
            o10.o29(function() { o7.get(); }, o30, "Function.prototype['caller'] has get accessor which throws");
            o10.o29(function() { o7.set(); }, o30, "Function.prototype['caller'] has set accessor which throws");
            o10.o18(o7.get === o7.set, "Function.prototype returns the same ThrowTypeError function for get/set accessor of 'caller' property");

            var o41 = Object.getOwnPropertyDescriptor(o3, 'arguments');
            o10.o24(o41.enumerable, "Function.prototype function has 'arguments' own property which is not enumerable");
            o10.o24(o41.configurable, "Function.prototype function has 'arguments' own property which is not configurable");
            o10.o24(o3.propertyIsEnumerable('arguments'), "Function.prototype says 'arguments' property is not enumerable");
            o10.o13('function', typeof o41.get, "Function.prototype['arguments'] has get accessor function");
            o10.o13('function', typeof o41.set, "Function.prototype['arguments'] has set accessor function");
            o10.o29(function() { o41.get(); }, o30, "Function.prototype['arguments'] has get accessor which throws");
            o10.o29(function() { o41.set(); }, o30, "Function.prototype['arguments'] has set accessor which throws");
            o10.o18(o41.get === o41.set, "Function.prototype returns the same ThrowTypeError function for get/set accessor of 'arguments' property");

            o10.o18(o7.get === o41.get, "Function.prototype returns the same ThrowTypeError function for accessor of both 'arguments' and 'caller' properties");

            var o20 = Object.getOwnPropertyNames(o3);
            o10.o11(-1, o20.findIndex((o23) => { return o23 === 'arguments'; }), "Function.prototype has 'arguments' own property");
            o10.o11(-1, o20.findIndex((o23) => { return o23 === 'caller'; }), "Function.prototype has 'caller' own property");

            o10.o29(function() { o3.caller; }, o30, "Function.prototype throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            o10.o29(function() { o3.arguments; }, o30, "Function.prototype throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

            o10.o29(function() { o3.caller = 'something'; }, o30, "Function.prototype throws trying to assign to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            o10.o29(function() { o3.arguments = 'something'; }, o30, "Function.prototype throws trying to assign to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

            // TODO: These descriptors should have configurable set to true so remaining asserts in this test should actually succeed
            o10.o29(function() { Object.defineProperty(o3, 'arguments', { value: 123 }); }, o30, "Function.prototype has 'arguments' property as non-configurable", "Cannot redefine non-configurable property 'arguments'");
            o10.o29(function() { Object.defineProperty(o3, 'caller', { value: 123 }); }, o30, "Function.prototype has 'caller' property as non-configurable", "Cannot redefine non-configurable property 'caller'");

            o10.o24(delete o3.arguments, "Function.prototype has 'arguments' property as non-configurable so delete returns false");
            o10.o24(delete o3.caller, "Function.prototype has 'caller' property as non-configurable so delete returns false");

            o10.o29(function() { 'use strict'; delete o3.caller; }, o30, "Function.prototype has 'caller' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'caller' is not allowed in strict mode");
            o10.o29(function() { 'use strict'; delete o3.arguments; }, o30, "Function.prototype has 'arguments' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'arguments' is not allowed in strict mode");
        }
    },
    {
        name: "Restricted properties of non-strict function",
        o37: function () {
            function o3() {};

            o17(o3, "Non-strict function");
        }
    },
    {
        name: "Restricted properties of strict function",
        o37: function () {
            function o42() { 'use strict'; };

            o33(o42, "Strict function");
        }
    },
    {
        name: "Restricted properties of class",
        o37: function () {
            class o43 { };

            o33(o43, "Class");
        }
    },
    {
        name: "Restricted properties of class static method",
        o37: function () {
            class o43 {
                static o44() { }
            };

            o33(o43.o44, "Class static method");
        }
    },
    {
        name: "Restricted properties of strict-mode class static method",
        o37: function () {
            class o43 {
                static o44() { 'use strict'; }
            };

            o33(o43.o44, "Class strict-mode static method");
        }
    },
    {
        name: "Restricted properties of class method",
        o37: function () {
            class o43 {
                o45() { }
            };

            o33(o43.prototype.o45, "Class method");
        }
    },
    {
        name: "Restricted properties of strict-mode class method",
        o37: function () {
            class o43 {
                o45() { 'use strict'; }
            };

            o33(o43.prototype.o45, "Class strict-mode method");
        }
    },
    {
        name: "Restricted properties of class with 'caller' static method",
        o37: function () {
            var o3 = class o43 {
                static caller() { return 42; }
            };

            o10.o18(o3.hasOwnProperty('caller'), "Class does has own property 'caller'")
            o10.o24(o3.hasOwnProperty('arguments'), "Class does not report that it has own property 'arguments'")

            o10.o13('{"writable":true,"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'caller')), "Class does not have 'caller' own property")
            o10.o13(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'arguments')), "Class does not have 'arguments' own property");
            o10.o13('["caller","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(o3).sort()), "Class does not have 'caller' and 'arguments' own properties");

            o10.o13(42, o3.caller(), "Accessing the 'caller' property is not restricted");
            o10.o29(function() { o3.arguments; }, o30, "Class throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
        }
    },
    {
        name: "Restricted properties of class with 'arguments' static get method",
        o37: function () {
            var o3 = class o43 {
                static get arguments() { return 42; }
            };

            o10.o24(o3.hasOwnProperty('caller'), "Class does not report that it has own property 'caller'")
            o10.o18(o3.hasOwnProperty('arguments'), "Class has own property 'arguments'")

            o10.o13(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'caller')), "Class does not have 'caller' own property")
            o10.o13('{"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'arguments')), "Class has 'arguments' own property");
            o10.o13('["arguments","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(o3).sort()), "Class has 'arguments' own property, no 'caller' own property");

            o10.o29(function() { o3.caller; }, o30, "Class method throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            o10.o13(42, o3.arguments, "Accessing the 'arguments' property is not restricted");
        }
    },
    {
        name: "Restricted properties of class with 'arguments' set method",
        o37: function () {
            var o49;
            class o43 {
                set arguments(o50) { o49 = o50; }
            };
            var o3 = o43;

            o10.o24(o3.hasOwnProperty('caller'), "Class does not report that it has own property 'caller'")
            o10.o24(o3.hasOwnProperty('arguments'), "Class does not report that it has own property 'arguments'")

            o10.o13(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'caller')), "Class does not have 'caller' own property")
            o10.o13(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'arguments')), "Class has 'arguments' own property");
            o10.o13('["length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(o3).sort()), "Class has 'arguments' own property, no 'caller' own property");

            o10.o29(function() { o3.caller; }, o30, "Class method throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
            o10.o29(function() { o3.arguments; }, o30, "Class method throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

            var o51 = new o43();

            o10.o24(o51.hasOwnProperty('caller'), "Class instance does not report that it has own property 'caller'")
            o10.o24(o51.hasOwnProperty('arguments'), "Class instance does not report that it has own property 'arguments'")

            o10.o24(o51.__proto__.hasOwnProperty('caller'), "Class prototype does not report that it has own property 'caller'")
            o10.o18(o51.__proto__.hasOwnProperty('arguments'), "Class prototype has own property 'arguments'")

            o51.arguments = 50;
            o10.o13(50, o49, "Accessing the 'arguments' property was not restricted");

            o10.o13(undefined, o51.caller, "Access to class instance 'caller' property doesn't throw - instance is not a function");

            o51.caller = 123;

            o10.o13(123, o51.caller, "Assignment to class instance 'caller' property works normally");
        }
    },
    {
        name: "Restricted properties of lambda",
        o37: function () {
            var o3 = () => { }

            o33(o3, "Lambda");
        }
    },
    {
        name: "Restricted properties of strict-mode lambda",
        o37: function () {
            var o3 = () => { 'use strict'; }

            o33(o3, "Strict-mode lambda");
        }
    },
    {
        name: "Restricted properties of bound function",
        o37: function () {
            function target() {}
            var o3 = target.bind(null);

            o33(o3, "Bound function");
        }
    },
    {
        name: "Restricted properties of bound strict-mode function",
        o37: function () {
            function target() { 'use strict'; }
            var o3 = target.bind(null);

            o33(o3, "Bound strict-mode function");
        }
    },
    {
        name: "Restricted properties of generator function",
        o37: function () {
            function* o55() { }

            o33(o55, "Generator function");
        }
    },
    {
        name: "Restricted properties of strict-mode generator function",
        o37: function () {
            function* o55() { 'use strict'; }

            o33(o55, "Generator strict-mode function");
        }
    },
    {
        name: "Restricted properties of object-literal function",
        o37: function () {
            var o3 = { o56() { } }

            o17(o3.o56, "Object-literal function");
        }
    },
    {
        name: "Restricted properties of strict-mode object-literal function",
        o37: function () {
            var o3 = { o56() { 'use strict'; } }

            o33(o3.o56, "Object-literal strict-mode function");
        }
    },
];

o57.o58(o36, { o59: o0.o60[0] != "summary" });
