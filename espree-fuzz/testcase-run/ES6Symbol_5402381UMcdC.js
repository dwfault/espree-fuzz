//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o52 = { value: 1 };
    var set = o3();
    var o3 = new RegExp("(ab)".repeat(o1), 'si-LK'); // g flag to trigger the vulnerable path
    var o4 = "ab".repeat(o1); // matches have to be at least size 2 to prevent interning
    var o5 = (o4 + "|").repeat(o2);
    try {
while (true) {
        var o6 = 0;
        var o7 = [];
        try {
o5.replace(o3, function() {
            try {
for (var o8 = 1; o8 < arguments.length-2; ++o8) {
                try {
if (typeof arguments[o8] !== 'string') {
                    try {
o9 = arguments[o8];
}catch(e){}
                    try {
throw "success";
}catch(e){}
                }
}catch(e){}
                try {
o7[o6++] = arguments[o8];
}catch(e){}  // root everything to force GC
            }
}catch(e){}
            try {
return "x";
}catch(e){}
        });
}catch(e){}
    }
}catch(e){}
};
try {
o0.__defineSetter__("something", function() {});
}catch(e){}

function o2(key) {
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
};
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
o2.o3('Pass');
}catch(e){}
