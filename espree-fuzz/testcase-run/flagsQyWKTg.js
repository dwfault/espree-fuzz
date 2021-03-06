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

var o677 = o474.o666[o689]


var o5 = "hello";

try {
write("Global object builtin properties");
}catch(e){}

var o6 = [ "NaN", "Infinity", "undefined"];

try {
for(var o7=0;o7<o6.length;o7++)
{
   try {
o3("delete " +  o6[o7]);
}catch(e){}
   try {
o3(o6[o7]);
}catch(e){}
}
}catch(e){}

try {
for(var o7=0;o7<o6.length;o7++)
{
   try {
o3(o6[o7] + "= \"hello\";");
}catch(e){}
   try {
o3(o6[o7]);
}catch(e){}
}
}catch(e){}

try {
write("Math Object builtin properties");
}catch(e){}

var o8 = ["PI", "E", "LN10", "LN2", "LOG2E", "LOG10E", "SQRT1_2", "SQRT2"];


try {
for(var o7=0;o7<o8.length;o7++)
{
   try {
o3("Math." + o8[o7] + " = overwrite");
}catch(e){}
   try {
o3("Math." + o8[o7]);
}catch(e){}
}
}catch(e){}

try {
for(var o7=0;o7<o8.length;o7++)
{
   try {
o3("delete Math." +  o8[o7]);
}catch(e){}
   try {
o3("Math." + o8[o7]);
}catch(e){}
}
}catch(e){}

try {
write("Number Object builtin properties");
}catch(e){}

var o9 = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"];


try {
for(var o7=0;o7<o9.length;o7++)
{
   try {
o3("Number." + o9[o7] + " = overwrite");
}catch(e){}
   try {
o3("Number." + o9[o7]);
}catch(e){}
}
}catch(e){}

try {
for(var o7=0;o7<o8.length;o7++)
{
   try {
o3("delete Number." +  o9[o7]);
}catch(e){}
   try {
o3("Number." + o9[o7]);
}catch(e){}
}
}catch(e){}
