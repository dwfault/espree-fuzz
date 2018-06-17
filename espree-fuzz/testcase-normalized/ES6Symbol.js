//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Symbol tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(key) {
    var o3 = {};

    o4.o5(o3.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey. Initially we don't have the property.");
    o4.o6(function() { Object.defineProperty(o3, key, { value: 'something', enumerable: true }); }, "Object.defineProperty uses ToPropertyKey. Property is added to the object");

    o4.o7(o3.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey on argument. We should have the property now.");
    o4.o7(o3.propertyIsEnumerable(key), "Object#propertyIsEnumerable uses ToPropertyKey.");
    o4.o8(undefined, Object.getOwnPropertyDescriptor(o3, key), "Object.getOwnPropertyDescriptor uses ToPropertyKey");

    o3 = {};
    o3.__defineGetter__(key, () => { return 2;} );
    o4.o7(o3.hasOwnProperty(key), "Object#__defineGetter__ uses ToPropertyKey. Property is added to the object");

    o3 = {};
    o3.__defineSetter__(key, () => { return 2;} );
    o4.o7(o3.hasOwnProperty(key), "Object#__defineSetter__ uses ToPropertyKey. Property is added to the object");

    var o9 = 0;
    o3 = Object.defineProperty({}, key, { set(o10) { o4.o11('abc', o10, "Setter called with correct arg"); o9++; } });
    var set = o3.__lookupSetter__(key);
    o4.o11('function', typeof set, "Object#__lookupSetter__ uses ToPropertyKey. Make sure we added a setter.");
    set('abc');
    o4.o11(1, o9, "Correct setter was called.");

    o3 = Object.defineProperty({}, key, { get() { return 'abc'; } });
    var get = o3.__lookupGetter__(key);
    o4.o11('function', typeof get, "Object#__lookupGetter__ uses ToPropertyKey. Make sure we added a getter.");
    o4.o11('abc', get(), "Correct getter was called.");

    o3 = {};
    o4.o6(function() { Reflect.set(o3, key, 'abc'); }, "Reflect.set uses ToPropertyKey on argument. We should have set property");
    o4.o11('abc', Reflect.get(o3, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
    o4.o7(Reflect.deleteProperty(o3, key), "Reflect.deleteProperty uses ToPropertyKey. We should successfully remove the property here");
    o4.o5(Reflect.has(o3, key), "Reflect.has uses ToPropertyKey. We deleted this property, so we should not have it now.");
    o4.o6(function() { Reflect.defineProperty(o3, key, { value: 'def', enumerable: true }); }, "Reflect.defineProperty uses ToPropertyKey. It should have created a new property");
    o4.o11('def', Reflect.get(o3, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
    o4.o8(undefined, Reflect.getOwnPropertyDescriptor(o3, key), "Reflect.getOwnPropertyDescriptor uses ToPropertyKey. It should return a real descriptor object");

    o3 = {};
    o4.o6(function() { o3[key] = 123; }, "Ordinary [[Set]] eventually uses ToPropertyKey. Property is added to the object");
    o4.o11(123, o3[key], "Ordinary [[Get]] also eventually goes down to ToPropertyKey which should return us the same value");
    o4.o7(o3.hasOwnProperty(key), "Verify we added the property under key and not some stringified version of key");
}

var o12 = [
    {
        name: "Symbol is a constructor object and has correct shape",
        o13: function () {
            o4.o7(Symbol !== undefined, "Symbol is defined");
            o4.o11('function', typeof Symbol, "typeof Symbol === 'function'");
            o4.o11(0, Symbol.length, "Symbol.length === 0");

            o4.o11('function', typeof Symbol.toString, "typeof Symbol.toString === 'function'");
            o4.o11('function', typeof Symbol.valueOf, "typeof Symbol.valueOf === 'function'");

            o4.o11('function', typeof Symbol.for, "typeof Symbol.for === 'function'");
            o4.o11(1, Symbol.for.length, "Symbol.for.length === 1");
            o14 = Object.getOwnPropertyDescriptor(Symbol, 'for');
            o4.o7(o14.writable, 'Symbol.for.descriptor.writable == true');
            o4.o5(o14.enumerable, 'Symbol.for.descriptor.enumerable == false');
            o4.o7(o14.configurable, 'Symbol.for.descriptor.configurable == true');

            o4.o11('function', typeof Symbol.keyFor, "typeof Symbol.keyFor === 'function'");
            o4.o11(1, Symbol.keyFor.length, "Symbol.keyFor.length === 1");
            o14 = Object.getOwnPropertyDescriptor(Symbol, 'keyFor');
            o4.o7(o14.writable, 'Symbol.keyFor.descriptor.writable == true');
            o4.o5(o14.enumerable, 'Symbol.keyFor.descriptor.enumerable == false');
            o4.o7(o14.configurable, 'Symbol.keyFor.descriptor.configurable == true');
        }
    },
    {
        name: "Symbol prototype has expected shape",
        o13: function() {
            o4.o7(Symbol === Symbol.prototype.constructor, "Symbol === Symbol.prototype.constructor");
            o14 = Object.getOwnPropertyDescriptor(Symbol, 'prototype');

            o4.o5(o14.writable, 'Symbol.prototype.descriptor.writable == false');
            o4.o5(o14.enumerable, 'Symbol.prototype.descriptor.enumerable == false');
            o4.o5(o14.configurable, 'Symbol.prototype.descriptor.configurable == false');

            o4.o11('function', typeof Symbol.prototype.toString, "typeof Symbol.prototype.toString === 'function'");
            o14 = Object.getOwnPropertyDescriptor(Symbol.prototype, 'toString');

            o4.o7(o14.writable, 'Symbol.prototype.toString.descriptor.writable == true');
            o4.o5(o14.enumerable, 'Symbol.prototype.toString.descriptor.enumerable == false');
            o4.o7(o14.configurable, 'Symbol.prototype.toString.descriptor.configurable == true');

            o4.o11('function', typeof Symbol.prototype.valueOf, "typeof Symbol.prototype.valueOf === 'function'");
            o14 = Object.getOwnPropertyDescriptor(Symbol.prototype, 'valueOf');

            o4.o7(o14.writable, 'Symbol.prototype.valueOf.descriptor.writable == true');
            o4.o5(o14.enumerable, 'Symbol.prototype.valueOf.descriptor.enumerable == false');
            o4.o7(o14.configurable, 'Symbol.prototype.valueOf.descriptor.configurable == true');

            o4.o11('function', typeof Symbol.prototype[Symbol.toPrimitive], "typeof Symbol.prototype[@@toPrimitive] === 'function'");
            o4.o11(1, Symbol.prototype[Symbol.toPrimitive].length, "Symbol.prototype[@@toPrimitive].length === 1");
            o14 = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toPrimitive);

            o4.o5(o14.writable, 'Symbol.prototype[@@toPrimitive].descriptor.writable == false');
            o4.o5(o14.enumerable, 'Symbol.prototype[@@toPrimitive].descriptor.enumerable == false');
            o4.o7(o14.configurable, 'Symbol.prototype[@@toPrimitive].descriptor.configurable == true');

            var o15 = Symbol.prototype[Symbol.toPrimitive].toString();
            var o16 = o15.substring(9, o15.indexOf('('));
            o4.o11('[Symbol.toPrimitive]', o16, "Symbol[@@toPrimitive].name == '[Symbol.toPrimitive]'");

            o4.o11('string', typeof Symbol.prototype[Symbol.toStringTag], "typeof Symbol.prototype[@@toStringTag] === 'string'");
            o14 = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toStringTag);

            o4.o5(o14.writable, 'Symbol.prototype[@@toStringTag].descriptor.writable == false');
            o4.o5(o14.enumerable, 'Symbol.prototype[@@toStringTag].descriptor.enumerable == false');
            o4.o7(o14.configurable, 'Symbol.prototype[@@toStringTag].descriptor.configurable == true');
            o4.o11('Symbol', Symbol.prototype[Symbol.toStringTag], "Symbol.prototype[@@toStringTag] === 'Symbol'");
        }
    },
    {
        name: "Symbol constructor and prototype built-ins",
        o13: function() {
            var o17 = Symbol("x");
            var o18 = Symbol("y");

            // toPrimitive() behavior
            o4.o11(o17, o17[Symbol.toPrimitive](), "x == x[Symbol.toPrimitive]()");
            o4.o11(o17, o17[Symbol.toPrimitive].call(o17), "x == x[Symbol.toPrimitive].call(x)");
            o4.o11(o18, o17[Symbol.toPrimitive].call(o18), "y == x[Symbol.toPrimitive].call(y)");
            o4.o5(o17 == o17[Symbol.toPrimitive].call(o18), "x != x[Symbol.toPrimitive].call(y)");
            o4.o11(o17, Symbol.prototype[Symbol.toPrimitive].call(o17), "x == Symbol.prototype[Symbol.toPrimitive].call(x)");

            // TypeError scenarios
            o4.o19(function () { o17[Symbol.toPrimitive].call("x") }, o20, "x[Symbol.toPrimitive].call('x'), toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o19(function () { Symbol.prototype[Symbol.toPrimitive]() }, o20, "toPrimitive throws TypeError if no arguments are passed", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o19(function () { Symbol.prototype[Symbol.toPrimitive].call(true) }, o20, "toPrimitive throws TypeError for boolean true", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o19(function () { Symbol.prototype[Symbol.toPrimitive].call(false) }, o20, "toPrimitive throws TypeError for boolean false", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o19(function () { Symbol.prototype[Symbol.toPrimitive].call(0) }, o20, "toPrimitive throws TypeError for number", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o19(function () { Symbol.prototype[Symbol.toPrimitive].call(NaN) }, o20, "toPrimitive throws TypeError for NaN", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o19(function () { Symbol.prototype[Symbol.toPrimitive].call("") }, o20, "toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o19(function () { Symbol.prototype[Symbol.toPrimitive].call("abc") }, o20, "toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o19(function () { Symbol.prototype[Symbol.toPrimitive].call(null) }, o20, "toPrimitive throws TypeError for null", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o19(function () { Symbol.prototype[Symbol.toPrimitive].call(undefined) }, o20, "toPrimitive throws TypeError for undefined", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o19(function () { Symbol.prototype[Symbol.toPrimitive].call({}) }, o20, "toPrimitive throws TypeError for object", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");

            var o21 = Object(o18);
            o4.o11(o18, Symbol.prototype[Symbol.toPrimitive].call(o21), "y == Symbol.prototype[Symbol.toPrimitive].call(z)");
            o4.o5(Object(o17) == Symbol.prototype[Symbol.toPrimitive].call(o21), "Object(x) != Symbol.prototype[Symbol.toPrimitive].call(z)");
        }
    },
    {
        name: "Symbol constructor has the well-known symbols as properties",
        o13: function() {
            function o22(o23) {
                var o24 = "Symbol[" + o23 + "]";

                o4.o7(Symbol[o23] !== undefined,  o24 + " !== undefined");
                o4.o11('symbol', typeof Symbol[o23], "typeof " + o24 + " === 'symbol'");

                var o14 = Object.getOwnPropertyDescriptor(Symbol, o23);
                o4.o5(o14.writable, o24 + '.descriptor.writable == false');
                o4.o5(o14.enumerable, o24 + 'descriptor.enumerable == false');
                o4.o5(o14.configurable, o24 + 'descriptor.configurable == false');
            }

            o22("hasInstance");
            o22("isConcatSpreadable");
            o22("iterator");
            o22("toPrimitive");
            o22("toStringTag");
            o22("unscopables");
            o22("species");
            o22("replace");
            o22("search");
            o22("match");
            o22("split");
        }
    },
    {
        name: "Symbol primitive toString should throw a type error",
        o13: function() {
            o4.o19(function() { 'string' + Symbol.iterator; }, o20, "Symbol primitives throw on implicit string conversion", "Object doesn't support property or method 'ToString'");
        }
    },
    {
        name: "String(symbol) behavior",
        o13: function() {
            o4.o11('Symbol(description)', String(Symbol('description')), "String(Symbol('description')) === 'Symbol(description)'");
            o4.o19(function () { new String(Symbol('description')); }, o20, "Symbol as an argument to new String() throws", "Object doesn't support property or method 'ToString'");
        }
    },
    {
        name: "Symbol object toString produces a human-readable name",
        o13: function() {
            o4.o11('Symbol(Symbol.hasInstance)', Object(Symbol.hasInstance).toString(), "Object(Symbol.hasInstance).toString() === 'Symbol(Symbol.hasInstance)'");
            o4.o11('Symbol(Symbol.isConcatSpreadable)', Object(Symbol.isConcatSpreadable).toString(), "Object(Symbol.isConcatSpreadable).toString() === 'Symbol(Symbol.isConcatSpreadable)'");
            o4.o11('Symbol(Symbol.iterator)', Object(Symbol.iterator).toString(), "Object(Symbol.iterator).toString() === 'Symbol(Symbol.iterator)'");
            o4.o11('Symbol(Symbol.toPrimitive)', Object(Symbol.toPrimitive).toString(), "Object(Symbol.toPrimitive).toString() === 'Symbol(Symbol.toPrimitive)'");
            o4.o11('Symbol(Symbol.toStringTag)', Object(Symbol.toStringTag).toString(), "Object(Symbol.toStringTag).toString() === 'Symbol(Symbol.toStringTag)'");
            o4.o11('Symbol(Symbol.unscopables)', Object(Symbol.unscopables).toString(), "Object(Symbol.unscopables).toString() === 'Symbol(Symbol.unscopables)'");

            o4.o11('Symbol()', Object(Symbol()).toString(), "Object(Symbol()).toString() === 'Symbol()'");
            o4.o11("Symbol(Some kind of long string description\n\n)", Object(Symbol("Some kind of long string description\n\n")).toString(), "Object(Symbol(\"Some kind of long string description\n\n\")).toString() === 'Symbol(Some kind of long string description\n\n)'");
        }
    },
    {
        name: "typeof a symbol primitive is 'symbol'",
        o13: function() {
            o4.o11('symbol', typeof Symbol('mysymbol'), "typeof Symbol('mysymbol') === 'symbol'");
            o4.o11('symbol', typeof Symbol(''), "typeof Symbol('') === 'symbol'");
            o4.o11('symbol', typeof Symbol(), "typeof Symbol() === 'symbol'");
        }
    },
    {
        name: "new Symbol throws",
        o13: function() {
            o4.o19(function () { new Symbol() }, o20, "new Symbol throws TypeError when it has no parameter", "Function is not a constructor");
            o4.o19(function () { new Symbol('anything') }, o20, "new Symbol throws TypeError when it has a string parameter", "Function is not a constructor");
        }
    },
    {
        name: "Symbols with single-character descriptions (these are special-cased in ThreadContext)",
        o13: function() {
            o4.o7(Symbol('s') !== Symbol('s'), "We are able to create multiple symbols with the same single-character description and they are not equal");
        }
    },
    {
        name: "Symbol strict equality with other symbols",
        o13: function() {
            o4.o7(Symbol('something') !== Symbol('something'), "Symbol('something') !== Symbol('something')");
            o4.o7(Symbol('') !== Symbol(''), "Symbol('') !== Symbol('')");
            o4.o7(Symbol() !== Symbol(), "Symbol() !== Symbol()");

            var o25 = Symbol('my');
            o4.o7(o25 === o25, "Generated symbol should equal itself");
            var o26 = o25;
            o4.o7(o25 === o26, "Assignment to another Var should still equal the original symbol");

            var o27 = Object(o25);
            var o28 = Object(o25);
            o4.o7(o27 !== o28, "Box objects should not be equal for the same symbol");
            o4.o7(o27 !== o25, "Box object should not be equal to the symbol primitive");
            o4.o7(o27.valueOf() === o28.valueOf(), "Unboxing objects wrapping the same symbol primitive should result in the same symbol returned from valueOf()");

            var o29 = Object(Symbol('another'));
            o4.o7(o27 !== o29, "Box objects should not be equal for different symbol primitives");

            var o30 = o27.valueOf();
            o4.o7(o25 === o30, "Unboxed symbol should be equal to original primitive");

            o4.o7(Symbol.iterator !== Symbol('iterator'), "Symbol.iterator !== Symbol('iterator')");

            o4.o7(Object(Symbol('sym')).valueOf() !== Object(Symbol('sym')).valueOf(), "Different symbol primitives boxed and unboxed should not be equal to each other");
        }
    },
    {
        name: "Symbol strict equality with other types",
        o13: function() {
            var o31 = Symbol('my');

            o4.o5(o31 === 'string', "sym !== 'string'");
            o4.o5(o31 === undefined, "sym !== undefined");
            o4.o5(o31 === null, "sym !== null");
            o4.o5(o31 === true, "sym !== true");
            o4.o5(o31 === false, "sym !== true");
            o4.o5(o31 === [], "sym !== []");
            o4.o5(o31 === {}, "sym !== {}");
            o4.o7(o31 === o31, "sym === sym");

            o4.o5('string' === o31, "'string' !== sym");
            o4.o5(undefined === o31, "undefined !== sym");
            o4.o5(null === o31, "null !== sym");
            o4.o5(true === o31, "true !== sym");
            o4.o5(false === o31, "false !== sym");
            o4.o5([] === o31, "[] !== sym");
            o4.o5({} === o31, "{} !== sym");
        }
    },
    {
        name: "Symbol equality with other types",
        o13: function() {
            var o31 = Symbol('my');

            o4.o5(o31 == 'string', "ToString(symbol) throws so this should be false");
            o4.o5(o31 == undefined, "sym != undefined");
            o4.o5(o31 == null, "sym != null");
            o4.o5(o31 == true, "symbol != true");
            o4.o5(o31 == false, "symbol != false");
            o4.o5(o31 == [], "sym != []");
            o4.o5(o31 == {}, "sym != {}");
            o4.o7(o31 == o31, "sym == sym");

            o4.o5('string' == o31, "ToString(symbol) throws so this should be false");
            o4.o5(undefined == o31, "undefined != sym");
            o4.o5(null == o31, "null != sym");
            o4.o5(true == o31, "true != sym");
            o4.o5(false == o31, "false != sym");
            o4.o5([] == o31, "[] != sym");
            o4.o5({} == o31, "{} != sym");
        }
    },
    {
        name: "Symbol equality with auto-boxed Symbols",
        o13: function() {
            var o31 = Symbol('my');

            o4.o7(o31 == Object(o31), "Auto-boxed symbol is equal to that symbol");
            o4.o7(Object(o31) == o31, "Auto-boxed symbol is equal to that symbol");
            o4.o5(Object(o31) == Object(o31), "Two different auto-boxed symbols of the same symbol are never equal to each other");

            o4.o5(o31 === Object(o31), "Auto-boxed symbol is not strict-equal to that symbol");
            o4.o5(Object(o31) === o31, "Auto-boxed symbol is not strict-equal to that symbol");
            o4.o5(Object(o31) === Object(o31), "Two different auto-boxed symbols of the same symbol are never strict-equal to each other");
        }
    },
    {
        name: "Symbol auto-boxing",
        o13: function() {
            o4.o11('Symbol()', Symbol().toString(), "Autoboxing for toString()");

            var o31 = Symbol();

            o4.o7(o31.valueOf() === o31.valueOf(), "Autoboxing for valueOf()");
        }
    },
    {
        name: "Symbol primitives work as property keys",
        o13: function() {
            var o32 = {};
            o32[Symbol.iterator] = 'some string';
            o4.o11('some string', o32[Symbol.iterator], "o[Symbol.iterator] === 'some string'");
            o4.o7(o32[Symbol.iterator.toString()] === undefined, "o[Symbol.iterator] uses the property id stored in Symbol.iterator (not the value created by Symbol.iterator.toString())");

            // use functions to wrap property access to ensure we hit JIT code
            function o33(o3, o31) {
                return o3[o31];
            }
            function o34(o3, o31, o35) {
                o3[o31] = o35;
            }

            o32 = {};
            var o36 = Symbol();
            for (var o37 = 0; o37 < 5; o37++) {
                o34(o32, o36, o37);
                o4.o11(o37, o33(o32, o36), "Property keyed by symbol is able to be set and get");
            }

            var o31 = Symbol('sym');
            o32 = {};
            o32[o31] = 'test';

            o4.o11('test', o32[o31], "Symbol converted to property key works");
            o4.o11(undefined, o32['sym'], "Symbol description is not added as a property to the object");

            var o38 = Symbol('uniquevalue');
            var o39 = Symbol('uniquevalue');
            o32 = {};
            o32[o38] = 's1';
            o32[o39] = 's2';

            o4.o11('s1', o32[o38], "Simple test of symbol producing a property on an object");
            o4.o11('s2', o32[o39], "Simple test of symbol producing a property on an object");
            o4.o7(o32[o38] != o32[o39], "Different symbols with the same description create different properties on an object");

            delete o32[o38];

            o4.o11(undefined, o32[o38], "deleting properties from objects also works");
            o4.o11('s2', o32[o39], "deleting a property doesn't affect other properties");

            // Needs ES6 object literal improvements
            o32 = { [o31] : 'string' };
            o4.o11('string', o32[o31], "Object literal declared with symbol property works");
        }
    },
    {
        name: "Object.prototype.hasOwnProperty works for symbols",
        o13: function() {
            var o32 = {};

            o4.o5(o32.hasOwnProperty(Symbol.iterator), "Property defined with a symbol initially is not in the object");

            o32[Symbol.iterator] = 'a string';

            o4.o7(o32.hasOwnProperty(Symbol.iterator), "Property defined with a symbol can be looked up via o.hasOwnProperty");
        }
    },
    {
        name: "Symbols handled by type conversion operations",
        o13: function() {
            o4.o19(function () { Number(Symbol.iterator).valueOf() }, o20, "ToNumber(symbol) throws TypeError", "Number expected");
            o4.o11(true, Boolean(Symbol.iterator), "ToBoolean(symbol) === true");
            o4.o11('object', typeof Object(Symbol.iterator), "ToObject(symbol) is not a symbol object");
        }
    },
    {
        name: "API shape of Object.getOwnPropertySymbols",
        o13: function() {
            o4.o7(Object.getOwnPropertySymbols !== undefined, "Object.getOwnPropertySymbols is defined");
            o4.o11('function', typeof Object.getOwnPropertySymbols, "Object.getOwnPropertySymbols is a function");
            o4.o11(1, Object.getOwnPropertySymbols.length, "Object.getOwnPropertySymbols.length === 1");
        }
    },
    {
        name: "Object.getOwnPropertySymbols does ToObject on its argument",
        o13: function() {
            o4.o19(function () { Object.getOwnPropertySymbols(); }, o20, "ToObject(undefined) throws TypeError", "Object expected");
            o4.o19(function () { Object.getOwnPropertySymbols(undefined); }, o20, "ToObject(undefined) throws TypeError", "Object expected");
            o4.o19(function () { Object.getOwnPropertySymbols(null); }, o20, "ToObject(null) throws TypeError", "Object expected");
            o4.o11([], Object.getOwnPropertySymbols(true), "Object.getOwnPropertySymbols does ToObject on boolean");
            o4.o11([], Object.getOwnPropertySymbols(1), "Object.getOwnPropertySymbols does ToObject on number");
            o4.o11([], Object.getOwnPropertySymbols("a"), "Object.getOwnPropertySymbols does ToObject on string");
            o4.o11([], Object.getOwnPropertySymbols(Symbol('a')), "Object.getOwnPropertySymbols does ToObject on symbol");
            o4.o11([], Object.getOwnPropertySymbols({}), "Object.getOwnPropertySymbols returns an empty array for an empty object");
        }
    },
    {
        name: "Object.getOwnPropertySymbols only returns symbols",
        o13: function() {
            var o31 = Symbol('c');
            var o32 = {};

            o32['a'] = 'alpha';
            Object.defineProperty(o32, 'b', { value: 'beta', enumerable: false } );
            o32[o31] = 'gamma';
            o32['d'] = 'delta';

            var o40 = Object.getOwnPropertySymbols(o32);

            o4.o11(1, o40.length, "symbols.length === 1");

            for(var o37 = 0; o37 < o40.length; o37++) {
                o4.o7(typeof o40[o37] === 'symbol', "The symbols array only includes entries of type symbol");
                o4.o7(o40[o37].toString() != 'a', "The symbols array does not include an entry with the name of any of our string properties");
                o4.o7(o40[o37].toString() != 'b', "The symbols array does not include an entry with the name of any of our string properties");
                o4.o7(o40[o37].toString() != 'd', "The symbols array does not include an entry with the name of any of our string properties");
                o4.o7(o40[o37] === o31, "The symbols array includes our symbol");
                o4.o7(o40[o37].toString() === o31.toString(), "The symbols array includes an entry with our symbol.toString()");
            }

            var o38 = Symbol('name');
            var o39 = Symbol('name');
            o32 = {};

            o32[o38] = 'something';
            o32[o39] = 'something else';

            o40 = Object.getOwnPropertySymbols(o32);

            o4.o11(2, o40.length, "symbols.length === 2");
            o4.o7(o40[0] === o38, "symbols[0] === s1");
            o4.o7(o40[1] === o39, "symbols[1] === s2");

            o32 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            o40 = Object.getOwnPropertySymbols(o32);

            o4.o11(0, o40.length, "Object with no symbol properties returns empty array from Object.getOwnPropertySymbols");
        }
    },
    {
        name: "Object.getOwnPropertyNames doesn't return symbols",
        o13: function() {
            var o31 = Symbol('c');
            var o32 = {};

            o32['a'] = 'alpha';
            Object.defineProperty(o32, 'b', { value: 'beta', enumerable: false } );
            o32[o31] = 'gamma';
            o32['d'] = 'delta';

            var o41 = Object.getOwnPropertyNames(o32);

            o4.o11(3, o41.length, "names.length === 3");

            for(var o37 = 0; o37 < o41.length; o37++) {
                o4.o5(typeof o41[o37] === 'symbol', "The names array does not include an entry of type symbol");
                o4.o7(o41[o37] != 'c', "The names array does not include an entry with the description of our symbol");
                o4.o7(o41[o37] != o31, "The names array does not include any symbols");
                o4.o7(o41[o37] != o31.toString(), "The names array does not include an entry with our symbol.toString()");
            }

            o32 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            o41 = Object.getOwnPropertyNames(o32);

            o4.o11(11, o41.length, "Object with no symbol properties returns correct array");

            o32 = {};

            o32[o31] = 'something';

            o41 = Object.getOwnPropertyNames(o32);

            o4.o11(0, o41.length, "Object with only symbol properties returns empty array");
        }
    },
    {
        name: "Object.keys should not return property keys which are symbols",
        o13: function() {
            var o31 = Symbol('c');
            var o32 = {};

            o32['a'] = 'alpha';
            o32['b'] = 'beta';
            o32[o31] = 'gamma';
            o32['d'] = 'delta';

            var keys = Object.keys(o32);

            o4.o11(3, keys.length, "keys.length === 3");

            for(var o37 = 0; o37 < keys.length; o37++) {
                o4.o5(typeof keys[o37] === 'symbol', "The keys array does not include an entry of type symbol");
                o4.o7(keys[o37] != 'c', "The keys array does not include an entry with the description of our symbol");
                o4.o7(keys[o37] != o31, "The keys array does not include any symbols");
                o4.o7(keys[o37] != o31.toString(), "The keys array does not include an entry with our symbol.toString()");
            }
        }
    },
    {
        name: "for ... in enumeration does not surface symbols",
        o13: function() {
            var o31 = Symbol('c');
            var o32 = {};

            o32['a'] = 'alpha';
            o32['b'] = 'beta';
            o32[o31] = 'gamma';
            o32['d'] = 'delta';

            for (o42 in o32)
            {
                o4.o5(typeof o42 === 'symbol', "for ... in does not enumerate symbol types");
                o4.o7(o32[o42] !== 'gamma', "for ... in does not enumerate properties keyed by symbols");
                o4.o7(o42 != o31, "for ... in does not enumerate our symbol");
                o4.o7(o42 != o31.toString(), "for ... in does not enumerate a property named sym.toString()");
            }
        }
    },
    {
        name: "Object.defineProperty with symbol as property key",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};

            Object.defineProperty(o32, o31, { value: 'some value' } );

            o4.o11('some value', o32[o31], "Property keyed off symbol and set via Object.defineProperty should be reachable by the same symbol");
            o4.o11(undefined, o32['sym'], "defineProperty does not create a property based on symbol name");
            o4.o11(undefined, o32[''], "defineProperty does not create a property based on symbol description");
            o4.o11(undefined, o32[o31.toString()], "defineProperty does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.defineProperties with symbols as property keys",
        o13: function() {
            var o43 = {};
            var o38 = Symbol('symbol 1');
            var o39 = Symbol('symbol 2');
            o43['a'] = { value: 'alpha', enumerable: true };
            o43[o38] = { value: 'beta', enumerable: true };
            o43[o39] = { value: 'gamma', enumerable: true };
            o43['d'] = { value: 'delta', enumerable: true };
            var o32 = {};

            Object.defineProperties(o32, o43);

            o4.o11('alpha', o32['a'], "Property keyed off string is added as expected");
            o4.o11('delta', o32['d'], "Property keyed off string is added as expected");

            o4.o11('beta', o32[o38], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
            o4.o11('gamma', o32[o39], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
            o4.o11(undefined, o32['s1'], "defineProperties does not create a property based on symbol name");
            o4.o11(undefined, o32['s2'], "defineProperties does not create a property based on symbol name");
            o4.o11(undefined, o32['symbol 1'], "defineProperties does not create a property based on symbol description");
            o4.o11(undefined, o32['symbol 2'], "defineProperties does not create a property based on symbol description");
            o4.o11(undefined, o32[o38.toString()], "defineProperty does not create a property based on symbol toString() value");
            o4.o11(undefined, o32[o39.toString()], "defineProperty does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.create should work for symbol properties",
        o13: function() {
            var o43 = {};
            var o38 = Symbol('symbol 1');
            var o39 = Symbol('symbol 2');
            o43['a'] = { value: 'alpha', enumerable: true };
            o43[o38] = { value: 'beta', enumerable: true };
            o43[o39] = { value: 'gamma', enumerable: true };
            o43['d'] = { value: 'delta', enumerable: true };

            var o32 = Object.create(Object.prototype, o43);

            o4.o11('alpha', o32['a'], "Property keyed off string is added as expected");
            o4.o11('delta', o32['d'], "Property keyed off string is added as expected");

            o4.o11('beta', o32[o38], "Property keyed off symbol set via Object.create should be reachable by the same symbol");
            o4.o11('gamma', o32[o39], "Property keyed off symbol set via Object.create should be reachable by the same symbol");
            o4.o11(undefined, o32['s1'], "Object.create does not create a property based on symbol name");
            o4.o11(undefined, o32['s2'], "Object.create does not create a property based on symbol name");
            o4.o11(undefined, o32['symbol 1'], "Object.create does not create a property based on symbol description");
            o4.o11(undefined, o32['symbol 2'], "Object.create does not create a property based on symbol description");
            o4.o11(undefined, o32[o38.toString()], "Object.create does not create a property based on symbol toString() value");
            o4.o11(undefined, o32[o39.toString()], "Object.create does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.getOwnPropertyDescriptor with symbol as property key",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};

            Object.defineProperty(o32, o31, { value: 100000, writable: false, enumerable: true, configurable: false } );
            var o14 = Object.getOwnPropertyDescriptor(o32, o31);

            o4.o5(o14.writable, 'o[sym].descriptor.writable == false');
            o4.o7(o14.enumerable, 'o[sym].descriptor.enumerable == true');
            o4.o5(o14.configurable, 'o[sym].descriptor.configurable == false');
        }
    },
    {
        name: "Object.prototype.propertyIsEnumerable should work for symbol properties",
        o13: function() {
            var o44 = Symbol();
            var o45 = Symbol();
            var o32 = {};
            Object.defineProperty(o32, o44, { value: 10, enumerable: true});
            Object.defineProperty(o32, o45, { value: 10, enumerable: false});

            o4.o7(o32.propertyIsEnumerable(o44), 'o.propertyIsEnumerable[sym1]');
            o4.o5(o32.propertyIsEnumerable(o45), 'o.propertyIsEnumerable[sym2]');
        }
    },
    {
        name: "Object.prototype.__defineSetter__ with a property keyed by a symbol",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};
            var o46;

            o32.__defineSetter__(o31, function() { o46 = 'useful string'; });

            o32[o31] = 'anything';

            o4.o11('useful string', o46, "Object.prototype.__defineSetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__defineGetter__ with a property keyed by a symbol",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};

            o32.__defineGetter__(o31, function() { return 'anything'; });

            o4.o11('anything', o32[o31], "Object.prototype.__defineGetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__lookupSetter__ with a property keyed by a symbol",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};
            var o46;
            var setter = function() { o46 = 'useful string'; };

            o32.__defineSetter__(o31, setter);
            var o47 = o32.__lookupSetter__(o31);

            o4.o11(undefined, o46, "setter has not yet been called");
            o4.o7(o47 === setter, "Object.prototype.__lookupSetter__ returns correct function when we use a symbol");

            o47();

            o4.o11('useful string', o46, "calling setter returned from Object.prototype.__lookupSetter__ works as expected");

            o46 = undefined;

            o32[o31] = 'anything';

            o4.o11('useful string', o46, "Object.prototype.__lookupSetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__lookupGetter__ with a property keyed by a symbol",
        o13: function() {
            var o31 = Symbol();
            var o32 = {};
            var getter = function() { return 'anything'; };

            o32.__defineGetter__(o31, getter);
            var o47 = o32.__lookupGetter__(o31);

            o4.o7(o47 === getter, "Object.prototype.__lookupGetter__ returns correct function when we use a symbol");
            o4.o11('anything', o47(), "function returned via Object.prototype.__lookupGetter__ works as expected");
            o4.o11('anything', o32[o31], "Object.prototype.__lookupGetter__ works when we use a symbol");
        }
    },
    {
        name: 'Symbol with numeric description does not create a numeric property',
        o13: function() {
            var o31 = Symbol('1');
            var o32 = {};

            o32[o31] = 'a string';

            o4.o11(undefined, o32[1], "Object should not contain numeric property at index == symbol description");
            o4.o11('a string', o32[o31], "Object should contain the symbol property");

            o32 = [];

            o32[1] = 'the number 1';
            o32[o31] = 'the symbol 1';

            o4.o11(2, o32.length, "Object has correct length");
            o4.o11('the number 1', o32[1], "Object with numeric property has correct value");
            o4.o11('the symbol 1', o32[o31], "Object with symbol property has correct value");
        }
    },
    {
        name: 'BLUE: 539472 BLUE: 541467 - Symbol.prototype should be TypeIds_Object',
        o13: function() {
            o4.o19(function () { Symbol.prototype.valueOf(); }, o20, "Calling prototype methods directly fails since Symbol.prototype is not a SymbolObject", "Symbol.prototype.valueOf: 'this' is not a Symbol object");
            o4.o19(function () { Symbol.prototype.toString(); }, o20, "Calling prototype methods directly fails since Symbol.prototype is not a SymbolObject", "Symbol.prototype.toString: 'this' is not a Symbol object");
        }
    },
    {
        name: 'Symbol objects and properties passed cross-context',
        o13: function() {
            var o48 = o0.o1("ES6Symbol_cross_context_child.js", "samethread");

            o4.o5(Symbol('child symbol') === o48.o31, "Symbol created in another context does not equal symbol with same description from this context");
            o4.o11('symbol', typeof o48.o31, "Symbol created in another context has correct type");
            o4.o11(undefined, o48.o32[Symbol('child symbol')], "Object from another context with a symbol-keyed property doesn't contain a property named the same as a different symbol");
            o4.o11('Symbol(child symbol)', o48.o31.toString(), "Symbol from another context has correct toString behavior");
            o4.o11('child value', o48.o32[o48.o31], "Symbol from another context can be used to lookup properties in objects from another context");

            var o32 = {};
            o32[o48.o31] = 'parent value';

            o4.o11('parent value', o32[o48.o31], "Symbol from another context can be used to index objects from this context");

            var o40 = Object.getOwnPropertySymbols(o48.o32);

            o4.o11(1, o40.length, "Object.getOwnPropertySymbols works for objects from another context");
            o4.o7(o40[0] === o48.o31, "Object.getOwnPropertySymbols returns the correct symbols for objects from another context");
        }
    },
    {
        name: 'Symbol registration within a single realm',
        o13: function() {
            var o31 = Symbol.for('my string');
            var o45 = Symbol.for('my string');

            o4.o11('symbol', typeof o31, "Object returned from Symbol.for is actually a symbol");
            o4.o11('Symbol(my string)', o31.toString(), "Symbol returned from Symbol.for has the right description");
            o4.o7(o31 === o45, "Two symbols returned from Symbol.for with the same parameter are the same symbol");

            var key = Symbol.keyFor(o31);

            o4.o11('my string', key, "Symbol created by Symbol.for can be passed to Symbol.keyFor to return the same key");
        }
    },
    {
        name: 'Symbol registration cross-realm',
        o13: function() {
            var o49 = Symbol.for('parent symbol');

            var o48 = o0.o1("ES6Symbol_cross_context_registration_child.js", "samethread");

            var o50 = Symbol.for('child symbol');

            o4.o7(o48.o50 === o50, "Symbol registered in child is returned correctly in parent");
            o4.o7(o48.o49 === o49, "Symbol registered in parent is returned correctly in child");
            o4.o7(o48.o51 === Symbol.keyFor(o49), "Symbol registered in parent is returned correctly in child");
        }
    },
    {
        name: 'Registered Symbols should have their PropertyRecords pinned',
        o13: function() {
            var o31 = Symbol.for('my string');
            o31 = undefined;

            // After cleaning up sym, there shouldn't be anyone pinning the PropertyRecord
            // except for the Symbol registration map.
            // If the reference to the PropertyRecord created above gets cleaned-up we will
            // cause an AV below when we try to reference it again.
            o52();

            o31 = Symbol.for('my string');

            o4.o11('symbol', typeof o31, "Object returned from Symbol.for is actually a symbol");
            o4.o11('Symbol(my string)', o31.toString(), "Symbol returned from Symbol.for has the right description");
        }
    },
    {
        name: 'Registered Symbol should not be returned by unregistered Symbol with the same description',
        o13: function() {
            var o31 = Symbol.for('my string');
            var o45 = Symbol('my string');

            o4.o5(o31 === o45, "Symbols created via Symbol.for and Symbol constructor should not be equal even if they have the same description");
            o4.o11('my string', Symbol.keyFor(o31), "Symbol.keyFor returns correct key for registered symbol");
            o4.o11(undefined, Symbol.keyFor(o45), "Symbol.keyFor returns undefined for symbols not registered with Symbol.for");
        }
    },
    {
        name: 'Throwing TypeError when trying to add with a string or a number',
        o13: function() {
            var o17 = Symbol();

            o4.o19(function() { "str" + o17; }, o20, "Adding a string and a symbol throws TypeError", "Object doesn't support property or method 'ToString'");
            o4.o19(function() { o17 + "str"; }, o20, "Adding a symbol and a string throws TypeError", "Object doesn't support property or method 'ToString'");
            o4.o19(function() { 10 + o17; }, o20, "Adding a number and a symbol throws TypeError", "Number expected");
            o4.o19(function() { o17 + 10; }, o20, "Adding a symbol and a number throws TypeError", "Number expected");
        }
    },
    {
        name: 'ToPropertyKey accepts Symbol wrapper objects, and unboxes the Symbol primitive inside',
        o13: function() {
            var o31 = Symbol('sym');
            var o53 = Object(o31);
            var o3 = { [o53] : 'value' };

            o4.o11('value', o3[o31], "Object created with Symbol wrapper object passed as computed property creates a symbol-keyed property from the unboxed symbol");
            o4.o11('value', o3[o53], "Looking up a property by passing a Symbol wrapper object actually returns the property keyed off of the unboxed symbol");

            o4.o11([], Object.getOwnPropertyNames(o3), "Object has no string-keyed properties");
            o4.o11([o31], Object.getOwnPropertySymbols(o3), "Object only has one symbol-keyed property - sym");

            var o54 = {};
            o54[o53] = 'value2';

            o4.o11('value2', o54[o31], "Object created with Symbol wrapper object passed to property index set creates a symbol-keyed property from the unboxed symbol");
            o4.o11('value2', o54[o53], "Looking up a property by passing a Symbol wrapper object actually returns the property keyed off of the unboxed symbol");

            o4.o11([], Object.getOwnPropertyNames(o54), "Object has no string-keyed properties");
            o4.o11([o31], Object.getOwnPropertySymbols(o54), "Object only has one symbol-keyed property - sym");
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which unwraps Symbol objects',
        o13: function() {
            var o31 = Symbol('sym');
            var o55 = Object(o31);

            o2(o55);
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which returns symbol primitive via toString',
        o13: function() {
            var o31 = Symbol('sym');
            var o56 = {
                toString() {
                    return o31;
                },
                valueOf() {
                    o4.o7(false, "We should never call the valueOf method of this object");
                }
            };

            o2(o56);
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
                    return o31;
                }
            };

            o2(o57);
        }
    },
    {
        name: 'ToNumber called with a symbol primitive should throw a TypeError',
        o13: function() {
            var o17 = Symbol();
            var o3 = { 'length': o17 };

            // We can't use parseInt directly here as that does ToString(obj) - we want something which calls ToNumber directly
            o4.o19(function() { Array.prototype.lastIndexOf.call(o3, 1); }, o20, "Array.prototype.lastIndexOf performs ToLength(obj) which should throw TypeError if obj is a symbol primitive.", "Number expected");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive in strict mode should throw a TypeError',
        o13: function() {
            var o17 = Symbol();
            o4.o19(function() { "use strict"; o17.o58 = 1; }, o20, "Assigning to a property of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive in strict mode should throw a TypeError',
        o13: function() {
            var o17 = Symbol();
            o4.o19(function() { "use strict"; o17['a'+'b'] = 1; }, o20, "Assigning to a property of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to an index of a symbol primitive in strict mode should throw a TypeError',
        o13: function() {
            var o17 = Symbol();
            o4.o19(function() { "use strict"; o17[12] = 1; }, o20, "Assigning to an index of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive should be ignored',
        o13: function() {
            var o17 = Symbol();
            o17.o58 = 1;
            o4.o11(o17.o58, undefined);
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive should be ignored',
        o13: function() {
            var o17 = Symbol();
            o17['a'+'b'] = 1;
            o4.o11(o17['ab'], undefined);
        }
    },
    {
        name: 'Assigning to an index of a symbol primitive should be ignored',
        o13: function() {
            var o17 = Symbol();
            o17[10086] = 1;
            o4.o11(o17[10086], undefined);
        }
    },
    {
        name: '[OS: Bug 4533235] JSON.stringify should ignore symbols (kangax)',
        o13: function() {
            var o59 = {o60: Symbol()};
            var o31 = Symbol("a");
            o59[Symbol()] = 1;
            var o61 = [Symbol()];

            o4.o11('{}', JSON.stringify(o59));
            o4.o11('[null]', JSON.stringify(o61));
            o4.o11(undefined, JSON.stringify(Symbol()));
            o4.o11(undefined, JSON.stringify(o31));
        }
    },
    {
        name: '[OS: Bug 5950493] Symbol(undefined).toString() produces "Symbol(undefined)" instead of "Symbol()".',
        o13: function() {
            o4.o11('Symbol()', Symbol().toString(), 'Symbol().toString() === "Symbol()"');
            o4.o11('Symbol()', Symbol(undefined).toString(), 'Symbol(undefined).toString() === "Symbol()"');
            o4.o11('Symbol()', Symbol("").toString(), 'Symbol("").toString() === "Symbol()"');
        }
    }
];

o62.o63(o12, { o64: o0.o65[0] != "summary" });
