//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o672 = o215(1, "i32*", o212);
var o1 = new((0, function()
    {
        try {
return Date
}catch(e){}
    })({
    o467: [],
    o468: function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
    },
    o469: function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
    },
    o470: function (o471, o472) {
        try {
o466.o467[o471] = {
            input: [],
            o473: [],
            o472: o472
        };
}catch(e){}
        try {
o474.o475(o471, o466.o476);
}catch(e){}
    },
    o476: {
        o41: function (o477) {
            var o478 = o466.o467[o477.o479.o480];
            try {
if (!o478) {
                try {
throw new o474.o481(o341.o361);
}catch(e){}
            }
}catch(e){}
            try {
o477.o478 = o478;
}catch(e){}
            try {
o477.o482 = false;
}catch(e){}
        },
        o483: function (o477) {
            // flush any pending line data
            try {
if (o477.o478.o473.length) {
                try {
o477.o478.o472.o484(o477.o478, 10);
}catch(e){}
            }
}catch(e){}
        },
        o27: function (o477, buffer, o107, length, o485 /* ignored */ ) {
            try {
if (!o477.o478 || !o477.o478.o472.o486) {
                try {
throw new o474.o481(o341.o347);
}catch(e){}
            }
}catch(e){}
            var o487 = 0;
            try {
for (var o82 = 0; o82 < length; o82++) {
                var o488;
                try {
try {
                    try {
o488 = o477.o478.o472.o486(o477.o478);
}catch(e){}
                } catch (o189) {
                    try {
throw new o474.o481(o341.o346);
}catch(e){}
                }
}catch(e){}
                try {
if (o488 === undefined && o487 === 0) {
                    try {
throw new o474.o481(o341.o352);
}catch(e){}
                }
}catch(e){}
                try {
if (o488 === null || o488 === undefined) try {
break;
}catch(e){}
}catch(e){}
                try {
o487++;
}catch(e){}
                try {
buffer[o107 + o82] = o488;
}catch(e){}
            }
}catch(e){}
            try {
if (o487) {
                try {
o477.o479.o489 = Date.o4();
}catch(e){}
            }
}catch(e){}
            try {
return o487;
}catch(e){}
        },
        write: function (o477, buffer, o107, length, o485) {
            try {
if (!o477.o478 || !o477.o478.o472.o484) {
                try {
throw new o474.o481(o341.o347);
}catch(e){}
            }
}catch(e){}
            try {
for (var o82 = 0; o82 < length; o82++) {
                try {
try {
                    try {
o477.o478.o472.o484(o477.o478, buffer[o107 + o82]);
}catch(e){}
                } catch (o189) {
                    try {
throw new o474.o481(o341.o346);
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
if (length) {
                try {
o477.o479.o489 = Date.o4();
}catch(e){}
            }
}catch(e){}
            try {
return o82;
}catch(e){}
        }
    },
    o490: {
        o486: function (o478) {
            try {
if (!o478.input.length) {
                var o488 = null;
                try {
if (o16) {
                    try {
o488 = o17['stdin']['read']();
}catch(e){}
                    try {
if (!o488) {
                        try {
if (o17['stdin']['_readableState'] && o17['stdin']['_readableState']['ended']) {
                            try {
return null;
}catch(e){} // EOF
                        }
}catch(e){}
                        try {
return undefined;
}catch(e){} // no data available
                    }
}catch(e){}
                } else try {
if (typeof o19 != 'undefined' &&
                    typeof o19.o491 == 'function') {
                    // Browser.
                    try {
o488 = o19.o491('Input: ');
}catch(e){} // returns null on cancel
                    try {
if (o488 !== null) {
                        try {
o488 += '\n';
}catch(e){}
                    }
}catch(e){}
                } else try {
if (typeof o492 == 'function') {
                    // Command line.
                    try {
o488 = o492();
}catch(e){}
                    try {
if (o488 !== null) {
                        try {
o488 += '\n';
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
}catch(e){}
}catch(e){}
                try {
if (!o488) {
                    try {
return null;
}catch(e){}
                }
}catch(e){}
                try {
o478.input = o192(o488, true);
}catch(e){}
            }
}catch(e){}
            try {
return o478.input.shift();
}catch(e){}
        },
        o484: function (o478, o493) {
            try {
if (o493 === null || o493 === 10) {
                try {
Module['print'](o478.o473.join(''));
}catch(e){}
                try {
o478.o473 = [];
}catch(e){}
            } else {
                try {
o478.o473.push(o466.o229.o131(o493));
}catch(e){}
            }
}catch(e){}
        }
    },
    o494: {
        o484: function (o478, o493) {
            try {
if (o493 === null || o493 === 10) {
                try {
Module['printErr'](o478.o473.join(''));
}catch(e){}
                try {
o478.o473 = [];
}catch(e){}
            } else {
                try {
o478.o473.push(o466.o229.o131(o493));
}catch(e){}
            }
}catch(e){}
        }
    }
})) - (0, function()
    {
        try {
return o0
}catch(e){}
    })();
try {
(0, function()
{
    try {
return o2
}catch(e){}
})(write(Boolean(false) >= 0)).o3('done');
}catch(e){}
