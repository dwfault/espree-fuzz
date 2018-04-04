//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Symbol tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(key) {
    var o4 = {};

    o5.o6(o4.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey. Initially we don't have the property.");
    o5.o8(function() { Object.defineProperty(o4, key, { value: 'something', enumerable: true }); }, "Object.defineProperty uses ToPropertyKey. Property is added to the object");

    o5.o13(o4.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey on argument. We should have the property now.");
    o5.o13(o4.propertyIsEnumerable(key), "Object#propertyIsEnumerable uses ToPropertyKey.");
    o5.o15(undefined, Object.getOwnPropertyDescriptor(o4, key), "Object.getOwnPropertyDescriptor uses ToPropertyKey");

    o4 = {};
    o4.__defineGetter__(key, () => { return 2;} );
    o5.o13(o4.hasOwnProperty(key), "Object#__defineGetter__ uses ToPropertyKey. Property is added to the object");

    o4 = {};
    o4.__defineSetter__(key, () => { return 2;} );
    o5.o13(o4.hasOwnProperty(key), "Object#__defineSetter__ uses ToPropertyKey. Property is added to the object");

    var o20 = 0;
    o4 = Object.defineProperty({}, key, { set(o22) { o5.o23('abc', o22, "Setter called with correct arg"); o20++; } });
    var set = o4.__lookupSetter__(key);
    o5.o23('function', typeof set, "Object#__lookupSetter__ uses ToPropertyKey. Make sure we added a setter.");
    set('abc');
    o5.o23(1, o20, "Correct setter was called.");

    o4 = Object.defineProperty({}, key, { get() { return 'abc'; } });
    var get = o4.__lookupGetter__(key);
    o5.o23('function', typeof get, "Object#__lookupGetter__ uses ToPropertyKey. Make sure we added a getter.");
    o5.o23('abc', get(), "Correct getter was called.");

    o4 = {};
    o5.o8(function() { Reflect.set(o4, key, 'abc'); }, "Reflect.set uses ToPropertyKey on argument. We should have set property");
    o5.o23('abc', Reflect.get(o4, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
    o5.o13(Reflect.deleteProperty(o4, key), "Reflect.deleteProperty uses ToPropertyKey. We should successfully remove the property here");
    o5.o6(Reflect.has(o4, key), "Reflect.has uses ToPropertyKey. We deleted this property, so we should not have it now.");
    o5.o8(function() { Reflect.defineProperty(o4, key, { value: 'def', enumerable: true }); }, "Reflect.defineProperty uses ToPropertyKey. It should have created a new property");
    o5.o23('def', Reflect.get(o4, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
    o5.o15(undefined, Reflect.getOwnPropertyDescriptor(o4, key), "Reflect.getOwnPropertyDescriptor uses ToPropertyKey. It should return a real descriptor object");

    o4 = {};
    o5.o8(function() { o4[key] = 123; }, "Ordinary [[Set]] eventually uses ToPropertyKey. Property is added to the object");
    o5.o23(123, o4[key], "Ordinary [[Get]] also eventually goes down to ToPropertyKey which should return us the same value");
    o5.o13(o4.hasOwnProperty(key), "Verify we added the property under key and not some stringified version of key");
}

var o30 = [
    {
        name: "Symbol is a constructor object and has correct shape",
        o32: function () {
            o5.o13(Symbol !== undefined, "Symbol is defined");
            o5.o23('function', typeof Symbol, "typeof Symbol === 'function'");
            o5.o23(0, Symbol.length, "Symbol.length === 0");

            o5.o23('function', typeof Symbol.toString, "typeof Symbol.toString === 'function'");
            o5.o23('function', typeof Symbol.valueOf, "typeof Symbol.valueOf === 'function'");

            o5.o23('function', typeof Symbol.o37, "typeof Symbol.for === 'function'");
            o5.o23(1, Symbol.o37.length, "Symbol.for.length === 1");
            o38 = Object.getOwnPropertyDescriptor(Symbol, 'for');
            o5.o13(o38.writable, 'Symbol.for.descriptor.writable == true');
            o5.o6(o38.enumerable, 'Symbol.for.descriptor.enumerable == false');
            o5.o13(o38.configurable, 'Symbol.for.descriptor.configurable == true');

            o5.o23('function', typeof Symbol.keyFor, "typeof Symbol.keyFor === 'function'");
            o5.o23(1, Symbol.keyFor.length, "Symbol.keyFor.length === 1");
            o38 = Object.getOwnPropertyDescriptor(Symbol, 'keyFor');
            o5.o13(o38.writable, 'Symbol.keyFor.descriptor.writable == true');
            o5.o6(o38.enumerable, 'Symbol.keyFor.descriptor.enumerable == false');
            o5.o13(o38.configurable, 'Symbol.keyFor.descriptor.configurable == true');
        }
    },
    {
        name: "Symbol prototype has expected shape",
        o32: function() {
            o5.o13(Symbol === Symbol.prototype.constructor, "Symbol === Symbol.prototype.constructor");
            o38 = Object.getOwnPropertyDescriptor(Symbol, 'prototype');

            o5.o6(o38.writable, 'Symbol.prototype.descriptor.writable == false');
            o5.o6(o38.enumerable, 'Symbol.prototype.descriptor.enumerable == false');
            o5.o6(o38.configurable, 'Symbol.prototype.descriptor.configurable == false');

            o5.o23('function', typeof Symbol.prototype.toString, "typeof Symbol.prototype.toString === 'function'");
            o38 = Object.getOwnPropertyDescriptor(Symbol.prototype, 'toString');

            o5.o13(o38.writable, 'Symbol.prototype.toString.descriptor.writable == true');
            o5.o6(o38.enumerable, 'Symbol.prototype.toString.descriptor.enumerable == false');
            o5.o13(o38.configurable, 'Symbol.prototype.toString.descriptor.configurable == true');

            o5.o23('function', typeof Symbol.prototype.valueOf, "typeof Symbol.prototype.valueOf === 'function'");
            o38 = Object.getOwnPropertyDescriptor(Symbol.prototype, 'valueOf');

            o5.o13(o38.writable, 'Symbol.prototype.valueOf.descriptor.writable == true');
            o5.o6(o38.enumerable, 'Symbol.prototype.valueOf.descriptor.enumerable == false');
            o5.o13(o38.configurable, 'Symbol.prototype.valueOf.descriptor.configurable == true');

            o5.o23('function', typeof Symbol.prototype[Symbol.toPrimitive], "typeof Symbol.prototype[@@toPrimitive] === 'function'");
            o5.o23(1, Symbol.prototype[Symbol.toPrimitive].length, "Symbol.prototype[@@toPrimitive].length === 1");
            o38 = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toPrimitive);

            o5.o6(o38.writable, 'Symbol.prototype[@@toPrimitive].descriptor.writable == false');
            o5.o6(o38.enumerable, 'Symbol.prototype[@@toPrimitive].descriptor.enumerable == false');
            o5.o13(o38.configurable, 'Symbol.prototype[@@toPrimitive].descriptor.configurable == true');

            var o45 = Symbol.prototype[Symbol.toPrimitive].toString();
            var o46 = o45.substring(9, o45.indexOf('('));
            o5.o23('[Symbol.toPrimitive]', o46, "Symbol[@@toPrimitive].name == '[Symbol.toPrimitive]'");

            o5.o23('string', typeof Symbol.prototype[Symbol.toStringTag], "typeof Symbol.prototype[@@toStringTag] === 'string'");
            o38 = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toStringTag);

            o5.o6(o38.writable, 'Symbol.prototype[@@toStringTag].descriptor.writable == false');
            o5.o6(o38.enumerable, 'Symbol.prototype[@@toStringTag].descriptor.enumerable == false');
            o5.o13(o38.configurable, 'Symbol.prototype[@@toStringTag].descriptor.configurable == true');
            o5.o23('Symbol', Symbol.prototype[Symbol.toStringTag], "Symbol.prototype[@@toStringTag] === 'Symbol'");
        }
    },
    {
        name: "Symbol constructor and prototype built-ins",
        o32: function() {
            var o50 = Symbol("x");
            var o51 = Symbol("y");

            // toPrimitive() behavior
            o5.o23(o50, o50[Symbol.toPrimitive](), "x == x[Symbol.toPrimitive]()");
            o5.o23(o50, o50[Symbol.toPrimitive].call(o50), "x == x[Symbol.toPrimitive].call(x)");
            o5.o23(o51, o50[Symbol.toPrimitive].call(o51), "y == x[Symbol.toPrimitive].call(y)");
            o5.o6(o50 == o50[Symbol.toPrimitive].call(o51), "x != x[Symbol.toPrimitive].call(y)");
            o5.o23(o50, Symbol.prototype[Symbol.toPrimitive].call(o50), "x == Symbol.prototype[Symbol.toPrimitive].call(x)");

            // TypeError scenarios
            o5.o53(function () { o50[Symbol.toPrimitive].call("x") }, o54, "x[Symbol.toPrimitive].call('x'), toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o5.o53(function () { Symbol.prototype[Symbol.toPrimitive]() }, o54, "toPrimitive throws TypeError if no arguments are passed", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o5.o53(function () { Symbol.prototype[Symbol.toPrimitive].call(true) }, o54, "toPrimitive throws TypeError for boolean true", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o5.o53(function () { Symbol.prototype[Symbol.toPrimitive].call(false) }, o54, "toPrimitive throws TypeError for boolean false", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o5.o53(function () { Symbol.prototype[Symbol.toPrimitive].call(0) }, o54, "toPrimitive throws TypeError for number", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o5.o53(function () { Symbol.prototype[Symbol.toPrimitive].call(NaN) }, o54, "toPrimitive throws TypeError for NaN", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o5.o53(function () { Symbol.prototype[Symbol.toPrimitive].call("") }, o54, "toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o5.o53(function () { Symbol.prototype[Symbol.toPrimitive].call("abc") }, o54, "toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o5.o53(function () { Symbol.prototype[Symbol.toPrimitive].call(null) }, o54, "toPrimitive throws TypeError for null", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o5.o53(function () { Symbol.prototype[Symbol.toPrimitive].call(undefined) }, o54, "toPrimitive throws TypeError for undefined", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o5.o53(function () { Symbol.prototype[Symbol.toPrimitive].call({}) }, o54, "toPrimitive throws TypeError for object", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");

            var o56 = Object(o51);
            o5.o23(o51, Symbol.prototype[Symbol.toPrimitive].call(o56), "y == Symbol.prototype[Symbol.toPrimitive].call(z)");
            o5.o6(Object(o50) == Symbol.prototype[Symbol.toPrimitive].call(o56), "Object(x) != Symbol.prototype[Symbol.toPrimitive].call(z)");
        }
    },
    {
        name: "Symbol constructor has the well-known symbols as properties",
        o32: function() {
            function o57(o58) {
                var o59 = "Symbol[" + o58 + "]";

                o5.o13(Symbol[o58] !== undefined,  o59 + " !== undefined");
                o5.o23('symbol', typeof Symbol[o58], "typeof " + o59 + " === 'symbol'");

                var o38 = Object.getOwnPropertyDescriptor(Symbol, o58);
                o5.o6(o38.writable, o59 + '.descriptor.writable == false');
                o5.o6(o38.enumerable, o59 + 'descriptor.enumerable == false');
                o5.o6(o38.configurable, o59 + 'descriptor.configurable == false');
            }

            o57("hasInstance");
            o57("isConcatSpreadable");
            o57("iterator");
            o57("toPrimitive");
            o57("toStringTag");
            o57("unscopables");
            o57("species");
            o57("replace");
            o57("search");
            o57("match");
            o57("split");
        }
    },
    {
        name: "Symbol primitive toString should throw a type error",
        o32: function() {
            o5.o53(function() { 'string' + Symbol.iterator; }, o54, "Symbol primitives throw on implicit string conversion", "Object doesn't support property or method 'ToString'");
        }
    },
    {
        name: "String(symbol) behavior",
        o32: function() {
            o5.o23('Symbol(description)', String(Symbol('description')), "String(Symbol('description')) === 'Symbol(description)'");
            o5.o53(function () { new String(Symbol('description')); }, o54, "Symbol as an argument to new String() throws", "Object doesn't support property or method 'ToString'");
        }
    },
    {
        name: "Symbol object toString produces a human-readable name",
        o32: function() {
            o5.o23('Symbol(Symbol.hasInstance)', Object(Symbol.hasInstance).toString(), "Object(Symbol.hasInstance).toString() === 'Symbol(Symbol.hasInstance)'");
            o5.o23('Symbol(Symbol.isConcatSpreadable)', Object(Symbol.isConcatSpreadable).toString(), "Object(Symbol.isConcatSpreadable).toString() === 'Symbol(Symbol.isConcatSpreadable)'");
            o5.o23('Symbol(Symbol.iterator)', Object(Symbol.iterator).toString(), "Object(Symbol.iterator).toString() === 'Symbol(Symbol.iterator)'");
            o5.o23('Symbol(Symbol.toPrimitive)', Object(Symbol.toPrimitive).toString(), "Object(Symbol.toPrimitive).toString() === 'Symbol(Symbol.toPrimitive)'");
            o5.o23('Symbol(Symbol.toStringTag)', Object(Symbol.toStringTag).toString(), "Object(Symbol.toStringTag).toString() === 'Symbol(Symbol.toStringTag)'");
            o5.o23('Symbol(Symbol.unscopables)', Object(Symbol.unscopables).toString(), "Object(Symbol.unscopables).toString() === 'Symbol(Symbol.unscopables)'");

            o5.o23('Symbol()', Object(Symbol()).toString(), "Object(Symbol()).toString() === 'Symbol()'");
            o5.o23("Symbol(Some kind of long string description\n\n)", Object(Symbol("Some kind of long string description\n\n")).toString(), "Object(Symbol(\"Some kind of long string description\n\n\")).toString() === 'Symbol(Some kind of long string description\n\n)'");
        }
    },
    {
        name: "typeof a symbol primitive is 'symbol'",
        o32: function() {
            o5.o23('symbol', typeof Symbol('mysymbol'), "typeof Symbol('mysymbol') === 'symbol'");
            o5.o23('symbol', typeof Symbol(''), "typeof Symbol('') === 'symbol'");
            o5.o23('symbol', typeof Symbol(), "typeof Symbol() === 'symbol'");
        }
    },
    {
        name: "new Symbol throws",
        o32: function() {
            o5.o53(function () { new Symbol() }, o54, "new Symbol throws TypeError when it has no parameter", "Function is not a constructor");
            o5.o53(function () { new Symbol('anything') }, o54, "new Symbol throws TypeError when it has a string parameter", "Function is not a constructor");
        }
    },
    {
        name: "Symbols with single-character descriptions (these are special-cased in ThreadContext)",
        o32: function() {
            o5.o13(Symbol('s') !== Symbol('s'), "We are able to create multiple symbols with the same single-character description and they are not equal");
        }
    },
    {
        name: "Symbol strict equality with other symbols",
        o32: function() {
            o5.o13(Symbol('something') !== Symbol('something'), "Symbol('something') !== Symbol('something')");
            o5.o13(Symbol('') !== Symbol(''), "Symbol('') !== Symbol('')");
            o5.o13(Symbol() !== Symbol(), "Symbol() !== Symbol()");

            var o65 = Symbol('my');
            o5.o13(o65 === o65, "Generated symbol should equal itself");
            var o66 = o65;
            o5.o13(o65 === o66, "Assignment to another Var should still equal the original symbol");

            var o67 = Object(o65);
            var o68 = Object(o65);
            o5.o13(o67 !== o68, "Box objects should not be equal for the same symbol");
            o5.o13(o67 !== o65, "Box object should not be equal to the symbol primitive");
            o5.o13(o67.valueOf() === o68.valueOf(), "Unboxing objects wrapping the same symbol primitive should result in the same symbol returned from valueOf()");

            var o69 = Object(Symbol('another'));
            o5.o13(o67 !== o69, "Box objects should not be equal for different symbol primitives");

            var o70 = o67.valueOf();
            o5.o13(o65 === o70, "Unboxed symbol should be equal to original primitive");

            o5.o13(Symbol.iterator !== Symbol('iterator'), "Symbol.iterator !== Symbol('iterator')");

            o5.o13(Object(Symbol('sym')).valueOf() !== Object(Symbol('sym')).valueOf(), "Different symbol primitives boxed and unboxed should not be equal to each other");
        }
    },
    {
        name: "Symbol strict equality with other types",
        o32: function() {
            var o71 = Symbol('my');

            o5.o6(o71 === 'string', "sym !== 'string'");
            o5.o6(o71 === undefined, "sym !== undefined");
            o5.o6(o71 === null, "sym !== null");
            o5.o6(o71 === true, "sym !== true");
            o5.o6(o71 === false, "sym !== true");
            o5.o6(o71 === [], "sym !== []");
            o5.o6(o71 === {}, "sym !== {}");
            o5.o13(o71 === o71, "sym === sym");

            o5.o6('string' === o71, "'string' !== sym");
            o5.o6(undefined === o71, "undefined !== sym");
            o5.o6(null === o71, "null !== sym");
            o5.o6(true === o71, "true !== sym");
            o5.o6(false === o71, "false !== sym");
            o5.o6([] === o71, "[] !== sym");
            o5.o6({} === o71, "{} !== sym");
        }
    },
    {
        name: "Symbol equality with other types",
        o32: function() {
            var o71 = Symbol('my');

            o5.o6(o71 == 'string', "ToString(symbol) throws so this should be false");
            o5.o6(o71 == undefined, "sym != undefined");
            o5.o6(o71 == null, "sym != null");
            o5.o6(o71 == true, "symbol != true");
            o5.o6(o71 == false, "symbol != false");
            o5.o6(o71 == [], "sym != []");
            o5.o6(o71 == {}, "sym != {}");
            o5.o13(o71 == o71, "sym == sym");

            o5.o6('string' == o71, "ToString(symbol) throws so this should be false");
            o5.o6(undefined == o71, "undefined != sym");
            o5.o6(null == o71, "null != sym");
            o5.o6(true == o71, "true != sym");
            o5.o6(false == o71, "false != sym");
            o5.o6([] == o71, "[] != sym");
            o5.o6({} == o71, "{} != sym");
        }
    },
    {
        name: "Symbol equality with auto-boxed Symbols",
        o32: function() {
            var o71 = Symbol('my');

            o5.o13(o71 == Object(o71), "Auto-boxed symbol is equal to that symbol");
            o5.o13(Object(o71) == o71, "Auto-boxed symbol is equal to that symbol");
            o5.o6(Object(o71) == Object(o71), "Two different auto-boxed symbols of the same symbol are never equal to each other");

            o5.o6(o71 === Object(o71), "Auto-boxed symbol is not strict-equal to that symbol");
            o5.o6(Object(o71) === o71, "Auto-boxed symbol is not strict-equal to that symbol");
            o5.o6(Object(o71) === Object(o71), "Two different auto-boxed symbols of the same symbol are never strict-equal to each other");
        }
    },
    {
        name: "Symbol auto-boxing",
        o32: function() {
            o5.o23('Symbol()', Symbol().toString(), "Autoboxing for toString()");

            var o71 = Symbol();

            o5.o13(o71.valueOf() === o71.valueOf(), "Autoboxing for valueOf()");
        }
    },
    {
        name: "Symbol primitives work as property keys",
        o32: function() {
            var o72 = {};
            o72[Symbol.iterator] = 'some string';
            o5.o23('some string', o72[Symbol.iterator], "o[Symbol.iterator] === 'some string'");
            o5.o13(o72[Symbol.iterator.toString()] === undefined, "o[Symbol.iterator] uses the property id stored in Symbol.iterator (not the value created by Symbol.iterator.toString())");

            // use functions to wrap property access to ensure we hit JIT code
            function o73(o4, o71) {
                return o4[o71];
            }
            function o74(o4, o71, o75) {
                o4[o71] = o75;
            }

            o72 = {};
            var o76 = Symbol();
            for (var o77 = 0; o77 < 5; o77++) {
                o74(o72, o76, o77);
                o5.o23(o77, o73(o72, o76), "Property keyed by symbol is able to be set and get");
            }

            var o71 = Symbol('sym');
            o72 = {};
            o72[o71] = 'test';

            o5.o23('test', o72[o71], "Symbol converted to property key works");
            o5.o23(undefined, o72['sym'], "Symbol description is not added as a property to the object");

            var o78 = Symbol('uniquevalue');
            var o79 = Symbol('uniquevalue');
            o72 = {};
            o72[o78] = 's1';
            o72[o79] = 's2';

            o5.o23('s1', o72[o78], "Simple test of symbol producing a property on an object");
            o5.o23('s2', o72[o79], "Simple test of symbol producing a property on an object");
            o5.o13(o72[o78] != o72[o79], "Different symbols with the same description create different properties on an object");

            delete o72[o78];

            o5.o23(undefined, o72[o78], "deleting properties from objects also works");
            o5.o23('s2', o72[o79], "deleting a property doesn't affect other properties");

            // Needs ES6 object literal improvements
            o72 = { [o71] : 'string' };
            o5.o23('string', o72[o71], "Object literal declared with symbol property works");
        }
    },
    {
        name: "Object.prototype.hasOwnProperty works for symbols",
        o32: function() {
            var o72 = {};

            o5.o6(o72.hasOwnProperty(Symbol.iterator), "Property defined with a symbol initially is not in the object");

            o72[Symbol.iterator] = 'a string';

            o5.o13(o72.hasOwnProperty(Symbol.iterator), "Property defined with a symbol can be looked up via o.hasOwnProperty");
        }
    },
    {
        name: "Symbols handled by type conversion operations",
        o32: function() {
            o5.o53(function () { Number(Symbol.iterator).valueOf() }, o54, "ToNumber(symbol) throws TypeError", "Number expected");
            o5.o23(true, Boolean(Symbol.iterator), "ToBoolean(symbol) === true");
            o5.o23('object', typeof Object(Symbol.iterator), "ToObject(symbol) is not a symbol object");
        }
    },
    {
        name: "API shape of Object.getOwnPropertySymbols",
        o32: function() {
            o5.o13(Object.o82 !== undefined, "Object.getOwnPropertySymbols is defined");
            o5.o23('function', typeof Object.o82, "Object.getOwnPropertySymbols is a function");
            o5.o23(1, Object.o82.length, "Object.getOwnPropertySymbols.length === 1");
        }
    },
    {
        name: "Object.getOwnPropertySymbols does ToObject on its argument",
        o32: function() {
            o5.o53(function () { Object.o82(); }, o54, "ToObject(undefined) throws TypeError", "Object expected");
            o5.o53(function () { Object.o82(undefined); }, o54, "ToObject(undefined) throws TypeError", "Object expected");
            o5.o53(function () { Object.o82(null); }, o54, "ToObject(null) throws TypeError", "Object expected");
            o5.o23([], Object.o82(true), "Object.getOwnPropertySymbols does ToObject on boolean");
            o5.o23([], Object.o82(1), "Object.getOwnPropertySymbols does ToObject on number");
            o5.o23([], Object.o82("a"), "Object.getOwnPropertySymbols does ToObject on string");
            o5.o23([], Object.o82(Symbol('a')), "Object.getOwnPropertySymbols does ToObject on symbol");
            o5.o23([], Object.o82({}), "Object.getOwnPropertySymbols returns an empty array for an empty object");
        }
    },
    {
        name: "Object.getOwnPropertySymbols only returns symbols",
        o32: function() {
            var o71 = Symbol('c');
            var o72 = {};

            o72['a'] = 'alpha';
            Object.defineProperty(o72, 'b', { value: 'beta', enumerable: false } );
            o72[o71] = 'gamma';
            o72['d'] = 'delta';

            var o83 = Object.o82(o72);

            o5.o23(1, o83.length, "symbols.length === 1");

            for(var o77 = 0; o77 < o83.length; o77++) {
                o5.o13(typeof o83[o77] === 'symbol', "The symbols array only includes entries of type symbol");
                o5.o13(o83[o77].toString() != 'a', "The symbols array does not include an entry with the name of any of our string properties");
                o5.o13(o83[o77].toString() != 'b', "The symbols array does not include an entry with the name of any of our string properties");
                o5.o13(o83[o77].toString() != 'd', "The symbols array does not include an entry with the name of any of our string properties");
                o5.o13(o83[o77] === o71, "The symbols array includes our symbol");
                o5.o13(o83[o77].toString() === o71.toString(), "The symbols array includes an entry with our symbol.toString()");
            }

            var o78 = Symbol('name');
            var o79 = Symbol('name');
            o72 = {};

            o72[o78] = 'something';
            o72[o79] = 'something else';

            o83 = Object.o82(o72);

            o5.o23(2, o83.length, "symbols.length === 2");
            o5.o13(o83[0] === o78, "symbols[0] === s1");
            o5.o13(o83[1] === o79, "symbols[1] === s2");

            o72 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            o83 = Object.o82(o72);

            o5.o23(0, o83.length, "Object with no symbol properties returns empty array from Object.getOwnPropertySymbols");
        }
    },
    {
        name: "Object.getOwnPropertyNames doesn't return symbols",
        o32: function() {
            var o71 = Symbol('c');
            var o72 = {};

            o72['a'] = 'alpha';
            Object.defineProperty(o72, 'b', { value: 'beta', enumerable: false } );
            o72[o71] = 'gamma';
            o72['d'] = 'delta';

            var o84 = Object.getOwnPropertyNames(o72);

            o5.o23(3, o84.length, "names.length === 3");

            for(var o77 = 0; o77 < o84.length; o77++) {
                o5.o6(typeof o84[o77] === 'symbol', "The names array does not include an entry of type symbol");
                o5.o13(o84[o77] != 'c', "The names array does not include an entry with the description of our symbol");
                o5.o13(o84[o77] != o71, "The names array does not include any symbols");
                o5.o13(o84[o77] != o71.toString(), "The names array does not include an entry with our symbol.toString()");
            }

            o72 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            o84 = Object.getOwnPropertyNames(o72);

            o5.o23(11, o84.length, "Object with no symbol properties returns correct array");

            o72 = {};

            o72[o71] = 'something';

            o84 = Object.getOwnPropertyNames(o72);

            o5.o23(0, o84.length, "Object with only symbol properties returns empty array");
        }
    },
    {
        name: "Object.keys should not return property keys which are symbols",
        o32: function() {
            var o71 = Symbol('c');
            var o72 = {};

            o72['a'] = 'alpha';
            o72['b'] = 'beta';
            o72[o71] = 'gamma';
            o72['d'] = 'delta';

            var keys = Object.keys(o72);

            o5.o23(3, keys.length, "keys.length === 3");

            for(var o77 = 0; o77 < keys.length; o77++) {
                o5.o6(typeof keys[o77] === 'symbol', "The keys array does not include an entry of type symbol");
                o5.o13(keys[o77] != 'c', "The keys array does not include an entry with the description of our symbol");
                o5.o13(keys[o77] != o71, "The keys array does not include any symbols");
                o5.o13(keys[o77] != o71.toString(), "The keys array does not include an entry with our symbol.toString()");
            }
        }
    },
    {
        name: "for ... in enumeration does not surface symbols",
        o32: function() {
            var o71 = Symbol('c');
            var o72 = {};

            o72['a'] = 'alpha';
            o72['b'] = 'beta';
            o72[o71] = 'gamma';
            o72['d'] = 'delta';

            for (o87 in o72)
            {
                o5.o6(typeof o87 === 'symbol', "for ... in does not enumerate symbol types");
                o5.o13(o72[o87] !== 'gamma', "for ... in does not enumerate properties keyed by symbols");
                o5.o13(o87 != o71, "for ... in does not enumerate our symbol");
                o5.o13(o87 != o71.toString(), "for ... in does not enumerate a property named sym.toString()");
            }
        }
    },
    {
        name: "Object.defineProperty with symbol as property key",
        o32: function() {
            var o71 = Symbol();
            var o72 = {};

            Object.defineProperty(o72, o71, { value: 'some value' } );

            o5.o23('some value', o72[o71], "Property keyed off symbol and set via Object.defineProperty should be reachable by the same symbol");
            o5.o23(undefined, o72['sym'], "defineProperty does not create a property based on symbol name");
            o5.o23(undefined, o72[''], "defineProperty does not create a property based on symbol description");
            o5.o23(undefined, o72[o71.toString()], "defineProperty does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.defineProperties with symbols as property keys",
        o32: function() {
            var o88 = {};
            var o78 = Symbol('symbol 1');
            var o79 = Symbol('symbol 2');
            o88['a'] = { value: 'alpha', enumerable: true };
            o88[o78] = { value: 'beta', enumerable: true };
            o88[o79] = { value: 'gamma', enumerable: true };
            o88['d'] = { value: 'delta', enumerable: true };
            var o72 = {};

            Object.defineProperties(o72, o88);

            o5.o23('alpha', o72['a'], "Property keyed off string is added as expected");
            o5.o23('delta', o72['d'], "Property keyed off string is added as expected");

            o5.o23('beta', o72[o78], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
            o5.o23('gamma', o72[o79], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
            o5.o23(undefined, o72['s1'], "defineProperties does not create a property based on symbol name");
            o5.o23(undefined, o72['s2'], "defineProperties does not create a property based on symbol name");
            o5.o23(undefined, o72['symbol 1'], "defineProperties does not create a property based on symbol description");
            o5.o23(undefined, o72['symbol 2'], "defineProperties does not create a property based on symbol description");
            o5.o23(undefined, o72[o78.toString()], "defineProperty does not create a property based on symbol toString() value");
            o5.o23(undefined, o72[o79.toString()], "defineProperty does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.create should work for symbol properties",
        o32: function() {
            var o88 = {};
            var o78 = Symbol('symbol 1');
            var o79 = Symbol('symbol 2');
            o88['a'] = { value: 'alpha', enumerable: true };
            o88[o78] = { value: 'beta', enumerable: true };
            o88[o79] = { value: 'gamma', enumerable: true };
            o88['d'] = { value: 'delta', enumerable: true };

            var o72 = Object.create(Object.prototype, o88);

            o5.o23('alpha', o72['a'], "Property keyed off string is added as expected");
            o5.o23('delta', o72['d'], "Property keyed off string is added as expected");

            o5.o23('beta', o72[o78], "Property keyed off symbol set via Object.create should be reachable by the same symbol");
            o5.o23('gamma', o72[o79], "Property keyed off symbol set via Object.create should be reachable by the same symbol");
            o5.o23(undefined, o72['s1'], "Object.create does not create a property based on symbol name");
            o5.o23(undefined, o72['s2'], "Object.create does not create a property based on symbol name");
            o5.o23(undefined, o72['symbol 1'], "Object.create does not create a property based on symbol description");
            o5.o23(undefined, o72['symbol 2'], "Object.create does not create a property based on symbol description");
            o5.o23(undefined, o72[o78.toString()], "Object.create does not create a property based on symbol toString() value");
            o5.o23(undefined, o72[o79.toString()], "Object.create does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.getOwnPropertyDescriptor with symbol as property key",
        o32: function() {
            var o71 = Symbol();
            var o72 = {};

            Object.defineProperty(o72, o71, { value: 100000, writable: false, enumerable: true, configurable: false } );
            var o38 = Object.getOwnPropertyDescriptor(o72, o71);

            o5.o6(o38.writable, 'o[sym].descriptor.writable == false');
            o5.o13(o38.enumerable, 'o[sym].descriptor.enumerable == true');
            o5.o6(o38.configurable, 'o[sym].descriptor.configurable == false');
        }
    },
    {
        name: "Object.prototype.propertyIsEnumerable should work for symbol properties",
        o32: function() {
            var o91 = Symbol();
            var o92 = Symbol();
            var o72 = {};
            Object.defineProperty(o72, o91, { value: 10, enumerable: true});
            Object.defineProperty(o72, o92, { value: 10, enumerable: false});

            o5.o13(o72.propertyIsEnumerable(o91), 'o.propertyIsEnumerable[sym1]');
            o5.o6(o72.propertyIsEnumerable(o92), 'o.propertyIsEnumerable[sym2]');
        }
    },
    {
        name: "Object.prototype.__defineSetter__ with a property keyed by a symbol",
        o32: function() {
            var o71 = Symbol();
            var o72 = {};
            var o93;

            o72.__defineSetter__(o71, function() { o93 = 'useful string'; });

            o72[o71] = 'anything';

            o5.o23('useful string', o93, "Object.prototype.__defineSetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__defineGetter__ with a property keyed by a symbol",
        o32: function() {
            var o71 = Symbol();
            var o72 = {};

            o72.__defineGetter__(o71, function() { return 'anything'; });

            o5.o23('anything', o72[o71], "Object.prototype.__defineGetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__lookupSetter__ with a property keyed by a symbol",
        o32: function() {
            var o71 = Symbol();
            var o72 = {};
            var o93;
            var setter = function() { o93 = 'useful string'; };

            o72.__defineSetter__(o71, setter);
            var o95 = o72.__lookupSetter__(o71);

            o5.o23(undefined, o93, "setter has not yet been called");
            o5.o13(o95 === setter, "Object.prototype.__lookupSetter__ returns correct function when we use a symbol");

            o95();

            o5.o23('useful string', o93, "calling setter returned from Object.prototype.__lookupSetter__ works as expected");

            o93 = undefined;

            o72[o71] = 'anything';

            o5.o23('useful string', o93, "Object.prototype.__lookupSetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__lookupGetter__ with a property keyed by a symbol",
        o32: function() {
            var o71 = Symbol();
            var o72 = {};
            var getter = function() { return 'anything'; };

            o72.__defineGetter__(o71, getter);
            var o95 = o72.__lookupGetter__(o71);

            o5.o13(o95 === getter, "Object.prototype.__lookupGetter__ returns correct function when we use a symbol");
            o5.o23('anything', o95(), "function returned via Object.prototype.__lookupGetter__ works as expected");
            o5.o23('anything', o72[o71], "Object.prototype.__lookupGetter__ works when we use a symbol");
        }
    },
    {
        name: 'Symbol with numeric description does not create a numeric property',
        o32: function() {
            var o71 = Symbol('1');
            var o72 = {};

            o72[o71] = 'a string';

            o5.o23(undefined, o72[1], "Object should not contain numeric property at index == symbol description");
            o5.o23('a string', o72[o71], "Object should contain the symbol property");

            o72 = [];

            o72[1] = 'the number 1';
            o72[o71] = 'the symbol 1';

            o5.o23(2, o72.length, "Object has correct length");
            o5.o23('the number 1', o72[1], "Object with numeric property has correct value");
            o5.o23('the symbol 1', o72[o71], "Object with symbol property has correct value");
        }
    },
    {
        name: 'BLUE: 539472 BLUE: 541467 - Symbol.prototype should be TypeIds_Object',
        o32: function() {
            o5.o53(function () { Symbol.prototype.valueOf(); }, o54, "Calling prototype methods directly fails since Symbol.prototype is not a SymbolObject", "Symbol.prototype.valueOf: 'this' is not a Symbol object");
            o5.o53(function () { Symbol.prototype.toString(); }, o54, "Calling prototype methods directly fails since Symbol.prototype is not a SymbolObject", "Symbol.prototype.toString: 'this' is not a Symbol object");
        }
    },
    {
        name: 'Symbol objects and properties passed cross-context',
        o32: function() {
            var o97 = o0.o1("ES6Symbol_cross_context_child.js", "samethread");

            o5.o6(Symbol('child symbol') === o97.o71, "Symbol created in another context does not equal symbol with same description from this context");
            o5.o23('symbol', typeof o97.o71, "Symbol created in another context has correct type");
            o5.o23(undefined, o97.o72[Symbol('child symbol')], "Object from another context with a symbol-keyed property doesn't contain a property named the same as a different symbol");
            o5.o23('Symbol(child symbol)', o97.o71.toString(), "Symbol from another context has correct toString behavior");
            o5.o23('child value', o97.o72[o97.o71], "Symbol from another context can be used to lookup properties in objects from another context");

            var o72 = {};
            o72[o97.o71] = 'parent value';

            o5.o23('parent value', o72[o97.o71], "Symbol from another context can be used to index objects from this context");

            var o83 = Object.o82(o97.o72);

            o5.o23(1, o83.length, "Object.getOwnPropertySymbols works for objects from another context");
            o5.o13(o83[0] === o97.o71, "Object.getOwnPropertySymbols returns the correct symbols for objects from another context");
        }
    },
    {
        name: 'Symbol registration within a single realm',
        o32: function() {
            var o71 = Symbol.o37('my string');
            var o92 = Symbol.o37('my string');

            o5.o23('symbol', typeof o71, "Object returned from Symbol.for is actually a symbol");
            o5.o23('Symbol(my string)', o71.toString(), "Symbol returned from Symbol.for has the right description");
            o5.o13(o71 === o92, "Two symbols returned from Symbol.for with the same parameter are the same symbol");

            var key = Symbol.keyFor(o71);

            o5.o23('my string', key, "Symbol created by Symbol.for can be passed to Symbol.keyFor to return the same key");
        }
    },
    {
        name: 'Symbol registration cross-realm',
        o32: function() {
            var o98 = Symbol.o37('parent symbol');

            var o97 = o0.o1("ES6Symbol_cross_context_registration_child.js", "samethread");

            var o99 = Symbol.o37('child symbol');

            o5.o13(o97.o99 === o99, "Symbol registered in child is returned correctly in parent");
            o5.o13(o97.o98 === o98, "Symbol registered in parent is returned correctly in child");
            o5.o13(o97.o100 === Symbol.keyFor(o98), "Symbol registered in parent is returned correctly in child");
        }
    },
    {
        name: 'Registered Symbols should have their PropertyRecords pinned',
        o32: function() {
            var o71 = Symbol.o37('my string');
            o71 = undefined;

            // After cleaning up sym, there shouldn't be anyone pinning the PropertyRecord
            // except for the Symbol registration map.
            // If the reference to the PropertyRecord created above gets cleaned-up we will
            // cause an AV below when we try to reference it again.
            o101();

            o71 = Symbol.o37('my string');

            o5.o23('symbol', typeof o71, "Object returned from Symbol.for is actually a symbol");
            o5.o23('Symbol(my string)', o71.toString(), "Symbol returned from Symbol.for has the right description");
        }
    },
    {
        name: 'Registered Symbol should not be returned by unregistered Symbol with the same description',
        o32: function() {
            var o71 = Symbol.o37('my string');
            var o92 = Symbol('my string');

            o5.o6(o71 === o92, "Symbols created via Symbol.for and Symbol constructor should not be equal even if they have the same description");
            o5.o23('my string', Symbol.keyFor(o71), "Symbol.keyFor returns correct key for registered symbol");
            o5.o23(undefined, Symbol.keyFor(o92), "Symbol.keyFor returns undefined for symbols not registered with Symbol.for");
        }
    },
    {
        name: 'Throwing TypeError when trying to add with a string or a number',
        o32: function() {
            var o50 = Symbol();

            o5.o53(function() { "str" + o50; }, o54, "Adding a string and a symbol throws TypeError", "Object doesn't support property or method 'ToString'");
            o5.o53(function() { o50 + "str"; }, o54, "Adding a symbol and a string throws TypeError", "Object doesn't support property or method 'ToString'");
            o5.o53(function() { 10 + o50; }, o54, "Adding a number and a symbol throws TypeError", "Number expected");
            o5.o53(function() { o50 + 10; }, o54, "Adding a symbol and a number throws TypeError", "Number expected");
        }
    },
    {
        name: 'ToPropertyKey accepts Symbol wrapper objects, and unboxes the Symbol primitive inside',
        o32: function() {
            var o71 = Symbol('sym');
            var o102 = Object(o71);
            var o4 = { [o102] : 'value' };

            o5.o23('value', o4[o71], "Object created with Symbol wrapper object passed as computed property creates a symbol-keyed property from the unboxed symbol");
            o5.o23('value', o4[o102], "Looking up a property by passing a Symbol wrapper object actually returns the property keyed off of the unboxed symbol");

            o5.o23([], Object.getOwnPropertyNames(o4), "Object has no string-keyed properties");
            o5.o23([o71], Object.o82(o4), "Object only has one symbol-keyed property - sym");

            var o103 = {};
            o103[o102] = 'value2';

            o5.o23('value2', o103[o71], "Object created with Symbol wrapper object passed to property index set creates a symbol-keyed property from the unboxed symbol");
            o5.o23('value2', o103[o102], "Looking up a property by passing a Symbol wrapper object actually returns the property keyed off of the unboxed symbol");

            o5.o23([], Object.getOwnPropertyNames(o103), "Object has no string-keyed properties");
            o5.o23([o71], Object.o82(o103), "Object only has one symbol-keyed property - sym");
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which unwraps Symbol objects',
        o32: function() {
            var o71 = Symbol('sym');
            var o104 = Object(o71);

            o2(o104);
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which returns symbol primitive via toString',
        o32: function() {
            var o71 = Symbol('sym');
            var o105 = {
                toString() {
                    return o71;
                },
                valueOf() {
                    o5.o13(false, "We should never call the valueOf method of this object");
                }
            };

            o2(o105);
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which returns symbol primitive via valueOf',
        o32: function() {
            var o71 = Symbol('sym');
            var o4 = { [o71] : 'value' };
            var o106 = {
                toString : null,
                valueOf() {
                    return o71;
                }
            };

            o2(o106);
        }
    },
    {
        name: 'ToNumber called with a symbol primitive should throw a TypeError',
        o32: function() {
            var o50 = Symbol();
            var o4 = { 'length': o50 };

            // We can't use parseInt directly here as that does ToString(obj) - we want something which calls ToNumber directly
            o5.o53(function() { Array.prototype.lastIndexOf.call(o4, 1); }, o54, "Array.prototype.lastIndexOf performs ToLength(obj) which should throw TypeError if obj is a symbol primitive.", "Number expected");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive in strict mode should throw a TypeError',
        o32: function() {
            var o50 = Symbol();
            o5.o53(function() { "use strict"; o50.o109 = 1; }, o54, "Assigning to a property of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive in strict mode should throw a TypeError',
        o32: function() {
            var o50 = Symbol();
            o5.o53(function() { "use strict"; o50['a'+'b'] = 1; }, o54, "Assigning to a property of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to an index of a symbol primitive in strict mode should throw a TypeError',
        o32: function() {
            var o50 = Symbol();
            o5.o53(function() { "use strict"; o50[12] = 1; }, o54, "Assigning to an index of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive should be ignored',
        o32: function() {
            var o50 = Symbol();
            o50.o109 = 1;
            o5.o23(o50.o109, undefined);
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive should be ignored',
        o32: function() {
            var o50 = Symbol();
            o50['a'+'b'] = 1;
            o5.o23(o50['ab'], undefined);
        }
    },
    {
        name: 'Assigning to an index of a symbol primitive should be ignored',
        o32: function() {
            var o50 = Symbol();
            o50[10086] = 1;
            o5.o23(o50[10086], undefined);
        }
    },
    {
        name: '[OS: Bug 4533235] JSON.stringify should ignore symbols (kangax)',
        o32: function() {
            var o110 = {o111: Symbol()};
            var o71 = Symbol("a");
            o110[Symbol()] = 1;
            var o112 = [Symbol()];

            o5.o23('{}', JSON.stringify(o110));
            o5.o23('[null]', JSON.stringify(o112));
            o5.o23(undefined, JSON.stringify(Symbol()));
            o5.o23(undefined, JSON.stringify(o71));
        }
    },
    {
        name: '[OS: Bug 5950493] Symbol(undefined).toString() produces "Symbol(undefined)" instead of "Symbol()".',
        o32: function() {
            o5.o23('Symbol()', Symbol().toString(), 'Symbol().toString() === "Symbol()"');
            o5.o23('Symbol()', Symbol(undefined).toString(), 'Symbol(undefined).toString() === "Symbol()"');
            o5.o23('Symbol()', Symbol("").toString(), 'Symbol("").toString() === "Symbol()"');
        }
    }
];

o115.o116(o30, { o117: o0.o118[0] != "summary" });
