//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o495 = {
    o496: null,
    o497: 1,
    o498: 2,
    o499: 3,
    o500: function (o500) {
        try {
return o495.o501(null, '/', 16384 | 511 /* 0777 */ , 0);
}catch(e){}
    },
    o501: function (o502, name, o503, o471) {
        try {
if (o474.o504(o503) || o474.o505(o503)) {
            // no supported
            try {
throw new o474.o481(o341.o342);
}catch(e){}
        }
}catch(e){}
        try {
if (!o495.o496) {
            try {
o495.o496 = {
                o506: {
                    o479: {
                        o507: o495.o508.o507,
                        o509: o495.o508.o509,
                        o510: o495.o508.o510,
                        o511: o495.o508.o511,
                        o512: o495.o508.o512,
                        o513: o495.o508.o513,
                        o514: o495.o508.o514,
                        o515: o495.o508.o515,
                        o516: o495.o508.o516
                    },
                    o477: {
                        o517: o495.o476.o517
                    }
                },
                o518: {
                    o479: {
                        o507: o495.o508.o507,
                        o509: o495.o508.o509
                    },
                    o477: {
                        o517: o495.o476.o517,
                        o27: o495.o476.o27,
                        write: o495.o476.write,
                        o215: o495.o476.o215,
                        o519: o495.o476.o519
                    }
                },
                link: {
                    o479: {
                        o507: o495.o508.o507,
                        o509: o495.o508.o509,
                        o520: o495.o508.o520
                    },
                    o477: {}
                },
                o521: {
                    o479: {
                        o507: o495.o508.o507,
                        o509: o495.o508.o509
                    },
                    o477: o474.o522
                },
            };
}catch(e){}
        }
}catch(e){}
        var o479 = o474.o501(o502, name, o503, o471);
        try {
if (o474.o523(o479.o503)) {
            try {
o479.o508 = o495.o496.o506.o479;
}catch(e){}
            try {
o479.o476 = o495.o496.o506.o477;
}catch(e){}
            try {
o479.o524 = {};
}catch(e){}
        } else try {
if (o474.o525(o479.o503)) {
            try {
o479.o508 = o495.o496.o518.o479;
}catch(e){}
            try {
o479.o476 = o495.o496.o518.o477;
}catch(e){}
            try {
o479.o524 = [];
}catch(e){}
            try {
o479.o526 = o495.o498;
}catch(e){}
        } else try {
if (o474.o527(o479.o503)) {
            try {
o479.o508 = o495.o496.link.o479;
}catch(e){}
            try {
o479.o476 = o495.o496.link.o477;
}catch(e){}
        } else try {
if (o474.o528(o479.o503)) {
            try {
o479.o508 = o495.o496.o521.o479;
}catch(e){}
            try {
o479.o476 = o495.o496.o521.o477;
}catch(e){}
        }
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
        try {
o479.o489 = Date.o4();
}catch(e){}
        // add the new node to the parent
        try {
if (o502) {
            try {
o502.o524[name] = o479;
}catch(e){}
        }
}catch(e){}
        try {
return o479;
}catch(e){}
    },
    o529: function (o479) {
        try {
if (o479.o526 !== o495.o498) {
            var o524 = o479.o524;
            try {
o479.o524 = Array.prototype.slice.call(o524);
}catch(e){}
            try {
o479.o526 = o495.o498;
}catch(e){}
        }
}catch(e){}
    },
    o508: {
        o507: function (o479) {
            var o530 = {};
            // device numbers reuse inode numbers.
            try {
o530.o471 = o474.o528(o479.o503) ? o479.o333 : 1;
}catch(e){}
            try {
o530.o531 = o479.o333;
}catch(e){}
            try {
o530.o503 = o479.o503;
}catch(e){}
            try {
o530.o532 = 1;
}catch(e){}
            try {
o530.o533 = 0;
}catch(e){}
            try {
o530.o534 = 0;
}catch(e){}
            try {
o530.o480 = o479.o480;
}catch(e){}
            try {
if (o474.o523(o479.o503)) {
                try {
o530.o85 = 4096;
}catch(e){}
            } else try {
if (o474.o525(o479.o503)) {
                try {
o530.o85 = o479.o524.length;
}catch(e){}
            } else try {
if (o474.o527(o479.o503)) {
                try {
o530.o85 = o479.link.length;
}catch(e){}
            } else {
                try {
o530.o85 = 0;
}catch(e){}
            }
}catch(e){}
}catch(e){}
}catch(e){}
            try {
o530.o535 = new Date(o479.o489);
}catch(e){}
            try {
o530.o536 = new Date(o479.o489);
}catch(e){}
            try {
o530.o537 = new Date(o479.o489);
}catch(e){}
            // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
            //       but this is not required by the standard.
            try {
o530.o538 = 4096;
}catch(e){}
            try {
o530.o539 = Math.ceil(o530.o85 / o530.o538);
}catch(e){}
            try {
return o530;
}catch(e){}
        },
        o509: function (o479, o530) {
            try {
if (o530.o503 !== undefined) {
                try {
o479.o503 = o530.o503;
}catch(e){}
            }
}catch(e){}
            try {
if (o530.o489 !== undefined) {
                try {
o479.o489 = o530.o489;
}catch(e){}
            }
}catch(e){}
            try {
if (o530.o85 !== undefined) {
                try {
o495.o529(o479);
}catch(e){}
                var o524 = o479.o524;
                try {
if (o530.o85 < o524.length) try {
o524.length = o530.o85;
}catch(e){}
                else
                    try {
while (o530.o85 > o524.length) try {
o524.push(0);
}catch(e){}
}catch(e){}
}catch(e){}
            }
}catch(e){}
        },
        o510: function (o502, name) {
            try {
throw o474.o540[o341.o343];
}catch(e){}
        },
        o511: function (o502, name, o503, o471) {
            try {
return o495.o501(o502, name, o503, o471);
}catch(e){}
        },
        o512: function (o541, o542, o543) {
            // if we're overwriting a directory at new_name, make sure it's empty.
            try {
if (o474.o523(o541.o503)) {
                var o544;
                try {
try {
                    try {
o544 = o474.o545(o542, o543);
}catch(e){}
                } catch (o189) {}
}catch(e){}
                try {
if (o544) {
                    try {
for (var o82 in o544.o524) {
                        try {
throw new o474.o481(o341.o421);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            // do the internal rewiring
            try {
delete o541.o502.o524[o541.name];
}catch(e){}
            try {
o541.name = o543;
}catch(e){}
            try {
o542.o524[o543] = o541;
}catch(e){}
            try {
o541.o502 = o542;
}catch(e){}
        },
        o513: function (o502, name) {
            try {
delete o502.o524[name];
}catch(e){}
        },
        o514: function (o502, name) {
            var o479 = o474.o545(o502, name);
            try {
for (var o82 in o479.o524) {
                try {
throw new o474.o481(o341.o421);
}catch(e){}
            }
}catch(e){}
            try {
delete o502.o524[name];
}catch(e){}
        },
        o515: function (o479) {
            var entries = ['.', '..']
            try {
for (var key in o479.o524) {
                try {
if (!o479.o524.hasOwnProperty(key)) {
                    try {
continue;
}catch(e){}
                }
}catch(e){}
                try {
entries.push(key);
}catch(e){}
            }
}catch(e){}
            try {
return entries;
}catch(e){}
        },
        o516: function (o502, o546, o547) {
            var o479 = o495.o501(o502, o546, 511 /* 0777 */ | 40960, 0);
            try {
o479.link = o547;
}catch(e){}
            try {
return o479;
}catch(e){}
        },
        o520: function (o479) {
            try {
if (!o474.o527(o479.o503)) {
                try {
throw new o474.o481(o341.o364);
}catch(e){}
            }
}catch(e){}
            try {
return o479.link;
}catch(e){}
        }
    },
    o476: {
        o27: function (o477, buffer, o107, length, o548) {
            var o524 = o477.o479.o524;
            try {
if (o548 >= o524.length)
                try {
return 0;
}catch(e){}
}catch(e){}
            var o85 = Math.o87(o524.length - o548, length);
            try {
o73(o85 >= 0);
}catch(e){}
            try {
if (o85 > 8 && o524.subarray) { // non-trivial, and typed array
                try {
buffer.set(o524.subarray(o548, o548 + o85), o107);
}catch(e){}
            } else {
                try {
for (var o82 = 0; o82 < o85; o82++) {
                    try {
buffer[o107 + o82] = o524[o548 + o82];
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o85;
}catch(e){}
        },
        write: function (o477, buffer, o107, length, o548, o549) {
            var o479 = o477.o479;
            try {
o479.o489 = Date.o4();
}catch(e){}
            var o524 = o479.o524;
            try {
if (length && o524.length === 0 && o548 === 0 && buffer.subarray) {
                // just replace it with the new data
                try {
if (o549 && o107 === 0) {
                    try {
o479.o524 = buffer;
}catch(e){} // this could be a subarray of Emscripten HEAP, or allocated from some other source.
                    try {
o479.o526 = (buffer.buffer === o200.buffer) ? o495.o497 : o495.o499;
}catch(e){}
                } else {
                    try {
o479.o524 = new Uint8Array(buffer.subarray(o107, o107 + length));
}catch(e){}
                    try {
o479.o526 = o495.o499;
}catch(e){}
                }
}catch(e){}
                try {
return length;
}catch(e){}
            }
}catch(e){}
            try {
o495.o529(o479);
}catch(e){}
            var o524 = o479.o524;
            try {
while (o524.length < o548) try {
o524.push(0);
}catch(e){}
}catch(e){}
            try {
for (var o82 = 0; o82 < length; o82++) {
                try {
o524[o548 + o82] = buffer[o107 + o82];
}catch(e){}
            }
}catch(e){}
            try {
return length;
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
o548 += o477.o479.o524.length;
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
o477.o551 = [];
}catch(e){}
            try {
o477.o548 = o548;
}catch(e){}
            try {
return o548;
}catch(e){}
        },
        o215: function (o477, o107, length) {
            try {
o495.o529(o477.o479);
}catch(e){}
            var o524 = o477.o479.o524;
            var o252 = o107 + length;
            try {
while (o252 > o524.length) try {
o524.push(0);
}catch(e){}
}catch(e){}
        },
        o519: function (o477, buffer, o107, length, o548, o552, flags) {
            try {
if (!o474.o525(o477.o479.o503)) {
                try {
throw new o474.o481(o341.o361);
}catch(e){}
            }
}catch(e){}
            var o114;
            var o553;
            var o524 = o477.o479.o524;
            // Only make a new copy when MAP_PRIVATE is specified.
            try {
if (!(flags & 2) &&
                (o524.buffer === buffer || o524.buffer === buffer.buffer)) {
                // We can't emulate MAP_SHARED when the file is not backed by the buffer
                // we're mapping to (e.g. the HEAP buffer).
                try {
o553 = false;
}catch(e){}
                try {
o114 = o524.byteOffset;
}catch(e){}
            } else {
                // Try to avoid unnecessary slices.
                try {
if (o548 > 0 || o548 + length < o524.length) {
                    try {
if (o524.subarray) {
                        try {
o524 = o524.subarray(o548, o548 + length);
}catch(e){}
                    } else {
                        try {
o524 = Array.prototype.slice.call(o524, o548, o548 + length);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
                try {
o553 = true;
}catch(e){}
                try {
o114 = o220(length);
}catch(e){}
                try {
if (!o114) {
                    try {
throw new o474.o481(o341.o354);
}catch(e){}
                }
}catch(e){}
                try {
buffer.set(o524, o114);
}catch(e){}
            }
}catch(e){}
            try {
return {
                o114: o114,
                o553: o553
            };
}catch(e){}
        }
    }
}

var o97 = 5

try {
write(undefined >= undefined);
}catch(e){}
try {
write(undefined >= null);
}catch(e){}
try {
write(undefined >= true);
}catch(e){}
try {
write(undefined >= false);
}catch(e){}
try {
write(undefined >= Boolean(true));
}catch(e){}
try {
write(undefined >= Boolean(false));
}catch(e){}
try {
try { o66 = o66 + 1 | 0; } catch(e) {}try { Object.defineProperty(o1, o2, {
           value: o2,
           enumerable: true,
           writable: false,
           configurable: true
        }); } catch(e) {}
}catch(e){}
try {
write(undefined >= new Boolean(false));
}catch(e){}
try {
write(undefined >= NaN);
}catch(e){}
try {
write(undefined >= +0);
}catch(e){}
try {
write(undefined >= -0);
}catch(e){}
try {
write(undefined >= 0);
}catch(e){}
try {
write(undefined >= 0.0);
}catch(e){}
try {
write(undefined >= -0.0);
}catch(e){}
try {
write(undefined >= +0.0);
}catch(e){}
try {
write(undefined >= 1);
}catch(e){}
try {
write(undefined >= 10);
}catch(e){}
try {
write(undefined >= 10.0);
}catch(e){}
try {
write(undefined >= 10.1);
}catch(e){}
try {
write(undefined >= -1);
}catch(e){}
try {
write(undefined >= -10);
}catch(e){}
try {
write(undefined >= -10.0);
}catch(e){}
try {
write(undefined >= -10.1);
}catch(e){}
try {
write(undefined >= Number.o4);
}catch(e){}
try {
write(undefined >= Number.MIN_VALUE);
}catch(e){}
try {
write(undefined >= Number.NaN);
}catch(e){}
try {
write(undefined >= Number.o5);
}catch(e){}
try { {
if (o16) {
    var o641 = require("fs");
    try {
o635.o637();
}catch(e){}
}
} } catch(e) {}
try {
write(undefined >= new Number(NaN));
}catch(e){}
try {
write(undefined >= new Number(+0));
}catch(e){}
try {
write(undefined >= new Number(-0));
}catch(e){}
try {
write(undefined >= new Number(0));
}catch(e){}
try {
write(undefined >= new Number(0.0));
}catch(e){}
try {
write(undefined >= new Number(-0.0));
}catch(e){}
try {
write(undefined >= new Number(+0.0));
}catch(e){}
try {
write(undefined >= new Number(1));
}catch(e){}
try {
write(undefined >= new Number(10));
}catch(e){}
try {
write(undefined >= new Number(10.0));
}catch(e){}
try {
write(undefined >= new Number(10.1));
}catch(e){}
try {
write(undefined >= new Number(-1));
}catch(e){}
try {
write(undefined >= new Number(-10));
}catch(e){}
try {
write(undefined >= new Number(-10.0));
}catch(e){}
try {
write(undefined >= new Number(-10.1));
}catch(e){}
try {
write(undefined >= new Number(Number.o4));
}catch(e){}
try {
write(undefined >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(undefined >= new Number(Number.NaN));
}catch(e){}
try {
write(undefined >= new Number(Number.o5));
}catch(e){}
try {
write(undefined >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(undefined >= '');
}catch(e){}
try {
write(undefined >= 0xa);
}catch(e){}
try {
write(undefined >= 04);
}catch(e){}
try {
write(undefined >= 'hello');
}catch(e){}
try {
write(undefined >= 'hel' + 'lo');
}catch(e){}
try {
write(undefined >= String(''));
}catch(e){}
try {
write(undefined >= String('hello'));
}catch(e){}
try {
write(undefined >= String('h' + 'ello'));
}catch(e){}
try {
write(undefined >= new String(''));
}catch(e){}
try {
write(undefined >= new String('hello'));
}catch(e){}
try {
write(undefined >= new String('he' + 'llo'));
}catch(e){}
try {
write(undefined >= new Object());
}catch(e){}
try {
write(undefined >= new Object());
}catch(e){}
try {
write(undefined >= [1, 2, 3]);
}catch(e){}
try {
write(undefined >= [1 ,2 , 3]);
}catch(e){}
try {
write(undefined >= new Array(3));
}catch(e){}
try {
write(undefined >= Array(3));
}catch(e){}
try {
write(undefined >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(undefined >= Array(1));
}catch(e){}
try {
write(undefined >= o3);
}catch(e){}
try {
write(null >= undefined);
}catch(e){}
try {
write(null >= null);
}catch(e){}
try {
write(null >= true);
}catch(e){}
try {
write(null >= false);
}catch(e){}
try {
write(null >= Boolean(true));
}catch(e){}
try {
write(null >= Boolean(false));
}catch(e){}
try {
write(null >= new Boolean(true));
}catch(e){}
try {
write(null >= new Boolean(false));
}catch(e){}
try {
write(null >= NaN);
}catch(e){}
try {
write(null >= +0);
}catch(e){}
try {
write(null >= -0);
}catch(e){}
try {
write(null >= 0);
}catch(e){}
try {
write(null >= 0.0);
}catch(e){}
try {
write(null >= -0.0);
}catch(e){}
try {
write(null >= +0.0);
}catch(e){}
try {
write(null >= 1);
}catch(e){}
try {
write(null >= 10);
}catch(e){}
try {
write(null >= 10.0);
}catch(e){}
try {
write(null >= 10.1);
}catch(e){}
try {
write(null >= -1);
}catch(e){}
try {
write(null >= -10);
}catch(e){}
try {
write(null >= -10.0);
}catch(e){}
try {
write(null >= -10.1);
}catch(e){}
try {
write(null >= Number.o4);
}catch(e){}
try {
write(null >= Number.MIN_VALUE);
}catch(e){}
try {
write(null >= Number.NaN);
}catch(e){}
try {
write(null >= Number.o5);
}catch(e){}
try {
write(null >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(null >= new Number(NaN));
}catch(e){}
try {
write(null >= new Number(+0));
}catch(e){}
try {
write(null >= new Number(-0));
}catch(e){}
try {
write(null >= new Number(0));
}catch(e){}
try {
write(null >= new Number(0.0));
}catch(e){}
try {
write(null >= new Number(-0.0));
}catch(e){}
try {
write(null >= new Number(+0.0));
}catch(e){}
try {
write(null >= new Number(1));
}catch(e){}
try {
write(null >= new Number(10));
}catch(e){}
try {
write(null >= new Number(10.0));
}catch(e){}
try {
write(null >= new Number(10.1));
}catch(e){}
try {
write(null >= new Number(-1));
}catch(e){}
try {
write(null >= new Number(-10));
}catch(e){}
try {
write(null >= new Number(-10.0));
}catch(e){}
try {
write(null >= new Number(-10.1));
}catch(e){}
try {
write(null >= new Number(Number.o4));
}catch(e){}
try {
write(null >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(null >= new Number(Number.NaN));
}catch(e){}
try {
write(null >= new Number(Number.o5));
}catch(e){}
try {
write(null >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(null >= '');
}catch(e){}
try {
write(null >= 0xa);
}catch(e){}
try {
write(null >= 04);
}catch(e){}
try {
write(null >= 'hello');
}catch(e){}
try {
write(null >= 'hel' + 'lo');
}catch(e){}
try {
write(null >= String(''));
}catch(e){}
try {
write(null >= String('hello'));
}catch(e){}
try {
write(null >= String('h' + 'ello'));
}catch(e){}
try {
write(null >= new String(''));
}catch(e){}
try {
write(null >= new String('hello'));
}catch(e){}
try {
write(null >= new String('he' + 'llo'));
}catch(e){}
try {
write(null >= new Object());
}catch(e){}
try {
write(null >= new Object());
}catch(e){}
try {
write(null >= [1, 2, 3]);
}catch(e){}
try {
write(null >= [1 ,2 , 3]);
}catch(e){}
try {
write(null >= new Array(3));
}catch(e){}
try {
write(null >= Array(3));
}catch(e){}
try {
write(null >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(null >= Array(1));
}catch(e){}
try {
write(null >= o3);
}catch(e){}
try {
write(true >= undefined);
}catch(e){}
try {
write(true >= null);
}catch(e){}
try {
write(true >= true);
}catch(e){}
try {
write(true >= false);
}catch(e){}
try {
write(true >= Boolean(true));
}catch(e){}
try {
write(true >= Boolean(false));
}catch(e){}
try {
write(true >= new Boolean(true));
}catch(e){}
try {
write(true >= new Boolean(false));
}catch(e){}
try {
write(true >= NaN);
}catch(e){}
try {
write(true >= +0);
}catch(e){}
try {
write(true >= -0);
}catch(e){}
try {
write(true >= 0);
}catch(e){}
try {
write(true >= 0.0);
}catch(e){}
try {
write(true >= -0.0);
}catch(e){}
try {
write(true >= +0.0);
}catch(e){}
try {
write(true >= 1);
}catch(e){}
try {
write(true >= 10);
}catch(e){}
try {
write(true >= 10.0);
}catch(e){}
try {
write(true >= 10.1);
}catch(e){}
try {
write(true >= -1);
}catch(e){}
try {
write(true >= -10);
}catch(e){}
try {
write(true >= -10.0);
}catch(e){}
try {
write(true >= -10.1);
}catch(e){}
try {
write(true >= Number.o4);
}catch(e){}
try {
write(true >= Number.MIN_VALUE);
}catch(e){}
try {
write(true >= Number.NaN);
}catch(e){}
try {
write(true >= Number.o5);
}catch(e){}
try {
write(true >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(true >= new Number(NaN));
}catch(e){}
try {
write(true >= new Number(+0));
}catch(e){}
try {
write(true >= new Number(-0));
}catch(e){}
try {
write(true >= new Number(0));
}catch(e){}
try {
write(true >= new Number(0.0));
}catch(e){}
try {
write(true >= new Number(-0.0));
}catch(e){}
try {
write(true >= new Number(+0.0));
}catch(e){}
try {
write(true >= new Number(1));
}catch(e){}
try {
write(true >= new Number(10));
}catch(e){}
try {
write(true >= new Number(10.0));
}catch(e){}
try {
write(true >= new Number(10.1));
}catch(e){}
try {
write(true >= new Number(-1));
}catch(e){}
try {
write(true >= new Number(-10));
}catch(e){}
try {
write(true >= new Number(-10.0));
}catch(e){}
try {
write(true >= new Number(-10.1));
}catch(e){}
try {
write(true >= new Number(Number.o4));
}catch(e){}
try {
write(true >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(true >= new Number(Number.NaN));
}catch(e){}
try {
write(true >= new Number(Number.o5));
}catch(e){}
try {
write(true >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(true >= '');
}catch(e){}
try {
write(true >= 0xa);
}catch(e){}
try {
write(true >= 04);
}catch(e){}
try {
write(true >= 'hello');
}catch(e){}
try {
write(true >= 'hel' + 'lo');
}catch(e){}
try {
write(true >= String(''));
}catch(e){}
try {
write(true >= String('hello'));
}catch(e){}
try {
write(true >= String('h' + 'ello'));
}catch(e){}
try {
write(true >= new String(''));
}catch(e){}
try {
write(true >= new String('hello'));
}catch(e){}
try {
write(true >= new String('he' + 'llo'));
}catch(e){}
try {
write(true >= new Object());
}catch(e){}
try {
write(true >= new Object());
}catch(e){}
try {
write(true >= [1, 2, 3]);
}catch(e){}
try {
write(true >= [1 ,2 , 3]);
}catch(e){}
try {
write(true >= new Array(3));
}catch(e){}
try {
write(true >= Array(3));
}catch(e){}
try {
write(true >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(true >= Array(1));
}catch(e){}
try {
write(true >= o3);
}catch(e){}
try {
write(false >= undefined);
}catch(e){}
try {
write(false >= null);
}catch(e){}
try {
write(false >= true);
}catch(e){}
try {
write(false >= false);
}catch(e){}
try {
write(false >= Boolean(true));
}catch(e){}
try {
write(false >= Boolean(false));
}catch(e){}
try {
write(false >= new Boolean(true));
}catch(e){}
try {
write(false >= new Boolean(false));
}catch(e){}
try {
write(false >= NaN);
}catch(e){}
try {
write(false >= +0);
}catch(e){}
try {
write(false >= -0);
}catch(e){}
try {
write(false >= 0);
}catch(e){}
try {
write(false >= 0.0);
}catch(e){}
try {
write(false >= -0.0);
}catch(e){}
try {
write(false >= +0.0);
}catch(e){}
try {
write(false >= 1);
}catch(e){}
try {
write(false >= 10);
}catch(e){}
try {
write(false >= 10.0);
}catch(e){}
try {
write(false >= 10.1);
}catch(e){}
try {
write(false >= -1);
}catch(e){}
try {
write(false >= -10);
}catch(e){}
try {
write(false >= -10.0);
}catch(e){}
try {
write(false >= -10.1);
}catch(e){}
try {
write(false >= Number.o4);
}catch(e){}
try {
write(false >= Number.MIN_VALUE);
}catch(e){}
try {
write(false >= Number.NaN);
}catch(e){}
try {
write(false >= Number.o5);
}catch(e){}
try {
write(false >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(false >= new Number(NaN));
}catch(e){}
try {
write(false >= new Number(+0));
}catch(e){}
try {
write(false >= new Number(-0));
}catch(e){}
try {
write(false >= new Number(0));
}catch(e){}
try {
write(false >= new Number(0.0));
}catch(e){}
try {
write(false >= new Number(-0.0));
}catch(e){}
try {
write(false >= new Number(+0.0));
}catch(e){}
try {
write(false >= new Number(1));
}catch(e){}
try {
write(false >= new Number(10));
}catch(e){}
try {
write(false >= new Number(10.0));
}catch(e){}
try {
write(false >= new Number(10.1));
}catch(e){}
try {
write(false >= new Number(-1));
}catch(e){}
try {
write(false >= new Number(-10));
}catch(e){}
try {
write(false >= new Number(-10.0));
}catch(e){}
try {
write(false >= new Number(-10.1));
}catch(e){}
try {
write(false >= new Number(Number.o4));
}catch(e){}
try {
write(false >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(false >= new Number(Number.NaN));
}catch(e){}
try {
write(false >= new Number(Number.o5));
}catch(e){}
try {
write(false >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(false >= '');
}catch(e){}
try {
write(false >= 0xa);
}catch(e){}
try {
write(false >= 04);
}catch(e){}
try {
write(false >= 'hello');
}catch(e){}
try {
write(false >= 'hel' + 'lo');
}catch(e){}
try {
write(false >= String(''));
}catch(e){}
try {
write(false >= String('hello'));
}catch(e){}
try {
write(false >= String('h' + 'ello'));
}catch(e){}
try {
write(false >= new String(''));
}catch(e){}
try {
write(false >= new String('hello'));
}catch(e){}
try {
write(false >= new String('he' + 'llo'));
}catch(e){}
try {
write(false >= new Object());
}catch(e){}
try {
write(false >= new Object());
}catch(e){}
try {
write(false >= [1, 2, 3]);
}catch(e){}
try {
write(false >= [1 ,2 , 3]);
}catch(e){}
try {
write(false >= new Array(3));
}catch(e){}
try {
write(false >= Array(3));
}catch(e){}
try {
write(false >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(false >= Array(1));
}catch(e){}
try {
write(false >= o3);
}catch(e){}
try {
write(Boolean(true) >= undefined);
}catch(e){}
try {
write(Boolean(true) >= null);
}catch(e){}
try {
write(Boolean(true) >= true);
}catch(e){}
try {
write(Boolean(true) >= false);
}catch(e){}
try {
write(Boolean(true) >= Boolean(true));
}catch(e){}
try {
write(Boolean(true) >= Boolean(false));
}catch(e){}
try {
write(Boolean(true) >= new Boolean(true));
}catch(e){}
try {
write(Boolean(true) >= new Boolean(false));
}catch(e){}
try {
write(Boolean(true) >= NaN);
}catch(e){}
try {
write(Boolean(true) >= +0);
}catch(e){}
try {
write(Boolean(true) >= -0);
}catch(e){}
try {
write(Boolean(true) >= 0);
}catch(e){}
try {
write(Boolean(true) >= 0.0);
}catch(e){}
try {
write(Boolean(true) >= -0.0);
}catch(e){}
try {
write(Boolean(true) >= +0.0);
}catch(e){}
try {
write(Boolean(true) >= 1);
}catch(e){}
try {
write(Boolean(true) >= 10);
}catch(e){}
try {
write(Boolean(true) >= 10.0);
}catch(e){}
try {
write(Boolean(true) >= 10.1);
}catch(e){}
try {
write(Boolean(true) >= -1);
}catch(e){}
try {
write(Boolean(true) >= -10);
}catch(e){}
try {
write(Boolean(true) >= -10.0);
}catch(e){}
try {
write(Boolean(true) >= -10.1);
}catch(e){}
try {
write(Boolean(true) >= Number.o4);
}catch(e){}
try {
write(Boolean(true) >= Number.MIN_VALUE);
}catch(e){}
try {
write(Boolean(true) >= Number.NaN);
}catch(e){}
try {
write(Boolean(true) >= Number.o5);
}catch(e){}
try {
write(Boolean(true) >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(Boolean(true) >= new Number(NaN));
}catch(e){}
try {
write(Boolean(true) >= new Number(+0));
}catch(e){}
try {
write(Boolean(true) >= new Number(-0));
}catch(e){}
try {
write(Boolean(true) >= new Number(0));
}catch(e){}
try {
write(Boolean(true) >= new Number(0.0));
}catch(e){}
try {
write(Boolean(true) >= new Number(-0.0));
}catch(e){}
try {
write(Boolean(true) >= new Number(+0.0));
}catch(e){}
try {
write(Boolean(true) >= new Number(1));
}catch(e){}
try {
write(Boolean(true) >= new Number(10));
}catch(e){}
try {
write(Boolean(true) >= new Number(10.0));
}catch(e){}
try {
write(Boolean(true) >= new Number(10.1));
}catch(e){}
try {
write(Boolean(true) >= new Number(-1));
}catch(e){}
try {
write(Boolean(true) >= new Number(-10));
}catch(e){}
try {
write(Boolean(true) >= new Number(-10.0));
}catch(e){}
try {
write(Boolean(true) >= new Number(-10.1));
}catch(e){}
try {
write(Boolean(true) >= new Number(Number.o4));
}catch(e){}
try {
write(Boolean(true) >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(Boolean(true) >= new Number(Number.NaN));
}catch(e){}
try {
write(Boolean(true) >= new Number(Number.o5));
}catch(e){}
try {
write(Boolean(true) >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(Boolean(true) >= '');
}catch(e){}
try {
write(Boolean(true) >= 0xa);
}catch(e){}
try {
write(Boolean(true) >= 04);
}catch(e){}
try {
write(Boolean(true) >= 'hello');
}catch(e){}
try {
write(Boolean(true) >= 'hel' + 'lo');
}catch(e){}
try {
write(Boolean(true) >= String(''));
}catch(e){}
try {
write(Boolean(true) >= String('hello'));
}catch(e){}
try {
write(Boolean(true) >= String('h' + 'ello'));
}catch(e){}
try {
write(Boolean(true) >= new String(''));
}catch(e){}
try {
write(Boolean(true) >= new String('hello'));
}catch(e){}
try {
write(Boolean(true) >= new String('he' + 'llo'));
}catch(e){}
try {
write(Boolean(true) >= new Object());
}catch(e){}
try {
write(Boolean(true) >= new Object());
}catch(e){}
try {
write(Boolean(true) >= [1, 2, 3]);
}catch(e){}
try {
write(Boolean(true) >= [1 ,2 , 3]);
}catch(e){}
try {
write(Boolean(true) >= new Array(3));
}catch(e){}
try {
write(Boolean(true) >= Array(3));
}catch(e){}
try {
write(Boolean(true) >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(Boolean(true) >= Array(1));
}catch(e){}
try {
write(Boolean(true) >= o3);
}catch(e){}
try {
write(Boolean(false) >= undefined);
}catch(e){}
try {
write(Boolean(false) >= null);
}catch(e){}
try {
write(Boolean(false) >= true);
}catch(e){}
try {
write(Boolean(false) >= false);
}catch(e){}
try {
write(Boolean(false) >= Boolean(true));
}catch(e){}
try {
write(Boolean(false) >= Boolean(false));
}catch(e){}
try {
write(Boolean(false) >= new Boolean(true));
}catch(e){}
try {
write(Boolean(false) >= new Boolean(false));
}catch(e){}
try {
write(Boolean(false) >= NaN);
}catch(e){}
try {
write(Boolean(false) >= +0);
}catch(e){}
try {
write(Boolean(false) >= -0);
}catch(e){}
try {
write(Boolean(false) >= 0);
}catch(e){}
try {
write(Boolean(false) >= 0.0);
}catch(e){}
try {
write(Boolean(false) >= -0.0);
}catch(e){}
try {
write(Boolean(false) >= +0.0);
}catch(e){}
try {
write(Boolean(false) >= 1);
}catch(e){}
try {
write(Boolean(false) >= 10);
}catch(e){}
try {
write(Boolean(false) >= 10.0);
}catch(e){}
try {
write(Boolean(false) >= 10.1);
}catch(e){}
try {
write(Boolean(false) >= -1);
}catch(e){}
try {
write(Boolean(false) >= -10);
}catch(e){}
try {
write(Boolean(false) >= -10.0);
}catch(e){}
try {
write(Boolean(false) >= -10.1);
}catch(e){}
try {
write(Boolean(false) >= Number.o4);
}catch(e){}
try {
write(Boolean(false) >= Number.MIN_VALUE);
}catch(e){}
try {
write(Boolean(false) >= Number.NaN);
}catch(e){}
try {
write(Boolean(false) >= Number.o5);
}catch(e){}
try {
write(Boolean(false) >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(Boolean(false) >= new Number(NaN));
}catch(e){}
try {
write(Boolean(false) >= new Number(+0));
}catch(e){}
try {
write(Boolean(false) >= new Number(-0));
}catch(e){}
try {
write(Boolean(false) >= new Number(0));
}catch(e){}
try {
write(Boolean(false) >= new Number(0.0));
}catch(e){}
try {
write(Boolean(false) >= new Number(-0.0));
}catch(e){}
try {
write(Boolean(false) >= new Number(+0.0));
}catch(e){}
try {
write(Boolean(false) >= new Number(1));
}catch(e){}
try {
write(Boolean(false) >= new Number(10));
}catch(e){}
try {
write(Boolean(false) >= new Number(10.0));
}catch(e){}
try {
write(Boolean(false) >= new Number(10.1));
}catch(e){}
try {
write(Boolean(false) >= new Number(-1));
}catch(e){}
try {
write(Boolean(false) >= new Number(-10));
}catch(e){}
try {
write(Boolean(false) >= new Number(-10.0));
}catch(e){}
try {
write(Boolean(false) >= new Number(-10.1));
}catch(e){}
try {
write(Boolean(false) >= new Number(Number.o4));
}catch(e){}
try {
write(Boolean(false) >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(Boolean(false) >= new Number(Number.NaN));
}catch(e){}
try {
write(Boolean(false) >= new Number(Number.o5));
}catch(e){}
try {
write(Boolean(false) >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(Boolean(false) >= '');
}catch(e){}
try {
write(Boolean(false) >= 0xa);
}catch(e){}
try {
write(Boolean(false) >= 04);
}catch(e){}
try {
write(Boolean(false) >= 'hello');
}catch(e){}
try {
write(Boolean(false) >= 'hel' + 'lo');
}catch(e){}
try {
write(Boolean(false) >= String(''));
}catch(e){}
try {
write(Boolean(false) >= String('hello'));
}catch(e){}
try {
write(Boolean(false) >= String('h' + 'ello'));
}catch(e){}
try {
write(Boolean(false) >= new String(''));
}catch(e){}
try {
write(Boolean(false) >= new String('hello'));
}catch(e){}
try {
write(Boolean(false) >= new String('he' + 'llo'));
}catch(e){}
try {
write(Boolean(false) >= new Object());
}catch(e){}
try {
write(Boolean(false) >= new Object());
}catch(e){}
try {
write(Boolean(false) >= [1, 2, 3]);
}catch(e){}
try {
write(Boolean(false) >= [1 ,2 , 3]);
}catch(e){}
try {
write(Boolean(false) >= new Array(3));
}catch(e){}
try {
write(Boolean(false) >= Array(3));
}catch(e){}
try {
write(Boolean(false) >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(Boolean(false) >= Array(1));
}catch(e){}
try {
write(Boolean(false) >= o3);
}catch(e){}
try {
write(new Boolean(true) >= undefined);
}catch(e){}
try {
write(new Boolean(true) >= null);
}catch(e){}
try {
write(new Boolean(true) >= true);
}catch(e){}
try {
write(new Boolean(true) >= false);
}catch(e){}
try {
write(new Boolean(true) >= Boolean(true));
}catch(e){}
try {
write(new Boolean(true) >= Boolean(false));
}catch(e){}
try {
write(new Boolean(true) >= new Boolean(true));
}catch(e){}
try {
write(new Boolean(true) >= new Boolean(false));
}catch(e){}
try {
write(new Boolean(true) >= NaN);
}catch(e){}
try {
write(new Boolean(true) >= +0);
}catch(e){}
try {
write(new Boolean(true) >= -0);
}catch(e){}
try {
write(new Boolean(true) >= 0);
}catch(e){}
try {
write(new Boolean(true) >= 0.0);
}catch(e){}
try {
write(new Boolean(true) >= -0.0);
}catch(e){}
try {
write(new Boolean(true) >= +0.0);
}catch(e){}
try {
write(new Boolean(true) >= 1);
}catch(e){}
try {
write(new Boolean(true) >= 10);
}catch(e){}
try {
write(new Boolean(true) >= 10.0);
}catch(e){}
try {
write(new Boolean(true) >= 10.1);
}catch(e){}
try {
write(new Boolean(true) >= -1);
}catch(e){}
try {
write(new Boolean(true) >= -10);
}catch(e){}
try {
write(new Boolean(true) >= -10.0);
}catch(e){}
try {
write(new Boolean(true) >= -10.1);
}catch(e){}
try {
write(new Boolean(true) >= Number.o4);
}catch(e){}
try {
write(new Boolean(true) >= Number.MIN_VALUE);
}catch(e){}
try {
write(new Boolean(true) >= Number.NaN);
}catch(e){}
try {
write(new Boolean(true) >= Number.o5);
}catch(e){}
try {
write(new Boolean(true) >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(new Boolean(true) >= new Number(NaN));
}catch(e){}
try {
write(new Boolean(true) >= new Number(+0));
}catch(e){}
try {
write(new Boolean(true) >= new Number(-0));
}catch(e){}
try {
write(new Boolean(true) >= new Number(0));
}catch(e){}
try {
write(new Boolean(true) >= new Number(0.0));
}catch(e){}
try {
write(new Boolean(true) >= new Number(-0.0));
}catch(e){}
try {
write(new Boolean(true) >= new Number(+0.0));
}catch(e){}
try {
write(new Boolean(true) >= new Number(1));
}catch(e){}
try {
write(new Boolean(true) >= new Number(10));
}catch(e){}
try {
write(new Boolean(true) >= new Number(10.0));
}catch(e){}
try {
write(new Boolean(true) >= new Number(10.1));
}catch(e){}
try {
write(new Boolean(true) >= new Number(-1));
}catch(e){}
try {
write(new Boolean(true) >= new Number(-10));
}catch(e){}
try {
write(new Boolean(true) >= new Number(-10.0));
}catch(e){}
try {
write(new Boolean(true) >= new Number(-10.1));
}catch(e){}
try {
write(new Boolean(true) >= new Number(Number.o4));
}catch(e){}
try {
write(new Boolean(true) >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(new Boolean(true) >= new Number(Number.NaN));
}catch(e){}
try {
write(new Boolean(true) >= new Number(Number.o5));
}catch(e){}
try {
write(new Boolean(true) >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(new Boolean(true) >= '');
}catch(e){}
try {
write(new Boolean(true) >= 0xa);
}catch(e){}
try {
write(new Boolean(true) >= 04);
}catch(e){}
try {
write(new Boolean(true) >= 'hello');
}catch(e){}
try {
write(new Boolean(true) >= 'hel' + 'lo');
}catch(e){}
try {
write(new Boolean(true) >= String(''));
}catch(e){}
try {
write(new Boolean(true) >= String('hello'));
}catch(e){}
try {
write(new Boolean(true) >= String('h' + 'ello'));
}catch(e){}
try {
write(new Boolean(true) >= new String(''));
}catch(e){}
try {
write(new Boolean(true) >= new String('hello'));
}catch(e){}
try {
write(new Boolean(true) >= new String('he' + 'llo'));
}catch(e){}
try {
write(new Boolean(true) >= new Object());
}catch(e){}
try {
write(new Boolean(true) >= new Object());
}catch(e){}
try {
write(new Boolean(true) >= [1, 2, 3]);
}catch(e){}
try {
write(new Boolean(true) >= [1 ,2 , 3]);
}catch(e){}
try {
write(new Boolean(true) >= new Array(3));
}catch(e){}
try {
write(new Boolean(true) >= Array(3));
}catch(e){}
try {
write(new Boolean(true) >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(new Boolean(true) >= Array(1));
}catch(e){}
try {
write(new Boolean(true) >= o3);
}catch(e){}
try {
write(new Boolean(false) >= undefined);
}catch(e){}
try {
write(new Boolean(false) >= null);
}catch(e){}
try {
write(new Boolean(false) >= true);
}catch(e){}
try {
write(new Boolean(false) >= false);
}catch(e){}
try {
write(new Boolean(false) >= Boolean(true));
}catch(e){}
try {
write(new Boolean(false) >= Boolean(false));
}catch(e){}
try {
write(new Boolean(false) >= new Boolean(true));
}catch(e){}
try {
write(new Boolean(false) >= new Boolean(false));
}catch(e){}
try {
write(new Boolean(false) >= NaN);
}catch(e){}
try {
write(new Boolean(false) >= +0);
}catch(e){}
try {
write(new Boolean(false) >= -0);
}catch(e){}
try {
write(new Boolean(false) >= 0);
}catch(e){}
try {
write(new Boolean(false) >= 0.0);
}catch(e){}
try {
write(new Boolean(false) >= -0.0);
}catch(e){}
try {
write(new Boolean(false) >= +0.0);
}catch(e){}
try {
write(new Boolean(false) >= 1);
}catch(e){}
try {
write(new Boolean(false) >= 10);
}catch(e){}
try {
write(new Boolean(false) >= 10.0);
}catch(e){}
try {
write(new Boolean(false) >= 10.1);
}catch(e){}
try {
write(new Boolean(false) >= -1);
}catch(e){}
try {
write(new Boolean(false) >= -10);
}catch(e){}
try {
write(new Boolean(false) >= -10.0);
}catch(e){}
try {
write(new Boolean(false) >= -10.1);
}catch(e){}
try {
write(new Boolean(false) >= Number.o4);
}catch(e){}
try {
write(new Boolean(false) >= Number.MIN_VALUE);
}catch(e){}
try {
write(new Boolean(false) >= Number.NaN);
}catch(e){}
try {
write(new Boolean(false) >= Number.o5);
}catch(e){}
try {
write(new Boolean(false) >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(new Boolean(false) >= new Number(NaN));
}catch(e){}
try {
write(new Boolean(false) >= new Number(+0));
}catch(e){}
try {
write(new Boolean(false) >= new Number(-0));
}catch(e){}
try {
write(new Boolean(false) >= new Number(0));
}catch(e){}
try {
write(new Boolean(false) >= new Number(0.0));
}catch(e){}
try {
write(new Boolean(false) >= new Number(-0.0));
}catch(e){}
try {
write(new Boolean(false) >= new Number(+0.0));
}catch(e){}
try {
write(new Boolean(false) >= new Number(1));
}catch(e){}
try {
write(new Boolean(false) >= new Number(10));
}catch(e){}
try {
write(new Boolean(false) >= new Number(10.0));
}catch(e){}
try {
write(new Boolean(false) >= new Number(10.1));
}catch(e){}
try {
write(new Boolean(false) >= new Number(-1));
}catch(e){}
try {
write(new Boolean(false) >= new Number(-10));
}catch(e){}
try {
write(new Boolean(false) >= new Number(-10.0));
}catch(e){}
try {
write(new Boolean(false) >= new Number(-10.1));
}catch(e){}
try {
write(new Boolean(false) >= new Number(Number.o4));
}catch(e){}
try {
write(new Boolean(false) >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(new Boolean(false) >= new Number(Number.NaN));
}catch(e){}
try {
write(new Boolean(false) >= new Number(Number.o5));
}catch(e){}
try {
write(new Boolean(false) >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(new Boolean(false) >= '');
}catch(e){}
try {
write(new Boolean(false) >= 0xa);
}catch(e){}
try {
write(new Boolean(false) >= 04);
}catch(e){}
try {
write(new Boolean(false) >= 'hello');
}catch(e){}
try {
write(new Boolean(false) >= 'hel' + 'lo');
}catch(e){}
try {
write(new Boolean(false) >= String(''));
}catch(e){}
try {
write(new Boolean(false) >= String('hello'));
}catch(e){}
try {
write(new Boolean(false) >= String('h' + 'ello'));
}catch(e){}
try {
write(new Boolean(false) >= new String(''));
}catch(e){}
try {
write(new Boolean(false) >= new String('hello'));
}catch(e){}
try {
write(new Boolean(false) >= new String('he' + 'llo'));
}catch(e){}
try {
write(new Boolean(false) >= new Object());
}catch(e){}
try {
write(new Boolean(false) >= new Object());
}catch(e){}
try {
write(new Boolean(false) >= [1, 2, 3]);
}catch(e){}
try {
write(new Boolean(false) >= [1 ,2 , 3]);
}catch(e){}
try {
write(new Boolean(false) >= new Array(3));
}catch(e){}
try {
write(new Boolean(false) >= Array(3));
}catch(e){}
try {
write(new Boolean(false) >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(new Boolean(false) >= Array(1));
}catch(e){}
try {
write(new Boolean(false) >= o3);
}catch(e){}
try {
write(NaN >= undefined);
}catch(e){}
try {
write(NaN >= null);
}catch(e){}
try {
write(NaN >= true);
}catch(e){}
try {
write(NaN >= false);
}catch(e){}
try {
write(NaN >= Boolean(true));
}catch(e){}
try {
write(NaN >= Boolean(false));
}catch(e){}
try {
write(NaN >= new Boolean(true));
}catch(e){}
try {
write(NaN >= new Boolean(false));
}catch(e){}
try {
write(NaN >= NaN);
}catch(e){}
try {
write(NaN >= +0);
}catch(e){}
try {
write(NaN >= -0);
}catch(e){}
try {
write(NaN >= 0);
}catch(e){}
try {
write(NaN >= 0.0);
}catch(e){}
try {
write(NaN >= -0.0);
}catch(e){}
try {
write(NaN >= +0.0);
}catch(e){}
try {
write(NaN >= 1);
}catch(e){}
try {
write(NaN >= 10);
}catch(e){}
try {
write(NaN >= 10.0);
}catch(e){}
try {
write(NaN >= 10.1);
}catch(e){}
try {
write(NaN >= -1);
}catch(e){}
try {
write(NaN >= -10);
}catch(e){}
try {
write(NaN >= -10.0);
}catch(e){}
try {
write(NaN >= -10.1);
}catch(e){}
try {
write(NaN >= Number.o4);
}catch(e){}
try {
write(NaN >= Number.MIN_VALUE);
}catch(e){}
try {
write(NaN >= Number.NaN);
}catch(e){}
try {
write(NaN >= Number.o5);
}catch(e){}
try {
write(NaN >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(NaN >= new Number(NaN));
}catch(e){}
try {
write(NaN >= new Number(+0));
}catch(e){}
try {
write(NaN >= new Number(-0));
}catch(e){}
try {
write(NaN >= new Number(0));
}catch(e){}
try {
write(NaN >= new Number(0.0));
}catch(e){}
try {
write(NaN >= new Number(-0.0));
}catch(e){}
try {
write(NaN >= new Number(+0.0));
}catch(e){}
try {
write(NaN >= new Number(1));
}catch(e){}
try {
write(NaN >= new Number(10));
}catch(e){}
try {
write(NaN >= new Number(10.0));
}catch(e){}
try {
write(NaN >= new Number(10.1));
}catch(e){}
try {
write(NaN >= new Number(-1));
}catch(e){}
try {
write(NaN >= new Number(-10));
}catch(e){}
try {
write(NaN >= new Number(-10.0));
}catch(e){}
try {
write(NaN >= new Number(-10.1));
}catch(e){}
try {
write(NaN >= new Number(Number.o4));
}catch(e){}
try {
write(NaN >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(NaN >= new Number(Number.NaN));
}catch(e){}
try {
write(NaN >= new Number(Number.o5));
}catch(e){}
try {
write(NaN >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(NaN >= '');
}catch(e){}
try {
write(NaN >= 0xa);
}catch(e){}
try {
write(NaN >= 04);
}catch(e){}
try {
write(NaN >= 'hello');
}catch(e){}
try {
write(NaN >= 'hel' + 'lo');
}catch(e){}
try {
write(NaN >= String(''));
}catch(e){}
try {
write(NaN >= String('hello'));
}catch(e){}
try {
write(NaN >= String('h' + 'ello'));
}catch(e){}
try {
write(NaN >= new String(''));
}catch(e){}
try {
write(NaN >= new String('hello'));
}catch(e){}
try {
write(NaN >= new String('he' + 'llo'));
}catch(e){}
try {
write(NaN >= new Object());
}catch(e){}
try {
write(NaN >= new Object());
}catch(e){}
try {
write(NaN >= [1, 2, 3]);
}catch(e){}
try {
write(NaN >= [1 ,2 , 3]);
}catch(e){}
try {
write(NaN >= new Array(3));
}catch(e){}
try {
write(NaN >= Array(3));
}catch(e){}
try {
write(NaN >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(NaN >= Array(1));
}catch(e){}
try {
write(NaN >= o3);
}catch(e){}
try {
write(+0 >= undefined);
}catch(e){}
try {
write(+0 >= null);
}catch(e){}
try {
write(+0 >= true);
}catch(e){}
try {
write(+0 >= false);
}catch(e){}
try {
write(+0 >= Boolean(true));
}catch(e){}
try {
write(+0 >= Boolean(false));
}catch(e){}
try {
write(+0 >= new Boolean(true));
}catch(e){}
try {
write(+0 >= new Boolean(false));
}catch(e){}
try {
write(+0 >= NaN);
}catch(e){}
try {
write(+0 >= +0);
}catch(e){}
try {
write(+0 >= -0);
}catch(e){}
try {
write(+0 >= 0);
}catch(e){}
try {
write(+0 >= 0.0);
}catch(e){}
try {
write(+0 >= -0.0);
}catch(e){}
try {
write(+0 >= +0.0);
}catch(e){}
try {
write(+0 >= 1);
}catch(e){}
try {
write(+0 >= 10);
}catch(e){}
try {
write(+0 >= 10.0);
}catch(e){}
try {
write(+0 >= 10.1);
}catch(e){}
try {
write(+0 >= -1);
}catch(e){}
try {
write(+0 >= -10);
}catch(e){}
try {
write(+0 >= -10.0);
}catch(e){}
try {
write(+0 >= -10.1);
}catch(e){}
try {
write(+0 >= Number.o4);
}catch(e){}
try {
write(+0 >= Number.MIN_VALUE);
}catch(e){}
try {
write(+0 >= Number.NaN);
}catch(e){}
try {
write(+0 >= Number.o5);
}catch(e){}
try {
write(+0 >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(+0 >= new Number(NaN));
}catch(e){}
try {
write(+0 >= new Number(+0));
}catch(e){}
try {
write(+0 >= new Number(-0));
}catch(e){}
try {
write(+0 >= new Number(0));
}catch(e){}
try {
write(+0 >= new Number(0.0));
}catch(e){}
try {
write(+0 >= new Number(-0.0));
}catch(e){}
try {
write(+0 >= new Number(+0.0));
}catch(e){}
try {
write(+0 >= new Number(1));
}catch(e){}
try {
write(+0 >= new Number(10));
}catch(e){}
try {
write(+0 >= new Number(10.0));
}catch(e){}
try {
write(+0 >= new Number(10.1));
}catch(e){}
try {
write(+0 >= new Number(-1));
}catch(e){}
try {
write(+0 >= new Number(-10));
}catch(e){}
try {
write(+0 >= new Number(-10.0));
}catch(e){}
try {
write(+0 >= new Number(-10.1));
}catch(e){}
try {
write(+0 >= new Number(Number.o4));
}catch(e){}
try {
write(+0 >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(+0 >= new Number(Number.NaN));
}catch(e){}
try {
write(+0 >= new Number(Number.o5));
}catch(e){}
try {
write(+0 >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(+0 >= '');
}catch(e){}
try {
write(+0 >= 0xa);
}catch(e){}
try {
write(+0 >= 04);
}catch(e){}
try {
write(+0 >= 'hello');
}catch(e){}
try {
write(+0 >= 'hel' + 'lo');
}catch(e){}
try {
write(+0 >= String(''));
}catch(e){}
try {
write(+0 >= String('hello'));
}catch(e){}
try {
write(+0 >= String('h' + 'ello'));
}catch(e){}
try {
write(+0 >= new String(''));
}catch(e){}
try {
write(+0 >= new String('hello'));
}catch(e){}
try {
write(+0 >= new String('he' + 'llo'));
}catch(e){}
try {
write(+0 >= new Object());
}catch(e){}
try {
write(+0 >= new Object());
}catch(e){}
try {
write(+0 >= [1, 2, 3]);
}catch(e){}
try {
write(+0 >= [1 ,2 , 3]);
}catch(e){}
try {
write(+0 >= new Array(3));
}catch(e){}
try {
write(+0 >= Array(3));
}catch(e){}
try {
write(+0 >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(+0 >= Array(1));
}catch(e){}
try {
write(+0 >= o3);
}catch(e){}
try {
write(-0 >= undefined);
}catch(e){}
try {
write(-0 >= null);
}catch(e){}
try {
write(-0 >= true);
}catch(e){}
try {
write(-0 >= false);
}catch(e){}
try {
write(-0 >= Boolean(true));
}catch(e){}
try {
write(-0 >= Boolean(false));
}catch(e){}
try {
write(-0 >= new Boolean(true));
}catch(e){}
try {
write(-0 >= new Boolean(false));
}catch(e){}
try {
write(-0 >= NaN);
}catch(e){}
try {
write(-0 >= +0);
}catch(e){}
try {
write(-0 >= -0);
}catch(e){}
try {
write(-0 >= 0);
}catch(e){}
try {
write(-0 >= 0.0);
}catch(e){}
try {
write(-0 >= -0.0);
}catch(e){}
try {
write(-0 >= +0.0);
}catch(e){}
try {
write(-0 >= 1);
}catch(e){}
try {
write(-0 >= 10);
}catch(e){}
try {
write(-0 >= 10.0);
}catch(e){}
try {
write(-0 >= 10.1);
}catch(e){}
try {
write(-0 >= -1);
}catch(e){}
try {
write(-0 >= -10);
}catch(e){}
try {
write(-0 >= -10.0);
}catch(e){}
try {
write(-0 >= -10.1);
}catch(e){}
try {
write(-0 >= Number.o4);
}catch(e){}
try {
write(-0 >= Number.MIN_VALUE);
}catch(e){}
try {
write(-0 >= Number.NaN);
}catch(e){}
try {
write(-0 >= Number.o5);
}catch(e){}
try {
write(-0 >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(-0 >= new Number(NaN));
}catch(e){}
try {
write(-0 >= new Number(+0));
}catch(e){}
try {
write(-0 >= new Number(-0));
}catch(e){}
try {
write(-0 >= new Number(0));
}catch(e){}
try {
write(-0 >= new Number(0.0));
}catch(e){}
try {
write(-0 >= new Number(-0.0));
}catch(e){}
try {
write(-0 >= new Number(+0.0));
}catch(e){}
try {
write(-0 >= new Number(1));
}catch(e){}
try {
write(-0 >= new Number(10));
}catch(e){}
try {
write(-0 >= new Number(10.0));
}catch(e){}
try {
write(-0 >= new Number(10.1));
}catch(e){}
try {
write(-0 >= new Number(-1));
}catch(e){}
try {
write(-0 >= new Number(-10));
}catch(e){}
try {
write(-0 >= new Number(-10.0));
}catch(e){}
try {
write(-0 >= new Number(-10.1));
}catch(e){}
try {
write(-0 >= new Number(Number.o4));
}catch(e){}
try {
write(-0 >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(-0 >= new Number(Number.NaN));
}catch(e){}
try {
write(-0 >= new Number(Number.o5));
}catch(e){}
try {
write(-0 >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(-0 >= '');
}catch(e){}
try {
write(-0 >= 0xa);
}catch(e){}
try {
write(-0 >= 04);
}catch(e){}
try {
write(-0 >= 'hello');
}catch(e){}
try {
write(-0 >= 'hel' + 'lo');
}catch(e){}
try {
write(-0 >= String(''));
}catch(e){}
try {
write(-0 >= String('hello'));
}catch(e){}
try {
write(-0 >= String('h' + 'ello'));
}catch(e){}
try {
write(-0 >= new String(''));
}catch(e){}
try {
write(-0 >= new String('hello'));
}catch(e){}
try {
write(-0 >= new String('he' + 'llo'));
}catch(e){}
try {
write(-0 >= new Object());
}catch(e){}
try {
write(-0 >= new Object());
}catch(e){}
try {
write(-0 >= [1, 2, 3]);
}catch(e){}
try {
write(-0 >= [1 ,2 , 3]);
}catch(e){}
try {
write(-0 >= new Array(3));
}catch(e){}
try {
write(-0 >= Array(3));
}catch(e){}
try {
write(-0 >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(-0 >= Array(1));
}catch(e){}
try {
write(-0 >= o3);
}catch(e){}
try {
write(0 >= undefined);
}catch(e){}
try {
write(0 >= null);
}catch(e){}
try {
write(0 >= true);
}catch(e){}
try {
write(0 >= false);
}catch(e){}
try {
write(0 >= Boolean(true));
}catch(e){}
try {
write(0 >= Boolean(false));
}catch(e){}
try {
write(0 >= new Boolean(true));
}catch(e){}
try {
write(0 >= new Boolean(false));
}catch(e){}
try {
write(0 >= NaN);
}catch(e){}
try {
write(0 >= +0);
}catch(e){}
try {
write(0 >= -0);
}catch(e){}
try {
write(0 >= 0);
}catch(e){}
try {
write(0 >= 0.0);
}catch(e){}
try {
write(0 >= -0.0);
}catch(e){}
try {
write(0 >= +0.0);
}catch(e){}
try {
write(0 >= 1);
}catch(e){}
try {
write(0 >= 10);
}catch(e){}
try {
write(0 >= 10.0);
}catch(e){}
try {
write(0 >= 10.1);
}catch(e){}
try {
write(0 >= -1);
}catch(e){}
try {
write(0 >= -10);
}catch(e){}
try {
write(0 >= -10.0);
}catch(e){}
try {
write(0 >= -10.1);
}catch(e){}
try {
write(0 >= Number.o4);
}catch(e){}
try {
write(0 >= Number.MIN_VALUE);
}catch(e){}
try {
write(0 >= Number.NaN);
}catch(e){}
try {
write(0 >= Number.o5);
}catch(e){}
try {
write(0 >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(0 >= new Number(NaN));
}catch(e){}
try {
write(0 >= new Number(+0));
}catch(e){}
try {
write(0 >= new Number(-0));
}catch(e){}
try {
write(0 >= new Number(0));
}catch(e){}
try {
write(0 >= new Number(0.0));
}catch(e){}
try {
write(0 >= new Number(-0.0));
}catch(e){}
try {
write(0 >= new Number(+0.0));
}catch(e){}
try {
write(0 >= new Number(1));
}catch(e){}
try {
write(0 >= new Number(10));
}catch(e){}
try {
write(0 >= new Number(10.0));
}catch(e){}
try {
write(0 >= new Number(10.1));
}catch(e){}
try {
write(0 >= new Number(-1));
}catch(e){}
try {
write(0 >= new Number(-10));
}catch(e){}
try {
write(0 >= new Number(-10.0));
}catch(e){}
try {
write(0 >= new Number(-10.1));
}catch(e){}
try {
write(0 >= new Number(Number.o4));
}catch(e){}
try {
write(0 >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(0 >= new Number(Number.NaN));
}catch(e){}
try {
write(0 >= new Number(Number.o5));
}catch(e){}
try {
write(0 >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(0 >= '');
}catch(e){}
try {
write(0 >= 0xa);
}catch(e){}
try {
write(0 >= 04);
}catch(e){}
try {
write(0 >= 'hello');
}catch(e){}
try {
write(0 >= 'hel' + 'lo');
}catch(e){}
try {
write(0 >= String(''));
}catch(e){}
try {
write(0 >= String('hello'));
}catch(e){}
try {
write(0 >= String('h' + 'ello'));
}catch(e){}
try {
write(0 >= new String(''));
}catch(e){}
try {
write(0 >= new String('hello'));
}catch(e){}
try {
write(0 >= new String('he' + 'llo'));
}catch(e){}
try {
write(0 >= new Object());
}catch(e){}
try {
write(0 >= new Object());
}catch(e){}
try {
write(0 >= [1, 2, 3]);
}catch(e){}
try {
write(0 >= [1 ,2 , 3]);
}catch(e){}
try {
write(0 >= new Array(3));
}catch(e){}
try {
write(0 >= Array(3));
}catch(e){}
try {
write(0 >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(0 >= Array(1));
}catch(e){}
try {
write(0 >= o3);
}catch(e){}
try {
write(0.0 >= undefined);
}catch(e){}
try {
write(0.0 >= null);
}catch(e){}
try {
write(0.0 >= true);
}catch(e){}
try {
write(0.0 >= false);
}catch(e){}
try {
write(0.0 >= Boolean(true));
}catch(e){}
try {
write(0.0 >= Boolean(false));
}catch(e){}
try {
write(0.0 >= new Boolean(true));
}catch(e){}
try {
write(0.0 >= new Boolean(false));
}catch(e){}
try {
write(0.0 >= NaN);
}catch(e){}
try {
write(0.0 >= +0);
}catch(e){}
try {
write(0.0 >= -0);
}catch(e){}
try {
write(0.0 >= 0);
}catch(e){}
try {
write(0.0 >= 0.0);
}catch(e){}
try {
write(0.0 >= -0.0);
}catch(e){}
try {
write(0.0 >= +0.0);
}catch(e){}
try {
write(0.0 >= 1);
}catch(e){}
try {
write(0.0 >= 10);
}catch(e){}
try {
write(0.0 >= 10.0);
}catch(e){}
try {
write(0.0 >= 10.1);
}catch(e){}
try {
write(0.0 >= -1);
}catch(e){}
try {
write(0.0 >= -10);
}catch(e){}
try {
write(0.0 >= -10.0);
}catch(e){}
try {
write(0.0 >= -10.1);
}catch(e){}
try {
write(0.0 >= Number.o4);
}catch(e){}
try {
write(0.0 >= Number.MIN_VALUE);
}catch(e){}
try {
write(0.0 >= Number.NaN);
}catch(e){}
try {
write(0.0 >= Number.o5);
}catch(e){}
try {
write(0.0 >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(0.0 >= new Number(NaN));
}catch(e){}
try {
write(0.0 >= new Number(+0));
}catch(e){}
try {
write(0.0 >= new Number(-0));
}catch(e){}
try {
write(0.0 >= new Number(0));
}catch(e){}
try {
write(0.0 >= new Number(0.0));
}catch(e){}
try {
write(0.0 >= new Number(-0.0));
}catch(e){}
try {
write(0.0 >= new Number(+0.0));
}catch(e){}
try {
write(0.0 >= new Number(1));
}catch(e){}
try {
write(0.0 >= new Number(10));
}catch(e){}
try {
write(0.0 >= new Number(10.0));
}catch(e){}
try {
write(0.0 >= new Number(10.1));
}catch(e){}
try {
write(0.0 >= new Number(-1));
}catch(e){}
try {
write(0.0 >= new Number(-10));
}catch(e){}
try {
write(0.0 >= new Number(-10.0));
}catch(e){}
try {
write(0.0 >= new Number(-10.1));
}catch(e){}
try {
write(0.0 >= new Number(Number.o4));
}catch(e){}
try {
write(0.0 >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(0.0 >= new Number(Number.NaN));
}catch(e){}
try {
write(0.0 >= new Number(Number.o5));
}catch(e){}
try {
write(0.0 >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(0.0 >= '');
}catch(e){}
try {
write(0.0 >= 0xa);
}catch(e){}
try {
write(0.0 >= 04);
}catch(e){}
try {
write(0.0 >= 'hello');
}catch(e){}
try {
write(0.0 >= 'hel' + 'lo');
}catch(e){}
try {
write(0.0 >= String(''));
}catch(e){}
try {
write(0.0 >= String('hello'));
}catch(e){}
try {
write(0.0 >= String('h' + 'ello'));
}catch(e){}
try {
write(0.0 >= new String(''));
}catch(e){}
try {
write(0.0 >= new String('hello'));
}catch(e){}
try {
write(0.0 >= new String('he' + 'llo'));
}catch(e){}
try {
write(0.0 >= new Object());
}catch(e){}
try {
write(0.0 >= new Object());
}catch(e){}
try {
write(0.0 >= [1, 2, 3]);
}catch(e){}
try {
write(0.0 >= [1 ,2 , 3]);
}catch(e){}
try {
write(0.0 >= new Array(3));
}catch(e){}
try {
write(0.0 >= Array(3));
}catch(e){}
try {
write(0.0 >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(0.0 >= Array(1));
}catch(e){}
try {
write(0.0 >= o3);
}catch(e){}
try {
write(-0.0 >= undefined);
}catch(e){}
try {
write(-0.0 >= null);
}catch(e){}
try {
write(-0.0 >= true);
}catch(e){}
try {
write(-0.0 >= false);
}catch(e){}
try {
write(-0.0 >= Boolean(true));
}catch(e){}
try {
write(-0.0 >= Boolean(false));
}catch(e){}
try {
write(-0.0 >= new Boolean(true));
}catch(e){}
try {
write(-0.0 >= new Boolean(false));
}catch(e){}
try {
write(-0.0 >= NaN);
}catch(e){}
try {
write(-0.0 >= +0);
}catch(e){}
try {
write(-0.0 >= -0);
}catch(e){}
try {
write(-0.0 >= 0);
}catch(e){}
try {
write(-0.0 >= 0.0);
}catch(e){}
try {
write(-0.0 >= -0.0);
}catch(e){}
try {
write(-0.0 >= +0.0);
}catch(e){}
try {
write(-0.0 >= 1);
}catch(e){}
try {
write(-0.0 >= 10);
}catch(e){}
try {
write(-0.0 >= 10.0);
}catch(e){}
try {
write(-0.0 >= 10.1);
}catch(e){}
try {
write(-0.0 >= -1);
}catch(e){}
try {
write(-0.0 >= -10);
}catch(e){}
try {
write(-0.0 >= -10.0);
}catch(e){}
try {
write(-0.0 >= -10.1);
}catch(e){}
try {
write(-0.0 >= Number.o4);
}catch(e){}
try {
write(-0.0 >= Number.MIN_VALUE);
}catch(e){}
try {
write(-0.0 >= Number.NaN);
}catch(e){}
try {
write(-0.0 >= Number.o5);
}catch(e){}
try {
write(-0.0 >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(-0.0 >= new Number(NaN));
}catch(e){}
try {
write(-0.0 >= new Number(+0));
}catch(e){}
try {
write(-0.0 >= new Number(-0));
}catch(e){}
try {
write(-0.0 >= new Number(0));
}catch(e){}
try {
write(-0.0 >= new Number(0.0));
}catch(e){}
try {
write(-0.0 >= new Number(-0.0));
}catch(e){}
try {
write(-0.0 >= new Number(+0.0));
}catch(e){}
try {
write(-0.0 >= new Number(1));
}catch(e){}
try {
write(-0.0 >= new Number(10));
}catch(e){}
try {
write(-0.0 >= new Number(10.0));
}catch(e){}
try {
write(-0.0 >= new Number(10.1));
}catch(e){}
try {
write(-0.0 >= new Number(-1));
}catch(e){}
try {
write(-0.0 >= new Number(-10));
}catch(e){}
try {
write(-0.0 >= new Number(-10.0));
}catch(e){}
try {
write(-0.0 >= new Number(-10.1));
}catch(e){}
try {
write(-0.0 >= new Number(Number.o4));
}catch(e){}
try {
write(-0.0 >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(-0.0 >= new Number(Number.NaN));
}catch(e){}
try {
write(-0.0 >= new Number(Number.o5));
}catch(e){}
try {
write(-0.0 >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
try {
write(-0.0 >= '');
}catch(e){}
try {
write(-0.0 >= 0xa);
}catch(e){}
try {
write(-0.0 >= 04);
}catch(e){}
try {
write(-0.0 >= 'hello');
}catch(e){}
try {
write(-0.0 >= 'hel' + 'lo');
}catch(e){}
try {
write(-0.0 >= String(''));
}catch(e){}
try {
write(-0.0 >= String('hello'));
}catch(e){}
try {
write(-0.0 >= String('h' + 'ello'));
}catch(e){}
try {
write(-0.0 >= new String(''));
}catch(e){}
try {
write(-0.0 >= new String('hello'));
}catch(e){}
try {
write(-0.0 >= new String('he' + 'llo'));
}catch(e){}
try {
write(-0.0 >= new Object());
}catch(e){}
try {
write(-0.0 >= new Object());
}catch(e){}
try {
write(-0.0 >= [1, 2, 3]);
}catch(e){}
try {
write(-0.0 >= [1 ,2 , 3]);
}catch(e){}
try {
write(-0.0 >= new Array(3));
}catch(e){}
try {
write(-0.0 >= Array(3));
}catch(e){}
try {
write(-0.0 >= new Array(1 ,2 ,3));
}catch(e){}
try {
write(-0.0 >= Array(1));
}catch(e){}
try {
write(-0.0 >= o3);
}catch(e){}
try {
write(+0.0 >= undefined);
}catch(e){}
try {
write(+0.0 >= null);
}catch(e){}
try {
write(+0.0 >= true);
}catch(e){}
try {
write(+0.0 >= false);
}catch(e){}
try {
write(+0.0 >= Boolean(true));
}catch(e){}
try {
write(+0.0 >= Boolean(false));
}catch(e){}
try {
write(+0.0 >= new Boolean(true));
}catch(e){}
try {
write(+0.0 >= new Boolean(false));
}catch(e){}
try {
write(+0.0 >= NaN);
}catch(e){}
try {
write(+0.0 >= +0);
}catch(e){}
try {
write(+0.0 >= -0);
}catch(e){}
try {
write(+0.0 >= 0);
}catch(e){}
try {
write(+0.0 >= 0.0);
}catch(e){}
try {
write(+0.0 >= -0.0);
}catch(e){}
try {
write(+0.0 >= +0.0);
}catch(e){}
try {
write(+0.0 >= 1);
}catch(e){}
try {
write(+0.0 >= 10);
}catch(e){}
try {
write(+0.0 >= 10.0);
}catch(e){}
try {
write(+0.0 >= 10.1);
}catch(e){}
try {
write(+0.0 >= -1);
}catch(e){}
try {
write(+0.0 >= -10);
}catch(e){}
try {
write(+0.0 >= -10.0);
}catch(e){}
try {
write(+0.0 >= -10.1);
}catch(e){}
try {
write(+0.0 >= Number.o4);
}catch(e){}
try {
write(+0.0 >= Number.MIN_VALUE);
}catch(e){}
try {
write(+0.0 >= Number.NaN);
}catch(e){}
try {
write(+0.0 >= Number.o5);
}catch(e){}
try {
write(+0.0 >= Number.NEGATIVE_INFINITY);
}catch(e){}
try {
write(+0.0 >= new Number(NaN));
}catch(e){}
try {
write(+0.0 >= new Number(+0));
}catch(e){}
try {
write(+0.0 >= new Number(-0));
}catch(e){}
try {
write(+0.0 >= new Number(0));
}catch(e){}
try {
write(+0.0 >= new Number(0.0));
}catch(e){}
try {
write(+0.0 >= new Number(-0.0));
}catch(e){}
try {
write(+0.0 >= new Number(+0.0));
}catch(e){}
try {
write(+0.0 >= new Number(1));
}catch(e){}
try {
write(+0.0 >= new Number(10));
}catch(e){}
try {
write(+0.0 >= new Number(10.0));
}catch(e){}
try {
write(+0.0 >= new Number(10.1));
}catch(e){}
try {
write(+0.0 >= new Number(-1));
}catch(e){}
try {
write(+0.0 >= new Number(-10));
}catch(e){}
try {
write(+0.0 >= new Number(-10.0));
}catch(e){}
try {
write(+0.0 >= new Number(-10.1));
}catch(e){}
try {
write(+0.0 >= new Number(Number.o4));
}catch(e){}
try {
write(+0.0 >= new Number(Number.MIN_VALUE));
}catch(e){}
try {
write(+0.0 >= new Number(Number.NaN));
}catch(e){}
try {
write(+0.0 >= new Number(Number.o5));
}catch(e){}
try {
write(+0.0 >= new Number(Number.NEGATIVE_INFINITY));
}catch(e){}
