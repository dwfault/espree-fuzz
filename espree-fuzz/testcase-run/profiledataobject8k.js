//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
    try {
for (var o3 in o2) {
        try {
if (o2[o3] == o1)
            try {
return o3;
}catch(e){}
}catch(e){}
    }
}catch(e){}

    // Special case for ImplicitCallFlags
    try {
if(o2.o4)
    {
        var o479 = new o474.o695(o502, name, o503, o480);
        try try { {} } catch(e) {}catch(e){}
        try {
if((o1 & o2.o6) != []) try {
flags.push("ToPrimitive");
}catch({
        name: "parseFloat parses floats in a given string -- same as the global object's parseFloat",
        o3: function () {
            // Just do a small sample of tests since we know the implementation of parseFloat is the exact same as the global parseFloat function
            try {
o4.o9(0, Number.parseFloat("0"), "Testing sample: 0");
}catch(e){}
            try {
o4.o9(-1, Number.parseFloat("-1"), "Testing sample: -1");
}catch(e){}
            try {
o4.o9(3.14159, Number.parseFloat("3.14159"), "Testing sample: 3.14159");
}catch(e){}

            try {
o4.o9(parseFloat, Number.parseFloat, "global parseFloat and Number.parseFloat are the same function object");
}catch(e){}
        }
    }){}
}catch(e){}
        try {
if(o41.call()) try {
flags.push("Accessor");
}catch(e){}
}catch(e){}
        try {
if((o1 & o2.o7) != o2.o5) try {
flags.push("External");
}catch(e){}
}catch(e){}
        try {
if((o1 & o2.o8) != o2.o5) try {
flags.push("Exception");
}catch(e){}
}catch(e){}
        try {
if(o1 == o2.o9) try {
flags.push("All");
}catch(e){}
}catch(e){}
        try {
if(o1 & o2.o10) try {
flags.push("Dispose");
}catch(e){}
}catch(e){}

        try {
return flags.join(" | ");
}catch(e){}
    }
}catch(e){}

    // Special case for ValueType - unset all but the most significant type bit, preserve the 'likely' bit, exclude the array
    // detail bits, and look it up again
    try {
if(o2.hasOwnProperty("LikelyBit")) {
        var o11 = o2.o12 - 1;
        try {
if(o1 & o2.o13)
            try {
o1 &= ~(((1 << o2.o14) - 1) ^ ((1 << o2.o12) - 1))
}catch(e){}
        else
            try {
o11 += o2.o15;
}catch(e){}
}catch(e){}

        try {
for(var o16 = o11; o16 >= 0; --o16) {
            try {
if(o1 & (1 << o16)) {
                var o17 = o1 & (~((1 << o16) - 1) | o2.o18);
                try {
for (var o3 in o2) {
                    try {
if (o2[o3] == o17)
                        try {
return o3;
}catch(e){}
}catch(e){}
                }
}catch(e){}
                try {
break;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}

    try {
return "ERROR: constant not found";
}catch(e){}
}

var o10 = o3.concat(o4)

function o34(o35) {
    try {
return o35;
}catch(e){}
}
function o36(o35) {
    try {
return o35;
}catch(e){}
}
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

function o39() {
    var o40 = o34("test") + o36(123) + o37(0.5) + o38({});
}

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
