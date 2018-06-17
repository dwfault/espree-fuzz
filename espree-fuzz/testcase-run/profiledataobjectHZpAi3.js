//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o29 = Math.o30

function o19(o20, e) {
    try {
o22.o23("Profile data for " + o21);
}catch(e){}

    var o24;
    try {
try {
        try {
o24 = Debug.o25(o20);
}catch(e){}
    }
    catch (o26) {
        try {
o22.o23("No profile data found.");
}catch(e){}
        try {
o22.o23("");
}catch(e){}
        try {
o22.o23("");
}catch(e){}
        try {
return;
}catch(e){}
    }
}catch(e){}

    try {
if(o474.o756(o31, o533, o534, true).o27.length)
        try {
o22.o23("Return type info:");
}catch({
        name: "__defineGetter__ and __defineSetter__ called on the same property are additive; they do not clobber previous accessor",
        o5: function () {
            var o6 = { };

            try {
o6.__defineGetter__("a", function () { try {
return 1;
}catch(e){} });
}catch(e){}
            try {
o6.__defineSetter__("a", function (o13) { try {
throw new Error(2);
}catch(e){} });
}catch(e){}

            try {
o6.__defineSetter__("b", function (o13) { try {
throw new Error(3);
}catch(e){} });
}catch(e){}
            try {
o6.__defineGetter__("b", function () { try {
return 4;
}catch(e){} });
}catch(e){}

            try {
o8.o9(o6.o10 === 1, "getter in 'a' should return 1");
}catch(e){}
            try {
o8.o9((function () { try {
try { try {
o6.o10 = 0;
}catch(e){} } catch (o24) { try {
return o24.o25;
}catch(e){} }
}catch(e){} try {
return null;
}catch(e){} })() === "2", "setter in 'a' should throw a new Error with number equal to 2");
}catch(e){}
            try {
o8.o9((function () { try {
try { try {
o6.o18 = 0;
}catch(e){} } catch (o24) { try {
return o24.o25;
}catch(e){} }
}catch(e){} try {
return null;
}catch(e){} })() === "3", "setter in 'b' should throw a new Error with number equal to 3");
}catch(e){}
            try {
o8.o9(o6.o18 === 4, "getter in 'b' should return 4");
}catch(e){}
        }
    }){}
}catch(e){}
    try {
for (var o142 = {
    o143: o90.o143,
    o144: o90.o144,
    o145: o90.o145,
    o146: o90.o146,
    o147: o90.o147,
    o148: o90.o148,
    o149: o90.o149,
    o150: o90.o150,
    o151 : o106(o90.o152(o90.o153)),
    o154: o106(o90.o152(o90.o155)),
    o156: o106(o90.o152(o90.o157)),
    o158: o106(o90.o152(o90.o159))
  }; o16 < o24.o27.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": "  +  o24.o27[o16] + " (" + o0(o24.o27[o16], o24.o28) + ")");
}catch(e){}
    }
}catch(e){}
    
    try {
if (o24.o29.length)
        try {
o22.o23("Elem info:");
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o29.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": " + o24.o29[o16] + " (" + o0(o24.o29[o16], o24.o28) + ")");
}catch(e){}
    }
}catch(e){}

    try {
if(o24.o30.length)
        try {
o22.o23("Param info:")
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o30.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": " + o24.o30[o16] + " (" + o0(o24.o30[o16], o24.o28) + ")");
}catch(e){}
    }
}catch(e){}

    try {
o22.o23("Implicit call flags:");
}catch(e){}
    try {
o22.o23("    #" + o16 + ": " + o24.o31 + " (" + o0(o24.o31, o24.o32) + ")");
}catch(e){}

    try {
if(o24.o33.length)
        try {
o22.o23("Loop implicit call flags:");
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o33.length; ++o16) {
        try {
o22.o23("    #" + o16 + ": "  +  o24.o33[o16] + " (" + o0(o24.o33[o16], o24.o32) + ")");
}catch(e){}
    }
}catch(e){}


    try {
o22.o23("");
}catch(e){}
    try {
o22.o23("");
}catch(e){}
}

