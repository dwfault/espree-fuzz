//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o970 = "GameBoy";  
var target = {
    'jpeg': 'image/jpeg',
    o512: 1,
    o513: 2,
    o514: 3,
    o515: function (o515) {
        try {
return o510.o516(null, '/', 16384 | 511 /* 0777 */ , 0);
}catch(e){}
    },
    o516: function (o517, name, o518, o486) {
        try {
if (o489.o519(o518) || o489.o520(o518)) {
            // no supported
            try {
throw new o489.o496(o352.o353);
}catch(e){}
        }
}catch(e){}
        try {
if (!o510.o511) {
            try {
o510.o511 = {
                o521: {
                    o494: {
                        o522: o510.o523.o522,
                        o524: o510.o523.o524,
                        o525: o510.o523.o525,
                        o526: o510.o523.o526,
                        o527: o510.o523.o527,
                        o528: o510.o523.o528,
                        o529: o510.o523.o529,
                        o530: o510.o523.o530,
                        o531: o510.o523.o531
                    },
                    o492: {
                        o532: o510.o491.o532
                    }
                },
                o533: {
                    o494: {
                        o522: o510.o523.o522,
                        o524: o510.o523.o524
                    },
                    o492: {
                        o532: o510.o491.o532,
                        o27: o510.o491.o27,
                        write: o510.o491.write,
                        o215: o510.o491.o215,
                        o534: o510.o491.o534
                    }
                },
                link: {
                    o494: {
                        o522: o510.o523.o522,
                        o524: o510.o523.o524,
                        o535: o510.o523.o535
                    },
                    o492: {}
                },
                o536: {
                    o494: {
                        o522: o510.o523.o522,
                        o524: o510.o523.o524
                    },
                    o492: o489.o537
                },
            };
}catch(e){}
        }
}catch(e){}
        var o494 = o489.o516(o517, name, o518, o486);
        try {
if (o489.o538(o494.o518)) {
            try {
o494.o523 = o510.o511.o521.o494;
}catch(e){}
            try {
o494.o491 = o510.o511.o521.o492;
}catch(e){}
            try {
o494.o539 = {};
}catch(e){}
        } else try {
if (o489.o540(o494.o518)) {
            try {
o494.o523 = o510.o511.o533.o494;
}catch(e){}
            try {
o494.o491 = o510.o511.o533.o492;
}catch(e){}
            try {
o494.o539 = [];
}catch(e){}
            try {
o494.o541 = o510.o513;
}catch(e){}
        } else try {
if (o489.o542(o494.o518)) {
            try {
o494.o523 = o510.o511.link.o494;
}catch(e){}
            try {
o494.o491 = o510.o511.link.o492;
}catch(e){}
        } else try {
if (o489.o543(o494.o518)) {
            try {
o494.o523 = o510.o511.o536.o494;
}catch(e){}
            try {
o494.o491 = o510.o511.o536.o492;
}catch(e){}
        }
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
        try {
o494.o504 = Date.o4();
}catch(e){}
        // add the new node to the parent
        try {
if (o517) {
            try {
o517.o539[name] = o494;
}catch(e){}
        }
}catch(e){}
        try {
return o494;
}catch(e){}
    },
    o544: function (o494) {
        try {
if (o494.o541 !== o510.o513) {
            var o539 = o494.o539;
            try {
o494.o539 = Array.prototype.slice.call(o539);
}catch(e){}
            try {
o494.o541 = o510.o513;
}catch(e){}
        }
}catch(e){}
    },
    o523: {
        o522: function (o494) {
            var o545 = {};
            // device numbers reuse inode numbers.
            try {
o545.o486 = o489.o543(o494.o518) ? o494.o333 : 1;
}catch(e){}
            try {
o545.o546 = o494.o333;
}catch(e){}
            try {
o545.o518 = o494.o518;
}catch(e){}
            try {
o545.o547 = 1;
}catch(e){}
            try {
o545.o548 = 0;
}catch(e){}
            try {
o545.o549 = 0;
}catch(e){}
            try {
o545.o495 = o494.o495;
}catch(e){}
            try {
if (o489.o538(o494.o518)) {
                try {
o545.o85 = 4096;
}catch(e){}
            } else try {
if (o489.o540(o494.o518)) {
                try {
o545.o85 = o494.o539.length;
}catch(e){}
            } else try {
if (o489.o542(o494.o518)) {
                try {
o545.o85 = o494.link.length;
}catch(e){}
            } else {
                try {
o545.o85 = 0;
}catch(e){}
            }
}catch(e){}
}catch(e){}
}catch(e){}
            try {
o545.o550 = new Date(o494.o504);
}catch(e){}
            try {
o545.o551 = new Date(o494.o504);
}catch(e){}
            try {
o545.o552 = new Date(o494.o504);
}catch(e){}
            // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
            //       but this is not required by the standard.
            try {
o545.o553 = 4096;
}catch(e){}
            try {
o545.o554 = Math.ceil(o545.o85 / o545.o553);
}catch(e){}
            try {
return o545;
}catch(e){}
        },
        o524: function (o494, o545) {
            try {
if (o545.o518 !== undefined) {
                try {
o494.o518 = o545.o518;
}catch(e){}
            }
}catch(e){}
            try {
if (o545.o504 !== undefined) {
                try {
o494.o504 = o545.o504;
}catch(e){}
            }
}catch(e){}
            try {
if (o545.o85 !== undefined) {
                try {
o510.o544(o494);
}catch(e){}
                var o539 = o494.o539;
                try {
if (o545.o85 < o539.length) try {
o539.length = o545.o85;
}catch(e){}
                else
                    try {
while (o545.o85 > o539.length) try {
o539.push(0);
}catch(e){}
}catch(e){}
}catch(e){}
            }
}catch(e){}
        },
        o525: function (o517, name) {
            try {
throw o489.o555[o352.o354];
}catch(e){}
        },
        o526: function (o517, name, o518, o486) {
            try {
return o510.o516(o517, name, o518, o486);
}catch(e){}
        },
        o527: function (o556, o557, o558) {
            // if we're overwriting a directory at new_name, make sure it's empty.
            try {
if (o489.o538(o556.o518)) {
                var o559;
                try {
try {
                    try {
o559 = o489.o560(o557, o558);
}catch(e){}
                } catch (o189) {}
}catch(e){}
                try {
if (o559) {
                    try {
for (var o82 in o559.o539) {
                        try {
throw new o489.o496(o352.o432);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            // do the internal rewiring
            try {
delete o556.o517.o539[o556.name];
}catch(e){}
            try {
o556.name = o558;
}catch(e){}
            try {
o557.o539[o558] = o556;
}catch(e){}
            try {
o556.o517 = o557;
}catch(e){}
        },
        o528: function (o517, name) {
            try {
delete o517.o539[name];
}catch(e){}
        },
        o529: function (o517, name) {
            var o494 = o489.o560(o517, name);
            try {
for (var o82 in o494.o539) {
                try {
throw new o489.o496(o352.o432);
}catch(e){}
            }
}catch(e){}
            try {
delete o517.o539[name];
}catch(e){}
        },
        o530: function (o494) {
            var entries = ['.', '..']
            try {
for (var key in o494.o539) {
                try {
if (!o494.o539.hasOwnProperty(key)) {
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
        o531: function (o517, o561, o562) {
            var o494 = o510.o516(o517, o561, 511 /* 0777 */ | 40960, 0);
            try {
o494.link = o562;
}catch(e){}
            try {
return o494;
}catch(e){}
        },
        o535: function (o494) {
            try {
if (!o489.o542(o494.o518)) {
                try {
throw new o489.o496(o352.o375);
}catch(e){}
            }
}catch(e){}
            try {
return o494.link;
}catch(e){}
        }
    },
    o491: {
        o27: function (o492, buffer, o107, length, o563) {
            var o539 = o492.o494.o539;
            try {
if (o563 >= o539.length)
                try {
return 0;
}catch(e){}
}catch(e){}
            var o85 = Math.o87(o539.length - o563, length);
            try {
o73(o85 >= 0);
}catch(e){}
            try {
if (o85 > 8 && o539.subarray) { // non-trivial, and typed array
                try {
buffer.set(o539.subarray(o563, o563 + o85), o107);
}catch(e){}
            } else {
                try {
for (var o82 = 0; o82 < o85; o82++) {
                    try {
buffer[o107 + o82] = o539[o563 + o82];
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o85;
}catch(e){}
        },
        write: function (o492, buffer, o107, length, o563, o564) {
            var o494 = o492.o494;
            try {
o494.o504 = Date.o4();
}catch(e){}
            var o539 = o494.o539;
            try {
if (length && o539.length === 0 && o563 === 0 && buffer.subarray) {
                // just replace it with the new data
                try {
if (o564 && o107 === 0) {
                    try {
o494.o539 = buffer;
}catch(e){} // this could be a subarray of Emscripten HEAP, or allocated from some other source.
                    try {
o494.o541 = (buffer.buffer === o200.buffer) ? o510.o512 : o510.o514;
}catch(e){}
                } else {
                    try {
o494.o539 = new Uint8Array(buffer.subarray(o107, o107 + length));
}catch(e){}
                    try {
o494.o541 = o510.o514;
}catch(e){}
                }
}catch(e){}
                try {
return length;
}catch(e){}
            }
}catch(e){}
            try {
o510.o544(o494);
}catch(e){}
            var o539 = o494.o539;
            try {
while (o539.length < o563) try {
o539.push(0);
}catch(e){}
}catch(e){}
            try {
for (var o82 = 0; o82 < length; o82++) {
                try {
o539[o563 + o82] = buffer[o107 + o82];
}catch(e){}
            }
}catch(e){}
            try {
return length;
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
o563 += o492.o494.o539.length;
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
o492.o566 = [];
}catch(e){}
            try {
o492.o563 = o563;
}catch(e){}
            try {
return o563;
}catch(e){}
        },
        o215: function (o492, o107, length) {
            try {
o510.o544(o492.o494);
}catch(e){}
            var o539 = o492.o494.o539;
            var o252 = o107 + length;
            try {
while (o252 > o539.length) try {
o539.push(0);
}catch(e){}
}catch(e){}
        },
        o534: function (o492, buffer, o107, length, o563, o567, flags) {
            try {
if (!o489.o540(o492.o494.o518)) {
                try {
throw new o489.o496(o352.o372);
}catch(e){}
            }
}catch(e){}
            var o114;
            var o568;
            var o539 = o492.o494.o539;
            // Only make a new copy when MAP_PRIVATE is specified.
            try {
if (!(flags & 2) &&
                (o539.buffer === buffer || o539.buffer === buffer.buffer)) {
                // We can't emulate MAP_SHARED when the file is not backed by the buffer
                // we're mapping to (e.g. the HEAP buffer).
                try {
o568 = false;
}catch(e){}
                try {
o114 = o539.byteOffset;
}catch(e){}
            } else {
                // Try to avoid unnecessary slices.
                try {
if (o563 > 0 || o563 + length < o539.length) {
                    try {
if (o539.subarray) {
                        try {
o539 = o539.subarray(o563, o563 + length);
}catch(e){}
                    } else {
                        try {
o539 = Array.prototype.slice.call(o539, o563, o563 + length);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
                try {
o568 = true;
}catch(e){}
                try {
o114 = o220(length);
}catch(e){}
                try {
if (!o114) {
                    try {
throw new o489.o496(o352.o365);
}catch(e){}
                }
}catch(e){}
                try {
buffer.set(o539, o114);
}catch(e){}
            }
}catch(e){}
            try {
return {
                o114: o114,
                o568: o568
            };
}catch(e){}
        }
    }
}; // 5  

var o7 = o4.indexOf(o3);

var o4 = undefined;
var o5 = undefined;
var o55 = 0;

function o7()
{
    try {
o0.then((o2) => this.o374 = o2);
}catch(e){}
    try {
o1.then((o2) => o5 = o2);
}catch(e){}
    try {
o3.then((o2) => o6 = o2);
}catch(e){}
    
    try {
try { try {
this.o446[0x68000 | index] = o718 * 0xD;
}catch(e){} } catch(e) {}try { try {
return undefined;
}catch(e){} } catch(e) {}
}catch(e){}
}

try {
o8.o9(o7, 50);
}catch(e){}

function o10()
{            
    try {
o11(`v1: ${o4}`, true);
}catch(e){} //5
    try {
o11(`v2: ${o5}`, true);
}catch(e){} //6
    try {
o11(`v3: ${o6}`, true);
}catch(e){} //10
}


