//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, write) {
    for (var o3 in o2) {
        if (o2[o3] == o1)
            return o3;
    }

    // Special case for ImplicitCallFlags
    if(o2.o4)
    {
        var flags = [];
        if(o1 & o2.o5) flags.push("None");
        if((o1 & o2.o6) != o2.o5) flags.push("ToPrimitive");
        if((o1 & o2.o4) != o2.o5) flags.push("Accessor");
        if((o1 & o2.o7) != o2.o5) flags.push("External");
        if((o1 & o2.o8) != o2.o5) flags.push("Exception");
        if(o1 == o2.o9) flags.push("All");
        if(o1 & o2.o10) flags.push("Dispose");

        return flags.join(" | ");
    }

    // Special case for ValueType - unset all but the most significant type bit, preserve the 'likely' bit, exclude the array
    // detail bits, and look it up again
    if(o2.hasOwnProperty("LikelyBit")) {
        var o11 = o2.o12 - 1;
        if(o1 & o2.o13)
            o1 &= ~(((1 << o2.o14) - 1) ^ ((1 << o2.o12) - 1))
        else
            o11 += o2.o15;

        for(var o16 = o11; o16 >= 0; --o16) {
            if(o1 & (1 << o16)) {
                var o17 = o1 & (~((1 << o16) - 1) | o2.o18);
                for (var o3 in o2) {
                    if (o2[o3] == o17)
                        return o3;
                }
                break;
            }
        }
    }

    return "ERROR: constant not found";
}

function o19(o20, o21) {
    o22.o23("Profile data for " + o21);

    var o24;
    try {
        o24 = Debug.o25(o20);
    }
    catch (o26) {
        o22.o23("No profile data found.");
        o22.o23("");
        o22.o23("");
        return;
    }

    if(o24.o27.length)
        o22.o23("Return type info:");
    for (var o16 = 0; o16 < o24.o27.length; ++o16) {
        o22.o23("    #" + o16 + ": "  +  o24.o27[o16] + " (" + o0(o24.o27[o16], o24.o28) + ")");
    }
    
    if (o24.o29.length)
        o22.o23("Elem info:");
    for (var o16 = 0; o16 < o24.o29.length; ++o16) {
        o22.o23("    #" + o16 + ": " + o24.o29[o16] + " (" + o0(o24.o29[o16], o24.o28) + ")");
    }

    if(o24.o30.length)
        o22.o23("Param info:")
    for (var o16 = 0; o16 < o24.o30.length; ++o16) {
        o22.o23("    #" + o16 + ": " + o24.o30[o16] + " (" + o0(o24.o30[o16], o24.o28) + ")");
    }

    o22.o23("Implicit call flags:");
    o22.o23("    #" + o16 + ": " + o24.o31 + " (" + o0(o24.o31, o24.o32) + ")");

    if(o24.o33.length)
        o22.o23("Loop implicit call flags:");
    for (var o16 = 0; o16 < o24.o33.length; ++o16) {
        o22.o23("    #" + o16 + ": "  +  o24.o33[o16] + " (" + o0(o24.o33[o16], o24.o32) + ")");
    }


    o22.o23("");
    o22.o23("");
}

function o34(o35) {
    return o35;
}
function o36(o35) {
    return o35;
}
function o37(o35) {
    return o35;
}
function o38(o35) {
    return o35;
}

function o39() {
    var o40 = o34("test") + o36(123) + o37(0.5) + o38({});
}

o39();
o19(o39, "test1");




o41(
    [1, 2, 3, 4, 5],
    [-0x80000000, 0x7fffffff],
    new Uint8Array(10),
    new Float64Array(10),
    new Int16Array(10),
    [0.3, 0.4, 0.5, 0.6, 0.7]
    );
o19(o41, "test2");


o41(
    [1, 2, 3.5, 4.2, 5],
    [0, 0x7fffffff],
    new Uint8Array(10),
    "a string",
    new Int16Array(10),
    [0.3, 0.4, 0.5, 0.6, 0.7]
    );
o19(o41, "test2 - second call");


function o47(o42, o43, o44, o45) {
    var o40 = 0;
    for (var o16 = 0; o16 < o42.o48.length; ++o16) {
        o40 += o42.o48[o16];
    }
    for (var o16 = 0; o16 < o43.o48.length; ++o16) {
        o40 += o43.o48[o16];
    }
    if (/* false */typeof (o44) === "blah") {
        o40 += o44.o48[o16];
    }
}

o47(
    { o48: new Uint32Array(10) },
    { o48: [null,,,,] },
    0
    );
o19(o47, "test3");

// Try manipulating the profile data.
var o24 = Debug.o25(o47);
o24.o30[0] = o24.o28.o49;
o24.o30[1] = o24.o28.o50;
o24.o30[2] = o24.o28.o51;
o24.o30[3] = o24.o28.o52;
o24.o29[2] = o24.o28.o53;
o24.o33[0] = o24.o32.o6;
o19(o47, "test3 - after writing profile data");


function o54(o42, o43, o44) {
    var o40 = o42 + o43 + o44;
}
o19(o54, "test4 - before call");
o54(
    "a string",
    5.3,
    3
    );
o19(o54, "test4");

o54(
    "a string",
    3,
    3
    );
o19(o54, "test4 - second call");


function o55(o42,o43) {
    var o56 = { valueOf: function () { return 7; } };
    var o57 = { get o3() { return 8; } };
    var o40 = 0;

    for (var o16 = 0; o16 < 5; ++o16) {
    }
    for (var o16 = 0; o16 < 5; ++o16) {
        o40 += o56;
    }
    for (var o16 = 0; o16 < 5; ++o16) {
        o40 += o57.o3;
    }
    for (var o16 = 0; o16 < 5; ++o16) {
        o40 += o56 + o57.o3;
    }
}
o55();
o19(o55, "test5");