function o34(o35) {
    try {
return o35;
}catch(e){}
}
var o10 = o0.o4()
function o37(o35) {
    try {
return o35;
}catch(e){}
}
function o38(o35) {
    try {
return o35;
}catch(e){}
}

var o11 = o6()

try {
o39();
}catch(e){}
try {
o19(o39, "test1");
}catch(e){}


function o41(o42,o43,o44,o45,o46,o20) {
    var o40 = 0;
    try {
for (var o16 = 0; o16 < o42.length; ++o16) {
        try {
o40 += o42[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o43.length; ++o16) {
        try {
o40 += o43[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o44.length; ++o16) {
        try {
o40 += o44[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o45.length; ++o16) {
        try {
o40 += o45[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o46.length; ++o16) {
        try {
o40 += o46[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o20.length; ++o16) {
        try {
o40 += o20[o16];
}catch(e){}
    }
}catch(e){}
}

try {
o41(
    [1, 2, 3, 4, 5],
    [-0x80000000, 0x7fffffff],
    new Uint8Array(10),
    new Float64Array(10),
    new Int16Array(10),
    [0.3, 0.4, 0.5, 0.6, 0.7]
    );
}catch(e){}
try {
o19(o41, "test2");
}catch(e){}


try {
o41(
    [1, 2, 3.5, 4.2, 5],
    [0, 0x7fffffff],
    new Uint8Array(10),
    "a string",
    new Int16Array(10),
    [0.3, 0.4, 0.5, 0.6, 0.7]
    );
}catch(e){}
try {
o19(o41, "test2 - second call");
}catch(e){}


function o47(o42, o43, o44, o45) {
    var o40 = 0;
    try {
for (var o16 = 0; o16 < o42.o48.length; ++o16) {
        try {
o40 += o42.o48[o16];
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < o43.o48.length; ++o16) {
        try {
o40 += o43.o48[o16];
}catch(e){}
    }
}catch(e){}
    try {
if (/* false */typeof (o44) === "blah") {
        try {
o40 += o44.o48[o16];
}catch(e){}
    }
}catch(e){}
}

try {
o47(
    { o48: new Uint32Array(10) },
    { o48: [null,,,,] },
    0
    );
}catch(e){}
try {
o19(o47, "test3");
}catch(e){}

// Try manipulating the profile data.
var o24 = Debug.o25(o47);
try {
o24.o30[0] = o24.o28.o49;
}catch(e){}
try {
o24.o30[1] = o24.o28.o50;
}catch(e){}
try {
o24.o30[2] = o24.o28.o51;
}catch(e){}
try {
o24.o30[3] = o24.o28.o52;
}catch(e){}
try {
o24.o29[2] = o24.o28.o53;
}catch(e){}
try {
o24.o33[0] = o24.o32.o6;
}catch(e){}
try {
o19(o47, "test3 - after writing profile data");
}catch(e){}


function o54(o42, o43, o44) {
    var o40 = o42 + o43 + o44;
}
try {
o19(o54, "test4 - before call");
}catch(e){}
try {
o54(
    "a string",
    5.3,
    3
    );
}catch(e){}
try {
o19(o54, "test4");
}catch(e){}

try {
o54(
    "a string",
    3,
    3
    );
}catch(e){}
try {
o19(o54, "test4 - second call");
}catch(e){}


function o55(o42,o43) {
    var o56 = { valueOf: function () { try {
return 7;
}catch(e){} } };
    var o57 = { get o3() { try {
return 8;
}catch(e){} } };
    var o40 = 0;

    try {
for (var o16 = 0; o16 < 5; ++o16) {
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < 5; ++o16) {
        try {
o40 += o56;
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < 5; ++o16) {
        try {
o40 += o57.o3;
}catch(e){}
    }
}catch(e){}
    try {
for (var o16 = 0; o16 < 5; ++o16) {
        try {
o40 += o56 + o57.o3;
}catch(e){}
    }
}catch(e){}
}
try {
o55();
}catch(e){}
try {
o19(o55, "test5");
}catch(e){}
