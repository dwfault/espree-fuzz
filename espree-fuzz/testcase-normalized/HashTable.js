//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
var o1 = false;
var o2 = 5;
var o3 = 1 << o2;

function o4() {
    var o5 = new Array(); // array so that we can transition its type handler to an ES5 array type handler
    var o7 = new Array(o3);
    o5.o8 = function (o9) {
        return Math.abs(o9) & (o3 - 1);
    };
    o5.add = function (o9) {
        var o13 = this.o8(o9);
        if(o7[o13] !== undefined) {
            // Delete up to 4 used elements to make room
            for(var o15 = o13; o15 < o13 + 4 && o15 < o3; ++o15) {
                var o16 = o7[o15];
                if(o16 === undefined)
                    continue;
                var o17 = "h" + o16;
                o18(o16, this[o17]);
                o7[o15] = undefined;
                delete this[o17];
            }
        }
        o7[o13] = o9;
        this["h" + o9] = o9;
    };
    o5.o19 = function () {
        for(var o9 = 0; o9 < o3; ++o9) {
            var o16 = o7[o9];
            if(o16 !== undefined)
                o18(o16, this["h" + o16]);
        }
        for(var o17 in this) {
            if(o17[0] !== "h")
                continue;
            o18(o17, "h" + o7[this.o8(this[o17])]);
        }
    };
    return o5;
}

function o20(o5, o21) {
    for(var o9 = 0; o21 === 0 || o9 !== o21; o9 = (o9 + 1) | 0) {
        for(var o15 = o9; o15 !== (o9 + 4) | 0; o15 = (o15 + 1) | 0)
            o5.add(o15);
        if(!(o9 & 0xffff) && o1)
            o22.o23(o9);
    }
    o5.o19();
}

var o5 = o4();
o20(o5, o1 ? 0 : 1024);

// Transition to a DictionaryTypeHandler
Object.defineProperty(
    o5,
    "foo",
    { configurable: true, enumerable: true, get: function () { }, set: function (o30) { } });
o20(o5, 1024);

// Transition to an ES5ArrayTypeHandler
Object.defineProperty(
    o5,
    "0",
    { configurable: true, writable: false, enumerable: true });
o20(o5, 1024);

if(!o0)
    o22.o23("pass");

function o18(o32, o33) {
    if(o32 === o33)
        return;
    o0 = true;
    o22.o23("Expected: " + o32 + ", Actual: " + o33);
}
