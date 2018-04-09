//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Symbol tests -- verifies the API shape and basic functionality

o0.o1(test(  Int16Array, false, ""));

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

            o4.o11('function', typeof Symbol.o14, "typeof Symbol.for === 'function'");
            o4.o11(1, Symbol.o14.length, "Symbol.for.length === 1");
            o15 = Object.getOwnPropertyDescriptor(Symbol, 'for');
            o4.o7(o15.writable, 'Symbol.for.descriptor.writable == true');
            o4.o5(o15.enumerable, 'Symbol.for.descriptor.enumerable == false');
            o4.o7(o15.configurable, 'Symbol.for.descriptor.configurable == true');

            o4.o11('function', typeof Symbol.keyFor, "typeof Symbol.keyFor === 'function'");
            o4.o11(1, Symbol.keyFor.length, "Symbol.keyFor.length === 1");
            o15 = Object.getOwnPropertyDescriptor(Symbol, 'keyFor');
            o4.o7(o15.writable, 'Symbol.keyFor.descriptor.writable == true');
            o4.o5(o15.enumerable, 'Symbol.keyFor.descriptor.enumerable == false');
            o4.o7(o15.configurable, 'Symbol.keyFor.descriptor.configurable == true');
        }
    },
    {
        name: "Symbol prototype has expected shape",
        o13: function() {
            o4.o7(Symbol === Symbol.prototype.constructor, "Symbol === Symbol.prototype.constructor");
            o15 = Object.getOwnPropertyDescriptor(Symbol, 'prototype');

            o4.o5(o15.writable, 'Symbol.prototype.descriptor.writable == false');
            o4.o5(o15.enumerable, 'Symbol.prototype.descriptor.enumerable == false');
            o4.o5(o15.configurable, 'Symbol.prototype.descriptor.configurable == false');

            o4.o11('function', typeof Symbol.prototype.toString, "typeof Symbol.prototype.toString === 'function'");
            o15 = Object.getOwnPropertyDescriptor(Symbol.prototype, 'toString');

            o4.o7(o15.writable, 'Symbol.prototype.toString.descriptor.writable == true');
            o4.o5(o15.enumerable, 'Symbol.prototype.toString.descriptor.enumerable == false');
            o4.o7(o15.configurable, 'Symbol.prototype.toString.descriptor.configurable == true');

            o4.o11('function', typeof Symbol.prototype.valueOf, "typeof Symbol.prototype.valueOf === 'function'");
            o15 = Object.getOwnPropertyDescriptor(Symbol.prototype, 'valueOf');

            o4.o7(o15.writable, 'Symbol.prototype.valueOf.descriptor.writable == true');
            o4.o5(o15.enumerable, 'Symbol.prototype.valueOf.descriptor.enumerable == false');
            o4.o7(o15.configurable, 'Symbol.prototype.valueOf.descriptor.configurable == true');

            o4.o11('function', typeof Symbol.prototype[Symbol.toPrimitive], "typeof Symbol.prototype[@@toPrimitive] === 'function'");
            o4.o11(1, Symbol.prototype[Symbol.toPrimitive].length, "Symbol.prototype[@@toPrimitive].length === 1");
            o15 = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toPrimitive);

            o4.o5(o15.writable, 'Symbol.prototype[@@toPrimitive].descriptor.writable == false');
            o4.o5(o15.enumerable, 'Symbol.prototype[@@toPrimitive].descriptor.enumerable == false');
            o4.o7(o15.configurable, 'Symbol.prototype[@@toPrimitive].descriptor.configurable == true');

            var o16 = Symbol.prototype[Symbol.toPrimitive].toString();
            var o17 = o16.substring(9, o16.indexOf('('));
            o4.o11('[Symbol.toPrimitive]', o17, "Symbol[@@toPrimitive].name == '[Symbol.toPrimitive]'");

            o4.o11('string', typeof Symbol.prototype[Symbol.toStringTag], "typeof Symbol.prototype[@@toStringTag] === 'string'");
            o15 = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toStringTag);

            o4.o5(o15.writable, 'Symbol.prototype[@@toStringTag].descriptor.writable == false');
            o4.o5(o15.enumerable, 'Symbol.prototype[@@toStringTag].descriptor.enumerable == false');
            o4.o7(o15.configurable, 'Symbol.prototype[@@toStringTag].descriptor.configurable == true');
            o4.o11('Symbol', Symbol.prototype[Symbol.toStringTag], "Symbol.prototype[@@toStringTag] === 'Symbol'");
        }
    },
    {
        name: "Symbol constructor and prototype built-ins",
        o13: function() {
            var o18 = Symbol("x");
            var o19 = Symbol("y");

            // toPrimitive() behavior
            o4.o11(o18, o18[Symbol.toPrimitive](), "x == x[Symbol.toPrimitive]()");
            o4.o11(o18, o18[Symbol.toPrimitive].call(o18), "x == x[Symbol.toPrimitive].call(x)");
            o4.o11(o19, o18[Symbol.toPrimitive].call(o19), "y == x[Symbol.toPrimitive].call(y)");
            o4.o5(o18 == o18[Symbol.toPrimitive].call(o19), "x != x[Symbol.toPrimitive].call(y)");
            o4.o11(o18, Symbol.prototype[Symbol.toPrimitive].call(o18), "x == Symbol.prototype[Symbol.toPrimitive].call(x)");

            // TypeError scenarios
            o4.o20(function () { o18[Symbol.toPrimitive].call("x") }, o21, "x[Symbol.toPrimitive].call('x'), toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o20(function () { Symbol.prototype[Symbol.toPrimitive]() }, o21, "toPrimitive throws TypeError if no arguments are passed", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o20(function () { Symbol.prototype[Symbol.toPrimitive].call(true) }, o21, "toPrimitive throws TypeError for boolean true", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o20(function () { Symbol.prototype[Symbol.toPrimitive].call(false) }, o21, "toPrimitive throws TypeError for boolean false", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o20(function () { Symbol.prototype[Symbol.toPrimitive].call(0) }, o21, "toPrimitive throws TypeError for number", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o20(function () { Symbol.prototype[Symbol.toPrimitive].call(NaN) }, o21, "toPrimitive throws TypeError for NaN", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o20(function () { Symbol.prototype[Symbol.toPrimitive].call("") }, o21, "toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o20(function () { Symbol.prototype[Symbol.toPrimitive].call("abc") }, o21, "toPrimitive throws TypeError for values that does not have SymbolData", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o20(function () { Symbol.prototype[Symbol.toPrimitive].call(null) }, o21, "toPrimitive throws TypeError for null", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o20(function () { Symbol.prototype[Symbol.toPrimitive].call(undefined) }, o21, "toPrimitive throws TypeError for undefined", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");
            o4.o20(function () { Symbol.prototype[Symbol.toPrimitive].call({}) }, o21, "toPrimitive throws TypeError for object", "Symbol[Symbol.toPrimitive]: 'this' is not a Symbol object");

            var o22 = Object(o19);
            o4.o11(o19, Symbol.prototype[Symbol.toPrimitive].call(o22), "y == Symbol.prototype[Symbol.toPrimitive].call(z)");
            o4.o5(Object(o18) == Symbol.prototype[Symbol.toPrimitive].call(o22), "Object(x) != Symbol.prototype[Symbol.toPrimitive].call(z)");
        }
    },
    {
        name: "Symbol constructor has the well-known symbols as properties",
        o13: function() {
            function o23(o24) {
                var o25 = "Symbol[" + o24 + "]";

                o4.o7(Symbol[o24] !== undefined,  o25 + " !== undefined");
                o4.o11('symbol', typeof Symbol[o24], "typeof " + o25 + " === 'symbol'");

                var o15 = Object.getOwnPropertyDescriptor(Symbol, o24);
                o4.o5(o15.writable, o25 + '.descriptor.writable == false');
                o4.o5(o15.enumerable, o25 + 'descriptor.enumerable == false');
                o4.o5(o15.configurable, o25 + 'descriptor.configurable == false');
            }

            o23("hasInstance");
            o23("isConcatSpreadable");
            o23("iterator");
            o23("toPrimitive");
            o23("toStringTag");
            o23("unscopables");
            o23("species");
            o23("replace");
            o23("search");
            o23("match");
            o23("split");
        }
    },
    {
        name: "Symbol primitive toString should throw a type error",
        o13: function() {
            o4.o20(function() { 'string' + Symbol.iterator; }, o21, "Symbol primitives throw on implicit string conversion", "Object doesn't support property or method 'ToString'");
        }
    },
    {
        name: "String(symbol) behavior",
        o13: function() {
            o4.o11('Symbol(description)', String(Symbol('description')), "String(Symbol('description')) === 'Symbol(description)'");
            o4.o20(function () { new String(Symbol('description')); }, o21, "Symbol as an argument to new String() throws", "Object doesn't support property or method 'ToString'");
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
            o4.o20(function () { new Symbol() }, o21, "new Symbol throws TypeError when it has no parameter", "Function is not a constructor");
            o4.o20(function () { new Symbol('anything') }, o21, "new Symbol throws TypeError when it has a string parameter", "Function is not a constructor");
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

            var o26 = Symbol('my');
            o4.o7(o26 === o26, "Generated symbol should equal itself");
            var o27 = o26;
            o4.o7(o26 === o27, "Assignment to another Var should still equal the original symbol");

            var o28 = Object(o26);
            var o29 = Object(o26);
            o4.o7(o28 !== o29, "Box objects should not be equal for the same symbol");
            o4.o7(o28 !== o26, "Box object should not be equal to the symbol primitive");
            o4.o7(o28.valueOf() === o29.valueOf(), "Unboxing objects wrapping the same symbol primitive should result in the same symbol returned from valueOf()");

            var o30 = Object(Symbol('another'));
            o4.o7(o28 !== o30, "Box objects should not be equal for different symbol primitives");

            var o31 = o28.valueOf();
            o4.o7(o26 === o31, "Unboxed symbol should be equal to original primitive");

            o4.o7(Symbol.iterator !== Symbol('iterator'), "Symbol.iterator !== Symbol('iterator')");

            o4.o7(Object(Symbol('sym')).valueOf() !== Object(Symbol('sym')).valueOf(), "Different symbol primitives boxed and unboxed should not be equal to each other");
        }
    },
    {
        name: "Symbol strict equality with other types",
        o13: function() {
            var o32 = Symbol('my');

            o4.o5(o32 === 'string', "sym !== 'string'");
            o4.o5(o32 === undefined, "sym !== undefined");
            o4.o5(o32 === null, "sym !== null");
            o4.o5(o32 === true, "sym !== true");
            o4.o5(o32 === false, "sym !== true");
            o4.o5(o32 === [], "sym !== []");
            o4.o5(o32 === {}, "sym !== {}");
            o4.o7(o32 === o32, "sym === sym");

            o4.o5('string' === o32, "'string' !== sym");
            o4.o5(undefined === o32, "undefined !== sym");
            o4.o5(null === o32, "null !== sym");
            o4.o5(true === o32, "true !== sym");
            o4.o5(false === o32, "false !== sym");
            o4.o5([] === o32, "[] !== sym");
            o4.o5({} === o32, "{} !== sym");
        }
    },
    {
        name: "Symbol equality with other types",
        o13: function() {
            var o32 = Symbol('my');

            o4.o5(o32 == 'string', "ToString(symbol) throws so this should be false");
            o4.o5(o32 == undefined, "sym != undefined");
            o4.o5(o32 == null, "sym != null");
            o4.o5(o32 == true, "symbol != true");
            o4.o5(o32 == false, "symbol != false");
            o4.o5(o32 == [], "sym != []");
            o4.o5(o32 == {}, "sym != {}");
            o4.o7(o32 == o32, "sym == sym");

            o4.o5('string' == o32, "ToString(symbol) throws so this should be false");
            o4.o5(undefined == o32, "undefined != sym");
            o4.o5(null == o32, "null != sym");
            o4.o5(true == o32, "true != sym");
            o4.o5(false == o32, "false != sym");
            o4.o5([] == o32, "[] != sym");
            o4.o5({} == o32, "{} != sym");
        }
    },
    {
        name: "Symbol equality with auto-boxed Symbols",
        o13: function() {
            var o32 = Symbol('my');

            o4.o7(o32 == Object(o32), "Auto-boxed symbol is equal to that symbol");
            o4.o7(Object(o32) == o32, "Auto-boxed symbol is equal to that symbol");
            o4.o5(Object(o32) == Object(o32), "Two different auto-boxed symbols of the same symbol are never equal to each other");

            o4.o5(o32 === Object(o32), "Auto-boxed symbol is not strict-equal to that symbol");
            o4.o5(Object(o32) === o32, "Auto-boxed symbol is not strict-equal to that symbol");
            o4.o5(Object(o32) === Object(o32), "Two different auto-boxed symbols of the same symbol are never strict-equal to each other");
        }
    },
    {
        name: "Symbol auto-boxing",
        o13: function() {
            o4.o11('Symbol()', Symbol().toString(), "Autoboxing for toString()");

            var o32 = Symbol();

            o4.o7(o32.valueOf() === o32.valueOf(), "Autoboxing for valueOf()");
        }
    },
    {
        name: "Symbol primitives work as property keys",
        o13: function() {
            var o33 = {};
            o33[Symbol.iterator] = 'some string';
            o4.o11('some string', o33[Symbol.iterator], "o[Symbol.iterator] === 'some string'");
            o4.o7(o33[Symbol.iterator.toString()] === undefined, "o[Symbol.iterator] uses the property id stored in Symbol.iterator (not the value created by Symbol.iterator.toString())");

            // use functions to wrap property access to ensure we hit JIT code
            function o34(o3, o32) {
                return o3[o32];
            }
            function o35(o3, o32, o36) {
                o3[o32] = o36;
            }

            o33 = {};
            var o37 = Symbol();
            for (var o38 = 0; o38 < 5; o38++) {
                o35(o33, o37, o38);
                o4.o11(o38, o34(o33, o37), "Property keyed by symbol is able to be set and get");
            }

            var o32 = Symbol('sym');
            o33 = {};
            o33[o32] = 'test';

            o4.o11('test', o33[o32], "Symbol converted to property key works");
            o4.o11(undefined, o33['sym'], "Symbol description is not added as a property to the object");

            var o39 = Symbol('uniquevalue');
            var o40 = Symbol('uniquevalue');
            o33 = {};
            o33[o39] = 's1';
            o33[o40] = 's2';

            o4.o11('s1', o33[o39], "Simple test of symbol producing a property on an object");
            o4.o11('s2', o33[o40], "Simple test of symbol producing a property on an object");
            o4.o7(o33[o39] != o33[o40], "Different symbols with the same description create different properties on an object");

            delete o33[o39];

            o4.o11(undefined, o33[o39], "deleting properties from objects also works");
            o4.o11('s2', o33[o40], "deleting a property doesn't affect other properties");

            // Needs ES6 object literal improvements
            o33 = { [o32] : 'string' };
            o4.o11('string', o33[o32], "Object literal declared with symbol property works");
        }
    },
    {
        name: "Object.prototype.hasOwnProperty works for symbols",
        o13: function() {
            var o33 = {};

            o4.o5(o33.hasOwnProperty(Symbol.iterator), "Property defined with a symbol initially is not in the object");

            o33[Symbol.iterator] = 'a string';

            o4.o7(o33.hasOwnProperty(Symbol.iterator), "Property defined with a symbol can be looked up via o.hasOwnProperty");
        }
    },
    {
        name: "Symbols handled by type conversion operations",
        o13: function() {
            o4.o20(function () { Number(Symbol.iterator).valueOf() }, o21, "ToNumber(symbol) throws TypeError", "Number expected");
            o4.o11(true, Boolean(Symbol.iterator), "ToBoolean(symbol) === true");
            o4.o11('object', typeof Object(Symbol.iterator), "ToObject(symbol) is not a symbol object");
        }
    },
    {
        name: "API shape of Object.getOwnPropertySymbols",
        o13: function() {
            o4.o7(Object.o41 !== undefined, "Object.getOwnPropertySymbols is defined");
            o4.o11('function', typeof Object.o41, "Object.getOwnPropertySymbols is a function");
            o4.o11(1, Object.o41.length, "Object.getOwnPropertySymbols.length === 1");
        }
    },
    {
        name: "Object.getOwnPropertySymbols does ToObject on its argument",
        o13: function() {
            o4.o20(function () { Object.o41(); }, o21, "ToObject(undefined) throws TypeError", "Object expected");
            o4.o20(function () { Object.o41(undefined); }, o21, "ToObject(undefined) throws TypeError", "Object expected");
            o4.o20(function () { Object.o41(null); }, o21, "ToObject(null) throws TypeError", "Object expected");
            o4.o11([], Object.o41(true), "Object.getOwnPropertySymbols does ToObject on boolean");
            o4.o11([], Object.o41(1), "Object.getOwnPropertySymbols does ToObject on number");
            o4.o11([], Object.o41("a"), "Object.getOwnPropertySymbols does ToObject on string");
            o4.o11([], Object.o41(Symbol('a')), "Object.getOwnPropertySymbols does ToObject on symbol");
            o4.o11([], Object.o41({}), "Object.getOwnPropertySymbols returns an empty array for an empty object");
        }
    },
    {
        name: "Object.getOwnPropertySymbols only returns symbols",
        o13: function() {
            var o32 = Symbol('c');
            var o33 = {};

            o33['a'] = 'alpha';
            Object.defineProperty(o33, 'b', { value: 'beta', enumerable: false } );
            o33[o32] = 'gamma';
            o33['d'] = 'delta';

            var o42 = Object.o41(o33);

            o4.o11(1, o42.length, "symbols.length === 1");

            for(var o38 = 0; o38 < o42.length; o38++) {
                o4.o7(typeof o42[o38] === 'symbol', "The symbols array only includes entries of type symbol");
                o4.o7(o42[o38].toString() != 'a', "The symbols array does not include an entry with the name of any of our string properties");
                o4.o7(o42[o38].toString() != 'b', "The symbols array does not include an entry with the name of any of our string properties");
                o4.o7(o42[o38].toString() != 'd', "The symbols array does not include an entry with the name of any of our string properties");
                o4.o7(o42[o38] === o32, "The symbols array includes our symbol");
                o4.o7(o42[o38].toString() === o32.toString(), "The symbols array includes an entry with our symbol.toString()");
            }

            var o39 = Symbol('name');
            var o40 = Symbol('name');
            o33 = {};

            o33[o39] = 'something';
            o33[o40] = 'something else';

            o42 = Object.o41(o33);

            o4.o11(2, o42.length, "symbols.length === 2");
            o4.o7(o42[0] === o39, "symbols[0] === s1");
            o4.o7(o42[1] === o40, "symbols[1] === s2");

            o33 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            o42 = Object.o41(o33);

            o4.o11(0, o42.length, "Object with no symbol properties returns empty array from Object.getOwnPropertySymbols");
        }
    },
    {
        name: "Object.getOwnPropertyNames doesn't return symbols",
        o13: function() {
            var o32 = Symbol('c');
            var o33 = {};

            o33['a'] = 'alpha';
            Object.defineProperty(o33, 'b', { value: 'beta', enumerable: false } );
            o33[o32] = 'gamma';
            o33['d'] = 'delta';

            var o43 = Object.getOwnPropertyNames(o33);

            o4.o11(3, o43.length, "names.length === 3");

            for(var o38 = 0; o38 < o43.length; o38++) {
                o4.o5(typeof o43[o38] === 'symbol', "The names array does not include an entry of type symbol");
                o4.o7(o43[o38] != 'c', "The names array does not include an entry with the description of our symbol");
                o4.o7(o43[o38] != o32, "The names array does not include any symbols");
                o4.o7(o43[o38] != o32.toString(), "The names array does not include an entry with our symbol.toString()");
            }

            o33 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            o43 = Object.getOwnPropertyNames(o33);

            o4.o11(11, o43.length, "Object with no symbol properties returns correct array");

            o33 = {};

            o33[o32] = 'something';

            o43 = Object.getOwnPropertyNames(o33);

            o4.o11(0, o43.length, "Object with only symbol properties returns empty array");
        }
    },
    {
        name: "Object.keys should not return property keys which are symbols",
        o13: function() {
            var o32 = Symbol('c');
            var o33 = {};

            o33['a'] = 'alpha';
            o33['b'] = 'beta';
            o33[o32] = 'gamma';
            o33['d'] = 'delta';

            var keys = Object.keys(o33);

            o4.o11(3, keys.length, "keys.length === 3");

            for(var o38 = 0; o38 < keys.length; o38++) {
                o4.o5(typeof keys[o38] === 'symbol', "The keys array does not include an entry of type symbol");
                o4.o7(keys[o38] != 'c', "The keys array does not include an entry with the description of our symbol");
                o4.o7(keys[o38] != o32, "The keys array does not include any symbols");
                o4.o7(keys[o38] != o32.toString(), "The keys array does not include an entry with our symbol.toString()");
            }
        }
    },
    {
        name: "for ... in enumeration does not surface symbols",
        o13: function() {
            var o32 = Symbol('c');
            var o33 = {};

            o33['a'] = 'alpha';
            o33['b'] = 'beta';
            o33[o32] = 'gamma';
            o33['d'] = 'delta';

            for (o44 in o33)
            {
                o4.o5(typeof o44 === 'symbol', "for ... in does not enumerate symbol types");
                o4.o7(o33[o44] !== 'gamma', "for ... in does not enumerate properties keyed by symbols");
                o4.o7(o44 != o32, "for ... in does not enumerate our symbol");
                o4.o7(o44 != o32.toString(), "for ... in does not enumerate a property named sym.toString()");
            }
        }
    },
    {
        name: "Object.defineProperty with symbol as property key",
        o13: function() {
            var o32 = Symbol();
            var o33 = {};

            Object.defineProperty(o33, o32, { value: 'some value' } );

            o4.o11('some value', o33[o32], "Property keyed off symbol and set via Object.defineProperty should be reachable by the same symbol");
            o4.o11(undefined, o33['sym'], "defineProperty does not create a property based on symbol name");
            o4.o11(undefined, o33[''], "defineProperty does not create a property based on symbol description");
            o4.o11(undefined, o33[o32.toString()], "defineProperty does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.defineProperties with symbols as property keys",
        o13: function() {
            var o45 = {};
            var o39 = Symbol('symbol 1');
            var o40 = Symbol('symbol 2');
            o45['a'] = { value: 'alpha', enumerable: true };
            o45[o39] = { value: 'beta', enumerable: true };
            o45[o40] = { value: 'gamma', enumerable: true };
            o45['d'] = { value: 'delta', enumerable: true };
            var o33 = {};

            Object.defineProperties(o33, o45);

            o4.o11('alpha', o33['a'], "Property keyed off string is added as expected");
            o4.o11('delta', o33['d'], "Property keyed off string is added as expected");

            o4.o11('beta', o33[o39], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
            o4.o11('gamma', o33[o40], "Property keyed off symbol set via Object.defineProperties should be reachable by the same symbol");
            o4.o11(undefined, o33['s1'], "defineProperties does not create a property based on symbol name");
            o4.o11(undefined, o33['s2'], "defineProperties does not create a property based on symbol name");
            o4.o11(undefined, o33['symbol 1'], "defineProperties does not create a property based on symbol description");
            o4.o11(undefined, o33['symbol 2'], "defineProperties does not create a property based on symbol description");
            o4.o11(undefined, o33[o39.toString()], "defineProperty does not create a property based on symbol toString() value");
            o4.o11(undefined, o33[o40.toString()], "defineProperty does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.create should work for symbol properties",
        o13: function() {
            var o45 = {};
            var o39 = Symbol('symbol 1');
            var o40 = Symbol('symbol 2');
            o45['a'] = { value: 'alpha', enumerable: true };
            o45[o39] = { value: 'beta', enumerable: true };
            o45[o40] = { value: 'gamma', enumerable: true };
            o45['d'] = { value: 'delta', enumerable: true };

            var o33 = Object.create(Object.prototype, o45);

            o4.o11('alpha', o33['a'], "Property keyed off string is added as expected");
            o4.o11('delta', o33['d'], "Property keyed off string is added as expected");

            o4.o11('beta', o33[o39], "Property keyed off symbol set via Object.create should be reachable by the same symbol");
            o4.o11('gamma', o33[o40], "Property keyed off symbol set via Object.create should be reachable by the same symbol");
            o4.o11(undefined, o33['s1'], "Object.create does not create a property based on symbol name");
            o4.o11(undefined, o33['s2'], "Object.create does not create a property based on symbol name");
            o4.o11(undefined, o33['symbol 1'], "Object.create does not create a property based on symbol description");
            o4.o11(undefined, o33['symbol 2'], "Object.create does not create a property based on symbol description");
            o4.o11(undefined, o33[o39.toString()], "Object.create does not create a property based on symbol toString() value");
            o4.o11(undefined, o33[o40.toString()], "Object.create does not create a property based on symbol toString() value");
        }
    },
    {
        name: "Object.getOwnPropertyDescriptor with symbol as property key",
        o13: function() {
            var o32 = Symbol();
            var o33 = {};

            Object.defineProperty(o33, o32, { value: 100000, writable: false, enumerable: true, configurable: false } );
            var o15 = Object.getOwnPropertyDescriptor(o33, o32);

            o4.o5(o15.writable, 'o[sym].descriptor.writable == false');
            o4.o7(o15.enumerable, 'o[sym].descriptor.enumerable == true');
            o4.o5(o15.configurable, 'o[sym].descriptor.configurable == false');
        }
    },
    {
        name: "Object.prototype.propertyIsEnumerable should work for symbol properties",
        o13: function() {
            var o46 = Symbol();
            var o47 = Symbol();
            var o33 = {};
            Object.defineProperty(o33, o46, { value: 10, enumerable: true});
            Object.defineProperty(o33, o47, { value: 10, enumerable: false});

            o4.o7(o33.propertyIsEnumerable(o46), 'o.propertyIsEnumerable[sym1]');
            o4.o5(o33.propertyIsEnumerable(o47), 'o.propertyIsEnumerable[sym2]');
        }
    },
    {
        name: "Object.prototype.__defineSetter__ with a property keyed by a symbol",
        o13: function() {
            var o32 = Symbol();
            var o33 = {};
            var o48;

            o33.__defineSetter__(o32, function() { o48 = 'useful string'; });

            o33[o32] = 'anything';

            o4.o11('useful string', o48, "Object.prototype.__defineSetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__defineGetter__ with a property keyed by a symbol",
        o13: function() {
            var o32 = Symbol();
            var o33 = {};

            o33.__defineGetter__(o32, function() { return 'anything'; });

            o4.o11('anything', o33[o32], "Object.prototype.__defineGetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__lookupSetter__ with a property keyed by a symbol",
        o13: function() {
            var o32 = Symbol();
            var o33 = {};
            var o48;
            var setter = function() { o48 = 'useful string'; };

            o33.__defineSetter__(o32, setter);
            var o49 = o33.__lookupSetter__(o32);

            o4.o11(undefined, o48, "setter has not yet been called");
            o4.o7(o49 === setter, "Object.prototype.__lookupSetter__ returns correct function when we use a symbol");

            o49();

            o4.o11('useful string', o48, "calling setter returned from Object.prototype.__lookupSetter__ works as expected");

            o48 = undefined;

            o33[o32] = 'anything';

            o4.o11('useful string', o48, "Object.prototype.__lookupSetter__ works when we use a symbol");
        }
    },
    {
        name: "Object.prototype.__lookupGetter__ with a property keyed by a symbol",
        o13: function() {
            var o32 = Symbol();
            var o33 = {};
            var getter = function() { return 'anything'; };

            o33.__defineGetter__(o32, getter);
            var o49 = o33.__lookupGetter__(o32);

            o4.o7(o49 === getter, "Object.prototype.__lookupGetter__ returns correct function when we use a symbol");
            o4.o11('anything', o49(), "function returned via Object.prototype.__lookupGetter__ works as expected");
            o4.o11('anything', o33[o32], "Object.prototype.__lookupGetter__ works when we use a symbol");
        }
    },
    {
        name: 'Symbol with numeric description does not create a numeric property',
        o13: function() {
            var o32 = Symbol('1');
            var o33 = {};

            o33[o32] = 'a string';

            o4.o11(undefined, o33[1], "Object should not contain numeric property at index == symbol description");
            o4.o11('a string', o33[o32], "Object should contain the symbol property");

            o33 = [];

            o33[1] = 'the number 1';
            o33[o32] = 'the symbol 1';

            o4.o11(2, o33.length, "Object has correct length");
            o4.o11('the number 1', o33[1], "Object with numeric property has correct value");
            o4.o11('the symbol 1', o33[o32], "Object with symbol property has correct value");
        }
    },
    {
        name: 'BLUE: 539472 BLUE: 541467 - Symbol.prototype should be TypeIds_Object',
        o13: function() {
            o4.o20(function () { Symbol.prototype.valueOf(); }, o21, "Calling prototype methods directly fails since Symbol.prototype is not a SymbolObject", "Symbol.prototype.valueOf: 'this' is not a Symbol object");
            o4.o20(function () { Symbol.prototype.toString(); }, o21, "Calling prototype methods directly fails since Symbol.prototype is not a SymbolObject", "Symbol.prototype.toString: 'this' is not a Symbol object");
        }
    },
    {
        name: 'Symbol objects and properties passed cross-context',
        o13: function() {
            var o50 = o0.o1("ES6Symbol_cross_context_child.js", "samethread");

            o4.o5(Symbol('child symbol') === o50.o32, "Symbol created in another context does not equal symbol with same description from this context");
            o4.o11('symbol', typeof o50.o32, "Symbol created in another context has correct type");
            o4.o11(undefined, o50.o33[Symbol('child symbol')], "Object from another context with a symbol-keyed property doesn't contain a property named the same as a different symbol");
            o4.o11('Symbol(child symbol)', o50.o32.toString(), "Symbol from another context has correct toString behavior");
            o4.o11('child value', o50.o33[o50.o32], "Symbol from another context can be used to lookup properties in objects from another context");

            var o33 = {};
            o33[o50.o32] = 'parent value';

            o4.o11('parent value', o33[o50.o32], "Symbol from another context can be used to index objects from this context");

            var o42 = Object.o41(o50.o33);

            o4.o11(1, o42.length, "Object.getOwnPropertySymbols works for objects from another context");
            o4.o7(o42[0] === o50.o32, "Object.getOwnPropertySymbols returns the correct symbols for objects from another context");
        }
    },
    {
        name: 'Symbol registration within a single realm',
        o13: function() {
            var o32 = Symbol.o14('my string');
            var o47 = Symbol.o14('my string');

            o4.o11('symbol', typeof o32, "Object returned from Symbol.for is actually a symbol");
            o4.o11('Symbol(my string)', o32.toString(), "Symbol returned from Symbol.for has the right description");
            o4.o7(o32 === o47, "Two symbols returned from Symbol.for with the same parameter are the same symbol");

            var key = Symbol.keyFor(o32);

            o4.o11('my string', key, "Symbol created by Symbol.for can be passed to Symbol.keyFor to return the same key");
        }
    },
    {
        name: 'Symbol registration cross-realm',
        o13: function() {
            var o51 = Symbol.o14('parent symbol');

            var o50 = o0.o1("ES6Symbol_cross_context_registration_child.js", "samethread");

            var o52 = Symbol.o14('child symbol');

            o4.o7(o50.o52 === o52, "Symbol registered in child is returned correctly in parent");
            o4.o7(o50.o51 === o51, "Symbol registered in parent is returned correctly in child");
            o4.o7(o50.o53 === Symbol.keyFor(o51), "Symbol registered in parent is returned correctly in child");
        }
    },
    {
        name: 'Registered Symbols should have their PropertyRecords pinned',
        o13: function() {
            var o32 = Symbol.o14('my string');
            o32 = undefined;

            // After cleaning up sym, there shouldn't be anyone pinning the PropertyRecord
            // except for the Symbol registration map.
            // If the reference to the PropertyRecord created above gets cleaned-up we will
            // cause an AV below when we try to reference it again.
            o54();

            o32 = Symbol.o14('my string');

            o4.o11('symbol', typeof o32, "Object returned from Symbol.for is actually a symbol");
            o4.o11('Symbol(my string)', o32.toString(), "Symbol returned from Symbol.for has the right description");
        }
    },
    {
        name: 'Registered Symbol should not be returned by unregistered Symbol with the same description',
        o13: function() {
            var o32 = Symbol.o14('my string');
            var o47 = Symbol('my string');

            o4.o5(o32 === o47, "Symbols created via Symbol.for and Symbol constructor should not be equal even if they have the same description");
            o4.o11('my string', Symbol.keyFor(o32), "Symbol.keyFor returns correct key for registered symbol");
            o4.o11(undefined, Symbol.keyFor(o47), "Symbol.keyFor returns undefined for symbols not registered with Symbol.for");
        }
    },
    {
        name: 'Throwing TypeError when trying to add with a string or a number',
        o13: function() {
            var o18 = Symbol();

            o4.o20(function() { "str" + o18; }, o21, "Adding a string and a symbol throws TypeError", "Object doesn't support property or method 'ToString'");
            o4.o20(function() { o18 + "str"; }, o21, "Adding a symbol and a string throws TypeError", "Object doesn't support property or method 'ToString'");
            o4.o20(function() { 10 + o18; }, o21, "Adding a number and a symbol throws TypeError", "Number expected");
            o4.o20(function() { o18 + 10; }, o21, "Adding a symbol and a number throws TypeError", "Number expected");
        }
    },
    {
        name: 'ToPropertyKey accepts Symbol wrapper objects, and unboxes the Symbol primitive inside',
        o13: function() {
            var o32 = Symbol('sym');
            var o55 = Object(o32);
            var o3 = { [o55] : 'value' };

            o4.o11('value', o3[o32], "Object created with Symbol wrapper object passed as computed property creates a symbol-keyed property from the unboxed symbol");
            o4.o11('value', o3[o55], "Looking up a property by passing a Symbol wrapper object actually returns the property keyed off of the unboxed symbol");

            o4.o11([], Object.getOwnPropertyNames(o3), "Object has no string-keyed properties");
            o4.o11([o32], Object.o41(o3), "Object only has one symbol-keyed property - sym");

            var o56 = {};
            o56[o55] = 'value2';

            o4.o11('value2', o56[o32], "Object created with Symbol wrapper object passed to property index set creates a symbol-keyed property from the unboxed symbol");
            o4.o11('value2', o56[o55], "Looking up a property by passing a Symbol wrapper object actually returns the property keyed off of the unboxed symbol");

            o4.o11([], Object.getOwnPropertyNames(o56), "Object has no string-keyed properties");
            o4.o11([o32], Object.o41(o56), "Object only has one symbol-keyed property - sym");
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which unwraps Symbol objects',
        o13: function() {
            var o32 = Symbol('sym');
            var o57 = Object(o32);

            o2(o57);
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which returns symbol primitive via toString',
        o13: function() {
            var o32 = Symbol('sym');
            var o58 = {
                toString() {
                    return o32;
                },
                valueOf() {
                    o4.o7(false, "We should never call the valueOf method of this object");
                }
            };

            o2(o58);
        }
    },
    {
        name: 'ToPropertyKey performs ToPrimitive on argument which returns symbol primitive via valueOf',
        o13: function() {
            var o32 = Symbol('sym');
            var o3 = { [o32] : 'value' };
            var o59 = {
                toString : null,
                valueOf() {
                    return o32;
                }
            };

            o2(o59);
        }
    },
    {
        name: 'ToNumber called with a symbol primitive should throw a TypeError',
        o13: function() {
            var o18 = Symbol();
            var o3 = { 'length': o18 };

            // We can't use parseInt directly here as that does ToString(obj) - we want something which calls ToNumber directly
            o4.o20(function() { Array.prototype.lastIndexOf.call(o3, 1); }, o21, "Array.prototype.lastIndexOf performs ToLength(obj) which should throw TypeError if obj is a symbol primitive.", "Number expected");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive in strict mode should throw a TypeError',
        o13: function() {
            var o18 = Symbol();
            o4.o20(function() { "use strict"; o18.o60 = 1; }, o21, "Assigning to a property of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive in strict mode should throw a TypeError',
        o13: function() {
            var o18 = Symbol();
            o4.o20(function() { "use strict"; o18['a'+'b'] = 1; }, o21, "Assigning to a property of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to an index of a symbol primitive in strict mode should throw a TypeError',
        o13: function() {
            var o18 = Symbol();
            o4.o20(function() { "use strict"; o18[12] = 1; }, o21, "Assigning to an index of a symbol primitive should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive should be ignored',
        o13: function() {
            var o18 = Symbol();
            o18.o60 = 1;
            o4.o11(o18.o60, undefined);
        }
    },
    {
        name: 'Assigning to a property of a symbol primitive should be ignored',
        o13: function() {
            var o18 = Symbol();
            o18['a'+'b'] = 1;
            o4.o11(o18['ab'], undefined);
        }
    },
    {
        name: 'Assigning to an index of a symbol primitive should be ignored',
        o13: function() {
            var o18 = Symbol();
            o18[10086] = 1;
            o4.o11(o18[10086], undefined);
        }
    },
    {
        name: '[OS: Bug 4533235] JSON.stringify should ignore symbols (kangax)',
        o13: function() {
            var o61 = {o62: Symbol()};
            var o32 = Symbol("a");
            o61[Symbol()] = 1;
            var o63 = [Symbol()];

            o4.o11('{}', JSON.stringify(o61));
            o4.o11('[null]', JSON.stringify(o63));
            o4.o11(undefined, JSON.stringify(Symbol()));
            o4.o11(undefined, JSON.stringify(o32));
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

o64.o65(o12, { o66: o0.o67[0] != "summary" });
