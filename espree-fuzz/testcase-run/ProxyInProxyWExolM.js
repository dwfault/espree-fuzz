//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
function e() {
    var o1 = {
        name: "Restricted properties of class with 'caller' static method",
        o20: function () {
            var o3 = class o23 {
                static caller() { try {
return 42;
}catch(e){} }
            };

            try {
o7.o11(o3.hasOwnProperty('caller'), "Class does has own property 'caller'")
}catch(e){}
            try {
o7.o14(o3.hasOwnProperty('arguments'), "Class does not report that it has own property 'arguments'")
}catch(e){}

            try {
o7.o9('{"writable":true,"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'caller')), "Class does not have 'caller' own property")
}catch(e){}
            try {
o7.o9(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'arguments')), "Class does not have 'arguments' own property");
}catch(e){}
            try {
o7.o9('["caller","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(o3).sort()), "Class does not have 'caller' and 'arguments' own properties");
}catch(e){}

            try {
o7.o9(42, o3.caller(), "Accessing the 'caller' property is not restricted");
}catch(e){}
            try {
o7.o16(function() { try {
o3.arguments;
}catch(e){} }, o17, "Class throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}
        }
    };
    var o845 = this.o568 + this.o538;

    var o4 = o1092 = o1123 >>> 3;

    try {
print('***Testing Object.getOwnPropertyNames()');
}catch(e){}
    try {
print(Object.getOwnPropertyNames(o4));
}catch(e){}
    try {
print('***Testing Object.keys()');
}catch(e){}
    try {
print(Object.keys(o4));
}catch(e){}
    try {
print('***Testing Object.getOwnPropertySymbols()');
}catch(o306){}
    try {
print(Object.getOwnPropertySymbols(o4).length);
}catch(e){}

    try {
print('***Testing Object.freeze()');
}catch(e){}
    try {
try{
        try {
Object.freeze(o4);
}catch(e){}
        try {
print('Object.freeze should fail because underlying OwnPropertyKeys should fail since target becomes non-extensible');
}catch(e){}
    } catch (o5) {
        try {
if (!(o5 instanceof o6)) {
            try {
o7('incorrect instanceof Error' + o5);
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}

// Verifies that we don't call GetPropertyDescriptor of target for Object.keys unnecessarily if we throw TypeERROR before
function o8() {
    var o1 = this;
    try {
try { o1("BLEND_DST_RGB"); } catch(e) {}
}catch(e){}
    var o99 = o116.substr(o82 + o246, o85);


    var o4 = new Proxy(o2, Float64Array.prototype.hasOwnProperty(name));

    try {
print('***Testing Object.keys()');
}catch(e){}
    try {
try{
        try {
print(Object.keys(o4));
}catch(e){}
        try {
print('Should throw TypeError because ownKeys doesnt return non-configurable key.');
}catch(e){}
    } catch (o5) {
        try {
if (!(o5 instanceof o6)) {
            try {
print('incorrect instanceof Error');
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}

var o52 = { value: 2, writable: false }

function o238(o231, o234) {
    var o239 = 0;
    try {
for (var o240 = 0; o240 < o231.length; ++o240) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
        var o232 = o231.charCodeAt(o240); // possibly a lead surrogate
        try {
if (o232 >= 0xD800 && o232 <= 0xDFFF) {
            var o241 = o231.charCodeAt(++o240);
            try {
o232 = 0x10000 + ((o232 & 0x3FF) << 10) | (o241 & 0x3FF);
}catch(e){}
        }
}catch(e){}
        try {
o202[(((o234) + (o239 * 4)) >> 2)] = o232;
}catch(e){}
        try {
++o239;
}catch(e){}
    }
}catch(e){}
    // Null-terminate the pointer to the HEAP.
    try {
o202[(((o234) + (o239 * 4)) >> 2)] = 0;
}catch(e){}
}

try {
o0();
}catch(e){}
try {
o8();
}catch(e){}
try {
o9();
}catch(e){}
try {
o16();
}catch(e){}
