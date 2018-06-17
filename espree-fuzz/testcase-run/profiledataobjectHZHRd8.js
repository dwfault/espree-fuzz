//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o133(o1, o2) {
    try {
for (var o635 = {
    o636: false,
    o637: function () {
        try {
o635.o636 = !!o17.o638.match(/^win/);
}catch(e){}
    },
    o515: function (o515) {
        try {
o73(o16);
}catch(e){}
        try {
return o635.o516(null, '/', o635.o639(o515.o640.o604), 0);
}catch(e){}
    },
    o516: function (o517, name, o518, o486) {
        try {
if (!o489.o538(o518) && !o489.o540(o518) && !o489.o542(o518)) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        var o494 = o489.o516(o517, name, o518);
        try {
o494.o523 = o635.o523;
}catch(e){}
        try {
o494.o491 = o635.o491;
}catch(e){}
        try {
return o494;
}catch(e){}
    },
    o639: function (o31) {
        var o609;
        try {
try {
            try {
o609 = o641.o642(o31);
}catch(e){}
            try {
if (o635.o636) {
                // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
                // propagate write bits to execute bits.
                try {
o609.o518 = o609.o518 | ((o609.o518 & 146) >> 1);
}catch(e){}
            }
}catch(e){}
        } catch (o189) {
            try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
            try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
        }
}catch(e){}
        try {
return o609.o518;
}catch(e){}
    },
    o643: function (o494) {
        var o249 = [];
        try {
while (o494.o517 !== o494) {
            try {
o249.push(o494.name);
}catch(e){}
            try {
o494 = o494.o517;
}catch(e){}
        }
}catch(e){}
        try {
o249.push(o494.o515.o640.o604);
}catch(e){}
        try {
o249.reverse();
}catch(e){}
        try {
return o605.join.apply(null, o249);
}catch(e){}
    },
    o644: {
        0: "r",
        1: "r+",
        2: "r+",
        64: "r",
        65: "r+",
        66: "r+",
        129: "rx+",
        193: "rx+",
        514: "w+",
        577: "w",
        578: "w+",
        705: "wx",
        706: "wx+",
        1024: "a",
        1025: "a",
        1026: "a+",
        1089: "a",
        1090: "a+",
        1153: "ax",
        1154: "ax+",
        1217: "ax",
        1218: "ax+",
        4096: "rs",
        4098: "rs+"
    },
    o645: function (flags) {
        try {
if (flags in o635.o644) {
            try {
return o635.o644[flags];
}catch(e){}
        } else {
            try {
return flags;
}catch(e){}
        }
}catch(e){}
    },
    o523: {
        o522: function (o494) {
            var o31 = o635.o643(o494);
            var o609;
            try {
try {
                try {
o609 = o641.o642(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
            // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
            // See http://support.microsoft.com/kb/140365
            try {
if (o635.o636 && !o609.o553) {
                try {
o609.o553 = 4096;
}catch(e){}
            }
}catch(e){}
            try {
if (o635.o636 && !o609.o554) {
                try {
o609.o554 = (o609.o85 + o609.o553 - 1) / o609.o553 | 0;
}catch(e){}
            }
}catch(e){}
            try {
return {
                o486: o609.o486,
                o546: o609.o546,
                o518: o609.o518,
                o547: o609.o547,
                o548: o609.o548,
                o549: o609.o549,
                o495: o609.o495,
                o85: o609.o85,
                o550: o609.o550,
                o551: o609.o551,
                o552: o609.o552,
                o553: o609.o553,
                o554: o609.o554
            };
}catch(e){}
        },
        o524: function (o494, o545) {
            var o31 = o635.o643(o494);
            try {
try {
                try {
if (o545.o518 !== undefined) {
                    try {
o641.o646(o31, o545.o518);
}catch(e){}
                    // update the common node structure mode as well
                    try {
o494.o518 = o545.o518;
}catch(e){}
                }
}catch(e){}
                try {
if (o545.o504 !== undefined) {
                    var o647 = new Date(o545.o504);
                    try {
o641.o648(o31, o647, o647);
}catch(e){}
                }
}catch(e){}
                try {
if (o545.o85 !== undefined) {
                    try {
o641.o649(o31, o545.o85);
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o525: function (o517, name) {
            var o31 = o605.o606(o635.o643(o517), name);
            var o518 = o635.o639(o31);
            try {
return o635.o516(o517, name, o518);
}catch(e){}
        },
        o526: function (o517, name, o518, o486) {
            var o494 = o635.o516(o517, name, o518, o486);
            // create the backing node for this in the fs root as well
            var o31 = o635.o643(o494);
            try {
try {
                try {
if (o489.o538(o494.o518)) {
                    try {
o641.o650(o31, o494.o518);
}catch(e){}
                } else {
                    try {
o641.o651(o31, '', {
                        o518: o494.o518
                    });
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
return o494;
}catch(e){}
        },
        o527: function (o652, o653, o654) {
            var o655 = o635.o643(o652);
            var o656 = o605.o606(o635.o643(o653), o654);
            try {
try {
                try {
o641.o657(o655, o656);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o528: function (o517, name) {
            var o31 = o605.o606(o635.o643(o517), name);
            try {
try {
                try {
o641.o658(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o529: function (o517, name) {
            var o31 = o605.o606(o635.o643(o517), name);
            try {
try {
                try {
o641.o659(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o530: function (o494) {
            var o31 = o635.o643(o494);
            try {
try {
                try {
return o641.o660(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o531: function (o517, o654, o655) {
            var o656 = o605.o606(o635.o643(o517), o654);
            try {
try {
                try {
o641.o661(o655, o656);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o535: function (o494) {
            var o31 = o635.o643(o494);
            try {
try {
                try {
return o641.o662(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        }
    },
    o491: {
        o41: function (o492) {
            var o31 = o635.o643(o492.o494);
            try {
try {
                try {
if (o489.o540(o492.o494.o518)) {
                    try {
o492.o663 = o641.o664(o31, o635.o645(o492.flags));
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o498: function (o492) {
            try {
try {
                try {
if (o489.o540(o492.o494.o518) && o492.o663) {
                    try {
o641.o665(o492.o663);
}catch(e){}
                }
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o27: function (o492, buffer, o107, length, o563) {
            // FIXME this is terrible.
            var o666 = new o667(length);
            var o668;
            try {
try {
                try {
o668 = o641.o669(o492.o663, o666, 0, length, o563);
}catch(e){}
            } catch (o189) {
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
if (o668 > 0) {
                try {
for (var o82 = 0; o82 < o668; o82++) {
                    try {
buffer[o107 + o82] = o666[o82];
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o668;
}catch(e){}
        },
        write: function (o492, buffer, o107, length, o563) {
            // FIXME this is terrible.
            var o666 = new o667(buffer.subarray(o107, o107 + length));
            var o668;
            try {
try {
                try {
o668 = o641.o670(o492.o663, o666, 0, length, o563);
}catch(e){}
            } catch (o189) {
                try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
return o668;
}catch(e){}
        },
        o532: function (o492, o107, o565) {
            var o563 = o107;
            try {
if (o565 === 1) { // SEEK_CUR.
                try {
o563 += o492.o563;
}catch(e){}
            } else try {
if (o565 === 2) { // SEEK_END.
                try {
if (o489.o540(o492.o494.o518)) {
                    try {
try {
                        var o609 = o641.o671(o492.o663);
                        try {
o563 += o609.o85;
}catch(e){}
                    } catch (o189) {
                        try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
}catch(e){}

            try {
if (o563 < 0) {
                try {
throw new o489.o496(o352.o375);
}catch(e){}
            }
}catch(e){}

            try {
o492.o563 = o563;
}catch(e){}
            try {
return o563;
}catch(e){}
        }
    }
} in o2) {
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
        var o864 = Array.prototype.slice.call(arguments, 0);
        try {
if(defineProperty & o2.o5) try {
flags.push("None");
}catch(e){}
}catch(name){}
        try {
if((o1 & o2.o6) != this.o568 + ((this.o525 && (o1088 + o1091 | 0) >= 0) ? Math.o279(Math.o290(this.o534, 0) + this.o539, this.o538) : this.o538).o5) try {
flags.push(o846);
}catch(e){}
}catch(e){}
        try {
if((o1 & o2.o4) != o2.o5) try {
flags.push("Accessor");
}catch(e){}
}catch(e){}
        try {
if((o1 & o2.o7) != o2.o5) try {
flags.push("External");
}catch(e){}
}catch(e){}
        try { write(undefined >= -0); } catch(e) {}try { {} } catch(e) {}
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

function o19(o20, o21) {
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
if(o24.o27.o6)
        try {
o22.o23("Return type info:");
}catch(e){}
}catch(e){}
    try {
for (var o16 = 0; o16 < o24.o27.length; ++o16) {
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

var o0="if (1) do WScript.Echo(1); while (false); else 1;"
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
