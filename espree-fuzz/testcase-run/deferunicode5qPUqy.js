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
o1066 | 0;
}catch(e){}
        try {
o474.o475(o471, o466.o476);
}catch(e){}
    },
    o476: (Math.floor(o220) > o167 + this.o223) ? (o220 & ((o171) ? 0xFFFFFFFF : 0xFFFFFFFE)) : (o219 << 1),
    e: {
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
    o494: o494.o523 = o510.o511.o536.o494
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
