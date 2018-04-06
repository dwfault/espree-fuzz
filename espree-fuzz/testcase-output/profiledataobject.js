//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
    for (var o3 in o2) {
        if (o2[o3] == o1)
            return o3;
    }

    // Special case for ImplicitCallFlags
    if(o2.o4)
    {
        var flags = [];
        if(o1 & o2.o6) flags.push("None");
        if((o1 & o2.o8) != o2.o6) flags.push("ToPrimitive");
        if((o1 & o2.o4) != o2.o6) flags.push("Accessor");
        if((o1 & o2.o9) != o2.o6) flags.push("External");
        if((o1 & o2.o10) != o2.o6) flags.push("Exception");
        if(o1 == o2.o11) flags.push("All");
        if(o1 & o2.o12) flags.push("Dispose");

        return flags.join(" | ");
    }

    // Special case for ValueType - unset all but the most significant type bit, preserve the 'likely' bit, exclude the array
    // detail bits, and look it up again
    if(o2.hasOwnProperty("LikelyBit")) {
        var o15 = o2.o16 - 1;
        if(o1 & o2.o17)
            o1 &= ~(((1 << o2.o18) - 1) ^ ((1 << o2.o16) - 1))
        else
            o15 += o2.o19;

        for(var o20 = o15; o20 >= 0; --o20) {
            if(o1 & (1 << o20)) {
                var o21 = o1 & (~((1 << o20) - 1) | o2.o22);
                for (var o3 in o2) {
                    if (o2[o3] == o21)
                        return o3;
                }
                break;
            }
        }
    }

    return "ERROR: constant not found";
}

function o23(o24, o25) {
    o26.o27("Profile data for " + o25);

    var o28;
    try {
        o28 = Debug.o30(o24);
    }
    catch (o31) {
        o26.o27("No profile data found.");
        o26.o27("");
        o26.o27("");
        return;
    }

    if(o28.o32.length)
        o26.o27("Return type info:");
    for (var o20 = 0; o20 < o28.o32.length; ++o20) {
        o26.o27("    #" + o20 + ": "  +  o28.o32[o20] + " (" + o0(o28.o32[o20], o28.o34) + ")");
    }
    
    if (o28.o35.length)
        o26.o27("Elem info:");
    for (var o20 = 0; o20 < o28.o35.length; ++o20) {
        o26.o27("    #" + o20 + ": " + o28.o35[o20] + " (" + o0(o28.o35[o20], o28.o34) + ")");
    }

    if(o28.o36.length)
        o26.o27("Param info:")
    for (var o20 = 0; o20 < o28.o36.length; ++o20) {
        o26.o27("    #" + o20 + ": " + o28.o36[o20] + " (" + o0(o28.o36[o20], o28.o34) + ")");
    }

    o26.o27("Implicit call flags:");
    o26.o27("    #" + o20 + ": " + o28.o37 + " (" + o0(o28.o37, o28.o38) + ")");

    if(o28.o39.length)
        o26.o27("Loop implicit call flags:");
    for (var o20 = 0; o20 < o28.o39.length; ++o20) {
        o26.o27("    #" + o20 + ": "  +  o28.o39[o20] + " (" + o0(o28.o39[o20], o28.o38) + ")");
    }


    o26.o27("");
    o26.o27("");
}

function o40(o41) {
    return o41;
}
function o42(o41) {
    return o41;
}
function o43(o41) {
    return o41;
}
function o44(o41) {
    return o41;
}

function o45() {
    var o46 = o40("test") + o42(123) + o43(0.5) + o44({});
}

o45();
o23(o45, "test1");


function o47(o48,o49,o50,o51,o52,o24) {
    var o46 = 0;
    for (var o20 = 0; o20 < o48.length; ++o20) {
        o46 += o48[o20];
    }
    for (var o20 = 0; o20 < o49.length; ++o20) {
        o46 += o49[o20];
    }
    for (var o20 = 0; o20 < o50.length; ++o20) {
        o46 += o50[o20];
    }
    for (var o20 = 0; o20 < o51.length; ++o20) {
        o46 += o51[o20];
    }
    for (var o20 = 0; o20 < o52.length; ++o20) {
        o46 += o52[o20];
    }
    for (var o20 = 0; o20 < o24.length; ++o20) {
        o46 += o24[o20];
    }
}

o47(
    [1, 2, 3, 4, 5],
    [-0x80000000, 0x7fffffff],
    new Uint8Array(10),
    new Float64Array(10),
    new Int16Array(10),
    [0.3, 0.4, 0.5, 0.6, 0.7]
    );
o23(o47, "test2");


o47(
    [1, 2, 3.5, 4.2, 5],
    [0, 0x7fffffff],
    new Uint8Array(10),
    "a string",
    new Int16Array(10),
    [0.3, 0.4, 0.5, 0.6, 0.7]
    );
o23(o47, "test2 - second call");


function o56(o48, o49, o50, o51) {
    var o46 = 0;
    for (var o20 = 0; o20 < o48.o57.length; ++o20) {
        o46 += o48.o57[o20];
    }
    for (var o20 = 0; o20 < o49.o57.length; ++o20) {
        o46 += o49.o57[o20];
    }
    if (/* false */typeof (o50) === "blah") {
        o46 += o50.o57[o20];
    }
}

o56(
    { o57: new Uint32Array(10) },
    { o57: [null,,,,] },
    0
    );
o23(o56, "test3");

// Try manipulating the profile data.
var o28 = Debug.o30(o56);
o28.o36[0] = o28.o34.o59;
o28.o36[1] = o28.o34.o60;
o28.o36[2] = o28.o34.o61;
o28.o36[3] = o28.o34.o62;
o28.o35[2] = o28.o34.o63;
o28.o39[0] = o28.o38.o8;
o23(o56, "test3 - after writing profile data");


function o64(o48, o49, o50) {
    var o46 = o48 + o49 + o50;
}
o23(o64, "test4 - before call");
o64(
    "a string",
    5.3,
    3
    );
o23(o64, "test4");

o64(
    "a string",
    3,
    3
    );
o23(o64, "test4 - second call");


function o65(o48,o49) {
    var o66 = { valueOf: function () { return 7; } };
    var o68 = { get o3() { return 8; } };
    var o46 = 0;

    for (var o20 = 0; o20 < 5; ++o20) {
    }
    for (var o20 = 0; o20 < 5; ++o20) {
        o46 += o66;
    }
    for (var o20 = 0; o20 < 5; ++o20) {
        o46 += o68.o3;
    }
    for (var o20 = 0; o20 < 5; ++o20) {
        o46 += o66 + o68.o3;
    }
}
o65();
o23(o65, "test5");
