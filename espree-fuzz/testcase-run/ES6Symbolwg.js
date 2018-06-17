//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Symbol tests -- verifies the API shape and basic functionality

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

function o2(o923) {
    var o3 = {};

    try {
o4.o5(o3.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey. Initially we don't have the property.");
}catch(e){}
    try {
o4.o6(function() { try {
Object.defineProperty(o3, key, { value: 'something', enumerable: true });
}catch(e){} }, "Object.defineProperty uses ToPropertyKey. Property is added to the object");
}catch(e){}

    try {
o4.o7(o3.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey on argument. We should have the property now.");
}catch(e){}
    try {
o4.o7(o3.propertyIsEnumerable(key), "Object#propertyIsEnumerable uses ToPropertyKey.");
}catch(e){}
    try {
Set.prototype(undefined, Object.getOwnPropertyDescriptor(o3, key), "Object.getOwnPropertyDescriptor uses ToPropertyKey");
}catch(e){}

    try {
o3 = {};
}catch(e){}
    try {
o3.__defineGetter__(key, () => { try {
return 2;
}catch(e){}} );
}catch(e){}
    try {
o4.o7(o3.hasOwnProperty(key), "Object#__defineGetter__ uses ToPropertyKey. Property is added to the object");
}catch(e){}

    try {
o3 = {};
}catch(e){}
    try {
o3.__defineSetter__(key, () => { try {
return 2;
}catch(e){}} );
}catch(e){}
    try {
o4.o7(o3.hasOwnProperty(key), "Object#__defineSetter__ uses ToPropertyKey. Property is added to the object");
}catch(e){}

    var o9 = 0;
    try {
o3 = Object.defineProperty({}, key, { set(o10) { try {
o4.o11('abc', o10, "Setter called with correct arg");
}catch(e){} try {
o9++;
}catch(e){} } });
}catch(e){}
    var set = o3.__lookupSetter__(key);
    try {
o4.o11('function', typeof set, "Object#__lookupSetter__ uses ToPropertyKey. Make sure we added a setter.");
}catch(e){}
    try {
set('abc');
}catch(e){}
    try {
o4.o11(1, o9, "Correct setter was called.");
}catch(e){}

    try {
o3 = Object.defineProperty({}, key, { get() { try {
return 'abc';
}catch(e){} } });
}catch(e){}
    var get = o3.__lookupGetter__(key);
    try {
o4.o11('function', typeof get, "Object#__lookupGetter__ uses ToPropertyKey. Make sure we added a getter.");
}catch(e){}
    try {
o4.o11('abc', get(), "Correct getter was called.");
}catch(e){}

    try {
o3 = {};
}catch(e){}
    try {
o4.o6(function() { try {
Reflect.set(o3, key, 'abc');
}catch(e){} }, "Reflect.set uses ToPropertyKey on argument. We should have set property");
}catch(e){}
    try {
o4.o11('abc', Reflect.get(o3, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
}catch(e){}
    try {
o4.o7(Reflect.deleteProperty(o3, key), "Reflect.deleteProperty uses ToPropertyKey. We should successfully remove the property here");
}catch(e){}
    try {
o4.o5(Reflect.has(o3, key), "Reflect.has uses ToPropertyKey. We deleted this property, so we should not have it now.");
}catch(e){}
    try {
o4.o6(function() { try {
Reflect.defineProperty(o3, key, { value: 'def', enumerable: true });
}catch(e){} }, "Reflect.defineProperty uses ToPropertyKey. It should have created a new property");
}catch(e){}
    try {
o4.o11('def', Reflect.get(o3, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
}catch(e){}
    try {
o4.o8(undefined, Reflect.getOwnPropertyDescriptor(o3, key), "Reflect.getOwnPropertyDescriptor uses ToPropertyKey. It should return a real descriptor object");
}catch(e){}

    try {
o3 = {};
}catch(e){}
    try {
o4.o6(function() { try {
o3[key] = 123;
}catch(e){} }, "Ordinary [[Set]] eventually uses ToPropertyKey. Property is added to the object");
}catch(e){}
    try {
o4.o11(123, o3[key], "Ordinary [[Get]] also eventually goes down to ToPropertyKey which should return us the same value");
}catch(e){}
    try {
o4.o7(o3.hasOwnProperty(key), "Verify we added the property under key and not some stringified version of key");
}catch(e){}
}

var o12 = [
    {
        name: "Symbol is a constructor object and has correct shape",
        o13: function () {
            try {
o4.o7(Symbol !== undefined, "Symbol is defined");
}catch(e){}
            try {
o4.o11('function', typeof Symbol, "typeof Symbol === 'function'");
}catch(e){}
            try {
o4.o11(0, Symbol.length, "Symbol.length === 0");
}catch(e){}

            try {
o4.o11('function', typeof Symbol.toString, "typeof Symbol.toString === 'function'");
}catch(e){}
            try {
o4.o11('function', typeof Symbol.valueOf, "typeof Symbol.valueOf === 'function'");
}catch(e){}

            try {
o4.o11('function', typeof Symbol.for, "typeof Symbol.for === 'function'");
}catch(e){}
            try {
o4.o11(1, Symbol.for.length, "Symbol.for.length === 1");
}catch(e){}
            try {
o14 = Object.getOwnPropertyDescriptor(Symbol, 'for');
}catch(e){}
            try {
o4.o7(o14.writable, 'Symbol.for.descriptor.writable == true');
}catch(e){}
            try {
o4.o5(o14.enumerable, 'Symbol.for.descriptor.enumerable == false');
}catch(e){}
            try {
o4.o7(o14.configurable, 'Symbol.for.descriptor.configurable == true');
}catch(e){}

            try {
o4.o11('function', typeof Symbol.keyFor, "typeof Symbol.keyFor === 'function'");
}catch(e){}
            try {
o4.o11(1, Symbol.keyFor.length, "Symbol.keyFor.length === 1");
}catch(e){}
            try {
o14 = Object.getOwnPropertyDescriptor(Symbol, 'keyFor');
}catch(e){}
            try {
o4.o7(o14.writable, 'Symbol.keyFor.descriptor.writable == true');
}catch(e){}
            try {
o4.o5(o14.enumerable, 'Symbol.keyFor.descriptor.enumerable == false');
}catch(e){}
            try {
o4.o7(o14.configurable, 'Symbol.keyFor.descriptor.configurable == true');
}catch(e){}
        }
    },
    {
        name: "Symbol prototype has expected shape",
        o13: function() {
            try {
o4.o7(Symbol === Symbol.prototype.constructor, "Symbol === Symbol.prototype.constructor");
}catch(e){}
            try {
o14 = Object.getOwnPropertyDescriptor(Symbol, 'prototype');
}catch(e){}

            try {
o4.o5(o14.writable, 'Symbol.prototype.descriptor.writable == false');
}catch(e){}
            try {
o4.o5(o14.enumerable, 'Symbol.prototype.descriptor.enumerable == false');
}catch(e){}
            try {
o4.o5(o14.configurable, 'Symbol.prototype.descriptor.configurable == false');
}catch(e){}

            try {
o4.o11('function', typeof Symbol.prototype.toString, "typeof Symbol.prototype.toString === 'function'");
}catch(e){}
            try {
o14 = Object.getOwnPropertyDescriptor(Symbol.prototype, 'toString');
}catch(e){}

            try {
o4.o7(o14.writable, 'Symbol.prototype.toString.descriptor.writable == true');
}catch(e){}
            try {
o4.o5(o14.enumerable, 'Symbol.prototype.toString.descriptor.enumerable == false');
}catch(e){}
            try {
o4.o7(o14.configurable, 'Symbol.prototype.toString.descriptor.configurable == true');
}catch(e){}

            try {
o4.o11('function', typeof Symbol.prototype.valueOf, "typeof Symbol.prototype.valueOf === 'function'");
}catch(e){}
            try {
o14 = Object.getOwnPropertyDescriptor(Symbol.prototype, 'valueOf');
}catch(e){}

            try {
o4.o7(o14.writable, 'Symbol.prototype.valueOf.descriptor.writable == true');
}catch(e){}
            try {
o4.o5(o14.enumerable, 'Symbol.prototype.valueOf.descriptor.enumerable == false');
}catch(e){}
            try {
o4.o7(o14.configurable, 'Symbol.prototype.valueOf.descriptor.configurable == true');
}catch(e){}

            try {
o4.o11('function', typeof Symbol.prototype[Symbol.toPrimitive], "typeof Symbol.prototype[@@toPrimitive] === 'function'");
}catch(e){}
            try {
o4.o11(1, Symbol.prototype[Symbol.toPrimitive].length, "Symbol.prototype[@@toPrimitive].length === 1");
}catch(e){}
            try {
o14 = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toPrimitive);
}catch(e){}

            try {
o4.o5(o14.writable, 'Symbol.prototype[@@toPrimitive].descriptor.writable == false');
}catch(e){}
            try {
o4.o5(o14.enumerable, 'Symbol.prototype[@@toPrimitive].descriptor.enumerable == false');
}catch(e){}
            try {
o4.o7(o14.configurable, 'Symbol.prototype[@@toPrimitive].descriptor.configurable == true');
}catch(e){}

            var o15 = Symbol.prototype[Symbol.toPrimitive].toString();
            var o16 = o15.substring(9, o15.indexOf('('));
            try {
o4.o11('[Symbol.toPrimitive]', o16, "Symbol[@@toPrimitive].name == '[Symbol.toPrimitive]'");
}catch(e){}

            try {
o4.o11('string', typeof Symbol.prototype[Symbol.toStringTag], "typeof Symbol.prototype[@@toStringTag] === 'string'");
}catch(e){}
            try {
o14 = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toStringTag);
}catch(e){}

            try {
o4.o5(o14.writable, 'Symbol.prototype[@@toStringTag].descriptor.writable == false');
}catch(e){}
            try {
o4.o5(o14.enumerable, 'Symbol.prototype[@@toStringTag].descriptor.enumerable == false');
}catch(e){}
            try {
o4.o7(o14.configurable, 'Symbol.prototype[@@toStringTag].descriptor.configurable == true');
}catch(e){}
            try {
o4.o11('Symbol', Symbol.prototype[Symbol.toStringTag], "Symbol.prototype[@@toStringTag] === 'Symbol'");
}catch(e){}
        }
    },
    {
        name: "Symbol constructor and prototype built-ins",
        o13: function() {
            var o17 = Symbol("x");
            var o18 = Symbol("y");

            // toPrimitive() behavior
            try {
o4.o11(o17, o17[Symbol.toPrimitive](), "x == x[Symbol.toPrimitive]()");
}catch(e){}
            try {
o4.o11(o17, o17[Symbol.toPrimitive].call(o17), "x == x[Symbol.toPrimitive].call(x)");
}catch(e){}
            try {
o4.o11(o18, o17[Symbol.toPrimitive].call(o18), "y == x[Symbol.toPrimitive].call(y)");
}catch(e){}
            try {
o4.o5(o17 == o17[Symbol.toPrimitive].call(o18), "x != x[Symbol.toPrimitive].call(y)");
}catch(e){}
            try {
o4.o11(o17, Symbol.prototype[Symbol.toPrimitive].call(o17), "x == Symbol.prototype[Symbol.toPrimitive].call(x)");
}catch(e){}

            // TypeError scenarios
            try {
o4.o19(function () { try {
o17[Symbol.toPrimitive].call("x")
}catch(e){} }, o20, "x[Symbol.toPrimitive].call('x'), toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
}catch(e){}
            try {
o4.o19(function () { try {
Symbol.prototype[Symbol.toPrimitive]()
}catch(e){} }, o20, "toPrimitive throws TypeError if no arguments are passed", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
}catch(e){}
            try {
o4.o19(function () { try {
Symbol.prototype[Symbol.toPrimitive].call(true)
}catch(e){} }, o20, "toPrimitive throws TypeError for boolean true", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
}catch(e){}
            try {
o4.o19(function () { try {
Symbol.prototype[Symbol.toPrimitive].call(false)
}catch(e){} }, o20, "toPrimitive throws TypeError for boolean false", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
}catch(e){}
            try {
o4.o19(function () { try {
Symbol.prototype[Symbol.toPrimitive].call(0)
}catch(e){} }, o20, "toPrimitive throws TypeError for number", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
}catch(e){}
            try {
o4.o19(function () { try {
Symbol.prototype[Symbol.toPrimitive].call(NaN)
}catch(e){} }, o20, "toPrimitive throws TypeError for NaN", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
}catch(e){}
            try {
o4.o19(function () { try {
Symbol.prototype[Symbol.toPrimitive].call("")
}catch(e){} }, o20, "toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
}catch(e){}
            try {
o4.o19(function () { try {
Symbol.prototype[Symbol.toPrimitive].call("abc")
}catch(e){} }, o20, "toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
}catch(e){}
            try {
o4.o19(function () { try {
Symbol.prototype[Symbol.toPrimitive].call(null)
}catch(e){} }, o20, "toPrimitive throws TypeError for null", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
}catch(e){}
            try {
o4.o19(function () { try {
Symbol.prototype[Symbol.toPrimitive].call(undefined)
}catch(e){} }, o20, "toPrimitive throws TypeError for undefined", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
}catch(e){}
            try {
o4.o19(function () { try {
Symbol.prototype[Symbol.toPrimitive].call({})
}catch(e){} }, o20, "toPrimitive throws TypeError for object", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
}catch(e){}

            var o21 = Object(o18);
            try {
o4.o11(o18, Symbol.prototype[Symbol.toPrimitive].call(o21), "y == Symbol.prototype[Symbol.toPrimitive].call(z)");
}catch(e){}
            try {
o4.o5(Object(o17) == Symbol.prototype[Symbol.toPrimitive].call(o21), "Object(x) != Symbol.prototype[Symbol.toPrimitive].call(z)");
}catch(e){}
        }
    },
    {
        name: "Symbol constructor has the well-known symbols as properties",
        o13: function() {
            function o22(o23) {
                var o24 = "Symbol[" + o23 + "]";

                try {
o4.o7(Symbol[o23] !== undefined,  o24 + " !== undefined");
}catch(e){}
                try {
o4.o11('symbol', typeof Symbol[o23], "typeof " + o24 + " === 'symbol'");
}catch(e){}

                var o14 = Object.getOwnPropertyDescriptor(Symbol, o23);
                try {
o4.o5(o14.writable, o24 + '.descriptor.writable == false');
}catch(e){}
                try {
o4.o5(o14.enumerable, o24 + 'descriptor.enumerable == false');
}catch(e){}
                try {
o4.o5(o14.configurable, o24 + 'descriptor.configurable == false');
}catch(e){}
            }

            try {
o22("hasInstance");
}catch(e){}
            try {
o22("isConcatSpreadable");
}catch(e){}
            try {
o22("iterator");
}catch(e){}
            try {
o22("toPrimitive");
}catch(e){}
            try {
o22("toStringTag");
}catch(e){}
            try {
o22("unscopables");
}catch(e){}
            try {
o22("species");
}catch(e){}
            try {
o22("replace");
}catch(e){}
            try {
o22("search");
}catch(e){}
            try {
o22("match");
}catch(e){}
            try {
o22("split");
}catch(e){}
        }
    },
    {
        name: "Symbol primitive toString should throw a type error",
        o13: function() {
            try {
o4.o19(function() { try {
'string' + Symbol.iterator;
}catch(e){} }, o20, "Symbol primitives throw on implicit string conversion", "Object doesn't support property or method 'ToString'");
}catch(e){}
        }
    },
    {
        name: "String(symbol) behavior",
        o13: function() {
            try {
o4.o11('Symbol(description)', String(Symbol('description')), "String(Symbol('description')) === 'Symbol(description)'");
}catch(e){}
            try {
o4.o19(function () { try {
new String(Symbol('description'));
}catch(e){} }, o20, "Symbol as an argument to new String() throws", "Object doesn't support property or method 'ToString'");
}catch(e){}
        }
    },
    {
        name: "Symbol object toString produces a human-readable name",
        o13: function() {
            try {
o4.o11('Symbol(Symbol.hasInstance)', Object(Symbol.hasInstance).toString(), "Object(Symbol.hasInstance).toString() === 'Symbol(Symbol.hasInstance)'");
}catch(e){}
            try {
o4.o11('Symbol(Symbol.isConcatSpreadable)', Object(Symbol.isConcatSpreadable).toString(), "Object(Symbol.isConcatSpreadable).toString() === 'Symbol(Symbol.isConcatSpreadable)'");
}catch(e){}
            try {
o4.o11('Symbol(Symbol.iterator)', Object(Symbol.iterator).toString(), "Object(Symbol.iterator).toString() === 'Symbol(Symbol.iterator)'");
}catch(e){}
            try {
o4.o11('Symbol(Symbol.toPrimitive)', Object(Symbol.toPrimitive).toString(), "Object(Symbol.toPrimitive).toString() === 'Symbol(Symbol.toPrimitive)'");
}catch(e){}
            try {
o4.o11('Symbol(Symbol.toStringTag)', Object(Symbol.toStringTag).toString(), "Object(Symbol.toStringTag).toString() === 'Symbol(Symbol.toStringTag)'");
}catch(e){}
            try {
o4.o11('Symbol(Symbol.unscopables)', Object(Symbol.unscopables).toString(), "Object(Symbol.unscopables).toString() === 'Symbol(Symbol.unscopables)'");
}catch(e){}

            try {
o4.o11('Symbol()', Object(Symbol()).toString(), "Object(Symbol()).toString() === 'Symbol()'");
}catch(e){}
            try {
o4.o11("Symbol(Some kind of long string description\n\n)", Object(Symbol("Some kind of long string description\n\n")).toString(), "Object(Symbol(\"Some kind of long string description\n\n\")).toString() === 'Symbol(Some kind of long string description\n\n)'");
}catch(e){}
        }
    },
    {
        name: "typeof a symbol primitive is 'symbol'",
        o13: function() {
            try {
o4.o11('symbol', typeof Symbol('mysymbol'), "typeof Symbol('mysymbol') === 'symbol'");
}catch(e){}
            try {
o4.o11('symbol', typeof Symbol(''), "typeof Symbol('') === 'symbol'");
}catch(e){}
            try {
o4.o11('symbol', typeof Symbol(), "typeof Symbol() === 'symbol'");
}catch(e){}
        }
    },
    {
        name: "new Symbol throws",
        o13: function() {
            try {
o4.o19(function () { try {
new Symbol()
}catch(e){} }, o20, "new Symbol throws TypeError when it has no parameter", "Function is not a constructor");
}catch(e){}
            try {
o4.o19(function () { try {
new Symbol('anything')
}catch(e){} }, o20, "new Symbol throws TypeError when it has a string parameter", "Function is not a constructor");
}catch(e){}
        }
    },
    {
        name: "Symbols with single-character descriptions (these are special-cased in ThreadContext)",
        o13: function() {
            try {
o4.o7(Symbol('s') !== Symbol('s'), "We are able to create multiple symbols with the same single-character description and they are not equal");
}catch(e){}
        }
    },
    {
        name: "Symbol strict equality with other symbols",
        o13: function() {
            try {
o4.o7(Symbol('something') !== Symbol('something'), "Symbol('something') !== Symbol('something')");
}catch(e){}
            try {
o4.o7(Symbol('') !== Symbol(''), "Symbol('') !== Symbol('')");
}catch(e){}
            try {
o4.o7(Symbol() !== Symbol(), "Symbol() !== Symbol()");
}catch(e){}

            var o25 = Symbol('my');
            try {
o4.o7(o25 === o25, "Generated symbol should equal itself");
}catch(e){}
            var o26 = o25;
            try {
o4.o7(o25 === o26, "Assignment to another Var should still equal the original symbol");
}catch(e){}

            var o27 = Object(o25);
            var o28 = Object(o25);
            try {
o4.o7(o27 !== o28, "Box objects should not be equal for the same symbol");
}catch(e){}
            try {
o4.o7(o27 !== o25, "Box object should not be equal to the symbol primitive");
}catch(e){}
            try {
o4.o7(o27.valueOf() === o28.valueOf(), "Unboxing objects wrapping the same symbol primitive should result in the same symbol returned from valueOf()");
}catch(e){}

            var o29 = Object(Symbol('another'));
            try {
o4.o7(o27 !== o29, "Box objects should not be equal for different symbol primitives");
}catch(e){}

            var o30 = o27.valueOf();
            try {
o4.o7(o25 === o30, "Unboxed symbol should be equal to original primitive");
}catch(e){}

            try {
o4.o7(Symbol.iterator !== Symbol('iterator'), "Symbol.iterator !== Symbol('iterator')");
}catch(e){}

            try {
o4.o7(Object(Symbol('sym')).valueOf() !== Object(Symbol('sym')).valueOf(), "Different symbol primitives boxed and unboxed should not be equal to each other");
}catch(e){}
        }
    },
    {
        name: "Symbol strict equality with other types",
        o13: function() {
            var o31 = Symbol('my');

            try {
o4.o5(o31 === 'string', "sym !== 'string'");
}catch(e){}
            try {
o4.o5(o31 === undefined, "sym !== undefined");
}catch(e){}
            try {
o4.o5(o31 === null, "sym !== null");
}catch(e){}
            try {
o4.o5(o31 === true, "sym !== true");
}catch(e){}
            try {
o4.o5(o31 === false, "sym !== true");
}catch(e){}
            try {
o4.o5(o31 === [], "sym !== []");
}catch(e){}
            try {
o4.o5(o31 === {}, "sym !== {}");
}catch(e){}
            try {
o4.o7(o31 === o31, "sym === sym");
}catch(e){}

            try {
o4.o5('string' === o31, "'string' !== sym");
}catch(e){}
            try {
o4.o5(undefined === o31, "undefined !== sym");
}catch(e){}
            try {
o4.o5(null === o31, "null !== sym");
}catch(e){}
            try {
o4.o5(true === o31, "true !== sym");
}catch(e){}
            try {
o4.o5(false === o31, "false !== sym");
}catch(e){}
            try {
o4.o5([] === o31, "[] !== sym");
}catch(e){}
            try {
o4.o5({} === o31, "{} !== sym");
}catch(e){}
        }
    },
    {
        name: "Symbol equality with other types",
        o13: function() {
            var o31 = Symbol('my');

            try {
o4.o5(o31 == 'string', "ToString(symbol) throws so this should be false");
}catch(e){}
            try {
o4.o5(o31 == undefined, "sym != undefined");
}catch(e){}
            try {
o4.o5(o31 == null, "sym != null");
}catch(e){}
            try {
o4.o5(o31 == true, "symbol != true");
}catch(e){}
            try {
o4.o5(o31 == false, "symbol != false");
}catch(e){}
            try {
o4.o5(o31 == [], "sym != []");
}catch(e){}
            try {
o4.o5(o31 == {}, "sym != {}");
}catch(e){}
            try {
o4.o7(o31 == o31, "sym == sym");
}catch(e){}

            try {
o4.o5('string' == o31, "ToString(symbol) throws so this should be false");
}catch(e){}
            try {
o4.o5(undefined == o31, "undefined != sym");
}catch(e){}
            try {
o4.o5(null == o31, "null != sym");
}catch(e){}
            try {
o4.o5(true == o31, "true != sym");
}catch(e){}
            try {
o4.o5(false == o31, "false != sym");
}catch(e){}
            try {
o4.o5([] == o31, "[] != sym");
}catch(e){}
            try {
o4.o5({} == o31, "{} != sym");
}catch(e){}
        }
    },
    {
        name: "Symbol equality with auto-boxed Symbols",
        o13: function() {
            var o31 = Symbol('my');

            try {
o4.o7(o31 == Object(o31), "Auto-boxed symbol is equal to that symbol");
}catch(e){}
            try {
o4.o7(Object(o31) == o31, "Auto-boxed symbol is equal to that symbol");
}catch(e){}
            try {
o4.o5(Object(o31) == Object(o31), "Two different auto-boxed symbols of the same symbol are never equal to each other");
}catch(e){}

            try {
o4.o5(o31 === Object(o31), "Auto-boxed symbol is not strict-equal to that symbol");
}catch(e){}
            try {
o4.o5(Object(o31) === o31, "Auto-boxed symbol is not strict-equal to that symbol");
}catch(e){}
            try {
o4.o5(Object(o31) === Object(o31), "Two different auto-boxed symbols of the same symbol are never strict-equal to each other");
}catch(e){}
        }
    },
    {
        name: "Symbol auto-boxing",
        o13: function() {
            try {
o4.o11('Symbol()', Symbol().toString(), "Autoboxing for toString()");
}catch(e){}

            var o31 = Symbol();

            try {
o4.o7(o31.valueOf() === o31.valueOf(), "Autoboxing for valueOf()");
}catch(e){}
        }
    },
    {
        name: "Symbol primitives work as property keys",
        o13: function() {
            var o32 = {};
            try {
o32[Symbol.iterator] = 'some string';
}catch(e){}
            try {
o4.o11('some string', o32[Symbol.iterator], "o[Symbol.iterator] === 'some string'");
}catch(e){}
            try {
o4.o7(o32[Symbol.iterator.toString()] === undefined, "o[Symbol.iterator] uses the property id stored in Symbol.iterator (not the value created by Symbol.iterator.toString())");
}catch(e){}

            // use functions to wrap property access to ensure we hit JIT code
            function o33(o3, o31) {
                try {
return o3[o31];
}catch(e){}
            }
            function o34(o3, o31, o35) {
                try {
o3[o31] = o35;
}catch(e){}
            }

            try {
o32 = {};
}catch(e){}
            var o36 = Symbol();
            try {
for (var o37 = 0; o37 < 5; o37++) {
                try {
o34(o32, o36, o37);
}catch(e){}
                try {
o4.o11(o37, o33(o32, o36), "Property keyed by symbol is able to be set and get");
}catch(e){}
            }
}catch(e){}

            var o31 = Symbol('sym');
            try {
o32 = {};
}catch(e){}
            try {
o32[o31] = 'test';
}catch(e){}

            try {
o4.o11('test', o32[o31], "Symbol converted to property key works");
}catch(e){}
            try {
o4.o11(undefined, o32['sym'], "Symbol description is not added as a property to the object");
}catch(e){}

            var o38 = Symbol('uniquevalue');
            var o39 = Symbol('uniquevalue');
            try {
o32 = {};
}catch(e){}
            try {
o32[o38] = 's1';
}catch(e){}
            try {
o32[o39] = 's2';
}catch(e){}

            try {
o4.o11('s1', o32[o38], "Simple test of symbol producing a property on an object");
}catch(e){}
            try {
o4.o11('s2', o32[o39], "Simple test of symbol producing a property on an object");
}catch(e){}
            try {
o4.o7(o32[o38] != o32[o39], "Different symbols with the same description create different properties on an object");
}catch(e){}

            try {
delete o32[o38];
}catch(e){}

            try {
o4.o11(undefined, o32[o38], "deleting properties from objects also works");
}catch(e){}
            try {
o4.o11('s2', o32[o39], "deleting a property doesn't affect other properties");
}catch(e){}

            // Needs ES6 object literal improvements
            try {
o32 = { [o31] : 'string' };
}catch(e){}
            try {
o4.o11('string', o32[o31], "Object literal declared with symbol property works");
}catch(e){}
        }
    },
    {
        name: "Object.prototype.hasOwnProperty works for symbols",
        o13: function() {
            var o32 = {};

            try {
o4.o5(o32.hasOwnProperty(Symbol.iterator), "Property defined with a symbol initially is not in the object");
}catch(e){}

            try {
o32[Symbol.iterator] = 'a string';
}catch(e){}

            try {
o4.o7(o32.hasOwnProperty(Symbol.iterator), "Property defined with a symbol can be looked up via o.hasOwnProperty");
}catch(e){}
        }
    },
    {
        name: "Symbols handled by type conversion operations",
        o13: function() {
            try {
o4.o19(function () { try {
Number(Symbol.iterator).valueOf()
}catch(e){} }, o20, "ToNumber(symbol) throws TypeError", "Number expected");
}catch(e){}
            try {
o4.o11(true, Boolean(Symbol.iterator), "ToBoolean(symbol) === true");
}catch(e){}
            try {
o4.o11('object', typeof Object(Symbol.iterator), "ToObject(symbol) is not a symbol object");
}catch(e){}
        }
    },
    {
        name: "API shape of Object.getOwnPropertySymbols",
        o13: function() {
            try {
o4.o7(Object.getOwnPropertySymbols !== undefined, "Object.getOwnPropertySymbols is defined");
}catch(e){}
            try {
o4.o11('function', typeof Object.getOwnPropertySymbols, "Object.getOwnPropertySymbols is a function");
}catch(e){}
            try {
o4.o11(1, Object.getOwnPropertySymbols.length, "Object.getOwnPropertySymbols.length === 1");
}catch(e){}
        }
    },
    {
        name: "Object.getOwnPropertySymbols does ToObject on its argument",
        o13: function() {
            try {
o4.o19(function () { try {
Object.getOwnPropertySymbols();
}catch(e){} }, o20, "ToObject(undefined) throws TypeError", "Object expected");
}catch(e){}
            try {
o4.o19(function () { try {
Object.getOwnPropertySymbols(undefined);
}catch(e){} }, o20, "ToObject(undefined) throws TypeError", "Object expected");
}catch(e){}
            try {
o4.o19(function () { try {
Object.getOwnPropertySymbols(null);
}catch(e){} }, o20, "ToObject(null) throws TypeError", "Object expected");
}catch(e){}
            try {
o4.o11([], Object.getOwnPropertySymbols(true), "Object.getOwnPropertySymbols does ToObject on boolean");
}catch(e){}
            try {
o4.o11([], Object.getOwnPropertySymbols(1), "Object.getOwnPropertySymbols does ToObject on number");
}catch(e){}
            try {
o4.o11([], Object.getOwnPropertySymbols("a"), "Object.getOwnPropertySymbols does ToObject on string");
}catch(e){}
            try {
o4.o11([], Object.getOwnPropertySymbols(Symbol('a')), "Object.getOwnPropertySymbols does ToObject on symbol");
}catch(e){}
            try {
o4.o11([], Object.getOwnPropertySymbols({}), "Object.getOwnPropertySymbols returns an empty array for an empty object");
}catch(e){}
        }
    },
    {
        name: "Object.getOwnPropertySymbols only returns symbols",
        o13: function() {
            var o31 = Symbol('c');
            var o32 = {};

            try {
o32['a'] = 'alpha';
}catch(e){}
            try {
Object.defineProperty(o32, 'b', { value: 'beta', enumerable: false } );
}catch(e){}
            try {
o32[o31] = 'gamma';
}catch(e){}
            try {
o32['d'] = 'delta';
}catch(e){}

            var o40 = Object.getOwnPropertySymbols(o32);

            try {
o4.o11(1, o40.length, "symbols.length === 1");
}catch(e){}

            try {
for(var o37 = 0; o37 < o40.length; o37++) {
                try {
o4.o7(typeof o40[o37] === 'symbol', "The symbols array only includes entries of type symbol");
}catch(e){}
                try {
o4.o7(o40[o37].toString() != 'a', "The symbols array does not include an entry with the name of any of our string properties");
}catch(e){}
                try {
o4.o7(o40[o37].toString() != 'b', "The symbols array does not include an entry with the name of any of our string properties");
}catch(e){}
                try {
o4.o7(o40[o37].toString() != 'd', "The symbols array does not include an entry with the name of any of our string properties");
}catch(e){}
                try {
o4.o7(o40[o37] === o31, "The symbols array includes our symbol");
}catch(e){}
                try {
o4.o7(o40[o37].toString() === o31.toString(), "The symbols array includes an entry with our symbol.toString()");
}catch(e){}
            }
}catch(e){}

            var o38 = Symbol('name');
            var o39 = Symbol('name');
            try {
o32 = {};
}catch(e){}

            try {
o32[o38] = 'something';
}catch(e){}
            try {
o32[o39] = 'something else';
}catch(e){}

            try {
o40 = Object.getOwnPropertySymbols(o32);
}catch(e){}

            try {
o4.o11(2, o40.length, "symbols.length === 2");
}catch(e){}
            try {
o4.o7(o40[0] === o38, "symbols[0] === s1");
}catch(e){}
            try {
o4.o7(o40[1] === o39, "symbols[1] === s2");
}catch(e){}

            try {
o32 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}catch(e){}

            try {
o40 = Object.getOwnPropertySymbols(o32);
}catch(e){}

            try {
o4.o11(0, o40.length, "Object with no symbol properties returns empty array from Object.getOwnPropertySymbols");
}catch(e){}
        }
    },
    {
        name: "Object.getOwnPropertyNames doesn't return symbols",
        o13: function() {
            var o31 = Symbol('c');
            var o32 = {};

            try {
o32['a'] = 'alpha';
}catch(e){}
            try {
Object.defineProperty(o32, 'b', { value: 'beta', enumerable: false } );
}catch(e){}
            try {
o32[o31] = 'gamma';
}catch(e){}
            try {
o32['d'] = 'delta';
}catch(e){}

            var o41 = Object.getOwnPropertyNames(o32);

            try {
o4.o11(3, o41.length, "names.length === 3");
}catch(e){}

            try {
for(var o37 = 0; o37 < o41.length; o37++) {
                try {
o4.o5(typeof o41[o37] === 'symbol', "The names array does not include an entry of type symbol");
}catch(e){}
                try {
o4.o7(o41[o37] != 'c', "The names array does not include an entry with the description of our symbol");
}catch(e){}
                try {
o4.o7(o41[o37] != o31, "The names array does not include any symbols");
}catch(e){}
                try {
o4.o7(o41[o37] != o31.toString(), "The names array does not include an entry with our symbol.toString()");
}catch(e){}
            }
}catch(e){}

            try {
o32 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}catch(e){}

            try {
o41 = Object.getOwnPropertyNames(o32);
}catch(e){}

            try {
o4.o11(11, o41.length, "Object with no symbol properties returns correct array");
}catch(e){}

            try {
o32 = {};
}catch(e){}

            try {
o32[o31] = 'something';
}catch(e){}

            try {
o41 = Object.getOwnPropertyNames(o32);
}catch(e){}

            try {
o4.o11(0, o41.length, "Object with only symbol properties returns empty array");
}catch(e){}
        }
    },
    {
        name: "Object.keys should not return property keys which are symbols",
        o13: function() {
            var o31 = Symbol('c');
            var o32 = {};

            try {
o32['a'] = 'alpha';
}catch(e){}
            try {
o32['b'] = 'beta';
}catch(e){}
            try {
o32[o31] = 'gamma';
}catch(e){}
            try {
o32['d'] = 'delta';
}catch(e){}

            var keys = Object.keys(o32);

            try {
o4.o11(3, keys.length, "keys.length === 3");
}catch(e){}

            try {
for(var o37 = 0; o37 < keys.length; o37++) {
                try {
o4.o5(typeof keys[o37] === 'symbol', "The keys array does not include an entry of type symbol");
}catch(e){}
                try {
o4.o7(keys[o37] != 'c', "The keys array does not include an entry with the description of our symbol");
}catch(e){}
                try {
o4.o7(keys[o37] != o31, "The keys array does not include any symbols");
}catch(e){}
                try {
o4.o7(keys[o37] != o31.toString(), "The keys array does not include an entry with our symbol.toString()");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "for ... in enumeration does not surface symbols",
        o13: function() {
            var o31 = Symbol('c');
            var o32 = {};

            try {
o32['a'] = 'alpha';
}catch(e){}
            try {
o32['b'] = 'beta';
}catch(e){}
            try {
o32[o31] = 'gamma';
}catch(e){}
            try {
o32['d'] = 'delta';
}catch(e){}

            try {
for (o42 in o32)
            {
                try {
o4.o5(typeof o42 === 'symbol', "for ... in does not enumerate symbol types");
}catch(e){}
                try {
o4.o7(o32[o42] !== 'gamma', "for ... in does not enumerate properties keyed by symbols");
}catch(e){}
                try {
o4.o7(o42 != o31, "for ... in does not enumerate our symbol");
}catch(e){}
                try {
o4.o7(o42 != o31.toString(), "for ... in does not enumerate a property named sym.toString()");
}catch(e){}
            }
}catch(e){}
        }
    },
    {
        name: "Object.defineProperty with symbol as property key",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};

            try {
Object.defineProperty(o32, o31, { value: 'some value' } );
}catch(e){}

            try {
o4.o11('some value', o32[o31], "Property keyed off symbol and set via Object.defineProperty should be reachable by the same symbol");
}catch(e){}
            try {
o4.o11(undefined, o32['sym'], "defineProperty does not create a property based on symbol name");
}catch(e){}
            try {
o4.o11(undefined, o32[''], "defineProperty does not create a property based on symbol description");
}catch(e){}
            try {
o4.o11(undefined, o32[o31.toString()], "defineProperty does not create a property based on symbol toString() value");
}catch(e){}
        }
    },
    {
        name: "Object.defineProperties with symbols as property keys",
        o13: function() {
            var o43 = {};
            var o38 = Symbol('symbol 1');
            var o39 = Symbol('symbol 2');
            try {
o43['a'] = { value: 'alpha', enumerable: true };
}catch(e){}
            try {
o43[o38] = { value: 'beta', enumerable: true };
}catch(e){}
            try {
o43[o39] = { value: 'gamma', enumerable: true };
}catch(e){}
            try {
o43['d'] = { value: 'delta', enumerable: true };
}catch(e){}
            var o32 = {};

            try {
Object.defineProperties(o32, o43);
}catch(e){}

            try {
o4.o11('alpha', o32['a'], "Property keyed off string is added as expected");
}catch(e){}
            try {
o4.o11('delta', o32['d'], "Property keyed off string is added as expected");
}catch(e){}

            try {
o4.o11('beta', o32[o38], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
}catch(e){}
            try {
o4.o11('gamma', o32[o39], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
}catch(e){}
            try {
o4.o11(undefined, o32['s1'], "defineProperties does not create a property based on symbol name");
}catch(e){}
            try {
o4.o11(undefined, o32['s2'], "defineProperties does not create a property based on symbol name");
}catch(e){}
            try {
o4.o11(undefined, o32['symbol 1'], "defineProperties does not create a property based on symbol description");
}catch(e){}
            try {
o4.o11(undefined, o32['symbol 2'], "defineProperties does not create a property based on symbol description");
}catch(e){}
            try {
o4.o11(undefined, o32[o38.toString()], "defineProperty does not create a property based on symbol toString() value");
}catch(e){}
            try {
o4.o11(undefined, o32[o39.toString()], "defineProperty does not create a property based on symbol toString() value");
}catch(e){}
        }
    },
    {
        name: "Object.create should work for symbol properties",
        o13: function() {
            var o43 = {};
            var o38 = Symbol('symbol 1');
            var o39 = Symbol('symbol 2');
            try {
o43['a'] = { value: 'alpha', enumerable: true };
}catch(e){}
            try {
o43[o38] = { value: 'beta', enumerable: true };
}catch(e){}
            try {
o43[o39] = { value: 'gamma', enumerable: true };
}catch(e){}
            try {
o43['d'] = { value: 'delta', enumerable: true };
}catch(e){}

            var o32 = Object.create(Object.prototype, o43);

            try {
o4.o11('alpha', o32['a'], "Property keyed off string is added as expected");
}catch(e){}
            try {
o4.o11('delta', o32['d'], "Property keyed off string is added as expected");
}catch(e){}

            try {
o4.o11('beta', o32[o38], "Property keyed off symbol set via Object.create should be reachable by the same symbol");
}catch(e){}
            try {
o4.o11('gamma', o32[o39], "Property keyed off symbol set via Object.create should be reachable by the same symbol");
}catch(e){}
            try {
o4.o11(undefined, o32['s1'], "Object.create does not create a property based on symbol name");
}catch(e){}
            try {
o4.o11(undefined, o32['s2'], "Object.create does not create a property based on symbol name");
}catch(e){}
            try {
o4.o11(undefined, o32['symbol 1'], "Object.create does not create a property based on symbol description");
}catch(e){}
            try {
o4.o11(undefined, o32['symbol 2'], "Object.create does not create a property based on symbol description");
}catch(e){}
            try {
o4.o11(undefined, o32[o38.toString()], "Object.create does not create a property based on symbol toString() value");
}catch(e){}
            try {
o4.o11(undefined, o32[o39.toString()], "Object.create does not create a property based on symbol toString() value");
}catch(e){}
        }
    },
    {
        name: "Object.getOwnPropertyDescriptor with symbol as property key",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};

            try {
Object.defineProperty(o32, o31, { value: 100000, writable: false, enumerable: true, configurable: false } );
}catch(e){}
            var o14 = Object.getOwnPropertyDescriptor(o32, o31);

            try {
o4.o5(o14.writable, 'o[sym].descriptor.writable == false');
}catch(e){}
            try {
o4.o7(o14.enumerable, 'o[sym].descriptor.enumerable == true');
}catch(e){}
            try {
o4.o5(o14.configurable, 'o[sym].descriptor.configurable == false');
}catch(e){}
        }
    },
    {
        name: "Object.prototype.propertyIsEnumerable should work for symbol properties",
        o13: function() {
            var o44 = Symbol();
            var o45 = Symbol();
            var o32 = {};
            try {
Object.defineProperty(o32, o44, { value: 10, enumerable: true});
}catch(e){}
            try {
Object.defineProperty(o32, o45, { value: 10, enumerable: false});
}catch(e){}

            try {
o4.o7(o32.propertyIsEnumerable(o44), 'o.propertyIsEnumerable[sym1]');
}catch(e){}
            try {
o4.o5(o32.propertyIsEnumerable(o45), 'o.propertyIsEnumerable[sym2]');
}catch(e){}
        }
    },
    {
        name: "Object.prototype.__defineSetter__ with a property keyed by a symbol",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};
            var o46;

            try {
o32.__defineSetter__(o31, function() { try {
o46 = 'useful string';
}catch(e){} });
}catch(e){}

            try {
o32[o31] = 'anything';
}catch(e){}

            try {
o4.o11('useful string', o46, "Object.prototype.__defineSetter__ works when we use a symbol");
}catch(e){}
        }
    },
    {
        name: "Object.prototype.__defineGetter__ with a property keyed by a symbol",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};

            try {
o32.__defineGetter__(o31, function() { try {
return 'anything';
}catch(e){} });
}catch(e){}

            try {
o4.o11('anything', o32[o31], "Object.prototype.__defineGetter__ works when we use a symbol");
}catch(e){}
        }
    },
    {
        name: "Object.prototype.__lookupSetter__ with a property keyed by a symbol",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};
            var o46;
            var setter = function() { try {
o46 = 'useful string';
}catch(e){} };

            try {
o32.__defineSetter__(o31, setter);
}catch(e){}
            var o47 = o32.__lookupSetter__(o31);

            try {
o4.o11(undefined, o46, "setter has not yet been called");
}catch(e){}
            try {
o4.o7(o47 === setter, "Object.prototype.__lookupSetter__ returns correct function when we use a symbol");
}catch(e){}

            try {
o47();
}catch(e){}

            try {
o4.o11('useful string', o46, "calling setter returned from Object.prototype.__lookupSetter__ works as expected");
}catch(e){}

            try {
o46 = undefined;
}catch(e){}

            try {
o32[o31] = 'anything';
}catch(e){}

            try {
o4.o11('useful string', o46, "Object.prototype.__lookupSetter__ works when we use a symbol");
}catch(e){}
        }
    },
    {
        name: "Object.prototype.__lookupGetter__ with a property keyed by a symbol",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};
            var getter = function() { try {
return 'anything';
}catch(e){} };

            try {
o32.__defineGetter__(o31, getter);
}catch(e){}
            var o47 = o32.__lookupGetter__(o31);

            try {
o4.o7(o47 === getter, "Object.prototype.__lookupGetter__ returns correct function when we use a symbol");
}catch(e){}
            try {
o4.o11('anything', o47(), "function returned via Object.prototype.__lookupGetter__ works as expected");
}catch(e){}
            try {
o4.o11('anything', o32[o31], "Object.prototype.__lookupGetter__ works when we use a symbol");
}catch(e){}
        }
    },
    {
        name: 'Symbol with numeric description does not create a numeric property',
        o13: function() {
            var o31 = Symbol('1');
            var o32 = {};

            try {
o32[o31] = 'a string';
}catch(e){}

            try {
o4.o11(undefined, o32[1], "Object should not contain numeric property at index == symbol description");
}catch(e){}
            try {
o4.o11('a string', o32[o31], "Object should contain the symbol property");
}catch(e){}

            try {
o32 = [];
}catch(e){}

            try {
o32[1] = 'the number 1';
}catch(e){}
            try {
o32[o31] = 'the symbol 1';
}catch(e){}

            try {
o4.o11(2, o32.length, "Object has correct length");
}catch(e){}
            try {
o4.o11('the number 1', o32[1], "Object with numeric property has correct value");
}catch(e){}
            try {
o4.o11('the symbol 1', o32[o31], "Object with symbol property has correct value");
}catch(e){}
        }
    },
    {
        name: 'BLUE: 539472 BLUE: 541467 - Symbol.prototype should be TypeIds_Object',
        o13: function() {
            try {
o4.o19(function () { try {
Symbol.prototype.valueOf();
}catch(e){} }, o20, "Calling prototype methods directly fails since Symbol.prototype is not a SymbolObject", "Symbol.prototype.valueOf: 'this' is not a Symbol object");
}catch(e){}
            try {
o4.o19(function () { try {
Symbol.prototype.toString();
}catch(e){} }, o20, "Calling prototype methods directly fails since Symbol.prototype is not a SymbolObject", "Symbol.prototype.toString: 'this' is not a Symbol object");
}catch(e){}
        }
    },
    {
        name: 'Symbol objects and properties passed cross-context',
        o13: function() {
            var o48 = o0.o1("ES6Symbol_cross_context_child.js", "samethread");

            try {
o4.o5(Symbol('child symbol') === o48.o31, "Symbol created in another context does not equal symbol with same description from this context");
}catch(e){}
            try {
o4.o11('symbol', typeof o48.o31, "Symbol created in another context has correct type");
}catch(e){}
            try {
o4.o11(undefined, o48.o32[Symbol('child symbol')], "Object from another context with a symbol-keyed property doesn't contain a property named the same as a different symbol");
}catch(e){}
            try {
o4.o11('Symbol(child symbol)', o48.o31.toString(), "Symbol from another context has correct toString behavior");
}catch(e){}
            try {
o4.o11('child value', o48.o32[o48.o31], "Symbol from another context can be used to lookup properties in objects from another context");
}catch(e){}

            var o32 = {};
            try {
o32[o48.o31] = 'parent value';
}catch(e){}

            try {
o4.o11('parent value', o32[o48.o31], "Symbol from another context can be used to index objects from this context");
}catch(e){}

            var o40 = Object.getOwnPropertySymbols(o48.o32);

            try {
o4.o11(1, o40.length, "Object.getOwnPropertySymbols works for objects from another context");
}catch(e){}
            try {
o4.o7(o40[0] === o48.o31, "Object.getOwnPropertySymbols returns the correct symbols for objects from another context");
}catch(e){}
        }
    },
    {
        name: 'Symbol registration within a single realm',
        o13: function() {
            var o31 = Symbol.for('my string');
            var o45 = Symbol.for('my string');

            try {
o4.o11('symbol', typeof o31, "Object returned from Symbol.for is actually a symbol");
}catch(e){}
            try {
o4.o11('Symbol(my string)', o31.toString(), "Symbol returned from Symbol.for has the right description");
}catch(e){}
            try {
o4.o7(o31 === o45, "Two symbols returned from Symbol.for with the same parameter are the same symbol");
}catch(e){}

            var key = Symbol.keyFor(o31);

            try {
o4.o11('my string', key, "Symbol created by Symbol.for can be passed to Symbol.keyFor to return the same key");
}catch(e){}
        }
    },
    {
        name: 'Symbol registration cross-realm',
        o13: function() {
            var o49 = Symbol.for('parent symbol');

            var o48 = o0.o1("ES6Symbol_cross_context_registration_child.js", "samethread");

            var o50 = Symbol.for('child symbol');

            try {
o4.o7(o48.o50 === o50, "Symbol registered in child is returned correctly in parent");
}catch(e){}
            try {
o4.o7(o48.o49 === o49, "Symbol registered in parent is returned correctly in child");
}catch(e){}
            try {
o4.o7(o48.o51 === Symbol.keyFor(o49), "Symbol registered in parent is returned correctly in child");
}catch(e){}
        }
    },
    {
        name: 'Registered Symbols should have their PropertyRecords pinned',
        o13: function() {
            var o31 = Symbol.for('my string');
            try {
o31 = undefined;
}catch(e){}

            // After cleaning up sym, there shouldn't be anyone pinning the PropertyRecord
            // except for the Symbol registration map.
            // If the reference to the PropertyRecord created above gets cleaned-up we will
            // cause an AV below when we try to reference it again.
            try {
o52();
}catch(e){}

            try {
o31 = Symbol.for('my string');
}catch(e){}

            try {
o4.o11('symbol', typeof o31, "Object returned from Symbol.for is actually a symbol");
}catch(e){}
            try {
o4.o11('Symbol(my string)', o31.toString(), "Symbol returned from Symbol.for has the right description");
}catch(e){}
        }
    },
    {
        name: 'Registered Symbol should not be returned by unregistered Symbol with the same description',
        o13: function() {
            var o31 = Symbol.for('my string');
            var o45 = Symbol('my string');

            try {
o4.o5(o31 === o45, "Symbols created via Symbol.for and Symbol constructor should not be equal even if they have the same description");
}catch(e){}
            try {
o4.o11('my string', Symbol.keyFor(o31), "Symbol.keyFor returns correct key for registered symbol");
}catch(e){}
            try {
o4.o11(undefined, Symbol.keyFor(o45), "Symbol.keyFor returns undefined for symbols not registered with Symbol.for");
}catch(e){}
        }
    },
    {
        name: 'Throwing TypeError when trying to add with a string or a number',
        o13: function() {
            var o17 = Symbol();

            try {
o4.o19(function() { try {
"str" + o17;
}catch(e){} }, o20, "Adding a string and a symbol throws TypeError", "Object doesn't support property or method 'ToString'");
}catch(e){}
            try {
o4.o19(function() { try {
o17 + "str";
}catch(e){} }, o20, "Adding a symbol and a string throws TypeError", "Object doesn't support property or method 'ToString'");
}catch(e){}
            try {
o4.o19(function() { try {
10 + o17;
}catch(e){} }, o20, "Adding a number and a symbol throws TypeError", "Number expected");
}catch(e){}
            try {
o4.o19(function() { try {
o17 + 10;
}catch(e){} }, o20, "Adding a symbol and a number throws TypeError", "Number expected");
}catch(e){}
        }
    },
    {
        name: 'ToPropertyKey accepts Symbol wrapper objects, and unboxes the Symbol primitive inside',
        o13: function() {
            var o31 = Symbol('sym');
            var o53 = Object(o31);
            var o3 = { [o53] : 'value' };

            try {
o4.o11('value', o3[o31], "Object created with Symbol wrapper object passed as computed property creates a symbol-keyed property from the unboxed symbol");
}catch(e){}
            try {
o4.o11('value', o3[o53], "Looking up a property by passing a Symbol wrapper object actually returns the property keyed off of the unboxed symbol");
}catch(e){}

            try {
o4.o11([], Object.getOwnPropertyNames(o3), "Object has no string-keyed properties");
}catch(e){}
            try {
o4.o11([o31], Object.getOwnPropertySymbols(o3), "Object only has one symbol-keyed property - sym");
}catch(e){}

            var o54 = {};
            try {
o54[o53] = 'value2';
}catch(e){}

            try {
o4.o11('value2', o54[o31], "Object created with Symbol wrapper object passed to property index set creates a symbol-keyed property from the unboxed symbol");
}catch(e){}
            try {
o4.o11('value2', o54[o53], "Looking up a property by passing a Symbol wrapper object actually returns the property keyed off of the unboxed symbol");
}catch(e){}

            try {
o4.o11([], Object.getOwnPropertyNames(o54), "Object has no string-keyed properties");
}catch(e){}
            try {
o4.o11([o31], Object.getOwnPropertySymbols(o54), "Object only has one symbol-keyed property - sym");
}catch(e){}
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which unwraps Symbol objects',
        o13: function() {
            var o31 = Symbol('sym');
            var o55 = Object(o31);

            try {
o2(o55);
}catch(e){}
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which returns symbol primitive via toString',
        o13: function() {
            var o31 = Symbol('sym');
            var o56 = {
                toString() {
                    try {
return o31;
}catch(e){}
                },
                valueOf() {
                    try {
o4.o7(false, "We should never call the valueOf method of this object");
}catch(e){}
                }
            };

            try {
o2(o56);
}catch(e){}
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which returns symbol primitive via valueOf',
        o13: function() {
            var o31 = Symbol('sym');
            var o3 = { [o31] : 'value' };
            var o57 = {
                toString : null,
                valueOf() {
                    try {
return o31;
}catch(e){}
                }
            };

            try {
o2(o57);
}catch(e){}
        }
    },
    {
        name: 'ToNumber called with a symbol primitive should throw a TypeError',
        o13: function() {
            var o17 = Symbol();
            var o3 = { 'length': o17 };

            // We can't use parseInt directly here as that does ToString(obj) - we want something which calls ToNumber directly
            try {
o4.o19(function() { try {
Array.prototype.lastIndexOf.call(o3, 1);
}catch(e){} }, o20, "Array.prototype.lastIndexOf performs ToLength(obj) which should throw TypeError if obj is a symbol primitive.", "Number expected");
}catch(e){}
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive in strict mode should throw a TypeError',
        o13: function() {
            var o17 = Symbol();
            try {
o4.o19(function() { try {
"use strict";
}catch(e){} try {
o17.o58 = 1;
}catch(e){} }, o20, "Assigning to a property of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive in strict mode should throw a TypeError',
        o13: function() {
            var o17 = Symbol();
            try {
o4.o19(function() { try {
"use strict";
}catch(e){} try {
o17['a'+'b'] = 1;
}catch(e){} }, o20, "Assigning to a property of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}
        }
    },
    {
        name: 'Assigning to an index of a symbol primitive in strict mode should throw a TypeError',
        o13: function() {
            var o17 = Symbol();
            try {
o4.o19(function() { try {
"use strict";
}catch(e){} try {
o17[12] = 1;
}catch(e){} }, o20, "Assigning to an index of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive should be ignored',
        o13: function() {
            var o17 = Symbol();
            try {
o17.o58 = 1;
}catch(e){}
            try {
o4.o11(o17.o58, undefined);
}catch(e){}
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive should be ignored',
        o13: function() {
            var o17 = Symbol();
            try {
o17['a'+'b'] = 1;
}catch(e){}
            try {
o4.o11(o17['ab'], undefined);
}catch(e){}
        }
    },
    {
        name: 'Assigning to an index of a symbol primitive should be ignored',
        o13: function() {
            var o17 = Symbol();
            try {
o17[10086] = 1;
}catch(e){}
            try {
o4.o11(o17[10086], undefined);
}catch(e){}
        }
    },
    {
        name: '[OS: Bug 4533235] JSON.stringify should ignore symbols (kangax)',
        o13: function() {
            var o59 = {o60: Symbol()};
            var o31 = Symbol("a");
            try {
o59[Symbol()] = 1;
}catch(e){}
            var o61 = [Symbol()];

            try {
o4.o11('{}', JSON.stringify(o59));
}catch(e){}
            try {
o4.o11('[null]', JSON.stringify(o61));
}catch(e){}
            try {
o4.o11(undefined, JSON.stringify(Symbol()));
}catch(e){}
            try {
o4.o11(undefined, JSON.stringify(o31));
}catch(e){}
        }
    },
    {
        name: '[OS: Bug 5950493] Symbol(undefined).toString() produces "Symbol(undefined)" instead of "Symbol()".',
        o13: function() {
            try {
o4.o11('Symbol()', Symbol().toString(), 'Symbol().toString() === "Symbol()"');
}catch(e){}
            try {
o4.o11('Symbol()', Symbol(undefined).toString(), 'Symbol(undefined).toString() === "Symbol()"');
}catch(e){}
            try {
o4.o11('Symbol()', Symbol("").toString(), 'Symbol("").toString() === "Symbol()"');
}catch(e){}
        }
    }
];

try {
o62.o63(o12, { o64: o0.o65[0] != "summary" });
}catch(e){}
