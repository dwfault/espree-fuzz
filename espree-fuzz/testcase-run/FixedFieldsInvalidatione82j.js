//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("Testing invalidation due to overwrite:");
}catch(Symbol){}

var resolve = {
    // Make sure we branch to a unique type path to avoid false sharing
    o3: function (o517, name, o38, o795, o796) {
        try {
if (typeof o40 !== 'undefined') {
            try {
if (!o20) try {
throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
}catch(e){}
}catch(e){}
            // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
            function o821() {
                try {
this.o822 = false;
}catch(e){}
                try {
this.o823 = [];
}catch(e){} // Loaded chunks. Index is the chunk number
            }
            try {
o821.prototype.get = function o824(o754) {
                try {
if (o754 > this.length - 1 || o754 < 0) {
                    try {
return undefined;
}catch(e){}
                }
}catch(e){}
                var o825 = o754 % this.o826;
                var o827 = Math.floor(o754 / this.o826);
                try {
return this.getter(o827)[o825];
}catch(e){}
            }
}catch(e){}
            try {
o821.prototype.o828 = function o829(getter) {
                try {
this.getter = getter;
}catch(e){}
            }
}catch(e){}
            try {
o821.prototype.o830 = function o831() {
                // Find length
                var o39 = new o40();
                try {
o39.o41('HEAD', o38, false);
}catch(e){}
                try {
o39.o42(null);
}catch(e){}
                try {
if (!(o39.o832 >= 200 && o39.o832 < 300 || o39.o832 === 304)) try {
throw new Error("Couldn't load " + o38 + ". Status: " + o39.o832);
}catch(e){}
}catch(e){}
                var o833 = Number(o39.o834("Content-length"));
                var o835;
                var o836 = (o835 = o39.o834("Accept-Ranges")) && o835 === "bytes";
                var o826 = 1024 * 1024; // Chunk size in bytes

                try {
if (!o836) try {
o826 = o833;
}catch(e){}
}catch(e){}

                // Function to get a range from the remote URL.
                var o837 = (function (from, o838) {
                    try {
if (from > o838) try {
throw new Error("invalid range (" + from + ", " + o838 + ") or no bytes requested!");
}catch(e){}
}catch(e){}
                    try {
if (o838 > o833 - 1) try {
throw new Error("only " + o833 + " bytes available! programmer error!");
}catch(e){}
}catch(e){}

                    // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                    var o39 = new o40();
                    try {
o39.o41('GET', o38, false);
}catch(e){}
                    try {
if (o833 !== o826) try {
o39.o839("Range", "bytes=" + from + "-" + o838);
}catch(e){}
}catch(e){}

                    // Some hints to the browser that we want binary data.
                    try {
if (typeof Uint8Array != 'undefined') try {
o39.o840 = 'arraybuffer';
}catch(e){}
}catch(e){}
                    try {
if (o39.o841) {
                        try {
o39.o841('text/plain; charset=x-user-defined');
}catch(e){}
                    }
}catch(e){}

                    try {
o39.o42(null);
}catch(e){}
                    try {
if (!(o39.o832 >= 200 && o39.o832 < 300 || o39.o832 === 304)) try {
throw new Error("Couldn't load " + o38 + ". Status: " + o39.o832);
}catch(e){}
}catch(e){}
                    try {
if (o39.o842 !== undefined) {
                        try {
return new Uint8Array(o39.o842 || []);
}catch(e){}
                    } else {
                        try {
return o192(o39.o43 || '', true);
}catch(e){}
                    }
}catch(e){}
                });
                var o843 = this;
                try {
o843.o828(function (o827) {
                    var o476 = o827 * o826;
                    var o260 = (o827 + 1) * o826 - 1; // including this byte
                    try {
o260 = Math.o87(o260, o833 - 1);
}catch(e){} // if datalength-1 is selected, this is the last block
                    try {
if (typeof (o843.o823[o827]) === "undefined") {
                        try {
o843.o823[o827] = o837(o476, o260);
}catch(e){}
                    }
}catch(e){}
                    try {
if (typeof (o843.o823[o827]) === "undefined") try {
throw new Error("doXHR failed!");
}catch(e){}
}catch(e){}
                    try {
return o843.o823[o827];
}catch(e){}
                });
}catch(e){}

                try {
this.o844 = o833;
}catch(e){}
                try {
this.o845 = o826;
}catch(e){}
                try {
this.o822 = true;
}catch(e){}
            }
}catch(e){}

            var o843 = new o821();
            try {
Object.defineProperty(o843, "length", {
                get: function () {
                    try {
if (!this.o822) {
                        try {
this.o830();
}catch(e){}
                    }
}catch(e){}
                    try {
return this.o844;
}catch(e){}
                }
            });
}catch(e){}
            try {
Object.defineProperty(o843, "chunkSize", {
                get: function () {
                    try {
if (!this.o822) {
                        try {
this.o830();
}catch(e){}
                    }
}catch(e){}
                    try {
return this.o845;
}catch(e){}
                }
            });
}catch(e){}

            var o813 = {
                o713: false,
                o539: o843
            };
        } else {
            var o813 = {
                o713: false,
                o38: o38
            };
        }
}catch(e){}

        var o494 = o489.o812(o517, name, o813, o795, o796);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        try {
if (o813.o539) {
            try {
o494.o539 = o813.o539;
}catch(e){}
        } else try {
if (o813.o38) {
            try {
o494.o539 = null;
}catch(e){}
            try {
o494.o38 = o813.o38;
}catch(e){}
        }
}catch(e){}
}catch(e){}
        // override each stream op with one that tries to force load the lazy file first
        var o491 = {};
        var keys = Object.keys(o494.o491);
        try {
keys.forEach(function (key) {
            var o846 = o494.o491[key];
            try {
o491[key] = function o847() {
                try {
if (!o489.o817(o494)) {
                    try {
throw new o489.o496(o352.o357);
}catch(e){}
                }
}catch(e){}
                try {
return o846.apply(null, arguments);
}catch(e){}
            };
}catch(e){}
        });
}catch(e){}
        // use a custom read function
        try {
o491.o27 = function o848(o492, buffer, o107, length, o563) {
            try {
if (!o489.o817(o494)) {
                try {
throw new o489.o496(o352.o357);
}catch(e){}
            }
}catch(e){}
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
if (o539.slice) { // normal array
                try {
for (var o82 = 0; o82 < o85; o82++) {
                    try {
buffer[o107 + o82] = o539[o563 + o82];
}catch(e){}
                }
}catch(e){}
            } else {
                try {
for (var o82 = 0; o82 < o85; o82++) { // LazyUint8Array from sync binary XHR
                    try {
buffer[o107 + o82] = o539.get(o563 + o82);
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
return o85;
}catch(e){}
        };
}catch(e){}
        try {
o494.o491 = o491;
}catch(e){}
        try {
return o494;
}catch(e){}
    },
    add: function () {
        try {
return (this.o4 + this.o5) + " (original)";
}catch(e){}
    },
    o6: this.o898
}

var index = o596.index('timestamp');
try {
o7.o4 = 168;
}catch(e){}
try {
o7.o5 = 1;
}catch(e){}

var o16 = function(o10) { try {
return o10;
}catch(e){} }

try {
o8(o7);
}catch(e){}

try {
o8(o7);
}catch(e){}

try {
o2.o6 = function () {
    try {
return (this.o4 - this.o5) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o8(o7);
}catch(e){}

try {
o2.add = function () {
    try {
return (this.o4 + this.o5) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o8(o7);
}catch(e){}

var o2 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o10: 0,
    add: function () {
        try {
return (this.o4 + this.o5) + " (original)";
}catch(e){}
    },
    o6: function () {
        try {
return (this.o4 - this.o5) + " (original)";
}catch(e){}
    }
}

var o7 = Object.create(o2);
try {
o7.o4 = 0;
}catch(e){}
try {
o7.o5 = 1;
}catch(e){}

var o11 = function () {
    try {
return (this.o4 - this.o5) + " (overwritten)";
}catch(e){}
}

var o8 = function (o9, o12) {
    try {
o0.o1("x + y = " + o9.add());
}catch(e){}
    try {
if (o12) {
        try {
o2.o6 = o11;
}catch(e){}
    }
}catch(e){}
    try {
o0.o1("x - y = " + o9.o6());
}catch(e){}
}

try {
o8(o7, false);
}catch(e){}

try {
o8(o7, false);
}catch(e){}

try {
o8(o7, true);
}catch(e){}

try {
o0.o1();
}catch(e){}


try {
o0.o1("Testing invalidation due to delete:");
}catch(e){}

var o13 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o14: 0,
    add: function () {
        try {
return (this.o4 + this.o5) + " (from proto2)";
}catch(e){}
    },
    o6: function () {
        try {
return (this.o4 - this.o5) + " (from proto2)";
}catch(e){}
    }
}

var o2 = Object.create(o13, {
    // Make sure we branch to a unique type path to avoid false sharing
    o15: { value: 0 },
    add: {
        value: function () {
            try {
return (this.o4 + this.o5) + " (from proto1)";
}catch(e){}
        },
        writable: true, configurable: true
    },
    o6: {
        value: function () {
            try {
return (this.o4 - this.o5) + " (from proto1)";
}catch(e){}
        },
        writable: true, configurable: true
    }
});

var o7 = Object.create(o2);
try {
o7.o4 = 0;
}catch(e){}
try {
o7.o5 = 1;
}catch(e){}

function o16(o9) {
    try {
o0.o1("x + y = " + o9.add());
}catch(e){}
    try {
o0.o1("x - y = " + o9.o6());
}catch(e){}
}

try {
o16(o7);
}catch(e){}

try {
o16(o7);
}catch(e){}

try {
delete o2.o6;
}catch(e){}

try {
o16(o7);
}catch(e){}

try {
delete o2.add;
}catch(e){}

try {
o16(o7);
}catch(e){}

try {
o0.o1();
}catch(e){}


try {
o0.o1("Testing invalidation due to shadowing:");
}catch(e){}

var o13 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o17: 0,
    add: function () {
        try {
return (this.o4 + this.o5) + " (from proto2)";
}catch(e){}
    },
    o6: function () {
        try {
return (this.o4 - this.o5) + " (from proto2)";
}catch(e){}
    }
}

var o2 = Object.create(o13, {
    // Make sure we branch to a unique type path to avoid false sharing
    o18: { value: 0 },
});

var o7 = Object.create(o2);
try {
o7.o4 = 0;
}catch(e){}
try {
o7.o5 = 1;
}catch(e){}

function o19(o9) {
    try {
o0.o1("x + y = " + o9.add());
}catch(e){}
    try {
o0.o1("x - y = " + o9.o6());
}catch(e){}
}

try {
o19(o7);
}catch(e){}

try {
o19(o7);
}catch(e){}

try {
o2.o6 = function () {
    try {
return (this.o4 - this.o5) + " (from proto1)";
}catch(e){}
};
}catch(e){}

try {
o19(o7);
}catch(e){}

try {
o2.add = function () {
    try {
return (this.o4 + this.o5) + " (from proto1)";
}catch(e){}
};
}catch(e){}

try {
o19(o7);
}catch(e){}

try {
o0.o1();
}catch(e){}