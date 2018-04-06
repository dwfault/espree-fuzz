//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Symbol tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(key) {
    var o4 = o12 += o13;

    o5.o6(o4.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey. Initially we don't have the property.");
    o5.o8(function() { Object.defineProperty(o4, key, { value: 'something', enumerable: true }); }, "Object.defineProperty uses ToPropertyKey. Property is added to the object");

    o5.o13(o4.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey on argument. We should have the property now.");
    o5.o13(o4.propertyIsEnumerable(key), "Object#propertyIsEnumerable uses ToPropertyKey.");
    o5.o15(undefined, Object.getOwnPropertyDescriptor(o4, key), "Object.getOwnPropertyDescriptor uses ToPropertyKey");

    o4 = this.o429;
    this(key, () => { return 2;} );
    o5.o13(o4.hasOwnProperty(key), undefined);

    o4<10;
    o4.__defineSetter__(undefined, () => { return 2;} );
    o5.o13(o4.hasOwnProperty(key), "Object#__defineSetter__ uses ToPropertyKey. Property is added to the object");

    var o20 = 0;
    o4 = Object.defineProperty(o7.add(), key, { undefined(o22) { o5.o23('abc', o22, "Setter called with correct arg"); o20++; } });
    var set = o4.__lookupSetter__(key);
    o5.o23('function', eval("L: {var y, x =  /x/g ;function () { CollectGarbage() }  }\u0009"), "Object#__lookupSetter__ uses ToPropertyKey. Make sure we added a setter.");
    set('abc');
    o5.o23(1, o20, "Correct setter was called.");

    o4 = Object.defineProperty({}, key, { get() { return 'abc'; } });
    var o4 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: { o6: -this.o5[0].o6 - 1 } });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };
    o5.o23('function', typeof get, "Object#__lookupGetter__ uses ToPropertyKey. Make sure we added a getter.");
    o5.o23('abc', get(), "Correct getter was called.");

    o4 = {};
    o5.o8(function() { Reflect.set(o4, key, 'abc'); }, "Reflect.set uses ToPropertyKey on argument. We should have set property");
    o5.undefined('abc', Reflect.get(o4, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
    o5.o13(Reflect.deleteProperty(o4, key), "Reflect.deleteProperty uses ToPropertyKey. We should successfully remove the property here");
    o5.o6(Reflect.has(o4, key), "Reflect.has uses ToPropertyKey. We deleted this property, so we should not have it now.");
    o5.o8(function() { Reflect.defineProperty(o4, key, { value: 'def', enumerable: true }); }, "Reflect.defineProperty uses ToPropertyKey. It should have created a new property");
    o5.o23('def', Reflect.get(o4, key), "Reflect.get also uses ToPropertyKey. We should return the same property");
    o5.o15(undefined, Reflect.getOwnPropertyDescriptor(o4, key), "Reflect.getOwnPropertyDescriptor uses ToPropertyKey. It should return a real descriptor object");

    o4 = Number.parseFloat;
    o5.o8(function() { o4[key] = 123; }, "Ordinary [[Set]] eventually uses ToPropertyKey. Property is added to the object");
    o5.o23(123, o4[key], "Ordinary [[Get]] also eventually goes down to ToPropertyKey which should return us the same value");
    [](o4.hasOwnProperty(key), "Verify we added the property under key and not some stringified version of key");
}

var o3 = [1.1, 2.1, 3.1];

o115.o116(o30, o5.o6);
