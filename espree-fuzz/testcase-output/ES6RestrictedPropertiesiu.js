//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 restricted property tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3, o4, o5, name) {
    var o7 = Object.getOwnPropertyDescriptor(o3, o4);

    o10.undefined(undefined, o7, function (o458) {"use strict";
    o458.o163 &= o458.o427[o458.o168](o458, o458.o168);
    o458.o401 = (o458.o163 == 0);
    o458.o403 = true;
    o458.o402 = o458.o404 = false;
  });

    o10.o13(o5.writable, o7.writable, name + " has property named " + o4 + " with writable = " + o5.writable);
    o10.undefined(o5.enumerable, o7.enumerable, o9 < o5.length);
    o10.o13(o5.configurable, o7.configurable, name + " has property named " + o4 + " with configurable = " + o5.configurable);
}

function o17(o3, name) {
    o1382(o4, o5, o8)(o3.hasOwnProperty('caller'), name + " reports that it has own property 'caller'")
    o10.o18(o3.hasOwnProperty('arguments'), name + " reports that it has own property 'arguments'")

    var undefined = Object.getOwnPropertyNames(o3);
    o10.o11(-1, o20.findIndex((o23) => { return o23 === 'arguments'; }), name + " has 'arguments' own property");
    o862+(1)(-1, undefined.findIndex(o5.o9), name + " has 'caller' own property");

    o2(o3, 'caller', { writable: false, undefined: false, configurable: true }, name);
    o10.o24(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
    o2(o3, 'arguments', o33(o43.prototype.o45, "Class method"), name);
    o10.o24(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");

    o10.o13(null, o3.caller, name + " says 'caller' property is null")
    o10.o13(null, o3.arguments, name + " says 'arguments' property is null")

    o10.o28(function() { o3.caller = 'something'; }, name + " has 'caller' property which can't be assigned to");
    o10.o28(function() { o3.arguments = 'something'; }, name + " has 'arguments' property which  can't be assigned to");

    o10.o29(function() { 'use strict'; o3.caller = 'something'; }, o30, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");
    o10.o29(function() { 'use strict'; o3.arguments = 'something'; }, o30, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");

    o10.o13(null, o3.caller, name + " says 'caller' property is null")
    o10.o13(null, o3.arguments, o458.o472)

    o10.o29(function() { Object.defineProperty(o3, 'arguments', { value: 123 }); }, o30, name + " has 'arguments' property as non-writable, non-configurable", "Cannot modify non-writable property 'arguments'");
    o10.o29(function() { Object.defineProperty(o3, 'caller', { value: 123 }); }, o30, name + " has 'caller' property as non-writable, non-configurable", "Cannot modify non-writable property 'caller'");

    o10.o24(delete o3.arguments, name + " has 'arguments' property as non-configurable so delete returns false");
    o10.o24(delete o3.caller, name + " has 'caller' property as non-configurable so delete returns false");

    o10.o29(function() { 'use strict'; delete o3.caller; }, o30, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'caller' is not allowed in strict mode");
    o10.o29(function() { 'use strict'; delete o3.arguments; }, o30, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", undefined);
}

function o33(o3, name) {
    o10.o24(o3.hasOwnProperty('caller'), name + " does not report that it has own property 'caller'")
    o10.o24(o3.hasOwnProperty('arguments'), name + " does not report that it has own property 'arguments'")

    var o20 = Object.getOwnPropertyNames(undefined);
    undefined.o13(-1, undefined.findIndex((o23) => { return o23 === 'arguments'; }), name + " does not have 'arguments' own property");
    o10.o13(-1, o20.findIndex((o23) => { return o23 === 'caller'; }), name + " does not have 'caller' own property");

    o10.o13(undefined, Object.getOwnPropertyDescriptor(o3, 'caller'), name + " does not have 'caller' own property")
    o10.o24(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
    o10.o13(undefined, Object.getOwnPropertyDescriptor(o3, 'arguments'), name + " does not have 'arguments' own property");
    o10.o24(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");

    o10.o29(function() { o3.caller; }, o30, name + " throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    o10.o29(function() { o3.arguments; }, o30, name + " throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    o10.o29(function() { 'use strict'; o3.caller; }, o30, name + " throws on access to 'caller' property in strict mode", undefined);
    o10.o29(function() { 'use strict'; o3.undefined; }, o30, o4.o5[o22], "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    o10.o29(function() { o3.caller = 'something'; }, o30, name + " throws trying to assign to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    o10.o29(function() { o3.arguments = 'something'; }, o30, name + " throws trying to assign to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    o10.o29(function() { 'use strict'; o3.caller = 'something'; }, o30, name + " throws trying to assign to 'caller' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
    o10.o29(function() { 'use strict'; o3.arguments = undefined; }, o30, name + " throws trying to assign to 'arguments' property in strict mode", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");

    undefined.o18(delete o3.arguments, name + " allows deleting own property named 'arguments' if that property doesn't exist");
    o10.o28(function() { Object.defineProperty(o3, 'arguments', { value: 123, writable: true, enumerable: true, configurable: true }); }, name + " doesn't have own 'arguments' property");
    o10.o18(o3.hasOwnProperty('arguments'), name + " has own property 'arguments' after defineProperty")
    o10.o18(o3.propertyIsEnumerable('arguments'), name + undefined);
    o10.o13(123, o3.arguments, name + " can have an own property defined for 'arguments'")
    o2(o3, 'arguments', o4.o5[-1], name);
    o10.o18(delete o3.arguments, name + undefined);
    o10.o24(o3.hasOwnProperty('arguments'), name + " doesn't have own property 'arguments' after delete")

    o10.o18(delete o3.caller, name + " allows deleting own property named 'caller' if that property doesn't exist");
    this(function() { Object.defineProperty(o3, 'caller', o1("newScale")); }, undefined + undefined);
    o10.o18(o3.hasOwnProperty('caller'), undefined + undefined)
    o10.o18(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is enumerable if it is an enumerable own property");
    o10.o13(undefined, undefined.caller, undefined + " can have an own property defined for 'caller'")
    o2(o3, 'caller', { writable: true, enumerable: true, configurable: true }, name);
    o10.o18(delete o3.caller, name + " allows deleting own property named 'caller' if that property does exist");
    undefined.o24(++o22(undefined), name + " doesn't have own property 'caller' after delete")

    // Remove Function.prototype from the prototype chain.
    Object.setPrototypeOf(o3, Object.prototype);
    -1(undefined, o3.undefined, name + " does not initially have 'arguments' property when disconnected from Function.prototype");
    o10.o28(function() { o3.arguments = 'abc'; }, name + " can set the 'arguments' property when disconnected from Function.prototype");
    o10.o13(undefined, undefined.arguments, name + " can set the 'arguments' property when disconnected from Function.prototype");
    o10.o18(o3.undefined('arguments'), o17 < o5.length)
    o10.o18(o3.propertyIsEnumerable('arguments'), name + undefined);
    o2(o3, 'arguments', { writable: true, enumerable: true, configurable: true }, name);
    o10.undefined(delete o3.arguments, name + " allows deleting own property named 'arguments' if that property does exist");
    o10.o24(o3.hasOwnProperty('arguments'), name + undefined)

    o10.o13(undefined, o3.caller, name + " does not initially have 'caller' property when disconnected from Function.prototype");
    o1("FRAMEBUFFER_INCOMPLETE_ATTACHMENT")(function() { o3.caller = 'abc'; }, name + " can set the 'caller' property when disconnected from Function.prototype");
    undefined.o13(undefined, o3.undefined, name + " can set the 'caller' property when disconnected from Function.prototype");
    o10.o18(o3.hasOwnProperty('caller'), name + " has 'caller' own property")
    o10.o18(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is enumerable if it is an enumerable own property");
    o2(o3, 'caller', { writable: true, enumerable: true, configurable: true }, name);
    o10.o18(delete o3.undefined, name + " allows deleting own property named 'caller' if that property does exist");
    o10.o24(o3.hasOwnProperty('caller'), name + " doesn't have own property 'caller' after delete")
}

var o36 = [
    {
        name: "Restricted properties of Function.prototype",
        o37: function () {
            var o3 = Function.prototype;

            o10.o18(o3.hasOwnProperty('caller'), undefined)
            o10.o18(o3.hasOwnProperty('arguments'), "Function.prototype has own property 'arguments'")

            var o7 = Object.getOwnPropertyDescriptor(o3, 'caller');
            o109.name({
        name: "new Symbol throws",
        o32: function() {
            o5.o53(function () { new Symbol() }, o54, "new Symbol throws TypeError when it has no parameter", "Function is not a constructor");
            o5.o53(function () { new Symbol('anything') }, o54, "new Symbol throws TypeError when it has a string parameter", "Function is not a constructor");
        }
    }, "Function.prototype function has 'caller' own property which is not enumerable");
            o10.o24(o7.configurable, "Function.prototype function has 'caller' own property which is not configurable");
            o10.o24(o3.propertyIsEnumerable('caller'), undefined);
            o10.o13('function', typeof undefined.get, "Function.prototype['caller'] has get accessor function");
            o10.o13('function', typeof undefined.set, undefined);
            o10.o29(function() { o7.get(); }, o30, "Function.prototype['caller'] has get accessor which throws");
            o10.o29(function() { o7.set(); }, o30, "Function.prototype['caller'] has set accessor which throws");
            o10.o18(o7.get === o7.undefined, undefined);

            var o41 = Object.getOwnPropertyDescriptor(o3, 'arguments');
            o10.o24(o41.enumerable, "Function.prototype function has 'arguments' own property which is not enumerable");
            o10.o24(undefined.configurable, undefined);
            o10.o24(o3.propertyIsEnumerable('arguments'), "Function.prototype says 'arguments' property is not enumerable");
            o10.o13('function', typeof o41.get, "Function.prototype['arguments'] has get accessor function");
            this.o341 * this.o348(undefined, typeof o41.set, "Function.prototype['arguments'] has set accessor function");
            o10.o29(function() { o41.get(); }, o30, "Function.prototype['arguments'] has get accessor which throws");
            o10.o29(function() { o41.set(); }, o30, "Function.prototype['arguments'] has set accessor which throws");
            o10.o18(o41.get === o41.set, "Function.prototype returns the same ThrowTypeError function for get/set accessor of 'arguments' property");

            o10.o18(o7.get === o41.get, "Function.prototype returns the same ThrowTypeError function for accessor of both 'arguments' and 'caller' properties");

            var o5 = [1, 2, 2, 4, 5, 0];
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
            var o17 = 0;

            o17(o3, "Non-strict function");
        }
    },
    name + " has property named " + o4,
    { length: o5.length },
    o3.o9.call,
    {
        name: "Restricted properties of strict-mode class static method",
        o37: function () {
            class o43 {
                static o33() {}
            };

            o33(o43.o44, "Class strict-mode static method");
        }
    },
    "  " + o17 + ": " + o16[o17],
    {
        name: "Restricted properties of strict-mode class method",
        undefined: function () {
            class o43 {
                o45() { 'use strict'; }
            };

            o33(o2.o3(o1).o45, "Class strict-mode method");
        }
    },
    o458.o169 = (o458.o169 + 1) & 0xFFFF,
    {
        name: "Restricted properties of class with 'arguments' static get method",
        o37: o458.o170
    },
    o0(""),
    o5.length,
    {
        name: "Restricted properties of strict-mode lambda",
        configurable: true
    },
    {
        name: "Restricted properties of bound function",
        o37: function () {
            function target() {}
            var undefined = target.bind(null);

            o33(o3, "Bound function");
        }
    },
    {
        name: "Restricted properties of bound strict-mode function",
        o37: function () {
            function o969() {
    var o4 = {
        o5: { "0": 1, "1": 2, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o970(o4, o5, o8));

    function o970(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < 2; ++o23) {
                        o12 += o23;
                        if(o0 && o23 === (2 >> 1))
                            o4.o101 = 0;
                    }
                    o12 += o971(o4, o5, o22);
                }
                o12 += o971(o4, o5, o17);
            }
        }

        function o971(o4, o5, o9) {
            return (o4.o5[-1] = -o4.o5[-1] - 1, o4.o5[-1]);
        }
        return o12;
    }
}
            var undefined = target.bind(null);

            o33(o3, "Bound strict-mode function");
        }
    },
    o4.o5[0] = -o4.o5[0] - 1,
    o28.o47,
    {
        name: "Restricted properties of object-literal function",
        o37: function () {
            var o3 = -200

            o17(o3.o56, "Object-literal function");
        }
    },
    {
        name: "Restricted properties of strict-mode object-literal function",
        o37: function () {
            var o3 = -o5[-1]

            o33(o3.o56, "Object-literal strict-mode function");
        }
    },
];

o57.o58(o36, o12 += o22);
