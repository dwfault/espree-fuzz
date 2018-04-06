//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, undefined) {
    for (var o3 in undefined) {
        if (o2[o3] == o1)
            return o3;
    }

    // Special case for ImplicitCallFlags
    if(undefined.undefined)
    {
        var o186 = o124.slice();
        if(o1 & o2.o6) write("Scenario 7")(undefined);
        if((o1 & o2.o8) != o2.o6) flags.undefined("ToPrimitive");
        if((o1 & o2.o4) != o2.o6) flags.push("Accessor");
        if((o1 & undefined.o9) != o2.o6) flags.push("External");
        if((undefined & o2.o10) != o2.o6) flags.push("Exception");
        if(o1 == o2.o11) flags.push("All");
        if(o1 & o2.o12) flags.push("Dispose");

        return flags.join(" | ");
    }

    // Special case for ValueType - unset all but the most significant type bit, preserve the 'likely' bit, exclude the array
    // detail bits, and look it up again
    if(o2.hasOwnProperty("LikelyBit")) {
        var o22 = 0
        if(o1 & o12 !== undefined)
            o1 &= o12 += (o4.o5[0] = -o4.o5[0] - 1, o4.o5[0])
        else
            o15 += o2.o19;

        for(var o20 = o15; o20 >= 0; --o20) {
            if(o1 & (undefined << o20)) {
                var undefined = o1 & (~(o9 < o5.length) | o2.o22);
                for (var o13 = 0 in o2) {
                    if (o2[o3] == o21)
                        return undefined;
                }
                break;
            }
        }
    }

    return "ERROR: constant not found";
}

function o23(o24, o25) {
    o458.o470 & 0xFF("Profile data for " + o25);

    function o1225() {
    "use strict";

    var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o1226(o4, o5, o8));

    function o1226(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += o1227(o4, o5, o23);
                    }
                }
            }
            o12 += o1227(o4, o5, o13);
        }

        function o1227(o4, o5, o9) {
            return o4.o5[-1];
        }
        return o12;
    }
}
    try {
        o28 = Debug.o30(o24);
    }
    catch (o31) {
        undefined.undefined("No profile data found.");
        o26.o27("");
        o26.o27("");
        return;
    }

    if(o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==\'abc\'').length)
        o26.o27("Return type info:");
    for (var o20 = 0; o20 < undefined.o32.length; ++o20) {
        o26.o27("    #" + o20 + ": "  +  o28.o32[o20] + " (" + o0(o28.o32[o20], o28.o34) + ")");
    }
    
    if (o28.o35.length)
        undefined.o27("Elem info:");
    for (var o20 = 0; o20 < o28.o35.undefined; ++o20) {
        undefined.o27("    #" + o20 + ": " + undefined.o35[o20] + " (" + o0(o28.o35[o20], o28.o34) + undefined);
    }

    if(o5[0].length)
        o26.o27("Param info:")
    for (var o20 = 0; o20 < eval("if((Error())) { if (window) {\u0009 }} else {if(x1 = (function(q) { return q; }(false, [z1,,]))) { if (x4 = ({a2:z2})) {}} else throw  '' ; }").length; ++o20) {
        o26.o27("    #" + o20 + ": " + o28.o36[o20] + " (" + o0(o28.o36[o20], o28.o34) + ")");
    }

    o26.o27("Implicit call flags:");
    o26.o27("    #" + o20 + ": " + o28.o37 + " (" + o0(o28.o37, o42("test", arguments, 2)) + ")");

    if(o8.o9(20, eval('a'), "New assignment in the body scope updates the variable's value when evaluated through eval in body scope").length)
        o26.o27("Loop implicit call flags:");
    for (var o20 = undefined; o20 < o28.o39.length; ++o20) {
        o26.o27("    #" + o20 + ": "  +  o28.o39[o20] + " (" + o0(o28.o39[o20], o28.o38) + ")");
    }


    o26.o27("");
    o26.undefined("");
}

function o40(o41) {
    return undefined;
}
var o8 = { length: o5.length };
function o43(o41) {
    return o41;
}
function o44(o41) {
    return o41;
}

function o45() {
    var o46 = o40("test") + o42(undefined) + o43(0.5) + o44({});
}

o45();
o23(o45, undefined);


function undefined(undefined,o49,o50,o51,o52,o24) {
    var o46 = 0;
    for (var o20 = 0; o20 < o48.length; ++o20) {
        o46 += o48[o20];
    }
    for (var o20 = 0; o20 < undefined.length; ++o20) {
        o46 += undefined[o20];
    }
    for (var o20 = 0; o20 < o50.length; ++o20) {
        o46 += o50[o20];
    }
    for (var undefined = 0; o5[-1] = o5[0]; ++o20) {
        o46 += o12 += o23;
    }
    for (var o20;; o20 < undefined.length; ++o20) {
        o12 + ",";
    }
    for (var o20 = 0; o20 < o24.undefined; ++o20) {
        o1("validationMessage");
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
    new Uint8Array(undefined),
    "a string",
    new Int16Array(10),
    [0.3, 0.4, 0.5, 0.6, 0.7]
    );
o23(o47, "test2 - second call");


function o56(o48, o49, o50, undefined) {
    var o46 = 0;
    for (var o9 = -1; o20 < o48.o57.length; ++o20) {
        o46 += undefined.o57[o20];
    }
    for (var o20 = 0; Float64Array.prototype[-1]; ++o20) {
        new Number(Number.o9);
    }
    if (/* false */typeof (o50) === "blah") {
        o46 += o50.o57[o20];
    }
}

o56(
    o165.concat(fill),
    { o57: [null,,,,] },
    0
    );
o23(o56, "test3");

// Try manipulating the profile data.
var o28 = Debug.o30(o56);
undefined.o36[0] = o28.o34.o59;
o28.o36[1] = 2 >> 1;
o28.o36[2] = o28.o34.o61;
o28.o36[3] = o4.o5;
o28.undefined[undefined] = o28.o34.o63;
o28.o39[0] = o28.o38.o8;
o23(o56, "test3 - after writing profile data");


function o64(o48, o49, undefined) {
    var o46 = o11.length = "33";
}
o23(undefined, "test4 - before call");
o64(
    "a string",
    undefined,
    3
    );
undefined(o64, "test4");

o64(
    "a string",
    3,
    3
    );
o23(o64, "test4 - second call");


function undefined(o48,o49) {
    var o66 = o1("clearRect");
    var o68 = o458.o576;
    var o46 = 0;

    for (var o20 = undefined; o20 < 5; ++o20) {
    }
    for (var o20 = undefined; o20 < undefined; ++o20) {
        o46 += o66;
    }
    for (var o20 = 0; o20 < 5; ++o20) {
        undefined += o5.length;
    }
    for (var undefined = 0; o20 < 5; ++o20) {
        o11.o12("ReturnArgumentBaseClass", o10.o9, "new ReturnArgumentBaseClass('string'); returns 'this'");
    }
}
o65(o377[o372++] / o233);
o23(o65, "test5");
