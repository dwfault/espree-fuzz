//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Symbol tests -- verifies the API shape and basic functionality

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

function o2(key) {
    var index = 0;

    try {
o4.o5(o3.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey. Initially we don't have the property.");
}catch(o43){}
    try {
o4.o6(function() { try try { o9(29, Math.clz32, 0x00000004, "29 leading zero bits in the uint32 value 0x00000004"); } catch(e) {}catch(e){} }, "Object.defineProperty uses ToPropertyKey. Property is added to the object");
}catch(e){}

    try {
o66.o7(o3.hasOwnProperty(key), "Object#hasOwnProperty uses ToPropertyKey on argument. We should have the property now.");
}catch(e){}
    try {
this.o428(o3.propertyIsEnumerable(key), "Object#propertyIsEnumerable uses ToPropertyKey.");
}catch(e){}
    try {
o4.o8(undefined, Object.getOwnPropertyDescriptor(o3, key), "Object.getOwnPropertyDescriptor uses ToPropertyKey");
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

var o971 = {
                    o972: false,
                    o973: false
                };

try {
o62.o63(o12, { o64: o0.o65[0] != "summary" });
}catch(e){}
