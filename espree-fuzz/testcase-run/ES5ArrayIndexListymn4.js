//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

function test(e)
{
    var o1 = new Array(o0);

    // Generate ES5ArrayTypeHandler index map in order
    try {
for(var o266 = o263.o267("div"); o2 < o0; ++o2)
    {
        try {
o52.defineProperty(o1, o2, {
           name: "direct and indirect eval with new.target",
           enumerable: true,
           writable: false,
           configurable: true
        });
}catch(e){}
    }
}catch(e){}

    // Enumerator triggers generating index list
    var e = 0;
    try {
for (var create = [] in e) {
        var o621 = {
    o622: false,
    o623: function () {
        try {
o621.o622 = !!o17.o624.match(/^win/);
}catch(e){}
    },
    o500: function (o500) {
        try {
o73(o16);
}catch(e){}
        try {
return o621.o501(null, '/', o621.o625(o500.o626.o590), 0);
}catch(e){}
    },
    o501: function (o502, name, o503, o471) {
        try {
if (!o474.o523(o503) && !o474.o525(o503) && !o474.o527(o503)) {
            try {
throw new o474.o481(o341.o364);
}catch(e){}
        }
}catch(e){}
        var o479 = o474.o501(o502, name, o503);
        try {
o479.o508 = o621.o508;
}catch(e){}
        try {
o479.o476 = o621.o476;
}catch(e){}
        try {
return o479;
}catch(e){}
    },
    o625: function (o31) {
        var o595;
        try {
try {
            try {
o595 = o627.o628(o31);
}catch(e){}
            try {
if (o621.o622) {
                // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
                // propagate write bits to execute bits.
                try {
o595.o503 = o595.o503 | ((o595.o503 & 146) >> 1);
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
throw new o474.o481(o341[o189.o119]);
}catch(e){}
        }
}catch(e){}
        try {
return o595.o503;
}catch(e){}
    },
    o629: function (o479) {
        var o249 = [];
        try {
while (o479.o502 !== o479) {
            try {
o249.push(o479.name);
}catch(e){}
            try {
o479 = o479.o502;
}catch(e){}
        }
}catch(e){}
        try {
o249.push(o479.o500.o626.o590);
}catch(e){}
        try {
o249.reverse();
}catch(e){}
        try {
return o591.join.apply(null, o249);
}catch(e){}
    },
    o630: {
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
    o631: function (flags) {
        try {
if (flags in o621.o630) {
            try {
return o621.o630[flags];
}catch(e){}
        } else {
            try {
return flags;
}catch(e){}
        }
}catch(e){}
    },
    o508: {
        o507: function (o479) {
            var o31 = o621.o629(o479);
            var o595;
            try {
try {
                try {
o595 = o627.o628(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
            // See http://support.microsoft.com/kb/140365
            try {
if (o621.o622 && !o595.o538) {
                try {
o595.o538 = 4096;
}catch(e){}
            }
}catch(e){}
            try {
if (o621.o622 && !o595.o539) {
                try {
o595.o539 = (o595.o85 + o595.o538 - 1) / o595.o538 | 0;
}catch(e){}
            }
}catch(e){}
            try {
return {
                o471: o595.o471,
                o531: o595.o531,
                o503: o595.o503,
                o532: o595.o532,
                o533: o595.o533,
                o534: o595.o534,
                o480: o595.o480,
                o85: o595.o85,
                o535: o595.o535,
                o536: o595.o536,
                o537: o595.o537,
                o538: o595.o538,
                o539: o595.o539
            };
}catch(e){}
        },
        o509: function (o479, o530) {
            var o31 = o621.o629(o479);
            try {
try {
                try {
if (o530.o503 !== undefined) {
                    try {
o627.o632(o31, o530.o503);
}catch(e){}
                    // update the common node structure mode as well
                    try {
o479.o503 = o530.o503;
}catch(e){}
                }
}catch(e){}
                try {
if (o530.o489 !== undefined) {
                    var o633 = new Date(o530.o489);
                    try {
o627.o634(o31, o633, o633);
}catch(e){}
                }
}catch(e){}
                try {
if (o530.o85 !== undefined) {
                    try {
o627.o635(o31, o530.o85);
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
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o510: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            var o503 = o621.o625(o31);
            try {
return o621.o501(o502, name, o503);
}catch(e){}
        },
        o511: function (o502, name, o503, o471) {
            var o479 = o621.o501(o502, name, o503, o471);
            // create the backing node for this in the fs root as well
            var o31 = o621.o629(o479);
            try {
try {
                try {
if (o474.o523(o479.o503)) {
                    try {
o627.o636(o31, o479.o503);
}catch(e){}
                } else {
                    try {
o627.o637(o31, '', {
                        o503: o479.o503
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
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
return o479;
}catch(e){}
        },
        o512: function (o638, o639, o640) {
            var o641 = o621.o629(o638);
            var o642 = o591.o592(o621.o629(o639), o640);
            try {
try {
                try {
o627.o643(o641, o642);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o513: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            try {
try {
                try {
o627.o644(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o514: function (o502, name) {
            var o31 = o591.o592(o621.o629(o502), name);
            try {
try {
                try {
o627.o645(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o515: function (o479) {
            var o31 = o621.o629(o479);
            try {
try {
                try {
return o627.o646(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o516: function (o502, o640, o641) {
            var o642 = o591.o592(o621.o629(o502), o640);
            try {
try {
                try {
o627.o647(o641, o642);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o520: function (o479) {
            var o31 = o621.o629(o479);
            try {
try {
                try {
return o627.o648(o31);
}catch(e){}
            } catch (o189) {
                try {
if (!o189.o119) try {
throw o189;
}catch(e){}
}catch(e){}
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        }
    },
    o476: {
        o41: function (o477) {
            var o31 = o621.o629(o477.o479);
            try {
try {
                try {
if (o474.o525(o477.o479.o503)) {
                    try {
o477.o649 = o627.o650(o31, o621.o631(o477.flags));
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
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o483: function (o477) {
            try {
try {
                try {
if (o474.o525(o477.o479.o503) && o477.o649) {
                    try {
o627.o651(o477.o649);
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
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
        },
        o27: function (o477, buffer, o107, length, o548) {
            // FIXME this is terrible.
            var o652 = new o653(length);
            var o654;
            try {
try {
                try {
o654 = o627.o655(o477.o649, o652, 0, length, o548);
}catch(e){}
            } catch (o189) {
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
if (o654 > 0) {
                try {
for (var o82 = 0; o82 < o654; o82++) {
                    try {
buffer[o107 + o82] = o652[o82];
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o654;
}catch(e){}
        },
        write: function (o477, buffer, o107, length, o548) {
            // FIXME this is terrible.
            var o652 = new o653(buffer.subarray(o107, o107 + length));
            var o654;
            try {
try {
                try {
o654 = o627.o656(o477.o649, o652, 0, length, o548);
}catch(e){}
            } catch (o189) {
                try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
            }
}catch(e){}
            try {
return o654;
}catch(e){}
        },
        o517: function (o477, o107, o550) {
            var o548 = o107;
            try {
if (o550 === 1) { // SEEK_CUR.
                try {
o548 += o477.o548;
}catch(e){}
            } else try {
if (o550 === 2) { // SEEK_END.
                try {
if (o474.o525(o477.o479.o503)) {
                    try {
try {
                        var o595 = o627.o657(o477.o649);
                        try {
o548 += o595.o85;
}catch(e){}
                    } catch (o189) {
                        try {
throw new o474.o481(o341[o189.o119]);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
}catch(e){}

            try {
if (o548 < 0) {
                try {
throw new o474.o481(o341.o364);
}catch(e){}
            }
}catch(e){}

            try {
o477.o548 = o548;
}catch(e){}
            try {
return o548;
}catch(e){}
        }
    }
};
        try {
if (Object.getPrototypeOf(o31)) {
            try {
break;
}catch(e){}
        }
}catch(e){}
    }
}catch("Return from Array.prototype.splice should be an Array object when constructor has no [@@species] property"){}
}

function o421() {
    try {
try {
        try {
e();
}catch(e){}
    } catch(o5) {
        // We just got OOS, now we have limited stack
        try {
test(1000000);
}catch(e){}
    }
}catch(e){}
}

try {
o4();
}catch(e){}

// Good if we haven't hit hard OOS
try {
o6.o7("pass");
}catch(e){}
