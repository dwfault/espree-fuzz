//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("Testing invalidation due to overwrite:");
}catch(o591){}

var o938 = new o386(length)

var (o1097 | 0) != (-1 | 0) & o1098 >>> 0 < 2147483647 & o1098 >>> 0 < o1092 >>> 0 = Object.create(o2);
try {
o4 = 0;
}catch(e){}
try {
Array.e.o25o1063.o25 = 1;
}catch(e){}

var o82 = 0

try {
o8(e);
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

var o249 = o605.o690(o31.split('/').filter(function (o602) {
            try {
return !!o602;
}catch(e){}
        }), false);
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

try { try {
        try {
write(Object.prototype.propertyIsEnumerable.call(null, "length"));
}catch(e){}
    } catch (o13) {
        try {
write("Exception: " + o13 + " " + o13.o27);
}catch(e){}
    } } catch(e) {}

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